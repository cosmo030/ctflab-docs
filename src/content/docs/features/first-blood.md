---
title: First Blood Bonuses
description: Reward speed with automatic point multipliers for top 3 solvers
---

import { Aside, Card, CardGrid } from '@astrojs/starlight/components';

Give your CTF challenges a competitive edge by rewarding the fastest solvers with point bonuses. Perfect for tournaments, events, or communities that value both skill AND speed.

## How It Works

When a member solves a challenge, CTFLab automatically tracks their solve order:
- **1st Solver** → gets bonus points (default: +50%)
- **2nd Solver** → gets bonus points (default: +30%)
- **3rd Solver** → gets bonus points (default: +15%)
- **4th+ Solvers** → base points only

<Aside type="tip">
First-blood bonuses **require points mode to be enabled**. If you're using solve-count leaderboards, first-blood is informational only (no point multiplier).
</Aside>

---

## Configuration

### Enable First-Blood

1. Ensure **points mode** is enabled: run `/ctf-config-points`
2. Run `/enable-first-blood`
3. Use the interactive modal to set bonus percentages:
   - 1st Blood: 50% (default)
   - 2nd Blood: 30% (default)
   - 3rd Blood: 15% (default)
4. Click **Save**

### Customize Percentages

You can set any percentage you want. Some examples:

**Balanced (Default):**
```
1st: 50%
2nd: 30%
3rd: 15%
```

**Speed-Focused (Large bonuses):**
```
1st: 100%
2nd: 50%
3rd: 25%
```

**Fair & Gentle (Small bonuses):**
```
1st: 20%
2nd: 10%
3rd: 5%
```

---

## Scoring Example

**Challenge:** Web Exploitation  
**Difficulty:** Hard (400 base points)  
**Configuration:** 1st=50%, 2nd=30%, 3rd=15%

```
1st Solver (Alice):     400 + 50% = 600 pts
2nd Solver (Bob):       400 + 30% = 520 pts
3rd Solver (Charlie):   400 + 15% = 460 pts
4th+ Solvers (Dave):    400 pts (no bonus)
```

### Another Example: Multiple Challenge Solves

**User Alice's Day:**
```
Challenge 1 (Easy, 100 pts):
  → 1st Blood: 100 + 50% = 150 pts

Challenge 2 (Medium, 250 pts):
  → 4th+ Solver: 250 pts (no bonus)

Challenge 3 (Hard, 400 pts):
  → 2nd Blood: 400 + 30% = 520 pts

Alice's Total: 150 + 250 + 520 = 920 pts
```

---

## Member Notifications

### Success Channel Announcement

When a member solves with first-blood, a celebration message appears in your success channel:

```
@Alice solved **Web Exploitation** (Hard) in 2 attempts!
[First Blood]
```

### Private Success Message

Members receive a private confirmation showing their bonus:

```
Correct! You solved **Web Exploitation** (ID 1) in 2/10 attempts.
[First Blood]! +50% bonus points
```

---

## Dynamic Recalculation

If a first-blood solver's solve is **revoked** (via `/ctf-revoke-solve`), positions automatically reassign.

**Before:**
```
Challenge: Web Exploitation
1st Blood: Alice (600 pts)
2nd Blood: Bob (520 pts)
3rd Blood: Charlie (460 pts)
```

**Admin revokes Alice's solve:**
```
Challenge: Web Exploitation
1st Blood: Bob (600 pts) ← recalculated
2nd Blood: Charlie (520 pts) ← recalculated
3rd Blood: (nobody)
```

<Aside type="warning">
When positions shift, points are **automatically recalculated**. Bob and Charlie's leaderboard scores will update accordingly.
</Aside>

---

## First-Blood on Event Leaderboards

First-blood bonuses apply to **both**:
- Guild-wide leaderboards
- Event-specific leaderboards (within `/setup` workspaces)

This means first-blood is consistent whether solves happen in the main guild or in a tournament event.

---

## Disable First-Blood

Run `/disable-first-blood` to turn off bonuses completely.

**Effect:**
- No more bonuses awarded on new solves
- Existing points are NOT recalculated retroactively
- Leaderboard continues as-is with historical bonuses preserved

---

## Use Cases

<CardGrid>

<Card title="Community Tournaments">
Use first-blood to make events exciting. Speed becomes a factor alongside skill.
</Card>

<Card title="Practice Servers">
Gentle bonuses (+10%, +5%, +2%) encourage participation without overshadowing difficulty.
</Card>

<Card title="Competitive Leagues">
Large bonuses (+100%, +50%, +25%) make first-blood highly valuable, perfect for speed runs.
</Card>

<Card title="Casual Communities">
Disable first-blood entirely and rely on solve-count or flat points for relaxed engagement.
</Card>

</CardGrid>

---

## Best Practices

<Aside type="tip">
**Tune percentages to your community:** If you notice top solvers always winning first-blood, reduce the bonuses. If lower-ranked players feel demotivated, increase them.
</Aside>

1. **Communicate the bonuses** — Let members know first-blood is active and the percentages
2. **Monitor engagement** — Watch if speed or quality solving is more valued
3. **Adjust as needed** — You can reconfigure percentages anytime with `/enable-first-blood`
4. **Combine with events** — First-blood shines in time-limited tournaments

---

## Technical Notes

- First-blood positions are tracked **per CTF per user** in the database
- Positions **survive bot restarts** (stored in SQLite)
- Bonuses apply to **points mode only** (solve-count doesn't use multipliers)
- Revoked solves trigger **automatic recalculation** of remaining positions

---

## Next Steps

- **[Leaderboard System](/ctflab-docs/features/leaderboard/)** — Understand point scoring modes
- **[Commands Reference](/ctflab-docs/commands/leaderboard/)** — Full `/enable-first-blood` guide
- **[Events](/ctflab-docs/features/events/)** — Create time-limited tournaments with first-blood
