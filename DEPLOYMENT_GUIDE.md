# GitHub Pages Deployment Guide

## Quick Start (5 minutes)

### 1. Prepare Your Repository
```bash
# Clone/fork this repository
git clone <your-repo-url>
cd <your-repo-name>

# Install dependencies
npm install
```

### 2. Build for GitHub Pages
```bash
# Build the static site
npx vite build --config vite.config.github.ts
```

### 3. Deploy to GitHub Pages

**Option A: Automatic via GitHub Actions** (Fixed Version)
1. The workflow file is already created in this project at `.github/workflows/deploy.yml`
2. Go to Settings → Pages → Source: "GitHub Actions"
3. Push to main branch - done!

If you get permissions errors, follow these steps:
- Go to Settings → Actions → General
- Under "Workflow permissions", select "Read and write permissions"
- Check "Allow GitHub Actions to create and approve pull requests"
- Save

**Option B: Manual Deploy**
1. Build: `npx vite build --config vite.config.github.ts`
2. Go to Settings → Pages → Source: "Deploy from branch"
3. Create `gh-pages` branch with dist contents
4. Select `gh-pages` branch in settings

## Customization

### Update Personal Info
Edit `client/src/lib/constants.ts`:
```typescript
export const PERSONAL_INFO = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your.email@domain.com',
  // ... other details
};
```

### Add Your Projects
```typescript
export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Your Project Name',
    description: 'Project description...',
    category: 'ml', // ml, nlp, cv, analytics
    technologies: ['Python', 'TensorFlow'],
    image: 'https://your-image-url.com',
    githubUrl: 'https://github.com/you/project',
    featured: true
  },
  // ... more projects
];
```

### Configure Contact Form

For production, replace the mailto link with a form service:

**Formspree Integration:**
```typescript
// In contact.tsx, replace handleSubmit with:
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

**Netlify Forms:**
Add to your form element:
```html
<form netlify name="contact" action="/thank-you">
```

## File Structure
```
├── client/src/
│   ├── components/sections/    # All portfolio sections
│   ├── lib/constants.ts       # Your data here
│   └── ...
├── vite.config.github.ts      # Build configuration
├── dist/                      # Generated site (after build)
└── .github/workflows/         # Auto-deployment
```

## Your Site URL
After deployment: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

## Troubleshooting

**Build fails?**
- Check all images have valid URLs
- Ensure no syntax errors in constants.ts
- Run `npm install` first

**Site not updating?**
- Check Actions tab for build status
- Clear browser cache
- Verify GitHub Pages source setting

**Images not loading?**
- Use absolute URLs (https://)
- Check image sources are publicly accessible
- Consider uploading to your repo's assets folder

**Form not working?**
- Default uses mailto (opens email client)
- For production, integrate Formspree/Netlify Forms
- Test contact info is correct in constants.ts

## Need Help?
- Check GitHub Actions logs for build errors
- Verify all URLs in constants.ts are valid
- Test locally first: `npx vite preview --config vite.config.github.ts`
