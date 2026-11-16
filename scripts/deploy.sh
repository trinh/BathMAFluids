#!/usr/bin/env bash
# Build the web, PDF, and Word-doc versions of the notes, stage them for
# GitHub Pages, and (optionally) push the gh-pages branch.
#
# Usage:
#   scripts/deploy.sh          # build + stage + commit locally, but don't push
#   scripts/deploy.sh --push   # also push gh-pages to origin
#
# The script is strict: if any step reports an error (including a PreTeXt
# PTX:ERROR such as a broken cross-reference), it stops immediately, prints
# the error lines it found, and does NOT commit or push anything.
# The full output of the run is saved in logs/deploy-<timestamp>.log.

set -euo pipefail
cd "$(dirname "$0")/.."

PUSH=false
for arg in "$@"; do
  case "$arg" in
    --push) PUSH=true ;;
    *)
      echo "error: unknown argument '$arg' (expected --push)" >&2
      exit 1
      ;;
  esac
done

if ! command -v pandoc >/dev/null 2>&1; then
  echo "error: pandoc is not installed (brew install pandoc)" >&2
  exit 1
fi

mkdir -p logs
LOG="logs/deploy-$(date +%Y%m%d-%H%M%S).log"
STEP_OUT="$(mktemp)"
trap 'rm -f "$STEP_OUT"' EXIT

# Lines that count as errors in a step's output. PreTeXt can print
# PTX:ERROR (from the XSL stylesheets) yet still exit 0, so we check the
# output as well as the exit status.
# (pretext prints "error:" on the console but "ERROR   :" in its log files)
ERROR_PATTERN='PTX:ERROR|^(ERROR|error|CRITICAL|critical)[ :]|^! |Traceback|fatal:'

# run_step <description> <command...>
# Runs one step, shows its output live, appends it to $LOG, and stops the
# whole script with a summary if the command fails or prints an error line.
run_step() {
  local desc="$1"; shift
  echo
  echo "==> $desc"
  echo "==> $desc" >>"$LOG"

  local status=0
  "$@" 2>&1 | tee "$STEP_OUT" || status=${PIPESTATUS[0]}
  cat "$STEP_OUT" >>"$LOG"

  local errors
  errors="$(grep -nE -A3 "$ERROR_PATTERN" "$STEP_OUT" || true)"

  if [[ $status -ne 0 || -n "$errors" ]]; then
    {
      echo
      echo "================================================================"
      echo " DEPLOY STOPPED at step: $desc"
      echo " Command: $*"
      echo " Exit status: $status"
      echo "================================================================"
      if [[ -n "$errors" ]]; then
        echo " Errors found (line numbers refer to this step's output):"
        echo
        echo "$errors"
      else
        echo " The command failed but printed no recognisable error line;"
        echo " see the last lines of output above."
      fi
      echo "================================================================"
      echo " Full output of this run: $LOG"
      echo " Nothing was committed to gh-pages and nothing was pushed."
      echo "================================================================"
    } >&2
    exit 1
  fi
}

run_step "Building web + print (PDF) targets" pretext build --deploys
run_step "Building latex target (source for docx conversion)" pretext build latex

mkdir -p output/doc
run_step "Converting latex output to docx with pandoc" \
  pandoc output/latex/main.tex -o output/doc/main.docx --resource-path=output/latex

run_step "Staging deploy targets" pretext deploy --stage-only

# The print target keeps its LaTeX build files (latex-source="yes" in
# project.ptx), and staging copies the whole of output/print/. Publish only
# the PDF: remove main.tex, main.log, main.aux, images etc. from the site.
echo
echo "==> Removing LaTeX build files from staged PDF folder"
find output/stage/pdf -mindepth 1 ! -name main.pdf -exec rm -rf {} +

echo
echo "==> Adding docx download to staged site"
mkdir -p output/stage/doc
cp output/doc/main.docx output/stage/doc/main.docx

run_step "Committing staged site to local gh-pages branch" python3 - <<'PYEOF'
from pretext.project import Project
project = Project.parse()
project.deploy(update_source=False, skip_staging=True, no_push=True)
PYEOF

echo
if [[ "$PUSH" == true ]]; then
  run_step "Pushing gh-pages branch to origin" git push origin gh-pages --force
  echo "Done. Site published. Log: $LOG"
else
  echo "All steps succeeded. Staged and committed locally to gh-pages."
  echo "Review output/stage/, then run:"
  echo "    git push origin gh-pages --force"
  echo "or re-run this script with --push."
  echo "Log: $LOG"
fi
