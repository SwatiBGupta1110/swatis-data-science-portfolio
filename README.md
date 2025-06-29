# Data Scientist Portfolio - Swati Sharma

A modern, responsive portfolio website showcasing data science expertise, projects, and professional experience. Built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern Design**: Clean, professional layout with gradient backgrounds and smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Interactive Sections**:
  - Hero section with professional introduction
  - About section with key statistics
  - Skills showcase with animated progress bars
  - Project portfolio with category filtering
  - Professional experience timeline
  - Education and certifications
  - Blog insights section
  - Contact form with social media integration

## 🚀 GitHub Pages Deployment

### Quick Setup

1. **Fork/Clone this repository**
2. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Set Source to "GitHub Actions"
3. **Push to main branch** - the site will automatically build and deploy!

### Manual Build

```bash
# Install dependencies
npm install

# Build for GitHub Pages
npx vite build --config vite.config.github.ts

# Preview locally
npx vite preview --config vite.config.github.ts
```

### GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
    - run: npm ci
    - run: npx vite build --config vite.config.github.ts
    - uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## 🛠️ Customization

### Personal Information

Edit `client/src/lib/constants.ts` to update:
- Personal details (name, title, bio, contact info)
- Projects and their details
- Work experience
- Education and certifications
- Skills and expertise levels
- Blog posts and insights

### Contact Form

The contact form is configured for static deployment using mailto links. For production, consider integrating:
- **Formspree**: Add `action="https://formspree.io/f/YOUR_ID"` to the form
- **Netlify Forms**: Add `netlify` attribute to the form
- **EmailJS**: For client-side email sending

### Styling

- Colors and themes: `client/src/index.css`
- Component styles: Individual component files
- Tailwind configuration: `tailwind.config.ts`

### Images

Replace placeholder images in constants.ts with your own:
- Professional headshot
- Project screenshots
- Company logos
- Blog post images

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── lib/            # Utilities and constants
│   │   └── hooks/          # Custom React hooks
├── vite.config.github.ts   # GitHub Pages build configuration
├── build-static.js         # Build script
└── README.md              # This file
```

## 🎨 Design Inspiration

This portfolio incorporates the best features from leading data science portfolios:
- Modern gradient hero sections
- Interactive project showcases with filtering
- Professional timeline layouts
- Comprehensive skill displays
- Clean, accessible design patterns

## 📱 Responsive Design

- **Mobile-first**: Optimized for mobile devices
- **Tablet**: Adjusted layouts for medium screens
- **Desktop**: Full-featured layout with multi-column designs
- **Accessibility**: ARIA labels and keyboard navigation

## 🔧 Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Icons**: Lucide React
- **Animations**: CSS transitions and keyframes
- **Build**: Vite
- **Deployment**: GitHub Pages

## 📈 SEO Optimized

- Semantic HTML structure
- Meta tags for social sharing
- Fast loading times
- Accessible design
- Clean URLs

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test the build: `npx vite build --config vite.config.github.ts`
5. Submit a pull request

## 📄 License

MIT License - feel free to use this portfolio as a template for your own projects!

## 🌐 Live Demo

Your portfolio will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME`

---

**Built with ❤️ for the data science community**