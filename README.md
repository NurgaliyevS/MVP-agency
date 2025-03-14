# MVP Agency Website

This is the official website for MVP Agency, a specialized service provider focused on helping startups and businesses build minimum viable products efficiently and effectively.

## Blog Post CTA Shortcodes

The blog system supports special shortcodes that allow you to easily add call-to-action (CTA) elements to your markdown blog posts without writing HTML.

### Available Shortcodes

#### Simple CTA Button

To add a simple CTA button, use the following shortcode:

```
[cta_button url="https://example.com" text="Click Me"]
```

This will render as a centered button with the specified text that links to the provided URL.

#### CTA Box with Title and Description

To add a CTA box with a title, description, and button, use the following shortcode:

```
[cta_box title="Title Here" text="Description text here" url="https://example.com" button_text="Click Me"]
```

This will render as a styled box with a title, description, and a button that links to the provided URL.

### Usage Tips

- Place CTA buttons after sections where you've explained a benefit or feature
- Use CTA boxes at the beginning and end of your post for maximum impact
- Don't overuse CTAs - 2-3 per post is usually sufficient

### Benefits of Using Shortcodes

Using shortcodes instead of HTML has several benefits:

1. **Simplicity**: No need to remember complex HTML and CSS
2. **Consistency**: All CTAs will have the same styling across your site
3. **Maintainability**: If you want to change the style of all CTAs, you only need to update the shortcode processor

### Example

Here's how a blog post with CTA shortcodes might look:

```markdown
---
title: "MVP Development Agency"
date: "2024-12-25"
excerpt: "Discover how partnering with an MVP development agency can accelerate your startup's journey"
author: "Sabyr Nurgaliyev"
tags: ["mvp development agency", "startup development"]
image: "/blog/mvp-development-agency.png"
alt: "MVP Development Agency"
---

## Introduction

In today's fast-paced startup ecosystem, bringing your innovative idea to market quickly and efficiently is crucial for success.

[cta_box title="Ready to bring your idea to life?" text="Don't let your brilliant concept remain just an idea. Our team of experts can help you build a market-ready MVP in just 7 days." url="https://mvpagency.org/contact" button_text="Schedule a Free Consultation"]

### What is an MVP Development Agency?

An MVP development agency is a specialized service provider focused on helping startups and businesses build minimum viable products efficiently and effectively.

## Why Partner with an MVP Development Agency

...content continues...

[cta_button url="https://mvpagency.org/services" text="Explore Our Services"]

## Conclusion

...concluding content...
```

## Technical Implementation

The shortcodes are processed in the blog post rendering pipeline:

1. The markdown content is parsed using `gray-matter`
2. Shortcodes are processed using the `processShortcodes` utility
3. The processed content is then converted to HTML using the unified/remark/rehype pipeline
4. The HTML is rendered in the blog post component

The shortcode processor is located at `/utls/processShortcodes.js` and can be modified to change the styling or add new shortcodes.

## Development

To run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
# nextjs-template
