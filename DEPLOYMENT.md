# Render Deployment Guide - talent-iq

## ✅ What's Been Fixed:
1. ✅ server.js routing issue (SPA fallback)
2. ✅ env.js with proper defaults
3. ✅ root package.json build/start scripts
4. ✅ render.yaml configuration

## 📋 Deployment Steps on Render:

### Step 1: Prepare GitHub
```bash
git add .
git commit -m "Prepare for Render deployment"
git push origin main
```

### Step 2: Connect Render
1. Go to https://render.com
2. Click "New" → "Web Service"
3. Select "Build and deploy from a Git repository"
4. Find and connect your GitHub repository
5. Fill in details:
   - **Name**: `talent-iq-app` (or any name)
   - **Runtime**: Node
   - **Build Command**: (leave as default - uses package.json)
   - **Start Command**: (leave as default - uses package.json)
   - **Root Directory**: (leave empty)

### Step 3: Add Environment Variables in Render Dashboard
Go to Environment tab and add:

```
DB_URL = your_mongodb_connection_string
CLIENT_URL = your_render_domain.onrender.com
INNGEST_EVENT_KEY = your_inngest_event_key
INNGEST_SIGNING_KEY = your_inngest_signing_key
STREAM_API_KEY = your_stream_api_key
STREAM_API_SECRET = your_stream_api_secret
NODE_ENV = production
PORT = 3000
```

### Step 4: Deploy
1. Click "Create Web Service"
2. Render will automatically:
   - Install backend dependencies
   - Install frontend dependencies
   - Build React frontend
   - Start Node server with built frontend

### Step 5: Verify
- Check "Logs" tab in Render dashboard
- Should see: `"Server is running on port: 3000"`
- Visit your app URL from Render dashboard

## 🔧 How It Works:
- npm run build (root): Installs deps + builds frontend
- npm start (root): Starts backend server
- Backend serves static frontend from `/dist` folder
- All API routes work as-is
- Frontend routing handled by index.html fallback

## 🆘 Troubleshooting:

**"Build failed" error:**
- Check all Environment Variables are set
- Verify DB_URL is correct (MongoDB connection string)

**"Cannot find module" error:**
- Package.json dependencies issue
- Render will auto-retry, usually resolves

**Frontend not loading:**
- Check server.js is serving static files (✅ fixed)
- Verify build actually ran (check logs)

## 📱 One-Command Deploy:
After first setup, just: `git push` and Render auto-deploys!

---
**All files ready for Render deployment ✅**
