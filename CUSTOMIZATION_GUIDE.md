# Portfolio Customization Guide

## Overview
This guide shows you exactly which files to edit to customize your data science portfolio with your personal information, projects, and content.

## 📋 Quick Customization Checklist

### ✅ Essential Files to Edit

1. **`client/src/lib/constants.ts`** - Main content file (ALL your information)
2. **`client/index.html`** - Page title and description
3. **`vite.config.github.ts`** - Repository name for deployment

### ✅ Optional Files (Advanced Customization)

4. **`client/src/index.css`** - Colors and styling
5. **`README.md`** - Repository description

---

## 🔧 File-by-File Customization Guide

### 1. **`client/src/lib/constants.ts`** - YOUR MAIN CONTENT FILE

**This is the most important file** - it contains ALL your personal information:

#### **Personal Information Section**
```typescript
export const PERSONAL_INFO = {
  name: 'Your Full Name',
  title: 'Your Professional Title (e.g., Senior Data Scientist)',
  email: 'your.email@domain.com',
  phone: '+1 (555) 123-4567',
  location: 'Your City, State/Country',
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername',
  bio: 'Write 2-3 sentences about your data science background and expertise...',
  image: 'https://your-profile-image-url.com/photo.jpg', // Add your professional photo URL
  resume: 'https://your-resume-url.com/resume.pdf' // Link to your resume
};
```

#### **Your Projects Section**
```typescript
export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Your Project Name',
    description: 'Detailed description of what this project does and its impact...',
    category: 'ml', // Options: 'ml', 'nlp', 'cv', 'analytics' 
    technologies: ['Python', 'TensorFlow', 'AWS'], // Your tech stack
    image: 'https://your-project-image.com/screenshot.jpg',
    githubUrl: 'https://github.com/yourusername/project-repo',
    liveUrl: 'https://your-live-demo.com', // Optional
    featured: true // Set to true for your best projects
  },
  // Add more projects...
];
```

#### **Work Experience Section**
```typescript
export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    title: 'Your Job Title',
    company: 'Company Name',
    location: 'City, State',
    startDate: '2020-01',
    endDate: 'Present', // or '2023-12' for past roles
    description: 'Describe your key achievements and responsibilities...',
    technologies: ['Python', 'SQL', 'Tableau'] // Tech you used in this role
  },
  // Add more positions...
];
```

#### **Education Section**
```typescript
export const EDUCATION: Education[] = [
  {
    id: '1',
    degree: 'Master of Science in Data Science',
    institution: 'University Name',
    location: 'City, State',
    startDate: '2018-09',
    endDate: '2020-05',
    gpa: '3.8/4.0', // Optional
    description: 'Relevant coursework, thesis, or achievements...' // Optional
  },
  // Add more degrees...
];
```

#### **Skills Section**
```typescript
export const SKILLS: Skill[] = [
  { name: 'Python', level: 95, category: 'technical' },
  { name: 'Machine Learning', level: 90, category: 'technical' },
  { name: 'SQL', level: 85, category: 'technical' },
  { name: 'TensorFlow', level: 80, category: 'technical' },
  // Add your skills with proficiency levels (0-100)
];
```

#### **Blog Posts Section**
```typescript
export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Your Article Title',
    excerpt: 'Brief summary of your article content...',
    date: '2024-01-15',
    image: 'https://your-article-image.com/image.jpg',
    readTime: '5 min read',
    tags: ['Machine Learning', 'Python', 'Data Science'],
    url: 'https://medium.com/@yourusername/your-article' // Link to your article
  },
  // Add more blog posts...
];
```

#### **Career Statistics**
```typescript
export const STATS = {
  experience: '5+', // Years of experience
  projects: '50+', // Number of projects
  technologies: '20+', // Technologies mastered
  certifications: '8' // Number of certifications
};
```

### 2. **`client/index.html`** - Page Title & SEO

Update the page title and description:

```html
<title>Your Name - Data Scientist Portfolio</title>
<meta name="description" content="Your professional summary and expertise areas..." />
```

### 3. **`vite.config.github.ts`** - Repository Configuration

Update the base path to match your GitHub repository name:

