import adapter from '@sveltejs/adapter-static';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter()// specify adapter
   
  },
  adapter: adapter({
	fallback: 'fallback.html',
	strict: false
  }),

  paths: {
	base: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
	assets: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  }, 
  
};

export default config;
