# CTFLab Documentation

Official documentation for [CTFLab](https://github.com/cosmo030/ctf), a Discord bot for hosting CTF (Capture The Flag) competitions directly in Discord.

**Live Documentation:** https://cosmo030.github.io/ctflab-docs

---

## About CTFLab

CTFLab brings competitive CTF challenges to your Discord server with:
- Interactive challenge builder (no markdown or syntax needed)
- Real-time leaderboards (solve-count or points-based)
- Analytics dashboard with performance metrics
- First-blood bonuses for speed competitions
- Event workspaces for tournaments
- Admin audit logging for transparency

---

## Developing Locally

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Setup
```bash
# Clone this repository
git clone https://github.com/cosmo030/ctflab-docs.git
cd ctflab-docs

# Install dependencies
npm install

# Start dev server
npm run dev
```

Visit `http://localhost:4321` to preview the site with live hot-reload.

### Building for Production
```bash
npm run build
```

Output is generated in the `dist/` folder.

---

## Project Structure

```
src/
├── content/
│   └── docs/
│       ├── index.mdx              # Landing page
│       ├── getting-started/       # Setup guides
│       ├── commands/              # Slash command reference
│       ├── features/              # Feature deep-dives
│       ├── admin/                 # Admin setup guides
│       └── resources/             # FAQ, changelog, invite link
├── styles/
│   └── custom.css                 # Dark mode theme customization
└── components/
    └── CustomSocialIcons.astro    # Custom social links
```

---

## Content Guidelines

### Writing Docs
1. Use clear, concise language aimed at a general audience
2. Include code examples and command usage
3. Add callout boxes for tips, warnings, and notes
4. Link to related pages
5. Use markdown formatting for consistency

### File Naming
- Use kebab-case: `my-awesome-page.md`
- Frontmatter required: `title`, `description`

### Example Template
```markdown
---
title: Feature Name
description: Brief description of the feature
---

import { Card, Steps, Aside } from '@astrojs/starlight/components';

# Detailed content here

## Section
Content...

---

## Next Steps
- [Related Page](/path)
```

---

## Deployment

This site is automatically deployed to GitHub Pages on every push to `main` via GitHub Actions.

### Manual Deployment
1. Build: `npm run build`
2. Deploy the `dist/` folder to your GitHub Pages branch

---

## Editing Content

### Add a New Page
1. Create a `.md` or `.mdx` file in `src/content/docs/`
2. Add frontmatter: `title`, `description`
3. Write content using markdown + Astro components
4. Add to sidebar in `astro.config.mjs`
5. Commit and push

### Update Navigation
Edit the `sidebar` array in `astro.config.mjs` to reorganize or add new sections.

---

## Tech Stack

- **Astro** — Static site generator
- **Starlight** — Documentation theme
- **Markdown** — Content source
- **GitHub Pages** — Hosting
- **GitHub Actions** — CI/CD

---

## Contributing

Found a typo or want to improve the docs? 

1. Fork this repository
2. Create a branch: `git checkout -b improve/my-change`
3. Make your changes
4. Submit a pull request

---

## License

Documentation is provided under the same license as the CTFLab bot ([see LICENSE in main repo](https://github.com/cosmo030/ctf)).

---

## Links

- **CTFLab Bot:** https://github.com/cosmo030/ctf
- **Discord Support Server:** [Invite Link]
- **Top.gg Listing:** https://top.gg/bot/YOUR_BOT_ID
- **Documentation:** https://cosmo030.github.io/ctflab-docs

---

**Questions?** Open an issue on GitHub or join the support server!
