// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';


import vercel from '@astrojs/vercel/serverless';

import react from '@astrojs/react';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // output: 'server',
  // adapter: vercel({
  //   edgeMiddleware: true,
  // }),
  integrations: [tailwind(), react()],
  adapter: cloudflare({
    imageService: 'cloudflare'
  }),
  output: 'server',
});