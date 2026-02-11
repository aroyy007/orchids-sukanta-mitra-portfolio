# ✅ Simple Deployment Checklist

## Before You Deploy

### 1. Social Media Links (Optional - Can Add Later)

If you want to add your social media links now:

**File: `src/components/Navigation.tsx` (line ~13)**
```typescript
const socialIcons = [
  { icon: "in", href: "https://linkedin.com/in/YOUR-PROFILE" },
  { icon: "be", href: "https://behance.net/YOUR-PROFILE" },
  { icon: "fb", href: "https://facebook.com/YOUR-PROFILE" },
  { icon: "ig", href: "https://instagram.com/YOUR-PROFILE" },
];
```

**File: `src/components/ContactFooter.tsx` (line ~127)**
```typescript
{ icon: Linkedin, href: "https://linkedin.com/in/YOUR-PROFILE", label: "LinkedIn" },
{ icon: Instagram, href: "https://instagram.com/YOUR-PROFILE", label: "Instagram" },
{ icon: Dribbble, href: "https://dribbble.com/YOUR-PROFILE", label: "Dribbble" },
```

**Or leave as is and update later!**

### 2. Test Build (Important!)

```bash
npm run build
```

If successful, you'll see:
```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages
✓ Finalizing page optimization
```

---

## Deploy to Vercel (5 Minutes)

### Step 1: Push to GitHub

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial deployment"

# Create repo on GitHub: https://github.com/new
# Name it: sukanta-mitra-portfolio

# Push
git remote add origin https://github.com/YOUR-USERNAME/sukanta-mitra-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to https://vercel.com
2. Sign up/login with GitHub
3. Click "Add New..." → "Project"
4. Select `sukanta-mitra-portfolio` repository
5. Click "Import"
6. Click "Deploy" (don't change any settings)
7. Wait 2-5 minutes
8. Click "Visit" to see your live site!

---

## After Deployment

### Your Live URL
You'll get: `https://sukanta-mitra-portfolio.vercel.app`

### Share It!
- ✅ Add to your resume
- ✅ Share on LinkedIn
- ✅ Add to email signature
- ✅ Share on social media

### Optional: Add Custom Domain Later
See `ADD-DOMAIN-LATER.md` when you're ready

---

## That's It! 🎉

Your portfolio is now live on the internet!

**Total Time:** ~10 minutes  
**Cost:** Free  
**Performance:** Optimized globally

---

## Quick Commands

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build            # Test build
npm run start            # Test production locally

# Git
git add .
git commit -m "Update"
git push                 # Auto-deploys to Vercel
```

---

## Need Help?

- Build errors? Check console for specific error
- Deployment issues? Check Vercel dashboard logs
- Questions? See VERCEL-DEPLOYMENT-GUIDE.md

---

**You're ready to deploy! 🚀**
