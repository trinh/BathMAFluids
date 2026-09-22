#!/usr/bin/env bash
# Build the web, PDF, and Word-doc versions of the notes, stage them for
# GitHub Pages, and (optionally) push the gh-pages branch.
#
# Usage:
#   scripts/deploy.sh          # build + stage + commit locally, but don't push
#   scripts/deploy.sh --push   # also push gh-pages to origin

set -euo pipefail
cd "$(dirname "$0")/.."

if ! command -v pandoc >/dev/null 2>&1; then
  echo "error: pandoc is not installed (brew install pandoc)" >&2
  exit 1
fi

echo "==> Building web + print (PDF) targets"
pretext build --deploys

echo "==> Building latex target (source for docx conversion)"
pretext build latex

echo "==> Converting latex output to docx with pandoc"
mkdir -p output/doc
pandoc output/latex/main.tex -o output/doc/main.docx --resource-path=output/latex

echo "==> Staging deploy targets"
pretext deploy --stage-only

echo "==> Adding docx download to staged site"
mkdir -p output/stage/doc
cp output/doc/main.docx output/stage/doc/main.docx

echo "==> Committing staged site to local gh-pages branch"
python3 - <<'PYEOF'
from pretext.project import Project
project = Project.parse()
project.deploy(update_source=False, skip_staging=True, no_push=True)
PYEOF

if [[ "${1:-}" == "--push" ]]; then
  echo "==> Pushing gh-pages branch to origin"
  git push origin gh-pages --force
else
  echo
  echo "Staged and committed locally to gh-pages. Review it, then run:"
  echo "    git push origin gh-pages --force"
  echo "or re-run this script with --push."
fi
