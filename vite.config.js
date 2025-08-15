import {
  vitePlugin as remix,
} from '@remix-run/dev';
import { defineConfig } from 'vite';
import jsconfigPaths from 'vite-jsconfig-paths';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import rehypeImgSize from 'rehype-img-size';
import rehypeSlug from 'rehype-slug';
import rehypePrism from '@mapbox/rehype-prism';

export default defineConfig({
  assetsInclude: ['**/*.glb', '**/*.hdr', '**/*.glsl'],
  build: {
    assetsInlineLimit: 1024,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-framer';
            }
            if (id.includes('three') || id.includes('three-stdlib')) {
              return 'vendor-three';
            }
            if (id.includes('@mdx-js')) {
              return 'vendor-mdx';
            }
            // Other node_modules
            return 'vendor';
          }
          
          // Component chunks
          if (id.includes('/components/')) {
            if (id.includes('/earth/') || id.includes('/animate/')) {
              return 'components-3d';
            }
            if (id.includes('/theme-provider/') || id.includes('/button/') || id.includes('/section/')) {
              return 'components-core';
            }
            return 'components';
          }
          
          // Route chunks
          if (id.includes('/routes/')) {
            if (id.includes('/projects.')) {
              return 'routes-projects';
            }
            if (id.includes('/home/') || id.includes('/contact/') || id.includes('/experience/')) {
              return 'routes-main';
            }
            return 'routes';
          }
          
          // Utility chunks
          if (id.includes('/utils/') || id.includes('/config')) {
            return 'utils';
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  server: {
    port: 7777,
    host: true,
    watch: {
      usePolling: false,
      interval: 100,
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: ['three', 'three-stdlib']
  },
  plugins: [
    mdx({
      rehypePlugins: [[rehypeImgSize, { dir: 'public' }], rehypeSlug, rehypePrism],
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      providerImportSource: '@mdx-js/react',
    }),
    remix({
      routes(defineRoutes) {
        return defineRoutes(route => {
          route('/', 'routes/home/route.js', { index: true });
        });
      },
    }),
    jsconfigPaths(),
  ],
});
