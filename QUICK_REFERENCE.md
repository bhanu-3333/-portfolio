# Quick Reference Guide

Quick answers to common tasks and questions.

---

## 🔧 Common Tasks

### Change Your Name
**File**: `lib/data.ts`, `app/_components/Banner.tsx`, `app/_components/AboutMe.tsx`

```typescript
// In Banner.tsx
<span className="font-medium text-foreground">
    Your Name Here
</span>

// In AboutMe.tsx
<p className="text-5xl slide-up-and-fade">
    Hi, I&apos;m Your Name.
</p>
```

### Change Your Email
**File**: `lib/data.ts`
```typescript
export const GENERAL_INFO = {
    email: 'your.email@example.com',
    // ...
};
```

### Add Social Links
**File**: `lib/data.ts`
```typescript
export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/username' },
    { name: 'linkedin', url: 'https://linkedin.com/in/username' },
    { name: 'twitter', url: 'https://twitter.com/username' },
    { name: 'instagram', url: 'https://instagram.com/username' },
];
```

### Add a New Skill
**File**: `lib/data.ts`
```typescript
export const MY_STACK = {
    frontend: [
        {
            name: 'Your Technology',
            icon: '/logo/technology.png', // Add icon to public/logo/
        },
    ],
    // Can add new categories too!
    mobile: [
        {
            name: 'React Native',
            icon: '/logo/react-native.png',
        },
    ],
};
```

### Add Experience
**File**: `lib/data.ts`
```typescript
export const MY_EXPERIENCE = [
    {
        title: 'Your Job Title',
        company: 'Company Name',
        duration: 'Month Year - Month Year',
        description: 'Optional description', // Optional field
    },
    // Add more experiences...
];
```

### Update Hero Stats
**File**: `app/_components/Banner.tsx`
```typescript
<div className="slide-up-and-fade">
    <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
        10+ {/* Change this number */}
    </h5>
    <p className="text-muted-foreground">
        Your Label {/* Change this text */}
    </p>
</div>
```

### Change Your Title/Role
**File**: `app/_components/Banner.tsx`
```typescript
<h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton">
    <span className="text-primary">YOUR</span>
    <br /> <span className="ml-4">TITLE</span>
</h1>
```

### Update Page Title & SEO
**File**: `app/layout.tsx`
```typescript
export const metadata: Metadata = {
    title: 'Your Name - Your Title',
    description: 'Your professional description for SEO...',
};
```

---

## 📁 File Locations

| What | Where |
|------|-------|
| Your personal data | `lib/data.ts` |
| Hero section | `app/_components/Banner.tsx` |
| About section | `app/_components/AboutMe.tsx` |
| Skills section | `app/_components/Skills.tsx` |
| Experience section | `app/_components/Experiences.tsx` |
| Projects section | `app/_components/ProjectList.tsx` |
| Navigation | `components/Navbar.tsx` |
| Footer | `components/Footer.tsx` |
| Page metadata | `app/layout.tsx` |
| Sitemap | `app/sitemap.ts` |
| Colors & styles | `app/globals.css` |
| Tailwind config | `tailwind.config.ts` |

---

## 🎨 Styling

### Change Primary Color
**File**: `app/globals.css`
```css
:root {
    --primary: 47 100% 50%; /* Change these HSL values */
}
```

### Change Background Color
```css
:root {
    --background: 0 0% 7%;
}
```

### Change Font Sizes
**File**: Component files (e.g., `Banner.tsx`)
```typescript
// Change from text-6xl to text-7xl, etc.
className="text-6xl"  // Make it text-7xl for bigger
```

Tailwind size classes:
- `text-sm` = 14px
- `text-base` = 16px
- `text-lg` = 18px
- `text-xl` = 20px
- `text-2xl` = 24px
- `text-3xl` = 30px
- `text-4xl` = 36px
- `text-5xl` = 48px
- `text-6xl` = 60px
- `text-7xl` = 72px

---

## 🖼️ Images

### Where to Put Images

