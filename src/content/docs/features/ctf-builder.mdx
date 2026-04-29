---
title: CTF Builder
description: Create interactive challenges with an intuitive multi-step builder
---

import { Steps, Aside, Card, CardGrid } from '@astrojs/starlight/components';

The CTF Builder guides you through creating challenges step-by-step with a friendly interactive interface. No command syntax or markdown required.

## Builder Walkthrough

<Steps>

1. **Difficulty Selection**
   - Choose from default levels: Easy, Medium, Hard, Insane
   - Or custom difficulties (if admin configured them)
   - Sets the visual color and points value (if points mode enabled)

2. **Category Selection**
   - Organize challenges: Web, Crypto, Pwn, Reversing, Forensics, Misc, etc.
   - Helps members filter by topic

3. **Input Type Selection**
   - **Text Input** — members type the flag answer
   - **File Input** — attach a challenge file (binary, image, archive, etc.)

4. **Challenge Details Modal**
   - **Title** (required) — challenge name (e.g., "SQL Injection 101")
   - **Guidance** (required) — instructions and description
   - **Flag** (required) — the correct answer
   - **Max Attempts** (optional) — 0 = unlimited, or set a limit
   - **Hint** (optional) — clue for solvers

5. **Preview (Optional)**
   - See how your challenge looks before publishing
   - Check formatting and clarity

6. **Publish**
   - Choose which channel to post in
   - Challenge embed appears with "Submit Flag" button
   - Goes live immediately

</Steps>

---

## Input Types

### Text-Based Challenges

Members see the challenge embed and click **"Submit Flag"** to open a modal where they type the flag.

**Best for:**
- Crypto challenges with flag strings
- Puzzles with answers
- CTF competitions where the flag is text

**Flag Example:**
```
flag{this_is_the_answer}
flag{sql_injection_pwned}
CTFLab{welcome_to_ctflab}
```

**Tips:**
- Flags are **case-sensitive**
- Include the flag format in your guidance if non-standard
- Consider wrapping in `flag{}` for clarity

---

### File-Based Challenges

Members download an attached file (binary, image, archive, encrypted data, etc.) and submit the extracted flag.

**Best for:**
- Reverse engineering (compiled binaries)
- Forensics (image files, disk images)
- Steganography (images with hidden data)
- Misc puzzles (archives, encrypted files)

**Workflow:**
1. Create challenge with File input type
2. Attach your challenge file during builder (e.g., `challenge.bin`, `image.png`)
3. Publish
4. Members download the file, analyze it, extract the flag, and submit

**File Editing:**
When editing a file-based challenge:
- Originally attached files are preserved
- You can edit title, guidance, or flag without re-uploading
- To replace the file, simply attach a new one during edit

---

## Builder Features

<CardGrid>

<Card title="Formatting Support">
Guidance supports Discord markdown: **bold**, *italic*, ~~strikethrough~~, code blocks, and links.
</Card>

<Card title="Difficulty Color Coding">
Challenge embeds are color-coded by difficulty for quick visual scanning.
</Card>

<Card title="Attempt Limiting">
Optionally cap attempts so members can't brute-force weak challenges. 0 = unlimited.
</Card>

<Card title="Hints">
Provide optional hints that members can see if they're stuck. Encourage strategic thinking.
</Card>

</CardGrid>

---

## Example: Creating a Web Challenge

**Challenge:** SQL Injection vulnerability discovery

**Step 1:** Run `/create-ctf`

**Step 2:** Select Difficulty: `Medium`

**Step 3:** Select Category: `Web`

**Step 4:** Select Input Type: `Text`

**Step 5:** Fill Details
- **Title:** "SQL Injection 101"
- **Guidance:** 
  ```
  A company uses a vulnerable login form at example.com/login.php
  Find the admin flag by bypassing authentication.
  
  Hint: The password field isn't sanitized!
  ```
- **Flag:** `flag{sql_injection_bypassed}`
- **Max Attempts:** 5
- **Hint:** "Try entering ' OR '1'='1 in the password field"

**Step 6:** Preview to check formatting

**Step 7:** Publish to `#ctf-challenges`

---

## Example: Creating a Reversing Challenge

**Challenge:** Reverse engineer a binary to find a hidden flag

**Step 1:** Run `/create-ctf`

**Step 2:** Select Difficulty: `Hard`

**Step 3:** Select Category: `Reversing`

**Step 4:** Select Input Type: `File`

**Step 5:** Fill Details
- **Title:** "Mystery Binary"
- **Guidance:**
  ```
  Analyze the attached binary and find the hidden flag.
  
  Tools: IDA Pro, Ghidra, objdump, or any disassembler
  ```
- **Flag:** `flag{reverse_engineering_master}`
- **Max Attempts:** 0 (unlimited)
- **File Attachment:** (upload your compiled binary)

**Step 6:** Publish

Members will download the binary, reverse it, and submit the flag.

---

## Tips & Tricks

<Aside type="tip">
Always include the flag format in your guidance (e.g., "Flag is in the format `flag{...}`") to avoid confusion.
</Aside>

<Aside type="warning">
Test your flag submission before publishing! Click "Submit Flag" on your own embed to verify it works.
</Aside>

### Difficulty Tuning
- **Easy** — introductory level, quick solves (1st Blood usually within minutes)
- **Medium** — requires basic knowledge, typical 30-min to 1-hour solves
- **Hard** — requires expertise, could take hours
- **Insane** — marathon challenge, bleeding-edge techniques

### Guidance Best Practices
1. Start with a hook (why should members care?)
2. Provide clear instructions (what to do)
3. Include expected deliverables (what to submit)
4. Add context (difficulty, tools needed, time estimate)

### Example Guidance Template
```
**Challenge:** [Catchy title]

[2-3 sentence description of the scenario]

**What to do:**
1. [Step 1]
2. [Step 2]
3. [Step 3]

**Expected Output:** A flag in the format `flag{...}`

**Tools:** [Recommended tools or languages]

**Time Estimate:** [30 minutes / 1 hour / 2+ hours]
```

---

## Editing & Managing Challenges

### Edit a Challenge
- Run `/edit-ctf [query]`
- Modify any field (title, difficulty, category, guidance, flag, etc.)
- Originally attached files are preserved
- Publish changes — all existing progress is preserved

### Archive vs. Delete
- **Archive** — hide from `/ctf-list`, but keep all solve history
- **Delete** — permanently remove (irreversible)

### Repair a Challenge
- Run `/ctf-repair [message_link]` if the embed breaks
- Reattaches the "Submit Flag" button if it disappears

---

## Next Steps

- **[Create Your First Challenge](##)** — Try it now!
- **[Leaderboard System](/ctflab-docs/features/leaderboard/)** — How scoring works
- **[Analytics](/ctflab-docs/features/analytics/)** — Track difficulty metrics