```typescript
base: '/your-repository-name/',  // Replace with your actual repo name
```

### 4. **`client/src/index.css`** - Colors & Styling (Optional)

Customize your color scheme by updating CSS variables:

```css
:root {
  --primary: 210 40% 98%;     /* Main brand color */
  --secondary: 210 40% 96%;   /* Secondary color */
  --accent: 210 40% 92%;      /* Accent color */
  /* Update other colors as needed */
}
```

---

## 🖼️ Adding Your Profile Picture

### Option 1: Upload to Image Hosting Service
1. Upload your professional photo to:
   - **Imgur** (free): https://imgur.com
   - **Cloudinary** (free tier): https://cloudinary.com
   - **GitHub** (in your repository): Upload to a folder like `assets/images/`

2. Copy the direct image URL

3. Update in `constants.ts`:
```typescript
image: 'https://your-image-url.com/profile.jpg',
```

### Option 2: Use LinkedIn Profile Picture
1. Go to your LinkedIn profile
2. Right-click on your profile picture
3. Select "Copy image address"
4. Use that URL in `constants.ts`

---

## 📝 Adding Your Projects

### For Each Project, Include:

1. **Project Title** - Clear, descriptive name
2. **Description** - What problem it solves and the impact
3. **Category** - Choose from: `'ml'`, `'nlp'`, `'cv'`, `'analytics'`
4. **Technologies** - List all tools, languages, frameworks used
5. **GitHub URL** - Link to your code repository
6. **Live Demo URL** - If available (optional)
7. **Project Image** - Screenshot of your project or visualization

### Project Image Tips:
- Use screenshots of your dashboards, models, or visualizations
- Upload to the same image hosting service as your profile picture
- Recommended size: 800x600 pixels or similar aspect ratio

---

## 📖 Adding Blog Posts

### Include Your Data Science Articles:

1. **Medium Articles** - Copy your Medium post URLs
2. **Personal Blog** - Link to your blog posts
3. **LinkedIn Articles** - Include professional posts
4. **Technical Publications** - Academic papers or research

### For Each Blog Post:
- **Title** - Exact title of your article
- **Excerpt** - 1-2 sentence summary
- **Date** - Publication date (YYYY-MM-DD format)
- **Tags** - Relevant topics (Machine Learning, Python, etc.)
- **URL** - Direct link to the article
- **Read Time** - Estimated reading time

---

## 🚀 Testing Your Changes

### After Making Changes:

1. **Test Locally** (if you have the code locally):
```bash
npm run dev
```

2. **Test on GitHub**:
   - Push your changes to GitHub
   - Wait for the Actions to build (2-3 minutes)
   - Visit your live site: `https://yourusername.github.io/your-repo-name`

---

## 🔧 Common Issues & Solutions

### **Images Not Loading**
- Make sure image URLs are publicly accessible
- Test the image URL in a browser first
- Use HTTPS URLs, not HTTP

### **Site Not Updating**
- Check the Actions tab for any build errors
- Clear your browser cache
- Wait a few minutes for GitHub Pages to update

### **Deployment Fails**
- Verify your repository name matches the `base` in `vite.config.github.ts`
- Check that GitHub Pages is enabled in repository settings
- Ensure the GitHub Actions workflow file exists

---

## 📋 Customization Checklist

- [ ] Updated personal information in `constants.ts`
- [ ] Added your professional profile picture
- [ ] Replaced sample projects with your actual projects
- [ ] Updated work experience and achievements
- [ ] Added your education and certifications
- [ ] Updated skills with your proficiency levels
- [ ] Added your blog posts and articles
- [ ] Updated page title in `index.html`
- [ ] Set correct repository name in `vite.config.github.ts`
- [ ] Tested the live site

---

## 🎯 Pro Tips

1. **Keep URLs Working** - Test all external links before publishing
2. **Professional Photos** - Use high-quality, professional headshots
3. **Quantify Achievements** - Include specific numbers and results in project descriptions
4. **Update Regularly** - Add new projects and blog posts as you create them
5. **Mobile-Friendly** - Your portfolio automatically works on mobile devices

---

**Your customized portfolio will showcase your unique data science expertise and help advance your career!**