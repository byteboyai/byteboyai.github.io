# Prompting and Context: The Real Skill of Vibe Coding

The most common misconception about vibe coding is that it is about writing clever prompts. It is not. It is about supplying **context**.

IBM's guidance puts it bluntly: *the reason any AI model fails is never a bad prompt — it is the absence of context.* Future gains in large language models will come from context, not phrasing.

## The five kinds of context

Before you generate anything, make sure the model knows:

1. **Business context** — what problem are we solving, and for whom?
2. **Architectural context** — how does this fit into the existing system?
3. **Repository context** — what conventions, patterns, and dependencies already exist?
4. **Security context** — what policies and compliance constraints apply?
5. **Operational context** — what performance and scale requirements matter?

A model missing these can produce code that is technically correct and operationally wrong.

## A context-rich prompt

Compare these two requests.

**Weak:**

> Make a habit tracker app.

**Strong:**

> Build a web app for a startup that tracks daily habits. Users create habits and mark completions; show a completion-rate graph per habit. Minimalist dark-mode UI. Use React on the front end and Node.js on the back end. Keep components under 200 lines and match the existing design tokens in `theme.css`.

The second version is not "better worded." It carries information.

## The iteration loop

Good vibe coding is a tight loop, not a single request:

**Intent → Generate → Review → Refine → Generate**

Each cycle should be small. Ask for one change at a time, run it, and observe. Large requests compound errors, because you lose the ability to tell which change broke what.

## Practical habits

- **Start with a plan.** Ask the model to describe the architecture before writing code.
- **Keep a running spec.** Paste the current requirements into the conversation when they drift.
- **Name the constraints.** "No new dependencies" and "don't touch the database" prevent whole classes of accidents.
- **Show, don't tell.** Reference existing files by path and let the model pattern-match the codebase.
- **Reset when confused.** A clean conversation with good context beats a long one full of noise.

## The bottom line

Prompting is a surface skill. Context engineering is the durable one. The developers who get the most out of AI tools are not the ones who write the fanciest prompts — they are the ones who hand over the richest, most accurate picture of the problem.

That is a skill, and like any skill, it improves with deliberate practice.
