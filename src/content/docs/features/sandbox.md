---
title: Sandbox Testing
description: Isolated testing environment for previewing challenges before publishing
---

import { Card, CardGrid, Aside } from '@astrojs/starlight/components';

Before publishing challenges to your community, test them in an isolated sandbox. Challenges created in sandbox don't appear on public leaderboards and auto-delete after 2 hours.

## What is Sandbox?

A **sandbox** is a temporary, private channel where you can:
- Create and test CTF challenges
- Verify flag checking works correctly
- Preview challenge embeds
- Try different difficulty levels and point values
- **Never** affect public leaderboards

**Sandbox channels auto-delete after 2 hours** to keep your server clean and prevent sandbox clutter.

---

## Creating a Sandbox

1. Run `/start-sandbox` in any guild channel
2. Bot creates a private channel under the Sandbox category
3. Only you can see the channel (permission-locked to your user)
4. Channel will auto-delete in 2 hours

```
/start-sandbox
→ ✓ Sandbox created: #sandbox-@yourname
→ 📋 Panel posted with options
→ ⏱️ Auto-deletes in 2 hours
```

---

## Sandbox Commands

Inside your sandbox channel, use these commands:

### `/sb-create-ctf`

Create a test challenge in the sandbox:

1. Select difficulty (Easy, Medium, Hard, Insane)
2. Select category (Web, Crypto, Pwn, Reversing, Misc, etc.)
3. Select input type (text flag or file upload)
4. Fill modal: title, guidance, flag, max attempts
5. Challenge posted in sandbox (with Submit Flag button)

**Important:** This is identical to `/create-ctf`, except:
- ✓ Sandbox-only visibility
- ✓ Not counted in guild leaderboards
- ✓ Can be deleted easily

### `/sb-edit-ctf`

Modify an existing sandbox challenge:
```
/sb-edit-ctf [challenge_id]
→ Opens editor
→ Change title, guidance, flag, attempts, etc.
```

### `/sb-remove-ctf`

Delete a sandbox challenge:
```
/sb-remove-ctf [challenge_id]
→ Removes embed from sandbox
→ Deletes from database
```

---

## Sandbox Workflow

### Testing a Challenge

```
1. /start-sandbox
   → Private channel created

2. /sb-create-ctf
   → New challenge embed posted
   → Try solving it yourself
   → Test with different flags (correct + wrong)

3. /sb-edit-ctf
   → Adjust guidance, flag, or difficulty
   → Re-test if needed

4. Satisfied?
   → Copy challenge details
   → Go to public channel
   → Run /create-ctf in public
   → Publish to guild-wide leaderboard
```

### Sandbox Cleanup

When you're done testing:
- **Manually end:** Click "End Sandbox" button in the panel
- **Auto-expire:** 2 hours later, channel auto-deletes

---

## Panel Controls

When you create a sandbox, a control panel appears:

| Button | Action |
|--------|--------|
| **Create Test Challenge** | Run `/sb-create-ctf` |
| **View Sandbox Info** | Shows remaining TTL + message count |
| **End Sandbox** | Delete immediately (don't wait 2 hours) |

---

## Sandbox Isolation

<CardGrid>
	<Card title="Private Access">
		Only the creator can see the sandbox channel (scoped to your user ID).
	</Card>
	<Card title="No Leaderboard Impact">
		Sandbox solves don't affect guild leaderboards or stats.
	</Card>
	<Card title="Independent Database">
		Sandbox challenges are stored separately; deleting sandbox doesn't touch guild challenges.
	</Card>
	<Card title="TTL Enforcement">
		Channels auto-delete after 2 hours via Discord scheduled events.
	</Card>
</CardGrid>

---

## Use Cases

### Solo Testing

Create a sandbox to test your challenge ideas before sharing:

```
/start-sandbox
/sb-create-ctf "My First Web Challenge"
→ Test the flag verification
→ Make sure guidance is clear
→ Satisfied → publish to guild
```

### Collaborative Review

Invite admins to your sandbox (by sharing a temporary link) to review challenges before publishing:

```
/start-sandbox
/sb-create-ctf "Advanced Crypto Challenge"
→ @AdminA views and provides feedback
→ /sb-edit-ctf to adjust
→ @AdminB approves
→ /create-ctf in public
```

### Difficulty Tuning

Test multiple difficulty levels for the same challenge:

```
/sb-create-ctf "Web Exploitation (Easy)"
→ Try solving (very easy? change to Medium)
/sb-edit-ctf 1
→ Adjust difficulty
→ Adjust max_attempts if needed
```

---

## Timeouts & Expiration

<Aside type="info">
Sandbox channels have a **2-hour TTL** (7,200 seconds). After 2 hours of creation, the channel is automatically deleted by the bot.

If you finish testing before 2 hours elapse, manually end the sandbox with the "End Sandbox" button to reclaim server space immediately.
</Aside>

---

## Best Practices

<Card title="Test Your Own Challenges">
Before publishing, always solve your own challenge to verify the flag works and guidance is clear.
</Card>

<Card title="Check Edge Cases">
Try wrong answers, special characters, case sensitivity, whitespace. Make sure your flag checking is robust.
</Card>

<Card title="Get Admin Feedback">
Invite other admins to sandbox to review difficulty, wording, and correctness before publishing.
</Card>

<Card title="Keep It Short">
Don't leave sandboxes running for hours. End them when done to keep server clean.
</Card>

<Card title="Document Changes">
Before publishing, note any final edits you made so you publish the final version correctly.
</Card>

---

## Sandbox vs. Public Challenges

| Feature | Sandbox | Public |
|---------|---------|--------|
| Visibility | Private to creator | Guild-wide |
| Leaderboard | Not counted | Counted |
| TTL | 2 hours (auto-delete) | Permanent |
| Edit commands | `/sb-edit-ctf` | `/edit-ctf` |
| Delete commands | `/sb-remove-ctf` | CTF manage menu |
| Attempt limits | Unlimited testing | Configured per challenge |

---

## Support

Having issues with sandbox?

- **Channel won't delete:** Try clicking "End Sandbox" button manually
- **Can't see sandbox commands:** You must be inside the sandbox channel to run `/sb-*` commands
- **Forgot to test before publishing:** Use `/edit-ctf` to fix public challenges

---

## Next Steps

- **[CTF Builder](/ctflab-docs/features/ctf-builder/)** — Guide for creating public challenges
- **[Admin Setup](/ctflab-docs/admin/configuration/)** — Configuring your server
- **[Commands Reference](/ctflab-docs/commands/public/)** — Full command list
