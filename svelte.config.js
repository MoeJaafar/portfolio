import { fileURLToPath } from 'url';
import { dirname } from 'path';
import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      fallback: 'index.html'
    })
    
    // other kit options
  },
  
  paths: {
    base: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
    assets: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  }, 
  
};

export default config;
