# What Is Vibe Coding?

On **February 2, 2025**, Andrej Karpathy — a founding member of OpenAI and former AI leader at Tesla — posted a short note on X that named a movement:

> There's a new kind of coding I call "vibe coding", where you fully give in to the vibes, embrace exponentials, and forget that the code even exists.

That single post turned a quiet shift in how people built software into a cultural moment. Within weeks the term was everywhere: on Hacker News, in *The New York Times*, and eventually in Merriam-Webster's slang dictionary. In November 2025, Collins Dictionary named *vibe coding* its Word of the Year.

## The core idea

Vibe coding is AI-assisted software development in which you describe what you want in **natural language** and let a large language model (LLM) generate the code. You do not hand-write the implementation. Instead you:

1. Describe the goal and constraints.
2. Let the model generate a first draft.
3. Run it, observe the result, and give feedback.
4. Repeat until it works.

The loop is *intent → generate → run → react*. The human moves from writing syntax to guiding behavior.

## Why it spread so fast

Karpathy's post landed at the moment LLMs got good enough to make the workflow actually pleasant. Tools like Cursor Composer with Sonnet, GitHub Copilot, Replit Agent, and bolt.new could hold enough context to generate multi-file changes from a prompt.

Karpathy also described the *feel* of it: talking to the model with voice input, accepting every diff without reading it closely, pasting error messages back with no comment, and occasionally working around a bug by asking for random changes until it disappeared. "It's not really coding," he wrote. "I just see stuff, say stuff, run stuff, and copy paste stuff."

## What it is not

Vibe coding is often confused with two neighboring ideas:

- **AI autocomplete.** Traditional code completion suggests the next line. Vibe coding delegates whole features.
- **Professional AI-assisted engineering.** A senior engineer using AI still reviews diffs, designs architecture, and owns correctness. Karpathy explicitly framed vibe coding as suited to *"throwaway weekend projects."*

The distinction matters. The same toolchain can produce a disposable prototype or a production system — the difference is the discipline applied around it.

## A fair summary

Vibe coding is a real and useful capability. It lowers the barrier to building software dramatically, which is why it spread so fast. It is also, by its own inventor's framing, not a substitute for engineering. The interesting work is figuring out where the line sits.

That question runs through every article in this series.
