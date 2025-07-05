#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Custom build script starting...');
console.log('Node version:', process.version);

// Force install the missing Rollup native module
try {
  console.log('📦 Installing missing Rollup native module...');
  execSync('pnpm add @rollup/rollup-linux-x64-gnu', { stdio: 'inherit' });
  console.log('✅ Rollup native module installed successfully');
} catch (error) {
  console.log('⚠️ Could not install Rollup native module, continuing...');
}

// Run the actual build
try {
  console.log('🚀 Starting Vite build...');
  execSync('pnpm run build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
} 