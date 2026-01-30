# SEO Action Checklist - Quick Reference

## ✅ COMPLETED
- [x] Created `public/robots.txt`
- [x] Created `public/sitemap.xml`
- [x] Enhanced metadata in `src/app/layout.tsx`
- [x] Added Schema Markup component (`src/components/SchemaMarkup.tsx`)
- [x] Integrated Schema Markup into layout
- [x] Created custom 404 page (`src/app/not-found.tsx`)

---

## 🔴 CRITICAL - DO IMMEDIATELY

### 1. Update Domain URLs
Replace `yourdomain.com` in these files:
- [ ] `src/app/layout.tsx` - Line with `metadataBase`
- [ ] `public/sitemap.xml` - All `<loc>` tags
- [ ] `public/robots.txt` - Sitemap URL
- [ ] `src/components/SchemaMarkup.tsx` - All URL references

**Find & Replace:** `yourdomain.com` → `your-actual-domain.com`

### 2. Update Social Media Links
Replace placeholder `#` links with actual URLs:

**File: `src/components/Navigation.tsx`**
```typescript
const socialIcons = [
  { icon: "in", href: "https://linkedin.com/in/your-profile" },
  { icon: "be", href: "https://behance.net/your-profile" },
  { icon: "fb", href: "https://facebook.com/your-profile" },
  { icon: "ig", href: "https://instagram.com/your-profile" },
];
```

**File: `src/components/ContactFooter.tsx`**
```typescript
{ icon: Linkedin, href: "https://linkedin.com/in/your-profile", label: "LinkedIn" },
{ icon: Instagram, href: "https://instagram.com/your-profile", label: "Instagram" },
{ icon: Dribbble, href: "https://dribbble.com/your-profile", label: "Dribbble" },
```

**File: `src/components/SchemaMarkup.tsx`**
Update the `sameAs` array with actual URLs

### 3. Add Google Verification
**File: `src/app/layout.tsx`**
- [ ] Sign up for Google Search Console
- [ ] Get verification code
- [ ] Replace `'your-google-verification-code'` with actual code

### 4. Fix CTA Buttons
**File: `src/components/HeroSection.tsx`**

Current buttons have no action. Update:
```typescript
// Download CV button
<a
  href="/path-to-your-cv.pdf"
  download
  className="font-krub px-4 sm:px-5 py-2 sm:py-2.5 bg-[#CAFF33]..."
>
  DOWNLOAD CV
</a>

// Show Reel button
<a
  href="https://youtube.com/your-showreel"
  target="_blank"
  rel="noopener noreferrer"
  className="font-krub flex items-center gap-2 sm:gap-3..."
>
  <div className="w-6 h-6...">
    <Play size={10} className="..." fill="#0a1628" />
  </div>
  SHOW REEL
</a>
```

---

## 🟡 HIGH PRIORITY - THIS WEEK

### 5. Add Your CV
- [ ] Create/export your CV as PDF
- [ ] Place in `public/sukanta-mitra-cv.pdf`
- [ ] Update download link in HeroSection

### 6. Optimize Images
Convert PNG to WebP for better performance:
```bash
# Install sharp (if not already)
npm install sharp

# Convert images
npx @squoosh/cli --webp auto public/BTS*.png
npx @squoosh/cli --webp auto public/heroimg.png
```

### 7. Create Privacy Policy & Terms
- [ ] Create `src/app/privacy/page.tsx`
- [ ] Create `src/app/terms/page.tsx`
- [ ] Update links in `ContactFooter.tsx`

### 8. Submit to Search Engines
- [ ] Google Search Console: https://search.google.com/search-console
- [ ] Bing Webmaster Tools: https://www.bing.com/webmasters
- [ ] Submit sitemap to both

### 9. Test Everything
Run these tests:
- [ ] Lighthouse audit (Chrome DevTools)
- [ ] Google Rich Results Test: https://search.google.com/test/rich-results
- [ ] Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
- [ ] PageSpeed Insights: https://pagespeed.web.dev/

---

## 🟢 MEDIUM PRIORITY - THIS MONTH

### 10. Add Blog Functionality
If you want individual blog posts:
- [ ] Create `src/app/blog/[slug]/page.tsx`
- [ ] Add blog post schema markup
- [ ] Update sitemap with blog URLs
- [ ] Create RSS feed

### 11. Portfolio Case Studies
- [ ] Create individual pages for portfolio items
- [ ] Add detailed case studies
- [ ] Include process documentation
- [ ] Add project schema markup

### 12. Analytics Setup
- [ ] Set up Google Analytics 4
- [ ] Add tracking code to layout
- [ ] Set up conversion goals
- [ ] Monitor traffic

### 13. Performance Optimization
- [ ] Analyze bundle size
- [ ] Implement code splitting if needed
- [ ] Set up CDN
- [ ] Configure caching headers

---

## 📋 ONGOING MAINTENANCE

### Content Updates
- [ ] Publish blog posts regularly (aim for 1-2 per month)
- [ ] Update portfolio with new projects
- [ ] Refresh testimonials
- [ ] Update experience section

### Monitoring
- [ ] Check Google Search Console weekly
- [ ] Monitor Core Web Vitals
- [ ] Track keyword rankings
- [ ] Fix any crawl errors

### Technical
- [ ] Update sitemap when adding content
- [ ] Keep dependencies updated
- [ ] Monitor for broken links
- [ ] Test on new devices/browsers

---

## 🛠️ USEFUL COMMANDS

### Development
```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run linter
```

### Testing
```bash
# Lighthouse CLI
npm install -g lighthouse
lighthouse https://yourdomain.com --view

# Check for broken links
npm install -g broken-link-checker
blc https://yourdomain.com -ro
```

### Image Optimization
```bash
# Convert to WebP
npx @squoosh/cli --webp auto public/*.png

# Optimize existing images
npx @squoosh/cli --optimize public/*.jpg
```

---

## 📞 RESOURCES

### Documentation
- Next.js SEO: https://nextjs.org/learn/seo/introduction-to-seo
- Google Search Central: https://developers.google.com/search
- Schema.org: https://schema.org/
- Web.dev: https://web.dev/

### Tools
- Google Search Console: https://search.google.com/search-console
- Google Analytics: https://analytics.google.com/
- PageSpeed Insights: https://pagespeed.web.dev/
- Lighthouse: Built into Chrome DevTools
- Schema Validator: https://validator.schema.org/

### Testing
- Rich Results Test: https://search.google.com/test/rich-results
- Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
- Structured Data Testing: https://validator.schema.org/

---

## 📊 SUCCESS METRICS

Track these KPIs:
- [ ] Google Search Console impressions
- [ ] Click-through rate (CTR)
- [ ] Average position in search results
- [ ] Core Web Vitals scores
- [ ] Page load time
- [ ] Mobile usability score
- [ ] Number of indexed pages
- [ ] Organic traffic growth

---

## ✨ QUICK WINS

These take <30 minutes each:
1. ✅ Add robots.txt (DONE)
2. ✅ Add sitemap.xml (DONE)
3. ✅ Add schema markup (DONE)
4. ✅ Create 404 page (DONE)
5. ⚠️ Update domain URLs
6. ⚠️ Update social links
7. ⚠️ Add CV file
8. ⚠️ Fix CTA buttons
9. Submit to Google Search Console
10. Run Lighthouse audit

---

**Last Updated:** January 30, 2026
**Next Review:** After completing critical items
