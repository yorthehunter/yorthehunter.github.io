import adapter from "@sveltejs/adapter-static";
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true
		}),
	},

	preprocess: [
		vitePreprocess(),
    sveltePreprocess(),
		mdsvex({
      extensions: ['.md', '.svx'],
    }),
  ],
};

export default config;
