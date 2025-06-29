#!/usr/bin/env node

// Simple build script for GitHub Pages deployment
import { execSync } from 'child_process';
import { copyFileSync, mkdirSync, existsSync } from 'fs';
import path from 'path';

console.log('🚀 Building for GitHub Pages...');

try {
  // Build the client using the GitHub Pages config
  console.log('📦 Building frontend...');
  execSync('npx vite build --config vite.config.github.ts', { stdio: 'inherit' });
  
  // Copy any additional static files if needed
  if (existsSync('client/public/CNAME')) {
    copyFileSync('client/public/CNAME', 'dist/CNAME');
  }
  
  console.log('✅ Build completed successfully!');
  console.log('📁 Output directory: ./dist');
  console.log('🌐 Ready for GitHub Pages deployment');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}