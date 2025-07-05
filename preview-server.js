#!/usr/bin/env node

import { createServer } from 'http';
import { readFile } from 'fs/promises';
import { join } from 'path';

const port = 4173;

const server = createServer(async (req, res) => {
  try {
    let filePath = req.url === '/' ? '/index.html' : req.url;
    filePath = join('dist', filePath);
    
    const content = await readFile(filePath);
    const ext = filePath.split('.').pop();
    
    const mimeTypes = {
      'html': 'text/html',
      'css': 'text/css',
      'js': 'application/javascript',
      'json': 'application/json',
      'png': 'image/png',
      'jpg': 'image/jpeg',
      'jpeg': 'image/jpeg',
      'gif': 'image/gif',
      'svg': 'image/svg+xml'
    };
    
    res.setHeader('Content-Type', mimeTypes[ext] || 'text/plain');
    res.end(content);
  } catch (error) {
    res.statusCode = 404;
    res.end('File not found');
  }
});

server.listen(port, () => {
  console.log(`✅ Preview server running at http://localhost:${port}`);
  console.log('Press Ctrl+C to stop');
});

process.on('SIGINT', () => {
  server.close();
  process.exit(0);
}); 