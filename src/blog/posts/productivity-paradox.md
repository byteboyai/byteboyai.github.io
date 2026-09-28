# The Productivity Paradox: Faster or Slower?

The central promise of vibe coding is speed. The most rigorous evidence so far says the promise is more complicated than it sounds.

## The METR study

In July 2025, **METR**, an organization that evaluates frontier AI models, ran a randomized controlled trial on developer productivity. The design was unusually careful:

- **246 real coding tasks** on repositories the developers already knew.
- Experienced open-source developers.
- A control group working without AI tools.

The result was the opposite of what everyone expected.

**Developers using AI tools were 19% slower.**

Not 19% faster. Slower. And the perception gap was even more striking:

- Before the tasks, developers predicted AI would make them **24% faster**.
- After finishing, they still believed AI had made them **20% faster**.

The tool felt faster. It was measurably slower.

## Why the gap

Several factors explain the paradox.

- **Context-switching cost.** Prompting, reading generated code, and correcting it interrupts the developer's own mental model.
- **Overhead on familiar work.** For tasks an expert already knows how to do, generation is often slower than just doing it.
- **Verification burden.** Time saved typing is spent reviewing and testing — and it is easy to under-count that.
- **Illusion of progress.** Watching code appear feels productive, independent of whether it moved the task forward.

METR's tasks were on mature codebases with high standards. That is the environment where AI assistance struggles most, precisely because the bar for "acceptable" is high and the context is deep.

## The other side

That does not mean AI tools are slow everywhere. The same study does not cover:

- **Unfamiliar languages or stacks**, where AI fills a knowledge gap.
- **Greenfield projects**, with no existing conventions to match.
- **Boilerplate and glue code**, which is genuinely faster to generate than to type.
- **Learning and exploration**, where the goal is to see something working, not to finish a task fast.

The productivity gain is real — it just depends heavily on the shape of the work.

## Task complexity matters

Research consistently finds that AI coding systems handle simple, self-contained tasks well and struggle with:

- Projects spanning many files.
- Poorly documented libraries.
- Novel architectures with no training precedent.
- Safety-critical code where correctness is non-negotiable.

The productivity curve is not uniform. It is a function of how much the task resembles the training distribution.

## What this means in practice

- **Measure, don't assume.** If you feel faster, check whether you actually finished sooner.
- **Match the tool to the task.** Use generation for unfamiliar or repetitive work; use your own hands for the work you already do well.
- **Protect your mental model.** The code you generate is code you did not construct — keep enough of the picture in your head to stay in control.
- **Discount the feeling of speed.** The strongest evidence here is that the *perception* of productivity is unreliable.

## The bottom line

Vibe coding is a powerful tool with a genuine but conditional payoff. The honest summary from the research is: **it can make you faster, but not automatically, and not always — and your intuition about which case you are in is not trustworthy.**
