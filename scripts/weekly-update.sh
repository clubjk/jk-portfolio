#!/usr/bin/env bash
set -euo pipefail

REPO_DIR="/Users/john/first-grok-build-try"
RESUME="/Volumes/JK June 2022 4TB/obsidian/test/Second Brain JK/JK_Resume_AI_Security_Engineer.md"

if [ ! -f "$RESUME" ]; then
  echo "Resume not found at: $RESUME"
  echo "Is the external drive mounted?"
  exit 1
fi

RESUME_HASH=$(md5 -q "$RESUME" 2>/dev/null || md5sum "$RESUME" | cut -d' ' -f1)
HASH_FILE="$REPO_DIR/.last-resume-hash"

if [ -f "$HASH_FILE" ] && [ "$(cat "$HASH_FILE")" = "$RESUME_HASH" ]; then
  echo "Resume unchanged since last update. Skipping."
  exit 0
fi

cp "$RESUME" "$REPO_DIR/resume-source.md"

cd "$REPO_DIR"
git add resume-source.md
git commit -m "$(cat <<'EOF'
update: sync resume from Obsidian vault

Weekly automated sync of JK_Resume_AI_Security_Engineer.md
EOF
)" || true

echo "$RESUME_HASH" > "$HASH_FILE"

git push origin main

echo "Resume synced and pushed. GitHub Actions will deploy."
echo "Site: https://clubjk.github.io/jk-portfolio/"
