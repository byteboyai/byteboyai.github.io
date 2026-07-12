Byteboy

Building the next generation of AI developer tools.

Byteboy is an independent open-source project focused on building native AI tools for developers.

We believe the future of software development is not another IDE with AI features, but a new generation of AI-native workspaces where humans and intelligent agents build software together.

Our products are designed around one simple philosophy:

Agent-first. Workspace-first. Native-first.

⸻

Products

🚜 Dozer

The AI Workspace for Builders.

A native workspace designed for the agent era.

Dozer is not an IDE. It doesn’t try to replace Cursor, Zed, or VS Code. Instead, it becomes the command center for AI-driven software development by orchestrating agents, terminals, documents, browsers, and project resources in a unified workspace.

⸻

⛏ Digger (Coming Soon)

An AI-powered research workspace for collecting, organizing, and understanding technical knowledge.

⸻

🚚 Truck (Coming Soon)

An automation workspace for AI workflows, long-running tasks, and multi-agent orchestration.

⸻

Design Principles

* 🤖 Agent-first, not editor-first
* 🏗 Workspace over windows
* ⚡ Native performance
* 🔌 Extensible architecture
* 🌍 Open source
* 🧩 Tool agnostic
* 🦀 Built with Rust

⸻

Why Byteboy?

Modern AI coding tools are still centered around editors.

We believe the future belongs to AI workspaces.

Editors are where code is written.

Workspaces are where software is built.

Byteboy creates tools that help developers collaborate with AI agents, automate complex workflows, and manage the entire software construction process—not just editing files.

⸻

Open Source

Byteboy is committed to building open, extensible, and developer-friendly software.

We welcome ideas, discussions, issues, and contributions from developers around the world.

Together, let’s build the next generation of AI development tools.

---

## Website Development

This repo also hosts the byteboy.ai landing page (GitHub Pages).

- `src/` — the static site (plain HTML/CSS/JS, no build step)
- `design/` — design source files (Figma reference assets)
- `.github/workflows/deploy.yml` — deploys `src/` to Pages on push to `main`

Local preview:

```bash
python3 -m http.server 8000 -d src
```

One-time setup: repo **Settings → Pages → Source: GitHub Actions**.
