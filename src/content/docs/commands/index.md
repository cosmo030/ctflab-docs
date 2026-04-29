---
title: Commands Overview
description: Complete guide to all CTFLab slash commands
---

import { Card, CardGrid } from '@astrojs/starlight/components';

CTFLab uses Discord **slash commands** for everything. Type `/` in any channel to see all available commands.

## Command Categories

<CardGrid stagger>
	<Card title="Public Commands" icon="user">
		Available to all members. Create CTFs, view challenges, submit flags, check your stats.
	</Card>
	<Card title="Admin Commands" icon="shield">
		Require `Manage Server` permission. Edit, delete, configure settings, manage events.
	</Card>
	<Card title="Leaderboard & Roles" icon="star">
		Manage leaderboards, top-3 roles, first-blood bonuses, and solver role assignments.
	</Card>
	<Card title="Events" icon="setting">
		Create and manage event workspaces with auto-created channels, roles, and dedicated scoreboards.
	</Card>
	<Card title="Analytics" icon="bars">
		View guild-wide statistics, hardest CTFs, top solvers, and per-player performance metrics.
	</Card>
	<Card title="Sandbox" icon="shield">
		Test and develop challenges in isolated environments before publishing to the guild.
	</Card>
</CardGrid>

## Quick Reference

All commands follow the pattern `/command-name [required] [optional]`.

### Most Used Commands

| Command | Purpose |
|---------|---------|
| `/create-ctf` | Start the interactive CTF builder |
| `/ctf-list` | Browse all active CTFs |
| `/ctf-info [query]` | View details for a specific CTF |
| `/ctf-leaderboard` | Post the guild leaderboard |
| `/ctf-analytics` | View activity dashboard (admin only) |
| `/ctf-stats [member]` | Check a player's performance stats |

## Permissions

Most commands require `Manage Server` (admin-level) permission. Public commands like `/create-ctf`, `/ctf-list`, and `/ctf-stats` are available to all members.

Some servers allow a dedicated **CTF Creator** role to use creator commands. Admins can enable this with `/allow-ctf`.

## Next Steps

- **[Public Commands](/ctflab-docs/commands/public/)** — Full reference for all member-accessible commands
- **[Admin Commands](/ctflab-docs/commands/admin/)** — Complete admin toolkit
- **[Leaderboard Commands](/ctflab-docs/commands/leaderboard/)** — Scoring and role management
- **[Event Commands](/ctflab-docs/commands/events/)** — Create managed event workspaces
