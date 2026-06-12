# Udaya Bhanu S - Portfolio

## 🎉 Customization Complete!

This portfolio has been successfully customized with your information from your resume. All original author details have been replaced while keeping the beautiful design and smooth animations intact.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install --legacy-peer-deps
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm start
```

---

## ✅ What's Been Updated

### Personal Information
- ✅ Name: **Udaya Bhanu S**
- ✅ Title: **AI Full-Stack Developer**
- ✅ Email: **bhanu339@gmail.com**
- ✅ GitHub: [bhanu-3333](https://github.com/bhanu-3333)
- ✅ LinkedIn: [udaya-bhanu-s](https://www.linkedin.com/in/udaya-bhanu-s-30039726/)

### Skills Updated
- ✅ **Frontend**: HTML, CSS, JavaScript, React.js, Next.js, React Native, Vite, GSAP, Leaflet
- ✅ **Backend**: Node.js, Express.js, MongoDB, REST APIs
- ✅ **AI & Tools**: LangChain, RAG, Prompt Engineering, Hugging Face, LLM Integration, Vector Databases
- ✅ **Tools**: Git, GitHub, VS Code, Postman, Canva

### Projects Added
1. ✅ **MedIntel AI** - Offline Medical Document Intelligence System (RAG, LangChain, Vector DB)
2. ✅ **College Fee Management System** - Full-stack student management platform
3. ✅ **AI Disease Predictor** - ML-based health prediction system
4. ✅ **Team Collaboration App** - Real-time communication platform

### Experience Added
1. ✅ **Frontend Developer Intern** - Xtracui (Dec 2025 - Jan 2026)
2. ✅ **React Native Developer Intern** - Nirmaya (Dec 2024 - Feb 2025)

### Stats Updated
- ✅ 4+ Projects Completed
- ✅ 2 Internships
- ✅ 8.5/10 CGPA

---

## 📝 TODO - Before Deploying

### High Priority (Required for full functionality)

#### 1. Add Project Screenshots
Place your project images in these folders:

```
/public/projects/thumbnail/
├── medintel.jpg
├── fee-management.jpg
├── disease-predictor.jpg
└── team-collab.jpg

/public/projects/long/
├── medintel.jpg
├── fee-management.jpg
├── disease-predictor.jpg
└── team-collab.jpg

/public/projects/images/
├── medintel-1.jpg
├── medintel-2.jpg
├── fee-management-1.jpg
├── fee-management-2.jpg
├── disease-predictor-1.jpg
└── team-collab-1.jpg
```

**Temporary Solution:** Site works without images, they'll just show as broken links.

#### 2. Add Technology Icons
Download and add missing icons to `/public/logo/`:

- `html.png`, `css.png`, `vite.png`, `leaflet.png`
- `langchain.png`, `ai.png`, `huggingface.png`
- `database.png`, `api.png`, `github.png`
- `vscode.png`, `postman.png`, `canva.png`

**Icon Resources:**
- https://simpleicons.org/
- https://devicon.dev/
- Official brand websites

#### 3. Update Project URLs
Edit `lib/data.ts` and add your actual project URLs:

```typescript
liveUrl: 'https://your-deployed-project.com'
sourceCode: 'https://github.com/bhanu-3333/your-repo'
```

### Medium Priority

#### 4. After Deployment
- Update sitemap URL in `app/sitemap.ts`
- Add Google Analytics ID in `app/layout.tsx` (optional)

#### 5. Optional Enhancements
- Add your profile photo to `/public/`
- Replace favicon at `/app/favicon.ico`
- Add certifications section if desired
- Add resume download link

---

## 📁 Project Structure

```
portfolio/
├── app/                          # Next.js app directory
│   ├── _components/              # Page-specific components
│   │   ├── Banner.tsx           # ✅ Updated with your info
│   │   ├── AboutMe.tsx          # ✅ Updated with your info
│   │   ├── Skills.tsx           # Auto-pulls from data.ts
│   │   ├── Experiences.tsx      # Auto-pulls from data.ts
│   │   └── ProjectList.tsx      # Auto-pulls from data.ts
│   ├── layout.tsx               # ✅ Updated metadata
│   ├── page.tsx                 # Home page
│   └── sitemap.ts               # ✅ Ready for your domain
├── components/                   # Reusable components
│   ├── Navbar.tsx               # Auto-pulls from data.ts
│   ├── Footer.tsx               # ✅ Updated attribution
│   └── ...                      # Other UI components
├── lib/
│   └── data.ts                  # ✅ ALL YOUR DATA HERE
├── public/
│   ├── logo/                    # Technology icons (⚠️ add missing)
│   └── projects/                # Project images (⚠️ add yours)
└── types/
    └── index.ts                 # TypeScript types
