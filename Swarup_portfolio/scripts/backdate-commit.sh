#!/usr/bin/env bash
set -euo pipefail

# Backdate a commit by setting both author and committer timestamps.
# Usage:
#   scripts/backdate-commit.sh "Your commit message"
#   scripts/backdate-commit.sh "Your commit message" "2026-03-03 18:30:00"
#   scripts/backdate-commit.sh "Your commit message" "2026-03-03 18:30:00" --empty-count 5

MESSAGE="${1:-Backdated commit}"
DATE_TIME="${2:-2026-03-03 18:30:00}"
EMPTY_COUNT=0

if [[ "${3:-}" == "--empty-count" ]]; then
  EMPTY_COUNT="${4:-0}"
fi

# Validate empty count is numeric.
if ! [[ "$EMPTY_COUNT" =~ ^[0-9]+$ ]]; then
  echo "Error: --empty-count must be a non-negative integer"
  exit 1
fi

CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"

if [[ "$EMPTY_COUNT" -gt 0 ]]; then
  # Loop mode: create multiple empty commits for the same backdated timestamp.
  for i in $(seq 1 "$EMPTY_COUNT"); do
    GIT_AUTHOR_DATE="$DATE_TIME" \
    GIT_COMMITTER_DATE="$DATE_TIME" \
    git commit --allow-empty -m "$MESSAGE #$i"
  done
else
  # Standard mode: stage all changes and create one backdated commit.
  git add -A

  GIT_AUTHOR_DATE="$DATE_TIME" \
  GIT_COMMITTER_DATE="$DATE_TIME" \
  git commit -m "$MESSAGE"
fi

# Push commit(s) to the current branch.
git push origin "$CURRENT_BRANCH"
