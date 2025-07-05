#!/bin/bash

echo "🔧 Starting custom build script..."

# Force Node.js version check
echo "Node version: $(node -v)"

# Install pnpm globally if not available
if ! command -v pnpm &> /dev/null; then
    echo "📦 Installing pnpm globally..."
    npm install -g pnpm
fi

# Clean install with pnpm
echo "📦 Installing dependencies with pnpm..."
pnpm install --frozen-lockfile

# Force install the missing Rollup native module
echo "🔧 Installing missing Rollup native module..."
pnpm add @rollup/rollup-linux-x64-gnu --no-save || echo "⚠️ Could not install Rollup native module"

# Run the build
echo "🚀 Starting build..."
pnpm run build

echo "✅ Build completed!" 