# Minimalist React Blog

A clean, lightweight personal blog engine built using raw React, Vite, and TypeScript. It compiles local Markdown files directly into your build for instant page transitions without backend database dependencies.

## Project Structure

```text
src/
├── app/
│   └── utils/
│       ├── get-posts.ts      # Synchronous Markdown content parser
│       └── format-date.ts    # Date formatting utility
├── atomic/                   # UI Components & design tokens
│   └── obj.post/
│       ├── post.style.ts     # Markdown CSS typography rules
│       └── post.types.ts     # TypeScript interfaces for frontmatter
├── content/
│   └── blog/                 # Article source files (.md)
└── pages/
    └── blog/
        ├── blog.tsx          # Blog root
        ├── blog-index.tsx    # Post list index view
        └── blog-post.tsx     # Single article viewer page
```

## Creating a Post

Articles live in /src/content/blog/. Use unquoted YYYY-MM-DD formatting for dates so they are natively parsed:

## YAML

title: 'Notes on starting to use Claude Code'
description: 'First impressions switching to terminal-based tooling.'
pubDate: 2026-04-28

---

Markdown content goes here. I can use inline HTML tags like <mark>highlight</mark>.

## Core Setup Features

Raw React Router: Uses native dynamic paths (blog/:slug) and layout nesting via <Outlet />.

Static Content Delivery: Reads posts synchronously from the local directory at build time, eliminating loading spin screens and network waterfalls.
