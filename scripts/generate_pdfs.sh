#!/usr/bin/env bash
# Regenerate all kit PDFs from their HTML versions using Chrome headless.
# Run from anywhere; resolves paths relative to the repo root.

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
HTML_DIR="$REPO_ROOT/public/files/en"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

if [ ! -x "$CHROME" ]; then
  echo "Chrome not found at: $CHROME" >&2
  echo "Install Google Chrome or edit this script to point to your browser." >&2
  exit 1
fi

KITS=(
  "travel-cafe-ordering"
  "travel-restaurant-ordering"
  "korean-life-first-meeting"
  "korean-life-texting"
  "career-self-introduction"
  "career-job-interview"
)

for kit in "${KITS[@]}"; do
  html="$HTML_DIR/$kit.html"
  pdf="$HTML_DIR/$kit.pdf"
  if [ ! -f "$html" ]; then
    echo "skip $kit (no HTML)"
    continue
  fi
  "$CHROME" --headless --disable-gpu --no-pdf-header-footer \
    --print-to-pdf="$pdf" "file://$html" 2>/dev/null
  echo "wrote $kit.pdf"
done
