---
title: Analytics Dashboard
description: Deep insights into CTF activity and player performance
---

import { Card, CardGrid, Aside } from '@astrojs/starlight/components';

Understand your community's CTF engagement with real-time analytics. Track difficulty metrics, identify top performers, and monitor activity trends.

## Guild-Wide Analytics (`/ctf-analytics`)

Admin-only command that displays a comprehensive 3-tab dashboard:

### Tab 1: Overview

High-level metrics summarizing guild-wide CTF activity:

- **Total CTFs** — challenges created
- **Open CTFs** — active (non-archived) challenges
- **Total Solves** — successful flags submitted
- **Total Attempts** — sum of all attempts (failed + successful)
- **Unique Solvers** — members who solved at least one CTF
- **Avg Attempts per CTF** — average member attempts per challenge
- **Avg Attempts per Solve** — accuracy indicator (lower = easier)

**Example:**
```
Total CTFs: 42
Open CTFs: 38
Total Solves: 287
Total Attempts: 512
Unique Solvers: 28
Avg Attempts per CTF: 12.2
Avg Attempts per Solve: 1.8 (high quality challenges!)
```

---

### Tab 2: Hardest CTFs

Identifies the top 5 most difficult challenges:

- **Challenge Name** — with difficulty badge
- **Total Attempted** — members who tried it
- **Total Solved** — members who succeeded
- **Avg Attempts** — average tries before solving
- **Solve Rate %** — success percentage

**Use Cases:**
- **Detect too-hard challenges:** <25% solve rate might indicate frustration
- **Balance difficulty:** Adjust or provide hints for struggling members
- **Celebrate wins:** Reward solvers of extremely hard challenges

**Example:**
```
🥇 RSA Factorization (Insane) — 8 attempted, 1 solved, 14.2 avg attempts, 12.5% solve rate
🥈 Assembly Reversing (Hard) — 12 attempted, 4 solved, 8.4 avg attempts, 33% solve rate
🥉 SQLi Advanced (Hard) — 15 attempted, 10 solved, 3.2 avg attempts, 67% solve rate
```

---

### Tab 3: Top Solvers

Leaderboard of most active members:

- **Rank** — 🥇🥈🥉 medals for top 3, numbers for rest
- **Username** — @mention of the solver
- **Score** — points (if points mode enabled) or solve count
- **Attempts** — total attempts across all CTFs

**Example (points mode):**
```
🥇 @Alice — 2150 pts (18 solved, 41 attempts)
🥈 @Bob — 1850 pts (15 solved, 38 attempts)
🥉 @Charlie — 1250 pts (12 solved, 45 attempts)
```

**Example (solve-count mode):**
```
🥇 @Alice — 18 solved, 41 attempts
🥈 @Bob — 15 solved, 38 attempts
🥉 @Charlie — 12 solved, 45 attempts
```

---

## Player Stats (`/ctf-stats [member]`)

Public command to view detailed stats for any player (defaults to yourself):

Shows a comprehensive profile with:

- **User Avatar** — member's Discord profile picture
- **Solves** — CTFs completed
- **Attempts** — total flag submissions
- **Accuracy %** — (solves / attempts) × 100
- **First Bloods** — challenges solved first
- **Points** — (if points mode enabled)
- **Difficulty Breakdown** — solves by difficulty level
- **First Solve** — timestamp when they solved their first CTF
- **Last Solve** — timestamp of most recent solve

**Example Output:**
```
@Alice's CTF Stats

Solves: 18 / 28 attempted
Attempts: 41 total
Accuracy: 64.3%
First Bloods: 3
Points: 2150 pts

Difficulty Breakdown:
  Easy: 6 (600 pts)
  Medium: 7 (1000 pts)
  Hard: 4 (550 pts)
  Insane: 1 (0 pts, no solve)

First Solve: 2026-03-15 14:32 UTC
Last Solve: 2026-04-28 20:15 UTC
```

---

## Real-Time Updates

Both dashboards update **instantly** as members solve challenges:

- New solves appear on leaderboards immediately
- Hardest CTFs rankings recalculate dynamically
- Player stats refresh without page reload
- No delay — changes are live within seconds

---

## Excluding Banned Members

If you ban a member with `/ctf-ban`, they're automatically excluded from all analytics:

- ❌ Don't appear on leaderboards
- ❌ Don't count toward "Unique Solvers"
- ❌ Don't appear in "Top Solvers" rankings
- ✅ **Unbanning** restores them with full history intact

---

## Tips & Use Cases

### For Admins

<Card title="Monthly Highlights">
Check "Top Solvers" tab monthly to celebrate high performers in your community channel.
</Card>

<Card title="Difficulty Tuning">
If "Hardest CTFs" shows <15% solve rate, the challenge might be too hard. Consider adding a hint or adjusting difficulty.
</Card>

<Card title="Activity Trending">
Monitor "Unique Solvers" month-over-month to gauge if CTF engagement is growing or declining.
</Card>

<Card title="Quality Checks">
"Avg Attempts per Solve" > 5 might indicate unclear challenge descriptions. Review guidance text.
</Card>

### For Members

<Card title="Track Progress">
Run `/ctf-stats` regularly to watch your accuracy improve over time.
</Card>

<Card title="Find Weak Areas">
Check your Difficulty Breakdown — focus on difficulty levels where you have few solves.
</Card>

<Card title="Friendly Competition">
Compare `/ctf-stats @friend` vs your own stats. It's motivating and builds community!
</Card>

---

## Banned Members in Analytics

<Aside type="info">
When displaying analytics, banned members are completely excluded from calculations. This means:

- Leaderboards don't show them
- "Unique Solvers" count decreases if a top contributor is banned
- Their previous solves don't affect "Hardest CTFs" difficulty metrics
- They can be unbanned at any time with full history restored
</Aside>

---

## Reading the Metrics

### Avg Attempts Per Solve

**Interpretation:**
- **1.0–1.5** — Very easy, most members solve first try
- **1.5–3.0** — Balanced difficulty, reasonable challenge
- **3.0–7.0** — Hard, requires thought or tools
- **7.0+** — Extremely hard, expert-only

### Solve Rate %

**Interpretation:**
- **>80%** — Too easy, consider increasing difficulty
- **50–80%** — Good balance, healthy challenge
- **20–50%** — Difficult, intermediate skill level
- **<20%** — Very hard, possibly too hard (consider hints)

---

## Next Steps

- **[Commands Reference](/ctflab-docs/commands/analytics/)** — Full `/ctf-analytics` and `/ctf-stats` guide
- **[Leaderboard System](/ctflab-docs/features/leaderboard/)** — Understand point scoring
- **[Admin Setup](/ctflab-docs/admin/configuration/)** — Configuring your server
