---
title: Leaderboard & Roles
description: Commands for scoring, rankings, and role management
---

import { Aside } from '@astrojs/starlight/components';

Configure how your guild ranks CTF solvers and manage automatic role assignments.

## Scoring Modes

CTFLab supports two leaderboard modes:

### 1. Solve-Count Mode (Default)
Members are ranked by **total number of CTFs solved**, regardless of difficulty.

**Example:**
```
Rank 1: Alice — 12 solved
Rank 2: Bob — 10 solved
Rank 3: Charlie — 8 solved
```

---

### 2. Points Mode
Members earn **points per difficulty** and are ranked by total points.

**To enable:**
1. Run `/ctf-config-points`
2. Enter point values for each difficulty
3. Leaderboard automatically switches to points mode

**Example (with points assigned):**
```
Easy = 100 pts
Medium = 250 pts
Hard = 400 pts
Insane = 600 pts

Rank 1: Alice — 1850 pts (1 Insane + 2 Hard + 1 Medium)
Rank 2: Bob — 1600 pts (1 Insane + 3 Hard)
Rank 3: Charlie — 1050 pts (2 Hard + 2 Medium)
```

---

## First-Blood Bonuses

<Aside type="tip">
First-blood bonuses reward the fastest solvers. Only works in points mode.
</Aside>

### `/enable-first-blood`
Activate point bonuses for the first three solvers of each challenge.

**Usage:** `/enable-first-blood` then configure percentages

**Configuration:**
- **1st Blood** — bonus percentage on top of base points (default: 50%)
- **2nd Blood** — bonus percentage (default: 30%)
- **3rd Blood** — bonus percentage (default: 15%)

**Example (Easy challenge = 100 pts base):**
```
1st Solver: 100 + 50% = 150 pts
2nd Solver: 100 + 30% = 130 pts
3rd Solver: 100 + 15% = 115 pts
4th+ Solver: 100 pts (no bonus)
```

**Notification:**
- Solvers see their blood rank in the success channel: `[First Blood]`, `[Second Blood]`, `[Third Blood]`
- Bonus percentage displayed in their private success message

**Dynamic Recalculation:**
If a first-blood solver is revoked (via `/ctf-revoke-solve`), positions automatically shift:
```
Before: 1st (user1), 2nd (user2), 3rd (user3)
Revoke user1's solve
After:  1st (user2), 2nd (user3)
        user2 & user3 points recalculated with updated bonuses
```

---

### `/disable-first-blood`
Turn off first-blood bonuses.

**Usage:** `/disable-first-blood`

---

## Top-3 Roles

Automatically assign roles to the top 3 solvers (or custom role names and colors).

### `/enable-top-3`
Activate top-3 role assignment.

**Usage:** `/enable-top-3` then:
1. Set custom role names (e.g., "🥇 Champion", "🥈 Runner-Up", "🥉 Third Place")
2. Set custom colors for each role
3. Save

**What it does:**
- 🥇 **1st Place Role** — awarded to the top solver
- 🥈 **2nd Place Role** — awarded to the 2nd top solver
- 🥉 **3rd Place Role** — awarded to the 3rd top solver
- Auto-updates every time the leaderboard changes
- Roles are removed from displaced members automatically

**Example:**
```
User A is 1st place → gets "🥇 Champion" role
User B moves to 1st place → gets "🥇 Champion" role, User A's role removed
```

---

### `/disable-top-3`
Turn off top-3 role assignment.

**Usage:** `/disable-top-3`

---

## Per-Challenge Solver Roles

Optionally assign roles to everyone who solves a specific challenge.

### `/enable-ctf-roles`
Enable per-challenge solver role assignment.

**Usage:** `/enable-ctf-roles`

**What it does:**
- When you create a CTF, a solver role is automatically created (e.g., "CTF_001_Solvers")
- Everyone who solves that challenge gets the role
- Useful for permissions or role-based channels (e.g., `#winners-lounge`)

---

### `/disable-ctf-roles`
Turn off per-challenge solver roles.

**Usage:** `/disable-ctf-roles`

---

## Creator Controls

### `/enable-creator-solves`
Allow CTF creators to solve their own challenges.

**Usage:** `/enable-creator-solves`

---

### `/disable-creator-solves`
Prevent CTF creators from solving their own challenges.

**Usage:** `/disable-creator-solves`

**Effect:** Creators who submit flags get a silent "not allowed" message (no attempt consumed).

---

## Next Steps

- **[First Blood Feature Guide](/ctflab-docs/features/first-blood/)** — Strategy and scoring examples
- **[Events](/ctflab-docs/commands/events/)** — Create event-specific leaderboards
- **[Analytics](/ctflab-docs/commands/analytics/)** — View performance insights
