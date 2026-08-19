# John Kennedy — portfolio

A one-page portfolio. Static HTML, no build step, dark and light themes.

**Live site:** [clubjk.github.io/jk-portfolio](https://clubjk.github.io/jk-portfolio/)

## Run locally

```bash
python3 -m http.server 5173
```

Then visit [http://localhost:5173](http://localhost:5173).

## How it updates

Every Monday at 9am, a launchd job on the local Mac runs `scripts/weekly-update.sh`. It:

1. Reads `JK_Resume_AI_Security_Engineer.md` from the Obsidian vault on the external drive
2. Checks if the resume changed since last sync (MD5 hash)
3. If changed, copies it into the repo, commits, and pushes
4. GitHub Actions deploys to Pages on push

The external drive must be mounted for the sync to run. Logs go to `/tmp/jk-portfolio-update.log`.

To run manually: `./scripts/weekly-update.sh`

## Edit

| File | What it is |
|------|------------|
| `index.html` | Copy, structure, contact links |
| `styles.css` | Visual system |
| `script.js` | Theme toggle |
| `fonts.css` | Self-hosted font declarations |
| `fonts/` | woff2 font files (latin + latin-ext) |
| `DESIGN.md` | Tokens and rules — read before visual changes |
| `scripts/weekly-update.sh` | Weekly resume sync script |

## Deploy

Pushes to `main` trigger GitHub Actions which deploys to GitHub Pages. No manual deploy needed.
