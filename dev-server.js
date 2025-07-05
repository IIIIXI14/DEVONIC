#!/usr/bin/env node

import { serve } from 'esbuild';
import { readFile } from 'fs/promises';

console.log('🚀 Starting development server...');

const result = await serve({
  servedir: '.',
  port: 5173,
  host: 'localhost'
}, {
  entryPoints: ['src/main.tsx'],
  bundle: true,
  format: 'esm',
  target: 'es2020',
  loader: { '.tsx': 'tsx', '.ts': 'ts' },
  define: {
    'process.env.NODE_ENV': '"development"'
  }
});

console.log('✅ Development server running at http://localhost:5173');
console.log('Press Ctrl+C to stop');

// Keep the server running
process.on('SIGINT', () => {
  result.stop();
  process.exit(0);
}); 