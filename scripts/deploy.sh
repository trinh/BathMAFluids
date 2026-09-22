#!/usr/bin/env bash
# Build the web, PDF, and Word-doc versions of the notes, stage them for
# GitHub Pages, and (optionally) push the gh-pages branch.
#
# Usage:
#   scripts/deploy.sh                        # build + stage + commit locally, but don't push
#   scripts/deploy.sh --push                 # also push gh-pages to origin
#   scripts/deploy.sh --allow-errors         # build past PTX:ERROR (e.g. broken cross-references)
#   scripts/deploy.sh --allow-errors --push  # both, in any order

set -euo pipefail
cd "$(dirname "$0")/.."

PUSH=false
ALLOW_ERRORS=false
for arg in "$@"; do
  case "$arg" in
    --push) PUSH=true ;;
    --allow-errors) ALLOW_ERRORS=true ;;
    *)
      echo "error: unknown argument '$arg' (expected --push and/or --allow-errors)" >&2
      exit 1
      ;;
  esac
done

if ! command -v pandoc >/dev/null 2>&1; then
  echo "error: pandoc is not installed (brew install pandoc)" >&2
  exit 1
fi

# run_build <description> <command...>
# Runs a `pretext build`/`pretext deploy` step. pretext exits non-zero
# whenever it logs a PTX:ERROR (e.g. an unresolved cross-reference), even
# though it still writes usable output with placeholder text in place of
# the broken bits. With --allow-errors, that failure is downgraded to a
# warning and the script continues using whatever pretext wrote to disk.
# Without it, the whole script stops here (the safe default).
run_build() {
  local desc="$1"; shift
  echo "==> $desc"
  local status=0
  "$@" || status=$?
  if [[ $status -ne 0 ]]; then
    if [[ "$ALLOW_ERRORS" == true ]]; then
      echo "warning: '$desc' finished with errors (exit $status)." >&2
      echo "         Continuing because --allow-errors was passed. The output" >&2
      echo "         may contain placeholder text, e.g.:" >&2
      echo "         [cross-reference to target(s) \"...\" missing or not unique]" >&2
    else
      echo "error: '$desc' failed (exit $status)." >&2
      echo "       Fix the errors above (recommended), or re-run with --allow-errors" >&2
      echo "       to build/deploy anyway." >&2
      exit "$status"
    fi
  fi
}

run_build "Building web + print (PDF) targets" pretext build --deploys
run_build "Building latex target (source for docx conversion)" pretext build latex

echo "==> Converting latex output to docx with pandoc"
mkdir -p output/doc
pandoc output/latex/main.tex -o output/doc/main.docx --resource-path=output/latex

run_build "Staging deploy targets" pretext deploy --stage-only

echo "==> Adding docx download to staged site"
mkdir -p output/stage/doc
cp output/doc/main.docx output/stage/doc/main.docx

echo "==> Committing staged site to local gh-pages branch"
python3 - <<'PYEOF'
from pretext.project import Project
project = Project.parse()
project.deploy(update_source=False, skip_staging=True, no_push=True)
PYEOF

if [[ "$PUSH" == true ]]; then
  echo "==> Pushing gh-pages branch to origin"
  git push origin gh-pages --force
else
  echo
  echo "Staged and committed locally to gh-pages. Review it, then run:"
  echo "    git push origin gh-pages --force"
  echo "or re-run this script with --push."
fi
