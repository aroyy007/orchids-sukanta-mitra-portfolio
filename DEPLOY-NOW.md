# 🚀 Deploy to Vercel - Quick Start (15 Minutes)

## Step 1: Update Configuration (5 minutes)

### A. Replace Domain URLs
Find and replace `yourdomain.com` with your actual domain in:
- [ ] `src/app/layout.tsx` (2 places)
- [ ] `public/sitemap.xml` (4 places)
- [ ] `public/robots.txt` (1 place)
- [ ] `src/components/SchemaMarkup.tsx` (3 places)

### B. Update Social Links
Replace `#` or placeholder URLs in:
- [ ] `src/components/Navigation.tsx` (line ~13)
- [ ] `src/components/ContactFooter.tsx` (line ~127)
- [ ] `src/components/SchemaMarkup.tsx` (line ~15)

### C. Fix CTA Buttons
In `src/components/HeroSection.tsx` (line ~207):
- [ ] Change `<motion.button>` to `<motion.a>` for "DOWNLOAD CV"
- [ ] Add `href="/sukanta-mitra-cv.pdf"` and `download` attribute
- [ ] Change `<motion.button>` to `<motion.a>` for "SHOW REEL"
- [ ] Add `href="YOUR-YOUTUBE-URL"` and `target="_blank"`

### D. Add Your CV
- [ ] Export CV as PDF
- [ ] Save as `public/sukanta-mitra-cv.pdf`

---

## Step 2: Test Locally (3 minutes)

```bash
# Build the project
npm run build

# Test production build
npm run start
```

Visit http://localhost:3000 and verify everything works.

---

## Step 3: Push to GitHub (2 minutes)

```bash
# Initialize Git (if not done)
git init
git add .
git commit -m "Ready for deployment"

# Create GitHub repo at https://github.com/new
# Then push:
git remote add origin https://github.com/YOUR-USERNAME/sukanta-mitra-portfolio.git
git branch -M main
git push -u origin main
```

---

## Step 4: Deploy to Vercel (5 minutes)

1. **Go to Vercel:**
   - Visit https://vercel.com
   - Sign up/login with GitHub

2. **Import Project:**
   - Click "Add New..." → "Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure:**
   - Project Name: `sukanta-mitra-portfolio`
   - Framework: Next.js (auto-detected)
   - Click "Deploy"

4. **Wait:**
   - Deployment takes 2-5 minutes
   - You'll get a URL like: `https://sukanta-mitra-portfolio.vercel.app`

5. **Done!**
   - Click "Visit" to see your live site

---

## Step 5: Post-Deployment (Optional)

### Add Custom Domain
1. Go to project → Settings → Domains
2. Add your domain
3. Update DNS records at your registrar
4. Wait 24-48 hours for DNS propagation

### Submit to Google
1. Go to https://search.google.com/search-console
2. Add your property
3. Verify ownership
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

### Enable Analytics
1. In Vercel project → Analytics tab
2. Enable Vercel Analytics (free)
3. Monitor performance

---

## 🎉 That's It!

Your portfolio is now live on Vercel!

**Next Steps:**
- Share your URL on social media
- Add to your resume/LinkedIn
- Monitor analytics
- Update content regularly

**Need Help?**
- See `VERCEL-DEPLOYMENT-GUIDE.md` for detailed instructions
- Check `SEO-ACTION-CHECKLIST.md` for SEO improvements
- Visit https://vercel.com/docs for Vercel documentation

---

## Quick Commands Reference

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build            # Build for production
npm run start            # Test production locally

# Deployment
vercel                   # Deploy to preview
vercel --prod            # Deploy to production

# Git
git add .
git commit -m "Update"
git push
```

---

**Deployment Time:** ~15 minutes
**Cost:** Free (Vercel Hobby plan)
**Performance:** Optimized with Next.js 15 + Vercel Edge Network
