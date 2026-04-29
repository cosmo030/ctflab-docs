import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'CTFLab',
			description: 'CTF Competitions, But In Discord',
			social: [
				{ icon: 'github', href: 'https://github.com/cosmo030/ctf', label: 'GitHub' },
			],
			customCss: ['./src/styles/custom.css'],
		}),
	],
	site: 'https://cosmo030.github.io/ctflab-docs',
	base: '/ctflab-docs',
});
