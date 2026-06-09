# Preview Project: HopeSphere Crochet (Next.js)

Step-by-step workflow to start the development preview server.

## Prerequisites
- Node.js >= 20 must be installed (`node --version`)
- Dependencies must be installed (`npm install`)
- Working directory: `c:\Users\Regis\Downloads\Hopesphere`

## Steps

### 1. Start the Development Server
```bash
npm run dev
```
This runs: `next dev --turbopack -p 9002`

The app will be available at: **http://localhost:9002**

### 2. Verify the App
- Open http://localhost:9002 in your browser.
- Check that pages load without critical console errors.
- Test primary interactions (navigation, buttons, forms).

## Notes
- The dev server uses **Turbopack** for fast hot-module replacement.
- Port **9002** is fixed (set in `package.json`).
- To stop the server, press `Ctrl+C` in the terminal.

## AI Features (Genkit)
To also run the Genkit AI dev server alongside the app:
```bash
npm run genkit:dev
```
Or with file watching:
```bash
npm run genkit:watch
```
