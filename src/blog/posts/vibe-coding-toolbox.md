# The Vibe Coding Toolbox: Editors, Agents, and Platforms

Vibe coding is a workflow, but it is enabled by a specific layer of tools. The landscape splits into three rough categories.

## 1. AI-native editors

Editors that fold generation, multi-file reasoning, and command execution into the editing surface.

- **Cursor** — the tool Karpathy name-dropped in the original post. Composer mode generates and applies multi-file changes.
- **Windsurf** — an agentic IDE with a strong focus on flow.
- **Zed** — a fast, collaborative editor with AI built in.
- **VS Code + GitHub Copilot** — the incremental path for teams already on the Microsoft stack.

These are the closest thing to the "classic" vibe coding experience: you sit in the editor and talk to it.

## 2. Browser and app builders

Platforms where you describe an app and get a running deployment.

- **Replit Agent** — prompt-to-app inside a hosted environment, with deployment and databases included.
- **bolt.new** — full-stack apps generated and previewed in the browser.
- **Lovable** — a popular Swedish vibe coding app for quickly spinning up web applications.
- **Google AI Studio / Antigravity** — Google's entry points for prompt-driven building.

These lower the barrier the most. Many are aimed squarely at non-developers.

## 3. Terminal agents

Command-line agents that operate directly on a repository.

- **Claude Code**, **Codex CLI**, **OpenCode**, **Cline**, **Aider**, and others.

These tend to appeal to experienced engineers. They compose with git, run tests, and fit existing habits rather than replacing them.

## How to choose

The right tool depends on who you are and what you are building:

| You are... | Reach for... |
| --- | --- |
| A non-developer with an idea | Browser builders (Replit, bolt.new, Lovable) |
| A developer prototyping | Cursor, Windsurf, Zed |
| An engineer on a real codebase | Terminal agents (Claude Code, Codex CLI) |

## A note on the tooling trap

It is easy to spend more time shopping for tools than shipping. The workflow matters more than the brand. Pick one, learn its context model, and build something. The differences between the top-tier tools are smaller than the difference between using one well and using five badly.

In the next article we look at the habits — prompting, context, and verification — that separate a good result from a mess.
