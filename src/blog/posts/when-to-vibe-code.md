# When to Vibe Code and When Not To

The most important vibe coding skill is not generating code. It is knowing when not to.

Karpathy's original framing gave us the test: vibe coding is *"not too bad for throwaway weekend projects."* Everything since has been an argument about where the throwaway ends and the production system begins.

## Green light: good fit

Vibe coding shines when the cost of being wrong is low and the value of speed is high.

- **Prototypes and demos.** You want to show an idea, not run a business on it.
- **Personal tools.** A script that trims your screenshots only has to work for you.
- **Glue code.** One-off scripts, migrations, and data cleanup.
- **Learning.** Building something is the fastest way to understand a new stack.
- **UI experiments.** Rapid layout and copy iteration where visual judgment matters more than correctness.

In these cases, the vibe coding loop is genuinely the right tool. Insisting on manual engineering here is often just procrastination.

## Red light: poor fit

The same workflow becomes dangerous as soon as others depend on the result.

- **Safety-critical code.** Anything touching health, money, or physical systems.
- **Security-sensitive surfaces.** Authentication, payments, cryptography, and anything handling personal data.
- **Long-lived systems.** Code that must be maintained for years by people who did not write it.
- **Complex, novel problems.** Multi-file systems, poorly documented libraries, and unusual architectures.
- **Shared infrastructure.** Libraries and services that countless downstream projects rely on.

## The gray zone

Most real work lives in the middle. Here the answer is not *whether* to vibe code but *how much*:

| Stage | Vibe coding role |
| --- | --- |
| Exploration | Heavy — generate broadly, discard freely |
| Prototyping | Heavy — speed over polish |
| Feature build | Moderate — generate, then review and test |
| Hardening | Light — use AI for tests and lint fixes |
| Production | Minimal — human-owned, AI-assisted |

A useful rule: **vibe coding is a way to reach a draft, not a way to reach a guarantee.** Use it to get to something you can evaluate quickly. Then switch modes and treat what you have like real code.

## The professional line

In July 2025, *The Wall Street Journal* reported that professional engineers were adopting vibe coding for commercial work. That is fine — as long as "adopting the speed" does not mean "skipping the accountability."

The engineers who use these tools well are not the ones who accept every diff. They are the ones who know exactly which diffs they can afford to accept.
