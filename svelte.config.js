import { fileURLToPath } from 'url';
import { dirname } from 'path';
import adapter from 'svelte-adapter-github';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: 'docs',
      assets: 'docs',
      fallback: null,
      precompress: false,
      fallback: null,
      domain: '',
      jekyll: false
    })
  },
  
  
  paths: {
	base: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
	assets: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  }, 
  
};

export default config;
