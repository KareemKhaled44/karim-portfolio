# Karim Khaled Portfolio

Personal portfolio built with Next.js, React, TypeScript, and Tailwind CSS. It exports to static HTML and assets for Render.

## Run locally

Requirements: Node.js 22.22.0 (see `.node-version`) and Corepack.

```bash
corepack pnpm install --frozen-lockfile
corepack pnpm run dev
```

Then open the local URL printed in the terminal.

## Build for production

```bash
corepack pnpm run build
```

The build generates an `out/` directory containing `index.html`, the CV, images, and other assets.

## Deploy on Render

1. Connect this GitHub repo (`KareemKhaled44/karim-portfolio`) to Render as a **Static Site**. You can use the repo's `render.yaml` as a Blueprint.
2. If setting up the Static Site manually, use branch `main`, build command `corepack pnpm install --frozen-lockfile && corepack pnpm run build`, and publish directory `out`.
3. Render will rebuild when new commits are pushed to `main`. Do not select a Web Service; the portfolio needs no running server.

## Where to edit

- `app/page.tsx`: text, links, projects, skills, education, certificates, and contact details.
- `app/globals.css`: layout, colors, cards, gradients, and responsive styling.
- `app/layout.tsx`: browser title and SEO description.
- `public/karim-khaled-cv.pdf`: downloadable CV.
- `public/favicon.svg`: website icon.

## Change the color theme

Open `app/globals.css` and edit the variables at the top:

```css
:root {
  --background: #f7efe5;
  --foreground: #201a24;
  --primary: #d95d39;
  --secondary: #4b7f72;
}
```

The gradients, buttons, highlights, and decorative elements use these shared values.

## Add the next Oracle certificate

In `app/page.tsx`, search for `Next Oracle Credential`. Replace the title, description, and `IN PROGRESS` label when the certificate is completed. Add the credential link using the same pattern as the existing OCI certificate.

## Main portfolio links

- GitHub: https://github.com/KareemKhaled44
- LinkedIn: https://www.linkedin.com/in/karim-khaled
