# 🚀 Quick Reference Card

## Essential Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)
npm run build            # Build for production
npm run start            # Test production build locally

# Deployment
git add .
git commit -m "message"
git push                 # Auto-deploys to Vercel

# Maintenance
npm outdated             # Check for updates
npm update               # Update packages
npm audit                # Check security
```

---

## Important URLs

| Service | URL |
|---------|-----|
| **Your Live Site** | `https://orchids-sukanta-mitra-portfolio.vercel.app` |
| **Vercel Dashboard** | https://vercel.com/dashboard |
| **GitHub Repo** | https://github.com/aroyy007/orchids-sukanta-mitra-portfolio |
| **Google Search Console** | https://search.google.com/search-console |
| **PageSpeed Insights** | https://pagespeed.web.dev |

---

## File Locations

### Content Files
```
src/components/
├── HeroSection.tsx          # Hero, bio, stats
├── PortfolioSection.tsx     # Projects showcase
├── ExperienceSection.tsx    # Work history
├── TestimonialsSection.tsx  # Client reviews
├── BlogSection.tsx          # Blog posts
├── LifeWorkSection.tsx      # Gallery, bookshelf
└── ContactFooter.tsx        # Contact, social links
```

### Configuration
```
src/app/layout.tsx           # SEO metadata
src/components/SchemaMarkup.tsx  # Structured data
public/robots.txt            # Crawler instructions
public/sitemap.xml           # Site structure
```

### Assets
```
public/
├── heroimg.png              # Hero image
├── BTS1-5.png              # Gallery images
├── *.ttf                    # Fonts
└── sukanta-mitra-cv.pdf    # CV (add this)
```

---

## Common Tasks

### Update Content
1. Edit component file
2. `git add .`
3. `git commit -m "Update content"`
4. `git push`
5. Wait 2-3 minutes for deployment

### Add New Image
1. Add to `public/` folder
2. Use in component: `<Image src="/image.png" ... />`
3. Push changes

### Update Social Links
- **Navigation:** `src/components/Navigation.tsx` (line ~13)
- **Footer:** `src/components/ContactFooter.tsx` (line ~127)
- **Schema:** `src/components/SchemaMarkup.tsx` (line ~15)

### Add Custom Domain
1. Vercel → Settings → Domains
2. Add domain
3. Configure DNS
4. Update code (see `ADD-DOMAIN-LATER.md`)

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| **Build fails** | Check Vercel logs, test locally with `npm run build` |
| **Images not loading** | Verify file in `public/`, path starts with `/` |
| **Site not updating** | Check deployment status, clear cache (Ctrl+Shift+R) |
| **Animations broken** | Check console (F12), verify `"use client"` directive |
| **Security warning** | Update Next.js: change version in `package.json`, push |

---

## Performance Targets

| Metric | Target | Check |
|--------|--------|-------|
| **Lighthouse Performance** | 90+ | Chrome DevTools |
| **First Contentful Paint** | < 1.5s | PageSpeed Insights |
| **Time to Interactive** | < 3.5s | PageSpeed Insights |
| **Bundle Size** | < 500KB | Build output |

---

## Documentation Files

| File | Purpose |
|------|---------|
| **DEPLOY-CHECKLIST-SIMPLE.md** | Quick deployment guide |
| **FIX-DEPLOYMENT-ERROR.md** | Fix security vulnerability |
| **AFTER-DEPLOYMENT.md** | Post-deployment tasks |
| **ADD-DOMAIN-LATER.md** | Add custom domain |
| **VERCEL-DEPLOYMENT-GUIDE.md** | Complete deployment guide |
| **ARCHITECTURE.md** | Technical architecture |
| **PROJECT-SUMMARY.md** | Project overview |

---

## Support Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Vercel Docs:** https://vercel.com/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion
- **React:** https://react.dev

---

## Quick Fixes

### Update Next.js
```bash
# In package.json, change:
"next": "^15.3.6"

# Then:
npm install
git add package.json package-lock.json
git commit -m "Update Next.js"
git push
```

### Clear Vercel Cache
1. Go to Vercel Dashboard
2. Project → Settings → General
3. Scroll to "Build & Development Settings"
4. Click "Redeploy" with "Use existing Build Cache" unchecked

### Force Redeploy
```bash
git commit --allow-empty -m "Force redeploy"
git push
```

---

## Color Scheme

```css
--primary: #CAFF33        /* Lime green */
--background: #050d1d     /* Dark blue */
--secondary: #1a3a6e      /* Blue */
--text: #ffffff           /* White */
--muted: #888888          /* Gray */
```

---

## Fonts

- **Headings:** Anton (400)
- **Body:** Krub (200-700)
- **Location:** `public/*.ttf`

---

## Breakpoints

```css
sm: 640px    /* Small devices */
md: 768px    /* Medium devices */
lg: 1024px   /* Large devices */
xl: 1280px   /* Extra large */
```

---

## Git Workflow

```bash
# Check status
git status

# See changes
git diff

# Stage changes
git add .

# Commit
git commit -m "Descriptive message"

# Push (triggers deployment)
git push

# View history
git log --oneline

# Undo last commit (keep changes)
git reset --soft HEAD~1
```

---

## Vercel CLI (Optional)

```bash
# Install
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod

# View logs
vercel logs

# List deployments
vercel ls
```

---

## Environment Variables (If Needed)

1. Vercel Dashboard → Project → Settings → Environment Variables
2. Add key-value pairs
3. Redeploy for changes to take effect

**Note:** This project doesn't require any environment variables currently.

---

## Keyboard Shortcuts

### Chrome DevTools
- `F12` - Open DevTools
- `Ctrl+Shift+R` - Hard refresh (clear cache)
- `Ctrl+Shift+C` - Inspect element
- `Ctrl+Shift+M` - Toggle device toolbar

### VS Code
- `Ctrl+P` - Quick file open
- `Ctrl+Shift+F` - Search in files
- `Ctrl+`` - Toggle terminal
- `F5` - Start debugging

---

## Status Indicators

### Vercel Deployment Status
- 🟡 **Building** - In progress
- ✅ **Ready** - Deployed successfully
- ❌ **Error** - Build failed
- 🔄 **Queued** - Waiting to build

### Git Status
- `M` - Modified
- `A` - Added
- `D` - Deleted
- `??` - Untracked

---

## Emergency Contacts

- **Vercel Support:** https://vercel.com/support
- **Next.js Discord:** https://nextjs.org/discord
- **GitHub Issues:** Your repo → Issues tab

---

## Checklist for Updates

Before pushing changes:
- [ ] Test locally (`npm run dev`)
- [ ] Build successfully (`npm run build`)
- [ ] No console errors
- [ ] Responsive on mobile
- [ ] Write clear commit message
- [ ] Push to GitHub

---

**Keep this file handy for quick reference!** 📌
