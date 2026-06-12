# Project Template

Use this template when adding new projects to your portfolio.

## 📋 Copy-Paste Template

Add this to the `PROJECTS` array in `lib/data.ts`:

```typescript
{
    title: 'Project Name Here',
    slug: 'project-url-slug', // Used in URL: /projects/project-url-slug
    year: 2024, // Year completed
    
    // URLs (optional - use '#' if not available)
    liveUrl: 'https://your-demo-url.com',
    sourceCode: 'https://github.com/yourusername/repo-name',
    
    // Technologies used
    techStack: [
        'React.js',
        'Node.js',
        'MongoDB',
        // Add more...
    ],
    
    // Images (add files to /public/projects/)
    thumbnail: '/projects/thumbnail/project-name.jpg',      // 400x400px
    longThumbnail: '/projects/long/project-name.jpg',       // 1200x600px
    images: [
        '/projects/images/project-name-1.jpg',
        '/projects/images/project-name-2.jpg',
        '/projects/images/project-name-3.jpg',
    ],
    
    // Detailed description (HTML supported)
    description: `
      Brief project overview goes here. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🎯 Feature 1 description</li>
        <li>⚡ Feature 2 description</li>
        <li>🔒 Feature 3 description</li>
        <li>📱 Feature 4 description</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Implementation detail 1</li>
        <li>Implementation detail 2</li>
        <li>Challenge solved or optimization made</li>
      </ul>
    `,
    
    // Your role and contributions (optional but recommended)
    role: `
      Your Role Title <br/>
      Brief summary of your responsibilities:
      <ul>
        <li>✅ What you built or implemented</li>
        <li>🎨 Design/frontend work</li>
        <li>⚙️ Backend/API development</li>
        <li>🚀 Deployment and optimization</li>
        <li>🤝 Team collaboration aspects</li>
      </ul>
    `,
},
```

---

## 📝 Real Example

Here's a filled-out example:

```typescript
{
    title: 'E-Commerce Dashboard',
    slug: 'ecommerce-dashboard',
    year: 2024,
    liveUrl: 'https://dashboard-demo.vercel.app',
    sourceCode: 'https://github.com/bhanu-3333/ecommerce-dashboard',
    
    techStack: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'PostgreSQL',
        'Prisma',
        'Chart.js',
    ],
    
    thumbnail: '/projects/thumbnail/ecommerce-dashboard.jpg',
    longThumbnail: '/projects/long/ecommerce-dashboard.jpg',
    images: [
        '/projects/images/ecommerce-dashboard-1.jpg',
        '/projects/images/ecommerce-dashboard-2.jpg',
        '/projects/images/ecommerce-dashboard-3.jpg',
    ],
    
    description: `
      A comprehensive e-commerce admin dashboard with real-time analytics, inventory management, and order tracking capabilities. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>📊 Real-time sales analytics and charts</li>
        <li>📦 Inventory management system</li>
        <li>🛍️ Order tracking and fulfillment</li>
        <li>👥 Customer management dashboard</li>
        <li>📱 Fully responsive design</li>
        <li>🔐 Role-based access control</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Built with Next.js 14 App Router for optimal performance</li>
        <li>Implemented server-side rendering for fast page loads</li>
        <li>Used Chart.js for interactive data visualizations</li>
        <li>Integrated Prisma ORM for type-safe database queries</li>
        <li>Implemented real-time updates using WebSockets</li>
      </ul>
    `,
    
    role: `
      Full-Stack Developer <br/>
      Led the complete development of the dashboard:
      <ul>
        <li>🎨 Designed and built the entire UI using Tailwind CSS</li>
        <li>⚙️ Developed RESTful APIs with Next.js API routes</li>
        <li>💾 Designed database schema and implemented with Prisma</li>
        <li>📊 Integrated Chart.js for analytics visualizations</li>
        <li>🔒 Implemented JWT-based authentication</li>
        <li>🚀 Deployed on Vercel with CI/CD pipeline</li>
      </ul>
    `,
},
```

