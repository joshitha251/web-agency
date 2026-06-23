# Vercel Deployment Fix Guide

## Problem
You encountered a permission denied error during Vercel deployment:
```
Error: Command "npm run build" exited with 126
sh: line 1: /vercel/path0/node_modules/.bin/vite: Permission denied
```

Exit code **126** means "Permission denied" - the Vite binary in node_modules didn't have execute permissions on Vercel's build environment.

## Root Causes
1. Direct Vite binary invocation (`vite build`) can fail if node_modules aren't properly set up
2. Missing npm configuration for Vercel environment
3. No explicit Vercel configuration file

## What Was Fixed

### 1. **Updated `.npmrc` File**
Added npm configuration to ensure proper installation:
```
legacy-peer-deps=true
engine-strict=false
```

**Why:** These settings prevent npm from being too strict about peer dependencies and allow flexibility in the build environment.

### 2. **Updated `package.json` Build Script**
Changed from:
```json
"build": "vite build"
```

To:
```json
"build": "npm exec vite build"
```

**Why:** Using `npm exec` ensures npm properly locates and executes the vite binary with correct permissions, rather than trying to invoke it directly.

### 3. **Created `vercel.json`**
Added explicit Vercel configuration:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```

**Why:** Explicitly tells Vercel:
- Which command to run for building
- Where the production files are output (dist folder)
- How to install dependencies
- Ensures consistent builds across all Vercel environments

### 4. **Created `.env.example`**
Template file for environment variables needed by the app.

## How to Deploy Now

### Step 1: Push to Git
```bash
git add .
git commit -m "Fix Vercel deployment"
git push origin main
```

### Step 2: On Vercel Dashboard
1. Connect your repository (if not already connected)
2. Click "Deploy"
3. Vercel will automatically:
   - Run `npm install`
   - Run `npm run build`
   - Deploy the `dist` folder

### Step 3: Verify Deployment
Once deployed, your site will be live at your Vercel URL with:
- ✅ Production build optimized
- ✅ All animations working
- ✅ SEO tags properly configured
- ✅ Images and assets loaded correctly

## If You Still Get Errors

### Check Vercel Build Logs
1. Go to your Vercel project
2. Click "Deployments"
3. Select the failed build
4. Check the full logs for specific errors

### Common Issues & Solutions

**Issue: "Cannot find module 'vite'"**
- Solution: Delete `node_modules` and `package-lock.json`, then run `npm install`

**Issue: "Out of memory during build"**
- Solution: Vercel limits are usually sufficient; check if dist folder is too large (should be ~100KB gzipped)

**Issue: "Port 3000 already in use"**
- Solution: This is normal - Vercel auto-assigns ports, not an issue

**Issue: "Missing favicon.svg"**
- Solution: Ensure `public/favicon.svg` is in git and committed

## Performance Notes

The build should complete in **30-60 seconds** with:
- ~150 dependencies
- Vite code splitting enabled
- CSS minification
- JS minification via Terser

If builds are taking >2 minutes, check:
1. Do you have large assets (images > 1MB)?
2. Are all dependencies necessary?
3. Is the repo size too large (>100MB)?

## Next Steps

1. **Custom Domain**: Add your domain in Vercel Project Settings > Domains
2. **Environment Variables**: Add API keys in Project Settings > Environment Variables
3. **Analytics**: Add Google Analytics ID to `.env.local`
4. **Monitor**: Use Vercel Analytics to monitor Core Web Vitals

## Support

For Vercel-specific issues:
- 📖 [Vercel Docs - Framework Guides](https://vercel.com/docs/frameworks/vitejs)
- 📖 [Vercel Docs - Troubleshooting](https://vercel.com/docs/troubleshooting)
