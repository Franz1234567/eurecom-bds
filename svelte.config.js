import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import preprocess from "svelte-preprocess";
import vercel from "@sveltejs/adapter-vercel";
// const dev = process.env.NODE_ENV === "development";
import adapter from '@sveltejs/adapter-netlify';



const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],

  kit: {
    adapter: adapter()
    // Enable below line to host the site on github pages
    // paths: {
    //   base: dev ? "" : "/eurecom-bds",
    // },
    // appDir: "app",
  },

  preprocess: [preprocess({}), mdsvex(mdsvexConfig)],
};

export default config;
