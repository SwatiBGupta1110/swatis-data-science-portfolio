# Developer Guide: Code Structure & Advanced Customization

## Table of Contents
1. [Code Architecture Overview](#code-architecture-overview)
2. [Adding New Sections](#adding-new-sections)
3. [Project Images & Media Management](#project-images--media-management)
4. [Linking Projects, Blogs & External Content](#linking-projects-blogs--external-content)
5. [Component Customization](#component-customization)
6. [Styling & Theming](#styling--theming)
7. [Advanced Features](#advanced-features)

---

## Code Architecture Overview

### Project Structure
```
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   └── navigation.tsx       # Top navigation bar
│   │   │   ├── sections/
│   │   │   │   ├── hero.tsx            # Landing section
│   │   │   │   ├── about.tsx           # About section
│   │   │   │   ├── skills.tsx          # Skills showcase
│   │   │   │   ├── projects.tsx        # Project portfolio
│   │   │   │   ├── experience.tsx      # Work timeline
│   │   │   │   ├── education.tsx       # Education section
│   │   │   │   ├── blog.tsx            # Blog posts
│   │   │   │   ├── contact.tsx         # Contact form
│   │   │   │   └── footer.tsx          # Footer section
│   │   │   └── ui/                     # Reusable UI components
│   │   ├── lib/
│   │   │   ├── constants.ts            # ALL your content data
│   │   │   ├── types.ts                # TypeScript definitions
│   │   │   └── utils.ts                # Helper functions
│   │   ├── pages/
│   │   │   └── home.tsx                # Main page layout
│   │   └── App.tsx                     # App root component
│   └── index.html                      # HTML template
```

### Data Flow
1. **Content** → Stored in `lib/constants.ts`
2. **Types** → Defined in `lib/types.ts`
3. **Components** → Read data from constants and render UI
4. **Styling** → Tailwind CSS classes + custom CSS in `index.css`

---

## Adding New Sections

### Step 1: Create the Section Component

Create a new file in `client/src/components/sections/`:

```typescript
// client/src/components/sections/achievements.tsx
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  organization: string;
  icon?: string;
}

const Achievements = () => {
  const { ref, isVisible } = useScrollAnimation();

  // This would come from your constants.ts file
  const achievements: Achievement[] = [
    {
      id: '1',
      title: 'Best Data Science Project Award',
      description: 'Recognized for innovative ML model that improved customer retention by 25%',
      date: '2023',
      organization: 'Data Science Conference 2023'
    },
    // Add more achievements...
  ];

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Achievements
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Recognition and milestones in my data science journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                    {achievement.organization} • {achievement.date}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
```

### Step 2: Add Data to Constants

Update `client/src/lib/constants.ts`:

```typescript
// Add this interface to types.ts first
export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  organization: string;
  icon?: string;
}

// Then add to constants.ts
export const ACHIEVEMENTS: Achievement[] = [
  {
    id: '1',
    title: 'Your Achievement Title',
    description: 'Description of your achievement and its impact...',
    date: '2023',
    organization: 'Organization Name'
  },
  // Add more achievements...
];
```

### Step 3: Add to Main Page

Update `client/src/pages/home.tsx`:

```typescript
import Achievements from '@/components/sections/achievements';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />  {/* Add your new section here */}
      <Education />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};
```

### Step 4: Add Navigation Link

Update `client/src/components/layout/navigation.tsx`:

```typescript
const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Achievements', href: '#achievements' }, // Add this line
  { name: 'Education', href: '#education' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];
```

---

## Project Images & Media Management

### Method 1: GitHub Repository Assets

1. **Create assets folder** in your repository:
```
your-repo/
├── assets/
│   ├── images/
│   │   ├── projects/
│   │   │   ├── project1-screenshot.jpg
│   │   │   ├── project2-dashboard.png
│   │   │   └── project3-visualization.jpg
│   │   ├── profile/
│   │   │   └── professional-headshot.jpg
│   │   └── blog/
│   │       ├── article1-cover.jpg
│   │       └── article2-cover.jpg
```

2. **Upload images** through GitHub web interface:
   - Go to your repository
   - Click "Add file" → "Upload files"
   - Drag and drop your images
   - Commit the changes

3. **Use in constants.ts**:
```typescript
export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Customer Churn Prediction Model',
    description: 'ML model that predicts customer churn with 92% accuracy...',
    category: 'ml',
    technologies: ['Python', 'Scikit-learn', 'Pandas'],
    image: 'https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/assets/images/projects/churn-model-dashboard.jpg',
    githubUrl: 'https://github.com/YOUR_USERNAME/churn-prediction',
    featured: true
  }
];
```

### Method 2: External Image Hosting

**Imgur (Free & Easy):**
1. Go to https://imgur.com
2. Click "New post" → Upload images
3. Right-click image → "Copy image address"
4. Use the direct link (ends with .jpg, .png, etc.)

**Cloudinary (Professional):**
1. Sign up at https://cloudinary.com
2. Upload images to Media Library
3. Copy the delivery URL
4. Use in your constants

### Method 3: Unsplash for Placeholder Images

For temporary/placeholder images:
```typescript
image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
```

### Image Optimization Tips

1. **Recommended Sizes:**
   - Profile photo: 400x400px (square)
   - Project screenshots: 800x600px or 1200x800px
   - Blog covers: 1200x630px (social media optimized)

2. **File Formats:**
   - Use **JPG** for photos and complex images
   - Use **PNG** for logos, icons, or images with transparency
   - Use **WebP** for best compression (modern browsers)

3. **Compression:**
   - Keep file sizes under 500KB for fast loading
   - Use tools like TinyPNG or ImageOptim

---

## Linking Projects, Blogs & External Content

### Project Links Setup

```typescript
export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Sentiment Analysis Dashboard',
    description: 'Real-time Twitter sentiment analysis using NLP...',
    category: 'nlp',
    technologies: ['Python', 'NLTK', 'Streamlit', 'MongoDB'],
    image: 'https://your-image-url.com/sentiment-dashboard.jpg',
    
    // GitHub repository (always include this)
    githubUrl: 'https://github.com/yourusername/sentiment-analysis',
    
    // Live demo (if deployed)
    liveUrl: 'https://sentiment-app.herokuapp.com',
    
    // Additional links (you can add custom properties)
    demoVideo: 'https://youtube.com/watch?v=your-demo-video',
    documentation: 'https://yourusername.github.io/sentiment-analysis-docs',
    
    featured: true
  }
];
```

### Blog Post Links

```typescript
export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Building Production-Ready ML Models',
    excerpt: 'A comprehensive guide to deploying machine learning models...',
    date: '2024-01-15',
    image: 'https://your-blog-cover-image.jpg',
    readTime: '8 min read',
    tags: ['Machine Learning', 'MLOps', 'Python'],
    
    // Direct link to your article
    url: 'https://medium.com/@yourusername/building-production-ml-models-abc123',
    
    // Alternative platforms
    // url: 'https://dev.to/yourusername/your-article-title',
    // url: 'https://yourblog.com/ml-models-guide',
    // url: 'https://linkedin.com/pulse/your-article-title-yourname',
  }
];
```

### Social Media & Professional Links

```typescript
export const PERSONAL_INFO = {
  name: 'Your Name',
  title: 'Senior Data Scientist',
  email: 'you@email.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  
  // Professional profiles
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername',
  twitter: 'https://twitter.com/yourusername',
  
  // Portfolio links
  resume: 'https://drive.google.com/file/d/your-resume-id/view',
  portfolio: 'https://yourusername.github.io/portfolio',
  
  // Additional professional links
  kaggle: 'https://kaggle.com/yourusername',
  scholar: 'https://scholar.google.com/citations?user=yourID',
  orcid: 'https://orcid.org/0000-0000-0000-0000',
  
  bio: 'Your professional bio...',
  image: 'https://your-profile-image-url.jpg'
};
```

---

## Component Customization

### Adding Interactive Features

**Example: Add a "View Demo" button to projects**

Update `client/src/components/sections/projects.tsx`:

```typescript
// Find the project card section and add:
<div className="flex gap-4 mt-6">
  <a
    href={project.githubUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
  >
    <Github className="h-4 w-4" />
    Code
  </a>
  
  {project.liveUrl && (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
    >
      <ExternalLink className="h-4 w-4" />
      Live Demo
    </a>
  )}
  
  {project.demoVideo && (
    <a
      href={project.demoVideo}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
    >
      <Play className="h-4 w-4" />
      Demo Video
    </a>
  )}
</div>
```

### Adding New Project Categories

1. **Update types** in `client/src/lib/types.ts`:
```typescript
export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'ml' | 'nlp' | 'cv' | 'analytics' | 'deployment' | 'research'; // Add new categories
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}
```

2. **Update project filter** in `client/src/components/sections/projects.tsx`:
```typescript
const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'ml', name: 'Machine Learning' },
  { id: 'nlp', name: 'Natural Language Processing' },
  { id: 'cv', name: 'Computer Vision' },
  { id: 'analytics', name: 'Data Analytics' },
  { id: 'deployment', name: 'ML Deployment' }, // New category
  { id: 'research', name: 'Research' }, // New category
];
```

---

## Styling & Theming

### Custom Color Schemes

Update `client/src/index.css`:

```css
:root {
  /* Primary colors - Your brand colors */
  --primary: 220 90% 56%;      /* Blue */
  --primary-foreground: 210 40% 98%;
  
  /* Secondary colors */
  --secondary: 220 14.3% 95.9%;
  --secondary-foreground: 220.9 39.3% 11%;
  
  /* Accent colors - For highlights */
  --accent: 220 14.3% 95.9%;
  --accent-foreground: 220.9 39.3% 11%;
  
  /* Custom data science theme colors */
  --ds-blue: 220 90% 56%;
  --ds-green: 142 69% 58%;
  --ds-purple: 262 83% 58%;
  --ds-orange: 25 95% 53%;
}

/* Custom gradients for data science theme */
.gradient-ds-primary {
  background: linear-gradient(135deg, hsl(var(--ds-blue)), hsl(var(--ds-purple)));
}

.gradient-ds-secondary {
  background: linear-gradient(135deg, hsl(var(--ds-green)), hsl(var(--ds-blue)));
}
```

### Custom Component Styles

```css
/* Custom skill bar colors */
.skill-python { @apply bg-blue-500; }
.skill-r { @apply bg-purple-500; }
.skill-sql { @apply bg-green-500; }
.skill-tensorflow { @apply bg-orange-500; }

/* Custom project category badges */
.category-ml { @apply bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200; }
.category-nlp { @apply bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200; }
.category-cv { @apply bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200; }
.category-analytics { @apply bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200; }
```

---

## Advanced Features

### Adding Image Galleries for Projects

```typescript
interface ProjectImage {
  url: string;
  caption: string;
  type: 'screenshot' | 'diagram' | 'result';
}

interface Project {
  // ... existing properties
  images?: ProjectImage[]; // Multiple images
  mainImage: string; // Main display image
}

// Usage in constants.ts
export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Customer Segmentation Analysis',
    mainImage: 'https://your-main-image.jpg',
    images: [
      {
        url: 'https://your-image1.jpg',
        caption: 'Customer segments visualization',
        type: 'result'
      },
      {
        url: 'https://your-image2.jpg',
        caption: 'Model architecture diagram',
        type: 'diagram'
      },
      {
        url: 'https://your-image3.jpg',
        caption: 'Dashboard interface',
        type: 'screenshot'
      }
    ],
    // ... other properties
  }
];
```

### Adding Project Metrics

```typescript
interface ProjectMetric {
  name: string;
  value: string;
  description: string;
}

interface Project {
  // ... existing properties
  metrics?: ProjectMetric[];
}

// Usage
export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Fraud Detection System',
    metrics: [
      {
        name: 'Accuracy',
        value: '94.2%',
        description: 'Model accuracy on test set'
      },
      {
        name: 'False Positive Rate',
        value: '2.1%',
        description: 'Legitimate transactions flagged as fraud'
      },
      {
        name: 'Cost Savings',
        value: '$2.3M',
        description: 'Annual fraud prevented'
      }
    ],
    // ... other properties
  }
];
```

### Adding Certifications Section

```typescript
interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
  image?: string; // Certificate badge/logo
}

export const CERTIFICATIONS: Certification[] = [
  {
    id: '1',
    name: 'AWS Certified Machine Learning - Specialty',
    issuer: 'Amazon Web Services',
    date: '2023-06',
    credentialId: 'AWS-MLS-12345',
    url: 'https://aws.amazon.com/certification/verify/12345',
    image: 'https://your-cert-badge.png'
  }
];
```

---

## Testing Your Changes

### Local Testing
```bash
# Start development server
npm run dev

# Build for production
npx vite build --config vite.config.github.ts

# Preview production build
npx vite preview --config vite.config.github.ts
```

### GitHub Testing
1. Push changes to your repository
2. Check Actions tab for build status
3. Visit your live site after successful deployment
4. Test all links and images

---

## Troubleshooting Common Issues

### Images Not Loading
- Verify image URLs are publicly accessible
- Check for HTTPS vs HTTP issues
- Test URLs in browser before adding to constants
- Ensure images are properly sized and compressed

### Links Not Working
- Test external links in new browser tab
- Check for typos in URLs
- Verify GitHub repository URLs are correct
- Ensure blog post URLs are direct links, not redirects

### Build Failures
- Check console for TypeScript errors
- Verify all imports are correct
- Ensure all required properties are provided in data objects
- Check Actions tab in GitHub for detailed error messages

---

This guide gives you complete control over customizing and extending your data science portfolio. Each section can be modified independently, and you can add as many new sections, projects, and features as needed to showcase your unique expertise.