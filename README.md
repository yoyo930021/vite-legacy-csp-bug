# vite-legacy-csp-bug

Reproduction for https://github.com/vitejs/vite/issues/5919

## Steps
- `pnpm install`
- `pnpm build`
- `node server.js`
- visit `http://localhost:3000`
- See true for using legacy build in modern browser.
