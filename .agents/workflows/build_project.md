# Build Project: HopeSphere Crochet (Next.js)

Step-by-step workflow to install dependencies, typecheck, and build the project.

## Prerequisites
- Node.js >= 20 must be installed (`node --version`)
- Working directory: `c:\Users\Regis\Downloads\Hopesphere`

## Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Typecheck (TypeScript static analysis)
```bash
npm run typecheck
```
- If this script is missing, run: `npx -y tsc --noEmit`

### 3. Build (Production)
```bash
npm run build
```
Uses `cross-env NODE_ENV=production next build` for Windows compatibility.

## Notes
- `cross-env` is installed as a dev dependency for cross-platform `NODE_ENV` support.
- `outputFileTracingRoot` is set in `next.config.ts` to avoid lockfile root detection warnings.
- Build output is in `standalone` mode (`.next/standalone/`).
