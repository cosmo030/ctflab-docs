---
title: Audit Logging
description: Comprehensive administrative action tracking and review
---

import { Card, CardGrid, Aside } from '@astrojs/starlight/components';

Track every administrative action in your CTF server with detailed audit logs. Perfect for compliance, troubleshooting, and accountability.

## Setting Up Audit Logs

Designate a channel for audit logging:

```
/admin-logs [channel]
```

**What happens:**
1. Bot posts a persistent configuration embed in the channel
2. Embed auto-updates on every logged action
3. New entries appear at the top
4. Color-coded by action type

**Best practice:** Create a private admin-only channel like `#audit-logs`.

---

## What Gets Logged

### Challenge Management

| Action | Example |
|--------|---------|
| Create CTF | "Challenge 'Web Exploitation' created by @Admin" |
| Edit CTF | "Challenge 1 updated: title changed" |
| Delete CTF | "Challenge 1 'Web Exploitation' deleted" |
| Archive CTF | "Challenge 1 closed" |
| Repair CTF | "Challenge embed re-posted" |

### Configuration Changes

| Action | Example |
|--------|---------|
| Set success channel | "Success channel set to #ctf-wins" |
| Set answer logs | "Flag logs set to #submission-logs" |
| Update difficulty labels | "Custom difficulties configured" |
| Update point values | "Points updated: Easy=100, Hard=400" |
| Enable/disable first-blood | "First-blood enabled: 50%/30%/15%" |
| Creator role changes | "CTF creator role granted to @Creators" |
| Creator self-solve toggle | "Creators allowed to solve own challenges" |

### Role Management

| Action | Example |
|--------|---------|
| Enable top-3 roles | "Top 3 roles enabled with custom colors" |
| Disable top-3 roles | "Top 3 roles disabled" |
| Enable solver roles | "Per-CTF solver roles enabled" |
| Disable solver roles | "Per-CTF solver roles disabled" |

### Leaderboard Actions

| Action | Example |
|--------|---------|
| Post leaderboard | "Desktop leaderboard posted in #leaderboard" |
| Remove leaderboard | "Leaderboard removed" |
| Revoke solve | "@Alice's solve for challenge 3 revoked" |
| Manual award | "@Bob manually awarded solve for challenge 2" |
| Recalculate | "Leaderboard recalculated" |

### Event Management

| Action | Example |
|--------|---------|
| Create event | "Event 'Spring Tournament' created (category: Spring-Tournament)" |
| Delete event | "Event 'Spring Tournament' purged" |

---

## Audit Log Embed Format

The persistent audit embed displays:

```
🔐 CTF Administration Audit Log

Last Action: 2026-04-29 14:32 UTC

Recent Events:
✅ Challenge Created (Green)
   "Web Exploitation" by @Admin (ID: 1)
   2026-04-29 14:32 UTC

🟡 Configuration Changed (Yellow)
   Points updated: Easy=100, Medium=250
   by @Admin
   2026-04-29 14:15 UTC

🔴 Challenge Deleted (Red)
   "Old Challenge" (ID: 3)
   by @Admin
   2026-04-29 13:00 UTC
```

---

## Color Coding

Audit entries are color-coded by action type:

| Color | Hex | Action Type | Example |
|-------|-----|-------------|---------|
| 🟢 Green | `#2ecc71` | **Creation** | New challenge posted |
| 🟡 Yellow | `#f1c40f` | **Configuration** | Settings changed |
| 🟠 Orange | `#e67e22` | **Edits** | Challenge updated |
| 🔴 Red | `#e74c3c` | **Destructive** | Challenge deleted |
| 🔵 Blue | `#3498db` | **Archives** | Challenge closed |

**Use cases:**
- Scan for red entries → spot deletions
- Scan for yellow entries → recent config changes
- Spot patterns → identify active admin

---

## Multi-Page Audit Trail

For active servers with many CTFs, the audit embed spans **multiple embeds** (one embed = ~6 entries, automatically paginated):

**Pagination controls:**
```
First Page | ← Previous | Next → | Last Page
```

Navigate to find older entries or specific events.

---

## Audit Log Queries & Filtering

<Aside type="info">
The audit log embed is **display-only** — it shows events chronologically but doesn't support filtering by date or action type.

For advanced querying:
- Check Discord's built-in audit log (`Server Settings → Audit Log`)
- Use bot command: `/admin-logs` to re-display the current embed
- Contact bot developers for custom audit queries
</Aside>

---

## Use Cases

### Compliance & Accountability

```
Scenario: Challenge deleted mysteriously.
Solution: Check audit log.
Find: Red entry "Challenge 2 deleted by @ModA" at 2026-04-28 10:15
Follow-up: Ask @ModA why challenge was removed
```

### Troubleshooting

```
Scenario: Points configuration seems wrong.
Solution: Check audit log.
Find: Yellow entry "Points updated" at specific time
Verify: Confirm when change happened and what values were set
```

### Activity Monitoring

```
Scenario: Want to know guild activity over a week.
Solution: Review audit log weekly.
Find: Count creation entries, config changes, etc.
Assess: Is CTF activity healthy?
```

### Role Sync Issues

```
Scenario: Top-3 roles aren't updating.
Solution: Check audit log.
Find: Yellow entry "Top 3 disabled" if accidentally disabled
Or: Check if role changes are being logged at all
```

---

## Best Practices

<Card title="Make It Private">
Set audit log channel to admin-only. Sensitive info (deleted challenges, config mistakes) shouldn't be visible to regular members.
</Card>

<Card title="Review Regularly">
Check audit logs weekly to catch unexpected changes or troubleshoot issues.
</Card>

<Card title="Pin Important Entries">
If something goes wrong, pin the audit log entry for reference during troubleshooting.
</Card>

<Card title="Archive Seasonally">
For long-term auditing, periodically screenshot or export the audit log before it gets too long.
</Card>

<Card title="Communicate Configuration Changes">
Before making major changes (disabling first-blood, updating points), post in audit log and announce to community.
</Card>

---

## Troubleshooting

**Q: Audit log embed isn't updating**
A: Make sure the bot has permission to edit messages in that channel. Re-run `/admin-logs [channel]` to refresh.

**Q: I can't see the audit log channel**
A: Verify you have permission to view the channel. Ask an admin to check role permissions.

**Q: Old entries are disappearing**
A: Discord embeds support multiple pages. Navigate using pagination buttons at the bottom.

**Q: An action isn't being logged**
A: Some actions (like manual flag entries) might not trigger audit entries. Check the specific command documentation.

---

## Integration with Other Features

### With Role Management

- Audit log tracks when `/enable-top-3` is run
- Logs include custom role names and colors
- Tracks when solver roles are enabled/disabled

### With Leaderboard Updates

- Manual awards (`/admin-manual-add`) are logged
- Solve revocations (`/ctf-revoke-solve`) are logged
- Leaderboard posts/removals are logged

### With Event Management

- Event creation is logged (with preset type)
- Event deletion is logged
- Event-specific configs are logged separately from guild configs

---

## Data Retention

<Aside type="warning">
Audit log embeds are **not infinite**. Discord limits embeds to roughly 4,096 characters.

For very active servers:
- Embed pages rotate, with oldest entries eventually falling off
- Check audit logs regularly and archive important entries
- Consider requesting larger audit log storage from bot developers
</Aside>

---

## Next Steps

- **[Server Configuration](/ctflab-docs/admin/configuration/)** — General guild setup
- **[Role Management](/ctflab-docs/admin/roles/)** — Automatic role assignment
- **[Commands Reference](/ctflab-docs/commands/admin/)** — Full admin command list