```

---

## 🎨 Key Features Preserved

- ✅ Smooth scroll animations with GSAP
- ✅ Particle background effect
- ✅ Custom cursor
- ✅ Preloader animation
- ✅ Fully responsive design
- ✅ Project detail pages
- ✅ SEO optimized
- ✅ Dark theme

---

## 🔧 Configuration Files

### Main Data File: `lib/data.ts`
This is where ALL your personal information lives:
- Contact details
- Social links
- Skills and technologies
- Projects
- Work experience

**To update anything, just edit this file!**

### Styling: `app/globals.css` & `tailwind.config.ts`
Customize colors, fonts, and design if desired.

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

### Other Options
- GitHub Pages
- AWS Amplify
- Railway
- Render

---

## 📚 Important Files to Review

1. **CUSTOMIZATION_SUMMARY.md** - Detailed list of all changes made
2. **ASSETS_CHECKLIST.md** - Step-by-step guide for adding images and icons
3. **lib/data.ts** - Your personal data (edit this to update content)

---

## 🐛 Troubleshooting

### Build Errors
If you see font loading errors during build:
- This is a network issue (can't reach Google Fonts)
- Code is correct and will work when deployed
- Fonts will load fine in production

### Missing Images
- Site works without images
- They'll show as broken links until you add them
- See ASSETS_CHECKLIST.md for what to add

### Port Already in Use
```bash
# Kill the process and restart
npm run dev
```

---

## 📖 Tech Stack

- **Framework**: Next.js 15.2.8
- **Styling**: Tailwind CSS
- **Animations**: GSAP, Framer Motion
- **Fonts**: Google Fonts (Anton, Roboto Flex)
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React
- **Language**: TypeScript

---

## 💡 Tips

### Adding New Projects
Edit `lib/data.ts` and add to the `PROJECTS` array:

```typescript
{
    title: 'Your New Project',
    slug: 'project-slug',
    year: 2024,
    description: 'Project description...',
    techStack: ['React', 'Node.js'],
    thumbnail: '/projects/thumbnail/your-project.jpg',
    liveUrl: 'https://your-project.com',
    sourceCode: 'https://github.com/yourusername/repo'
}
```

### Adding New Skills
Edit the `MY_STACK` object in `lib/data.ts`:

```typescript
frontend: [
    {
        name: 'New Technology',
        icon: '/logo/new-tech.png'
    }
]
```

### Updating Experience
Edit the `MY_EXPERIENCE` array in `lib/data.ts`.

---

## 🙏 Credits

- **Original Design & Development**: [Tajmirul Islam](https://www.me.toinfinite.dev/)
- **Customized for**: Udaya Bhanu S
- **Repository**: [GitHub - Portfolio 2.0](https://github.com/Tajmirul/portfolio-2.0)

---

## 📧 Contact

- **Email**: bhanu339@gmail.com
- **GitHub**: [@bhanu-3333](https://github.com/bhanu-3333)
- **LinkedIn**: [Udaya Bhanu S](https://www.linkedin.com/in/udaya-bhanu-s-30039726/)

---

## 🚀 Next Steps

1. ✅ Dependencies installed - Done!
2. ⚠️ Add project screenshots - **Do this next**
3. ⚠️ Add technology icons - **Important for skills section**
4. ⚠️ Update project URLs - When you deploy your projects
5. 🌐 Deploy to Vercel/Netlify
6. 🎉 Share your portfolio!

---

**Your portfolio is ready to run! Follow the TODO items above to add images and complete the setup.**

Good luck with your job search! 🎯
