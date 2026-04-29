import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'CTFLab',
			description: 'CTF Competitions, But In Discord',
			logo: {
				src: './src/assets/logo.svg',
				replacesTitle: true,
			},
			social: [
				{ icon: 'github', href: 'https://github.com/cosmo030/ctf', label: 'GitHub' },
			],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ slug: 'getting-started/introduction' },
						{ slug: 'getting-started/installation' },
					],
				},
				{
					label: 'Commands',
					items: [
						{ slug: 'commands' },
						{ slug: 'commands/public' },
						{ slug: 'commands/admin' },
						{ slug: 'commands/events' },
						{ slug: 'commands/leaderboard' },
						{ slug: 'commands/analytics' },
					],
				},
				{
					label: 'Features',
					items: [
						{ slug: 'features/ctf-builder' },
						{ slug: 'features/events' },
						{ slug: 'features/leaderboard' },
						{ slug: 'features/first-blood' },
						{ slug: 'features/analytics' },
						{ slug: 'features/sandbox' },
					],
				},
				{
					label: 'Admin',
					items: [
						{ slug: 'admin/configuration' },
						{ slug: 'admin/roles' },
						{ slug: 'admin/audit-logs' },
					],
				},
				{
					label: 'Resources',
					items: [
						{ slug: 'resources/invite' },
						{ slug: 'resources/faq' },
						{ slug: 'resources/changelog' },
					],
				},
			],
		}),
	],
	site: 'https://cosmo030.github.io/ctflab-docs',
	base: '/ctflab-docs',
});
