import react from '@vitejs/plugin-react';
import { certificateFor } from 'devcert';
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, './src/pages');
  const { key, cert } = await certificateFor('localhost');

  return {
    base: './',
    root: resolve(__dirname, 'src/pages'),
    publicDir: resolve(__dirname, 'public'),
    build: {
      outDir: resolve(__dirname, 'dist'),
      emptyOutDir: true,
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'src/pages/index.html'),
        },
        output: {
          assetFileNames: (assetInfo) => {
            let extType = assetInfo.name.split('.').at(1);
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
              extType = 'img';
            }
            return `${extType}/[name][extname]`;
          },
        },
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          math: 'always',
          globalVars: {
            mainColor: 'red',
          },
          rootpath: 'https://www.esteelauder.com.tw/media/export/cms/2403S+ANR/',
        },
      },
    },
    plugins: [
      react(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            title: env.VITE_TITLE,
            description: env.VITE_SUBSCRIPTION,
            url: env.VITE_URL,
            facebookID: env.VITE_FACEBOOK_ID,
          },
        },
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    server: {
      open: true,
      port: 5173,
      https: { key, cert },
      proxy: {
        '/api': 'http://localhost:3000',
      },
    },
  };
});
