# GitHub Pages Deployment Setup for Data Scientist Portfolio

This portfolio is configured for easy deployment to GitHub Pages as a static site.

## Setup Instructions

### 1. Create GitHub Repository
1. Create a new repository on GitHub
2. Push your code to the repository

### 2. Configure GitHub Pages
1. Go to your repository Settings > Pages
2. Set Source to "GitHub Actions"

### 3. Create GitHub Actions Workflow
Create `.github/workflows/deploy.yml` in your repository:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build for GitHub Pages
      run: vite build --config vite.config.github.ts
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### 4. Build Commands
- For local development: `npm run dev`
- For GitHub Pages build: `vite build --config vite.config.github.ts`
- For local preview: `vite preview --config vite.config.github.ts`

## Features Modified for Static Deployment

### Contact Form
The contact form has been modified to work without a backend server:
- Uses Formspree, Netlify Forms, or mailto links
- Shows user-friendly messages for form submissions
- Maintains all styling and validation

### Project Structure
```
├── client/               # Frontend source code
├── vite.config.github.ts # GitHub Pages build configuration
├── dist/                 # Built files (auto-generated)
└── github-pages-setup.md # This documentation
```

## Important Notes

1. **Base Path**: The Vite config uses relative paths (`base: './'`) for GitHub Pages compatibility
2. **No Backend**: This is a static site - contact form submissions need external service
3. **Build Output**: All files are built to `./dist` directory
4. **Domain**: Your site will be available at `https://username.github.io/repository-name`

## Customization for Your Repository

1. Update the repository name in any absolute URLs
2. Configure custom domain if needed in GitHub Pages settings
3. Modify contact form to use your preferred form service (Formspree, Netlify, etc.)

Your portfolio will automatically rebuild and deploy when you push changes to the main branch!