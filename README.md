# JK — personal site

A one-page portfolio. Static HTML, no build step, dark and light themes.

## Run it

Open `index.html` in a browser, or from this folder:

```bash
python3 -m http.server 5173
```

Then visit [http://localhost:5173](http://localhost:5173).

The **Lights** switch in the header toggles theme. The first visit follows the system preference; after that, the choice is stored in `localStorage`.

## Edit

| File | What it is |
|------|------------|
| `index.html` | Copy, structure, contact links |
| `styles.css` | Visual system |
| `script.js` | Theme toggle |
| `DESIGN.md` | Tokens and rules — read before visual changes |

Swap the work rows, notes, and email for your own. Keep the dossier fields factual.

## Deploy

Any static host works: GitHub Pages, Netlify, Cloudflare Pages. Publish the folder as-is.
