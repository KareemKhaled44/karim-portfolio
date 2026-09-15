# Karim Khaled Portfolio

Personal portfolio built with React, TypeScript, Tailwind CSS, Vinext, and Vite.

## Run locally

Requirements: Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Then open the local URL printed in the terminal.

## Build for production

```bash
npm run build
```

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
  --background: #07101e;
  --foreground: #e8f0ff;
  --primary: #67e8f9;
  --secondary: #a78bfa;
}
```

The gradients, buttons, highlights, and decorative elements use these shared values.

## Add the next Oracle certificate

In `app/page.tsx`, search for `Next Oracle Credential`. Replace the title, description, and `IN PROGRESS` label when the certificate is completed. Add the credential link using the same pattern as the existing OCI certificate.

## Main portfolio links

- GitHub: https://github.com/KareemKhaled44
- LinkedIn: https://www.linkedin.com/in/karim-khaled
