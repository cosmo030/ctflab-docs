---
title: Admin Commands
description: Commands for server administrators
---

import { Card, Aside } from '@astrojs/starlight/components';

These commands require `Manage Server` permission. Only admins can use them.

<Aside type="tip">
Admins can delegate CTF creation to non-admin users by running `/allow-ctf [role]`.
</Aside>

## Configuration Commands

### `/allow-ctf [role]`
Grant a non-admin role the ability to create CTFs.

**Usage:** `/allow-ctf @CTF Creator`

**What it does:**
- Members with this role can now use `/create-ctf`
- Useful for event organizers or community moderators
- Run `/allow-ctf-clear` to revoke

---

### `/ctf-success-channel [channel]`
Set where CTF solve announcements are posted.

**Usage:** `/ctf-success-channel #ctf-wins`

**What it does:**
- When a member solves a challenge, a celebration message is posted here
- Includes: solver name, challenge title, difficulty, attempts used
- Optional: first-blood notification if enabled

---

### `/ctf-answer-logs [channel]`
Set where all flag submissions (correct and incorrect) are logged.

**Usage:** `/ctf-answer-logs #audit`

**What it does:**
- Logs every flag submission with timestamp, user, challenge, and result
- Useful for tracking member activity and debugging

---

### `/admin-logs [channel]`
Enable admin audit logging for all CTF operations.

**Usage:** `/admin-logs #admin-audit`

**What it does:**
- Posts a persistent config embed in the channel
- Logs all admin actions: CTF creation, edits, deletions, configuration changes
- Color-coded by action type (green=create, orange=edit, red=delete, yellow=config change)
- Auto-updates on every action

---

## CTF Management Commands

### `/edit-ctf [query]`
Edit an existing CTF challenge.

**Usage:** `/edit-ctf 1` or `/edit-ctf "SQL Injection 101"`

**What it does:**
- Opens the builder with current values pre-filled
- Modify any field: title, guidance, difficulty, category, flag, etc.
- Originally attached files are preserved — edit other fields without re-uploading
- Publish changes

**Note:** Editing doesn't clear existing solver progress.

---

### `/ctf-manage [query]`
Archive or permanently delete a challenge.

**Usage:** `/ctf-manage 1`

**Options:**
- **Archive** — Hide from `/ctf-list` but preserve all solve history (reversible)
- **Delete** — Permanently remove challenge and all data (irreversible)

---

### `/ctf-repair [message_link]`
Fix a broken CTF embed or reattach the flag submission button.

**Usage:** `/ctf-repair https://discord.com/channels/123/456/789`

**What it does:**
- Reconstructs the embed if it's corrupted
- Re-attaches the "Submit Flag" button if it disappeared
- Useful after bot outages or migration issues

---

### `/admin-manual-add [member] [query] [attempts]`
Manually award a CTF solve to a user.

**Usage:** `/admin-manual-add @username 1 2`

**Parameters:**
- `[member]` — User to award the solve to
- `[query]` — CTF ID or title
- `[attempts]` — Number of attempts to record (default: 1)

**What it does:**
- Awards the solve (updates leaderboard, assigns roles, etc.)
- Useful for: leaderboard corrections, compensating for technical issues, retroactive credits
- Prevents duplicate awards (rejects if user already solved)
- Logs the action to admin audit log

---

## Leaderboard Commands

### `/ctf-leaderboard`
Post or refresh the guild-wide leaderboard.

**Usage:** `/ctf-leaderboard` then choose channel and board type

**Options:**
- Desktop mode (3-column layout)
- Mobile mode (single-column, better for phones)

**What it shows:**
- Top 10 solvers ranked by solves or points
- Medals: 🥇 🥈 🥉 for top 3
- Auto-updates in real-time as members solve challenges

---

### `/ctf-leaderboard-mobile`
Post a mobile-friendly leaderboard variant.

**Usage:** `/ctf-leaderboard-mobile`

---

### `/ctf-leaderboard-remove [member]`
Remove a user from the leaderboard and clear all their solve history.

**Usage:** `/ctf-leaderboard-remove @username`

**Warning:** This is irreversible. All solves for that user are permanently deleted.

---

### `/ctf-revoke-solve [member] [query]`
Remove a specific CTF solve from a user (preserves other solves).

**Usage:** `/ctf-revoke-solve @username 1`

**What it does:**
- Removes only that challenge's solve
- Preserves attempt count and other solves
- Automatically recalculates first-blood positions
- Updates leaderboard and role assignments

---

## Difficulty & Points

### `/ctf-config-difficulty`
Define custom difficulty levels for your server.

**Usage:** `/ctf-config-difficulty` then follow the prompts

**What it does:**
- Create custom labels (e.g., "Beginner", "Expert", "Impossible")
- Set colors for each difficulty
- These appear in the CTF builder dropdown

---

### `/ctf-config-points`
Assign point values to each difficulty level.

**Usage:** `/ctf-config-points` then enter points

**Example:**
```
Easy: 100 points
Medium: 250 points
Hard: 400 points
Insane: 600 points
```

**Effect:**
- Enables **points mode** on the leaderboard
- Members now earn points instead of just solve counts
- Required for first-blood bonuses to work

---

## Next Steps

- **[Leaderboard & Roles Commands](/ctflab-docs/commands/leaderboard/)** — Scoring and role management
- **[Events](/ctflab-docs/commands/events/)** — Create managed event workspaces
- **[Admin Setup Guide](/ctflab-docs/admin/configuration/)** — Best practices