```
public/
├── logo/                    # Technology/skill icons (40x40px+)
│   ├── react.png
│   ├── nodejs.png
│   └── ...
├── projects/
│   ├── thumbnail/          # Square project thumbnails (400x400px)
│   │   └── project-name.jpg
│   ├── long/               # Wide project headers (1200x600px)
│   │   └── project-name.jpg
│   └── images/             # Project detail images (any size)
│       ├── project-name-1.jpg
│       └── project-name-2.jpg
├── profile.jpg             # Your photo (optional)
└── favicon.ico             # Browser tab icon
```

### Image Format Recommendations
- **JPG**: Photos and screenshots (smaller file size)
- **PNG**: Logos and icons (transparency support)
- **WebP**: Modern format (best compression, but check browser support)

### Optimize Images Before Adding
Use tools like:
- https://tinypng.com/
- https://squoosh.app/
- https://imageoptim.com/

---

## 🚀 Development Commands

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Generate SVG icons (if you add SVGs)
npm run svgr:icons
```

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

### Environment Variables
Create `.env.local` for local development:
```bash
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

---

## 🐛 Common Issues

### Issue: Port 3000 already in use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Then restart
npm run dev
```

### Issue: Images not showing
- Check file path matches exactly (case-sensitive)
- Verify image exists in `/public/` folder
- Check browser console for 404 errors
- Remember: `/public/logo/react.png` → reference as `/logo/react.png`

### Issue: Changes not appearing
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### Issue: Build fails with font errors
- This is a network issue (Google Fonts)
- Code is correct
- Will work when deployed
- Or connect to internet and try again

### Issue: TypeScript errors
```bash
# Check for type errors
npm run build

# Or use VS Code's built-in type checker
```

---

## 📱 Responsive Design

The portfolio is already fully responsive. But if you want to customize:

### Tailwind Breakpoints
- `sm`: 640px (small tablets)
- `md`: 768px (tablets)
- `lg`: 1024px (laptops)
- `xl`: 1280px (desktops)
- `2xl`: 1536px (large screens)

### Usage
```typescript
className="text-xl md:text-3xl lg:text-5xl"
// Mobile: text-xl
// Tablet (768px+): text-3xl
// Desktop (1024px+): text-5xl
```

---

## 🔍 SEO Optimization

### Update Metadata
**File**: `app/layout.tsx`
```typescript
export const metadata: Metadata = {
    title: 'Your Name - Your Title',
    description: 'Your SEO description...',
    keywords: 'react, developer, ai, portfolio', // Optional
    authors: [{ name: 'Your Name' }],
    openGraph: {
        title: 'Your Name - Portfolio',
        description: 'Your description',
        url: 'https://yoursite.com',
        images: ['/og-image.jpg'], // Add this image to /public/
    },
};
```

### Update Sitemap
**File**: `app/sitemap.ts`
```typescript
url: 'https://your-actual-domain.com'
```

---

## 📊 Analytics

### Add Google Analytics
**File**: `app/layout.tsx`

1. Get GA4 ID from https://analytics.google.com/
2. Uncomment these lines:
```typescript
import { GoogleAnalytics } from '@next/third-parties/google';

// In the component:
<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

---

## 🎯 Performance Tips

### 1. Optimize Images
- Use WebP format when possible
- Compress before uploading
- Use appropriate sizes (don't upload 4K images)

### 2. Lazy Load Images
Images already lazy load by default with Next.js Image component.

### 3. Code Splitting
Already handled by Next.js automatically.

### 4. Check Performance
```bash
npm run build
# Check the output for bundle sizes
```

---

## 🔗 Useful Links

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **GSAP Docs**: https://gsap.com/docs/
- **React Icons**: https://react-icons.github.io/react-icons/
- **Color Picker**: https://tailwindcss.com/docs/customizing-colors
- **Image Optimization**: https://tinypng.com/

---

## 💾 Backup Your Work

### Using Git
```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Personalized portfolio"

# Push to GitHub
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

---

## 📞 Need Help?

1. Check `CUSTOMIZATION_SUMMARY.md` for what's been changed
2. Check `ASSETS_CHECKLIST.md` for what images to add
3. Check `PROJECT_TEMPLATE.md` for adding projects
4. Review this `QUICK_REFERENCE.md` for common tasks

---

**Keep this file handy for quick reference while customizing your portfolio!**
