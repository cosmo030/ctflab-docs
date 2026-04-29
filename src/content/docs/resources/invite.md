---
title: Invite & Resources
description: Add CTFLab to your server and find additional resources
---

import { Card, CardGrid, Aside } from '@astrojs/starlight/components';

## Add CTFLab to Your Server

Click the button below to invite CTFLab with all necessary permissions:

**[ADD TO SERVER](https://discord.com/oauth2/authorize?client_id=YOUR_BOT_ID&scope=bot+applications.commands&permissions=permissions_number)**

Required permissions:
- Manage Channels (for event workspaces)
- Manage Roles (for solver roles and top-3 roles)
- Send Messages (for embeds and announcements)
- Embed Links (for rich formatting)
- Add Reactions (for buttons and UI elements)

---

## Community & Support

<CardGrid>
	<Card title="Discord Support Server" icon="setting">
		Join our community server for help, feedback, and announcements.
		[Support Server](https://discord.gg/YOUR_SUPPORT_SERVER)
	</Card>
	<Card title="GitHub Repository" icon="github">
		View the source code and report issues.
		[GitHub](https://github.com/cosmo030/ctf)
	</Card>
	<Card title="Top.gg Listing" icon="star">
		Vote for CTFLab and see reviews from other users.
		[Vote on Top.gg](https://top.gg/bot/YOUR_BOT_ID)
	</Card>
</CardGrid>

---

## Frequently Asked Questions

### Q: Is CTFLab free?
**A:** Yes, completely free! CTFLab is open-source software. Simply invite it to your server and start creating challenges.

### Q: What if I encounter a bug?
**A:** Report issues on [GitHub](https://github.com/cosmo030/ctf) or in the support server. We actively maintain and update CTFLab.

### Q: Can I self-host CTFLab?
**A:** Yes! The bot is open-source. Clone the repository and follow the setup instructions in `README.md`.

### Q: Does CTFLab store member data?
**A:** CTFLab stores challenge data, solve records, and leaderboard information in a local SQLite database on your server. No data is sent to external servers.

### Q: Can I customize the bot's appearance?
**A:** Yes! You can customize difficulty levels, point values, role names, colors, and more through the configuration commands.

### Q: How many challenges can I create?
**A:** Unlimited! CTFLab supports thousands of challenges. Performance depends on your server's hardware.

### Q: Can I import challenges from other platforms?
**A:** Currently, CTFLab doesn't have an import feature. Challenges must be created using `/create-ctf`. This is on the roadmap for future versions.

### Q: Is there a web dashboard?
**A:** CTFLab is Discord-native — everything is managed through Discord. A web dashboard is under consideration for future versions.

---

## Troubleshooting

### Bot won't respond to commands
- Ensure the bot has permission to send messages in the channel
- Try using `/ctf-list` to see if the bot registers commands
- Check that you have the latest version by re-inviting the bot

### Leaderboard not updating
- Verify the leaderboard message exists in the channel
- Run `/ctf-leaderboard` again to refresh
- Ensure members are solving challenges in the correct guild

### Event workspace not created
- Check that you have `Manage Channels` and `Manage Roles` permissions
- Ensure the bot has these permissions too
- Try the `/setup` command again with a simpler event name

### First-blood not working
- First-blood requires **points mode** to be enabled (`/ctf-config-points`)
- Run `/enable-first-blood` to activate the feature
- Verify the percentages are configured correctly

---

## Version & Changelog

**Current Version:** v1.0.0

Major features in v1.0.0:
- ✓ Interactive CTF Builder
- ✓ Real-time Leaderboards (solve-count & points modes)
- ✓ First-Blood Bonuses
- ✓ Analytics Dashboard
- ✓ Event Workspaces
- ✓ Sandbox Testing Environment
- ✓ Admin Audit Logging
- ✓ Per-CTF Solver Roles
- ✓ Top-3 Auto-Roles
- ✓ Manual CTF Awards

See the full [Changelog](/ctflab-docs/resources/changelog/) for detailed history.

---

## Roadmap

Features coming soon:
- [ ] Web dashboard with OAuth2
- [ ] Custom congratulation messages
- [ ] Multi-file challenge support
- [ ] CTFd API integration
- [ ] Seasonal leaderboard resets
- [ ] Challenge difficulty filters
- [ ] Integration with external CTF platforms

---

## Credits

**Developed by:** cosmo030

Built with:
- [Discord.py](https://discordpy.readthedocs.io/) — Python Discord API wrapper
- [Astro](https://astro.build/) — Static site generator
- [Starlight](https://starlight.astro.build/) — Documentation theme

---

## Contact

- **GitHub Issues:** [Report bugs](https://github.com/cosmo030/ctf/issues)
- **Discord:** Join the support server for discussion and feedback
- **Email:** [contact info if applicable]

---

<Aside type="tip">
**Ready to get started?** Check out the [Installation Guide](/ctflab-docs/getting-started/installation/) to set up CTFLab in your server.
</Aside>
