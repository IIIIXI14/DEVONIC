#!/usr/bin/env node

import { build } from 'esbuild';
import { readdir, mkdir, copyFile } from 'fs/promises';
import { join } from 'path';

console.log('🔧 Starting pure esbuild build...');
console.log('Node version:', process.version);

const isDev = process.argv.includes('--mode') && process.argv.includes('development');

try {
  // Create dist directory
  await mkdir('dist', { recursive: true });
  
  // Copy static files
  console.log('📁 Copying static files...');
  await copyFile('index.html', 'dist/index.html');
  
  // Copy public directory
  try {
    const publicFiles = await readdir('public');
    for (const file of publicFiles) {
      await copyFile(join('public', file), join('dist', file));
    }
  } catch (error) {
    console.log('⚠️ No public directory found, continuing...');
  }

  // Build CSS
  console.log('🎨 Building CSS...');
  await build({
    entryPoints: ['src/index.css'],
    outfile: 'dist/assets/index.css',
    minify: !isDev,
    bundle: true,
    loader: { '.css': 'css' }
  });

  // Build JavaScript
  console.log('⚡ Building JavaScript...');
  await build({
    entryPoints: ['src/main.tsx'],
    outfile: 'dist/assets/index.js',
    minify: !isDev,
    bundle: true,
    sourcemap: isDev,
    format: 'esm',
    target: 'es2020',
    loader: { '.tsx': 'tsx', '.ts': 'ts' },
    define: {
      'process.env.NODE_ENV': isDev ? '"development"' : '"production"'
    },
    external: ['@rollup/rollup-linux-x64-gnu'] // Explicitly exclude problematic module
  });

  console.log('✅ Build completed successfully!');
  console.log('📦 Output files:');
  console.log('  - dist/index.html');
  console.log('  - dist/assets/index.css');
  console.log('  - dist/assets/index.js');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
} 