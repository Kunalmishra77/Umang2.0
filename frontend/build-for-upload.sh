#!/usr/bin/env bash
# Build the production bundle that talks to Supabase through the proxy
# (see ../supabase-proxy/README.md) and zip it for upload to public_html.
# Usage: bash build-for-upload.sh https://<proxy-host>
set -euo pipefail
PROXY_URL="${1:?usage: build-for-upload.sh https://<proxy-host>}"
cd "$(dirname "$0")"
VITE_SUPABASE_URL="$PROXY_URL" npm run build
rm -f umang-dist.zip
(cd dist && powershell -NoProfile -Command "Compress-Archive -Path * -DestinationPath ../umang-dist.zip -Force")
echo "built with VITE_SUPABASE_URL=$PROXY_URL -> $(pwd)/umang-dist.zip"
