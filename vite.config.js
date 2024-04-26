// vite.config.js excerpt:
import { defineConfig } from 'vite'
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

export default {
 build: {
   rollupOptions: {
     input: {
       main: './index.html',
       privacy: './privacy-policy.html',
       terms: './terms-and-conditions.html'
     }
   }
 }
}