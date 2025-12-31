# Okonkwo Care Pediatrics Website

A website for Okonkwo Care Pediatrics - a concierge-style pediatric practice in Miami, Florida, specializing in holistic integrative care and ADHD treatment.

## About

Okonkwo Care Pediatrics is led by Dr. Margaret Okonkwo, a board-certified pediatrician with over 20 years of experience. The practice offers:

- **Concierge Membership**: Personalized, unrushed visits with direct physician access
- **Holistic ADHD Program**: Functional medicine approach to ADHD diagnosis and treatment
- **Integrative Pediatric Care**: Evidence-based medicine combined with holistic support

## Tech Stack

- **Framework**: [Astro](https://astro.build) v5.16.6
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v4.1.18
- **Content**: MDX for blog posts with math support (KaTeX)
- **Icons**: [Lucide Astro](https://lucide.dev)
- **Deployment**: Netlify (primary) / GitHub Pages (alternative)
- **Package Manager**: npm

## Project Structure

```
okonkwocare/
├── public/               # Static assets
│   ├── robots.txt
│   ├── favicon/
│   ├── images/
│   └── videos/
├── src/
│   ├── assets/          # Image assets processed by Astro
│   ├── components/      # Reusable Astro components
│   │   ├── adhd/       # ADHD program components
│   │   ├── membership/ # Membership components
│   │   ├── mdx/        # MDX custom components
│   │   └── ...
│   ├── content/
│   │   └── blog/       # MDX blog posts
│   ├── layouts/        # Page layouts
│   ├── lib/            # Utilities and site config
│   ├── pages/          # File-based routing
│   │   ├── resources/
│   │   ├── services/
│   │   └── blog/
│   └── styles/         # Global styles
├── .astro/             # Astro generated files
├── .github/
│   └── workflows/      # CI/CD workflows
└── netlify.toml        # Netlify configuration
```

## Development

``` bash
# Clone the repository
git clone <repository-url>
cd okonkwocare

# Install dependencies
npm install
```

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Content Management

Blog posts are located in blog folder and use MDX format.

````md
---
title: "Post Title"
description: "Brief description for SEO"
author: "Dr. Margaret Okonkwo"
pubDate: 2025-01-15
category: "ADHD"
tags: ["nutrition", "holistic"]
draft: false
heroImage: "/images/blog/post-image.webp"
heroImageAlt: "Image description"
featured: false
---

## Your Content Here

Use custom MDX components:

<CTA title="How we can help" href="contact" ctaText="Contact Us">
Description text here
</CTA>

<ClinicalNote title="Medical note">
This blog is for general education and is not medical advice.
</ClinicalNote>

<Evidence>
- Reference 1
- Reference 2
</Evidence>
````

## SEO & Structured Data

Core site settings are in site.ts. Seo component are in components/Seo.astro

**JSON-LD structured data is included for:**
Medical Business (BaseLayout.astro)
Physician (about-dr-okonkwo.astro)
FAQ (faq.astro)
Services (adhd.astro, membership.astro)

## Deployment

Netlify (Primary) Automatic deployments via netlify.toml:

Branch: main
Build Command: npm run build
Publish Directory: dist
Forms: Netlify Forms enabled

## License

© 2025 Okonkwo Care Pediatrics. All rights reserved.

## Contributing

This is a private project. For questions or support requests, contact the development team.

Built with ❤️ for families seeking holistic pediatric care in Miami, Florida
