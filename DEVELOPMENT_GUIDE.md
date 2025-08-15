# Development Guide

## 🚀 Hot Reloading Setup

Your portfolio is configured with **Vite + Remix** which provides excellent hot reloading capabilities.

### **Start Development Server:**
```bash
npm run dev
```

This will start the development server on `http://localhost:7777` with hot reloading enabled.

## ✅ What Hot Reloading Does

- **Automatic Updates**: Changes to files will automatically refresh the browser
- **Fast Refresh**: React components update without losing state
- **CSS Updates**: Style changes apply instantly
- **Asset Updates**: Image and file changes are reflected immediately

## 📁 Files That Trigger Hot Reload

- **React Components** (`.jsx`, `.tsx`)
- **CSS Files** (`.css`, `.module.css`)
- **Configuration Files** (`.json`, `.js`)
- **Assets** (images, fonts, etc.)
- **MDX Files** (`.mdx`)

## 🔧 Development Workflow

1. **Start the server:**
   ```bash
   npm run dev
   ```

2. **Make changes** to any file in the project

3. **See updates instantly** in the browser (no need to restart)

4. **For major changes** (like new routes), the page might refresh automatically

## 🐛 Troubleshooting

### **If hot reloading isn't working:**

1. **Check the terminal** for any error messages
2. **Restart the dev server:**
   ```bash
   # Stop the server (Ctrl+C)
   npm run dev
   ```
3. **Clear browser cache** and refresh
4. **Check file permissions** - ensure files are writable

### **For Windows/WSL users:**
- Hot reloading should work automatically
- If issues persist, try running in WSL terminal instead of Windows terminal

## 📝 Best Practices

- **Keep the dev server running** while making changes
- **Use the browser dev tools** to see console errors
- **Check the terminal** for build errors
- **Save files** to trigger hot reload

## 🚀 Production Build

When ready to deploy:
```bash
npm run build
npm run deploy
```

## 🎯 Quick Commands

```bash
# Development with hot reloading
npm run dev

# Build for production
npm run build

# Deploy to Cloudflare
npm run deploy

# Storybook development
npm run dev:storybook
```

Your development environment is now optimized for the fastest possible development experience!
