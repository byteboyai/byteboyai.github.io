# Vibe Coding and Open Source: A Growing Tension

Open source runs on a delicate economy of attention. Vibe coding, for all its productivity, may be quietly draining it.

## The paper

In January 2026, a group of university researchers published a paper with an unambiguous title: **"Vibe Coding Kills Open Source."**

Their argument was not that AI writes bad code. It was economic. Open-source maintainers are typically rewarded through *user engagement* — bug reports, contributions, recognition, reputation, and the job prospects that follow. Vibe coding reduces all of it.

> Vibe coding raises productivity by lowering the cost of using and building on existing code, but it also weakens the user engagement through which many maintainers earn returns.

The researchers modeled a troubling equilibrium: as vibe coding spreads, fewer people engage deeply with open-source projects, which reduces the quality and availability of those projects, which makes everyone worse off — even though individual productivity goes up.

## Three mechanisms

**1. Fewer good bug reports.** A developer who reads the code finds and reports real bugs. A model that consumes a library does not file issues, does not understand its internals, and may silently work around defects. Maintainers lose their most valuable feedback channel.

**2. Homogenization.** Language models gravitate toward large, well-known libraries that appear often in their training data. Newer or niche open-source tools never get discovered, no matter how good they are. The organic process by which tools win or lose is replaced by a training-data popularity contest.

**3. Lower engagement, lower reward.** When the code you use arrives fully formed from a generator, the relationship between user and maintainer thins. Fewer contributions, less community, fewer intangible rewards.

## The symptom: an "Eternal September"

In February 2026, GitHub acknowledged that a flood of low-quality AI-generated contributions was overwhelming maintainers, calling it an **Eternal September** for open source. The platform cited concrete casualties:

- **cURL** ended its bug bounty program after AI-generated security reports multiplied.
- **Ghostty** moved to an invitation-only contribution model.

GitHub responded with new maintainer controls: restricting pull request creation, temporary repository activity limits, and better communication tools.

## The rsync episode

Perhaps the most vivid example arrived in **June 2026**. After an rsync update, users reported broken incremental backups. Investigation found that dozens of commits since 3.4.1 had been co-authored by "tridge and claude" — the maintainer, Andrew Tridgell, working alongside Anthropic's Claude.

A user filed a GitHub issue titled *"Please Do Not Vibe Fuck Up This Software."* It spread to Reddit and beyond, igniting a debate about AI-generated code entering critical infrastructure. Tridge responded in a post called *"rsync and outrage,"* explaining that he had used AI to add test suites and hardening. The episode was criticized widely, including for a swipe at OpenBSD's openrsync that many found unnecessary.

The point was not that Tridgell was reckless. It was that a project depended on by millions had crossed into AI-generated maintenance without a shared understanding of what that meant.

## A way forward

Open source is not doomed, but the norms are unsettled. Some constructive directions:

- **Be a good citizen.** If an AI tool helps you find a bug, report it thoughtfully. Do not dump generated issues on volunteer maintainers.
- **Engage upstream.** Contribute fixes, not just consumption. The ecosystem runs on give-and-take.
- **Fund maintainers directly.** If AI reduces the engagement-based economy, other revenue models must fill the gap.
- **Disclose AI contributions.** Transparency lets maintainers set their own policies.

## The bottom line

Vibe coding is efficient at the level of the individual developer and potentially corrosive at the level of the ecosystem. The tension is real, and it will not resolve itself. The question is whether the software commons can adapt fast enough to a world where code flows in far easier than it flows back.
