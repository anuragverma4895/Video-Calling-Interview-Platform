# 🚀 Render Deployment Checklist

## ✅ Code Changes (Completed)
- [x] Fixed server.js SPA routing
- [x] Added PORT defaults to 3000
- [x] Added NODE_ENV defaults to production  
- [x] Fixed package.json scripts
- [x] Created render.yaml
- [x] Ready for deployment

## 📝 Before You Deploy
- [ ] Push code to GitHub
  ```bash
  git add .
  git commit -m "Ready for Render deployment"
  git push origin main
  ```
- [ ] Have these ready:
  - [ ] MongoDB connection string (DB_URL)
  - [ ] Clerk API keys (for auth)
  - [ ] Inngest keys (for background jobs)
  - [ ] Stream.io keys (for video/chat)

## 🔗 On Render.com
- [ ] Go to https://render.com
- [ ] Create new Web Service
- [ ] Connect GitHub repo
- [ ] Add **ALL 8 Environment Variables**:
  1. `DB_URL` - MongoDB URL
  2. `CLIENT_URL` - Your Render domain
  3. `INNGEST_EVENT_KEY` - Inngest event key
  4. `INNGEST_SIGNING_KEY` - Inngest signing key
  5. `STREAM_API_KEY` - Stream API key
  6. `STREAM_API_SECRET` - Stream API secret
  7. `NODE_ENV` = `production`
  8. `PORT` = `3000`

## 🎯 Deploy
- [ ] Click "Create Web Service"
- [ ] Wait for green "Live" status
- [ ] Test your app URL

## ✨ After Deploy
- [ ] Visit the app URL
- [ ] Login works?
- [ ] Video call works?
- [ ] Code execution works?
- [ ] Chat works?

## 🆘 If Something Breaks
1. Check Render Logs (in dashboard)
2. Verify all Env Variables are set
3. Ensure MongoDB connection works
4. Check if APIs are responding

---

**Now just push to GitHub and deploy on Render!** 🎉