---

## 🎯 Tips for Writing Great Project Descriptions

### 1. Start with Impact
- What problem does it solve?
- Who benefits from it?
- What makes it unique?

### 2. Highlight Key Features
- Use emojis for visual appeal (but don't overdo it)
- Focus on user-facing features
- Mention technical innovations

### 3. Technical Details
- Show your technical depth
- Mention specific technologies
- Highlight challenges overcome
- Include performance optimizations

### 4. Your Role
- Be specific about YOUR contributions
- Use action verbs (Built, Developed, Implemented, Designed)
- Show end-to-end ownership when applicable
- Mention collaboration if team project

### 5. Keep it Scannable
- Use bullet points
- Keep sentences concise
- Break into sections
- Use HTML formatting

---

## 📸 Image Specifications

### Thumbnail (`thumbnail`)
- **Size**: 400x400px (square)
- **Format**: JPG or WebP
- **Usage**: Project grid view
- **Content**: Logo, key UI, or hero shot

### Long Thumbnail (`longThumbnail`)
- **Size**: 1200x600px (2:1 ratio)
- **Format**: JPG or WebP
- **Usage**: Project detail page header
- **Content**: Hero image, main interface

### Detail Images (`images` array)
- **Size**: Any (will be responsive)
- **Format**: JPG, PNG, or WebP
- **Usage**: Project detail page gallery
- **Content**: Different features, pages, or use cases

---

## 🔗 URL Guidelines

### Live URL (`liveUrl`)
- Deployed demo or production site
- Use '#' if not deployed yet
- Make sure it's live and accessible

### Source Code (`sourceCode`)
- GitHub, GitLab, or Bitbucket URL
- Make sure README is well-written
- Add demo credentials if needed
- Use '#' if private/not available

### Slug (`slug`)
- Lowercase only
- Use hyphens, not spaces
- Keep it short but descriptive
- Must be unique across all projects

Examples:
- ✅ `ai-chatbot`
- ✅ `ecommerce-dashboard`
- ✅ `task-manager-app`
- ❌ `My Project`
- ❌ `project_123`

---

## 📊 Tech Stack Tips

### Order by Importance
List the main technologies first:
```typescript
techStack: [
    'React.js',        // Main framework
    'Node.js',         // Backend
    'MongoDB',         // Database
    'Tailwind CSS',    // Styling
    'JWT',             // Auth
    'Vercel',          // Hosting
]
```

### Be Specific
- ✅ 'Next.js 14' vs ❌ 'React Framework'
- ✅ 'PostgreSQL' vs ❌ 'Database'
- ✅ 'Tailwind CSS' vs ❌ 'CSS'

### Include Notable Tools
- State management (Redux, Zustand)
- UI libraries (shadcn, Material-UI)
- APIs used (OpenAI, Stripe)
- Deployment platforms

---

## 🚀 Adding Your New Project

### Step 1: Prepare Files
1. Take screenshots of your project
2. Edit/crop images to look professional
3. Save with consistent naming

### Step 2: Add Images
```bash
# Add to these folders:
public/projects/thumbnail/your-project.jpg
public/projects/long/your-project.jpg
public/projects/images/your-project-1.jpg
public/projects/images/your-project-2.jpg
```

### Step 3: Add to data.ts
1. Open `lib/data.ts`
2. Find the `PROJECTS` array
3. Copy the template above
4. Fill in your details
5. Add to the array (newest projects first)

### Step 4: Test
```bash
npm run dev
# Visit http://localhost:3000
# Check home page and project detail page
```

---

## ✅ Checklist Before Adding

- [ ] Project screenshots ready and edited
- [ ] All images added to `/public/projects/`
- [ ] Live demo URL (or set to '#')
- [ ] GitHub repo URL (or set to '#')
- [ ] Tech stack list complete
- [ ] Description written and formatted
- [ ] Role/contributions documented
- [ ] Unique slug chosen
- [ ] Tested on local dev server

---

**Ready to add your first project? Copy the template and start filling it in!**
