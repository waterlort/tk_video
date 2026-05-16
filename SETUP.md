# tk_video setup

This repo stores the local source of truth for the Multica-driven `tk_video` project:

- project brief and knowledge-base design,
- Multica agent/skill instruction snapshots,
- local knowledge-base artifacts,
- creative output packages,
- the local TikTok public-search adapter.

The live Multica objects still live in the Multica workspace. This repo is the portable backup and reconstruction surface.

## New Mac setup

Install base tools:

```bash
xcode-select --install

if ! command -v brew >/dev/null 2>&1; then
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
fi

brew install git node jq
```

Install the Multica desktop app and make sure the CLI is available:

```bash
command -v multica
multica version
multica setup
multica daemon start
multica config list
multica runtime list --output json
```

Clone and install project dependencies:

```bash
mkdir -p ~/Documents
cd ~/Documents
git clone git@github.com:waterlort/tk_video.git
cd tk_video

npm install
npm run playwright:install
```

Verify the Multica workspace objects:

```bash
multica project list --output json | jq -r '.[] | select(.title=="tk_video") | [.id,.title,.description] | @tsv'
multica agent list --output json | jq -r '.[] | select(.name|test("^(tk-|cg-)")) | [.name,.id,.status] | @tsv'
multica skill list --output json | jq -r '.[] | select(.name|test("^(tk-|cg-|recursive-task-protocol)")) | [.name,.id] | @tsv'
```

If you want the existing TK/CG agents to run on this Mac, rebind them to the new local Codex runtime:

```bash
RUNTIME_ID="$(multica runtime list --output json | jq -r '.[] | select(.provider=="codex" and .status=="online") | .id' | head -n 1)"
echo "$RUNTIME_ID"

for AGENT_ID in \
  6fff3385-c0f5-43c3-893e-00dc9e2e9735 \
  785bbdeb-e45c-478e-a633-2a7bc8bc800a \
  fd9e9f7a-8c91-4f98-b372-641aebe91d7d \
  c929d6c2-2205-4f91-84f0-db129cfb394c \
  1c4e172c-93c9-4cdf-a86b-f59347a1fb47 \
  d6af1b8c-cc4c-4dc9-be5e-7aee4a3584a6 \
  f0bec43b-9f0c-474f-bdb5-45d91085d1bd \
  61ff0d9d-e9d4-49d8-993b-ead2e7e28114 \
  9997dbbd-ab63-4461-af7b-1c65c7f8ebe1
do
  multica agent update "$AGENT_ID" --runtime-id "$RUNTIME_ID" --output json | jq -r '[.name,.id,.runtime_id] | @tsv'
done
```

Smoke-test the local TikTok public-search adapter:

```bash
npm run search:tiktok -- \
  --terms "dogsoftiktok" \
  --days 7 \
  --max 5 \
  --out-dir "knowledge_base/tool_runs/tiktok_public_search/smoke_test"
```

## If using a different Multica workspace

The UUIDs in `MULTICA_OBJECTS.md` only apply to the original workspace. In a different workspace, create replacement skills and agents from:

- `multica_skills/*.md`
- `multica_agents/*.md`

Then update `MULTICA_OBJECTS.md` with the new IDs.

