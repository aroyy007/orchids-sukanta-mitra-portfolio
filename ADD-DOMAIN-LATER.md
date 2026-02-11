# 🌐 Add Your Domain Later - Quick Guide

## What I Did

I've commented out all domain URLs so you can deploy immediately without a custom domain. Your site will work perfectly on the Vercel-provided URL (e.g., `https://sukanta-mitra-portfolio.vercel.app`).

## Files Modified

All domain references are now commented with `// TODO: Add your domain after deployment`:

1. ✅ `src/app/layout.tsx` - metadataBase and openGraph.url
2. ✅ `src/components/SchemaMarkup.tsx` - Person and Website schema URLs
3. ✅ `public/sitemap.xml` - All URL entries (commented out)
4. ✅ `public/robots.txt` - Sitemap URL (commented out)

## Deploy Now Without Domain

You can now deploy immediately:

```bash
# Test build
npm run build

# Push to GitHub
git add .
git commit -m "Ready for deployment"
git push

# Deploy to Vercel
# Follow DEPLOY-NOW.md
```

Your site will be live at: `https://your-project-name.vercel.app`

---

## When You Get Your Domain

### Step 1: Add Domain to Vercel

1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Domains"
3. Enter your domain (e.g., `sukantamitra.com`)
4. Click "Add"
5. Follow DNS configuration instructions

### Step 2: Update Code Files

Once your domain is active, uncomment and update these files:

#### File 1: `src/app/layout.tsx`

**Find this (around line 19):**
```typescript
// metadataBase: new URL('https://yourdomain.com'), // TODO: Add your domain after deployment
```

**Replace with:**
```typescript
metadataBase: new URL('https://sukantamitra.com'), // Replace with your actual domain
```

**Find this (around line 25):**
```typescript
// url: "https://yourdomain.com", // TODO: Add your domain after deployment
```

**Replace with:**
```typescript
url: "https://sukantamitra.com",
```

#### File 2: `src/components/SchemaMarkup.tsx`

**Find this (around line 7):**
```typescript
// "url": "https://yourdomain.com", // TODO: Add your domain after deployment
```

**Replace with:**
```typescript
"url": "https://sukantamitra.com",
```

**Find this (around line 28):**
```typescript
// "url": "https://yourdomain.com", // TODO: Add your domain after deployment
```

**Replace with:**
```typescript
"url": "https://sukantamitra.com",
```

#### File 3: `public/sitemap.xml`

**Replace entire file with:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://sukantamitra.com/</loc>
    <lastmod>2026-01-30</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://sukantamitra.com/#about</loc>
    <lastmod>2026-01-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://sukantamitra.com/#portfolio</loc>
    <lastmod>2026-01-30</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://sukantamitra.com/#blog</loc>
    <lastmod>2026-01-30</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

#### File 4: `public/robots.txt`

**Find this:**
```
# Sitemap location
# TODO: Add your domain after deployment
# Sitemap: https://yourdomain.com/sitemap.xml
```

**Replace with:**
```
# Sitemap location
Sitemap: https://sukantamitra.com/sitemap.xml
```

### Step 3: Deploy Updates

```bash
git add .
git commit -m "Add custom domain URLs"
git push
```

Vercel will automatically redeploy with your domain.

### Step 4: Submit to Google Search Console

1. Go to https://search.google.com/search-console
2. Add your property (your domain)
3. Verify ownership
4. Submit sitemap: `https://sukantamitra.com/sitemap.xml`

---

## Quick Find & Replace

When you have your domain, you can use find & replace:

**Find:** `yourdomain.com`  
**Replace with:** `sukantamitra.com` (or your actual domain)

**Files to update:**
- src/app/layout.tsx
- src/components/SchemaMarkup.tsx
- public/sitemap.xml
- public/robots.txt

---

## Summary

✅ **Now:** Deploy without domain - works perfectly on Vercel URL  
⏳ **Later:** When you get domain, uncomment and update 4 files  
🚀 **Result:** Full SEO optimization with custom domain

---

## Need Help?

- Vercel domain setup: https://vercel.com/docs/concepts/projects/domains
- DNS configuration: Check your domain registrar's documentation
- Google Search Console: https://search.google.com/search-console

---

**You're ready to deploy now! 🎉**

The domain URLs are optional for initial deployment. Your site will work perfectly without them.
