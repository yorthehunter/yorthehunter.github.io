#!/usr/bin/env bash
# Renders scripts/og-image/index.html to a 1200x630 PNG with headless Chrome.
# Usage: scripts/og-image/render.sh [output.png]   (default: public/og-image-2026.png)
set -euo pipefail

root="$(cd "$(dirname "$0")/../.." && pwd)"
out="${1:-$root/public/og-image-2026.png}"
chrome="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"

"$chrome" \
  --headless=new \
  --disable-gpu \
  --hide-scrollbars \
  --allow-file-access-from-files \
  --force-device-scale-factor=1 \
  --window-size=1200,630 \
  --virtual-time-budget=3000 \
  --screenshot="$out" \
  "file://$root/scripts/og-image/index.html" >/dev/null 2>&1

echo "Wrote $out"
