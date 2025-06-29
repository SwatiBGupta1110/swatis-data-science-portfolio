# Portfolio Website

## Overview

This is a modern, responsive portfolio website built for a Data Scientist named Swati Sharma. The application showcases professional experience, projects, skills, and provides a contact form for potential employers or collaborators. It features a full-stack architecture with a React frontend and Express.js backend, utilizing PostgreSQL for data persistence through Drizzle ORM.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens
- **State Management**: React Query (TanStack Query) for server state
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful endpoints with JSON responses
- **Development**: Hot module replacement via Vite middleware integration

## Key Components

### Database Schema
The application uses two main database tables:
- **users**: Basic user authentication structure (id, username, password)
- **contact_messages**: Stores contact form submissions (id, firstName, lastName, email, subject, message, createdAt, isRead)

### API Endpoints
- `POST /api/contact`: Accepts contact form submissions with validation
- `GET /api/contact-messages`: Retrieves all contact messages (admin functionality)

### Frontend Sections
- **Hero**: Landing section with personal introduction and call-to-action
- **About**: Professional overview with statistics
- **Skills**: Technical and soft skills with progress bars
- **Projects**: Filterable project showcase with category tabs
- **Experience**: Timeline-based professional experience
- **Education**: Academic background and certifications
- **Blog**: Latest insights and articles (static content)
- **Contact**: Interactive contact form with server integration

### UI/UX Features
- Responsive design with mobile-first approach
- Smooth scroll animations using Intersection Observer API
- Custom scroll animations with visibility triggers
- Toast notifications for user feedback
- Loading states and error handling
- Accessibility-compliant components via Radix UI

## Data Flow

1. **Static Content**: Portfolio data (projects, experience, skills) is stored in constants and rendered client-side
2. **Contact Form**: Form submissions are validated client-side, sent to backend API, validated server-side with Zod, and stored in PostgreSQL
3. **Development**: Vite dev server serves the frontend while Express handles API routes
4. **Production**: Static assets are built and served by Express with API endpoints

## External Dependencies

- **Database**: Neon Database (serverless PostgreSQL)
- **UI Components**: Radix UI primitives for accessibility
- **Styling**: Tailwind CSS for utility-first styling
- **Validation**: Zod for runtime type checking and validation
- **Icons**: Lucide React for consistent iconography
- **Images**: Unsplash for placeholder portfolio images

## Deployment Strategy

The application is configured for deployment on Replit with:
- **Development**: `npm run dev` starts both frontend and backend in development mode
- **Build**: `npm run build` creates optimized production assets
- **Production**: `npm start` serves the built application
- **Database**: Drizzle Kit for schema management and migrations

The build process:
1. Vite builds the React frontend to `dist/public`
2. esbuild bundles the Express server to `dist/index.js`
3. Production server serves static files and API endpoints from single process

## Changelog

- June 29, 2025: Initial setup - Created comprehensive data scientist portfolio
- June 29, 2025: GitHub Pages deployment configuration - Added static build setup, contact form modifications for static deployment, and comprehensive deployment documentation

## User Preferences

Preferred communication style: Simple, everyday language.