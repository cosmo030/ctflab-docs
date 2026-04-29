import { defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';
import { glob } from 'astro/loaders';

const docs = defineCollection({
	loader: glob({ base: './src/content/docs', pattern: ['**/*.md', '**/*.mdx'] }),
	schema: docsSchema(),
});

export const collections = { docs };
