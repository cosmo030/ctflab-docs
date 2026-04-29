---
title: Leaderboard System
description: Automatic scoring and ranking with multiple modes
---

import { Card, CardGrid, Aside } from '@astrojs/starlight/components';

CTFLab's leaderboard system automatically tracks solver progress and updates rankings in real-time. Choose between **solve-count mode** (default) or **points-based mode** for competitive scoring.

## Leaderboard Modes

### Solve-Count Mode

Members are ranked by **total number of CTFs solved**, regardless of difficulty.

**Best for:**
- Introductory servers where everyone participates
- Casual CTF communities
- Beginners learning CTF fundamentals

**Example:**
```
🥇 Alice — 15 solved
🥈 Bob — 12 solved
🥉 Charlie — 10 solved
```

---

### Points-Based Mode

Members earn **points per difficulty** and are ranked by total points. Points are fully customizable.

**To enable:**
1. Run `/ctf-config-points`
2. Enter point values for each difficulty level
3. Leaderboard automatically switches to points mode

**Best for:**
- Competitive tournaments
- Skill-based CTF events
- Communities that reward challenge difficulty
- Balanced scoring where Hard challenges are worth more than Easy

**Example Configuration:**
```
Easy = 100 points
Medium = 250 points
Hard = 400 points
Insane = 600 points
```

**Resulting Leaderboard:**
```
🥇 Alice — 2150 pts (1 Insane + 3 Hard + 2 Medium)
🥈 Bob — 1850 pts (1 Insane + 2 Hard + 4 Medium)
🥉 Charlie — 1250 pts (2 Hard + 3 Medium + 2 Easy)
```

---

## Leaderboard Features

<CardGrid>
	<Card title="Real-Time Updates">
		Leaderboards refresh automatically as members solve challenges — no manual intervention needed.
	</Card>
	<Card title="Two Display Modes">
		Desktop (3-column) and Mobile (single-column) leaderboards for optimal viewing on any device.
	</Card>
	<Card title="Medals & Rankings">
		🥇 🥈 🥉 medals for top 3 with rank numbers for positions 4+.
	</Card>
	<Card title="Member Management">
		Remove users from leaderboards, revoke specific solves, or manually award achievements.
	</Card>
</CardGrid>

---

## Desktop vs. Mobile Leaderboards

Both leaderboards display the same data but optimized for different viewing contexts.

**Desktop Leaderboard:**
- 3-column grid layout
- Shows rank, user, and score/solves side-by-side
- Best for viewing on large screens
- Posted with `/ctf-leaderboard`

**Mobile Leaderboard:**
- Single-column layout
- Line-by-line format for small screens
- Easier to read on phones
- Posted with `/ctf-leaderboard-mobile`

### Creating Leaderboards

```
/ctf-leaderboard
→ Choose channel
→ Leaderboard posted and auto-updates

/ctf-leaderboard-mobile
→ Choose channel
→ Mobile version posted and auto-updates
```

---

## Managing Leaderboards

### Remove a Member

Use `/ctf-leaderboard-remove [member]` to:
- Clear all solves for a user
- Remove them from all leaderboard displays
- Recalculate rankings automatically

**Note:** This is irreversible — all their solve history is deleted.

---

### Revoke a Specific Solve

Use `/ctf-revoke-solve [member] [ctf_query]` to:
- Remove one specific CTF solve
- Keep their other solves intact
- Update leaderboard and role assignments
- Recalculate first-blood positions (if enabled)

**Example:**
```
/ctf-revoke-solve @alice 1
→ Removes Alice's solve for CTF ID 1
→ Leaderboard updates
→ Alice keeps all other solves
```

---

## Auto-Update Debouncing

When multiple users solve challenges within seconds of each other, the leaderboard updates are **debounced** (grouped) into a single refresh. This prevents excessive Discord API calls and improves performance.

**How it works:**
1. User A solves Challenge 1
2. `schedule_leaderboard_update()` triggered (5 second delay)
3. User B solves Challenge 2 (before 5 seconds elapse)
4. Delay resets to 5 more seconds
5. After final 5 seconds of no solves: **single update** with both A and B's progress

---

## Leaderboard + First-Blood Integration

If first-blood bonuses are enabled, the leaderboard calculation automatically includes bonus points for top 3 solvers of each challenge.

**Example (with first-blood at 50%, 30%, 15%):**
```
Challenge: Web Exploitation (400 points base)

1st Solver: 400 + 50% = 600 pts
2nd Solver: 400 + 30% = 520 pts
3rd Solver: 400 + 15% = 460 pts
4th+ Solver: 400 pts (no bonus)
```

---

## Best Practices

<Card title="Post Both Leaderboards">
Create both desktop and mobile leaderboards for accessibility. Many members use Discord mobile app.
</Card>

<Card title="Set Realistic Points">
If using points mode, ensure point values encourage participation across all difficulty levels. If Insane challenges are 10x harder than Easy, consider slightly lower multipliers.
</Card>

<Card title="Pin Leaderboard Messages">
Pin leaderboard messages in a dedicated channel so members can find them easily. Use `/ctf-leaderboard` to refresh without creating duplicates.
</Card>

<Card title="Combine with Top-3 Roles">
Enable `/enable-top-3` to automatically assign roles to top 3 solvers. Roles sync every time the leaderboard updates.
</Card>

---

## Next Steps

- **[First Blood Bonuses](/ctflab-docs/features/first-blood/)** — Reward speed with point multipliers
- **[Commands Reference](/ctflab-docs/commands/leaderboard/)** — Full slash command guide
- **[Analytics](/ctflab-docs/features/analytics/)** — View detailed performance metrics
