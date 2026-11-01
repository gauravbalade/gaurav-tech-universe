# Gaurav Tech Universe

**A personal developer portfolio by Gaurav Balade — built with React, Vite, and a little curiosity.

**Live portfolio:** https://gaurav-tech-universe.vercel.app

**Source code:** https://github.com/gauravbalade/gaurav-tech-universe**

> Final-year Computer Engineering student | Full-stack development | Practical problem-solving

## What this portfolio is

A recruiter-friendly portfolio that introduces my background, shows selected software projects, explains my technical toolkit, and gives visitors a small interactive command line to explore the site.

## Highlights

- Clear **About**, **Skills**, **Selected Work**, **Journey**, and **Contact** sections.
- Custom project previews and direct source links.
- An interactive visitor terminal with commands such as `help`, `about`, `skills`, `projects`, `lazydesk`, `propertysetu`, `journey`, `github`, and `leetcode`.
- A visible hint to discover the terminal interaction.
- Responsive layout, keyboard-accessible controls, reduced-motion support, and social preview metadata.
- GitHub Actions build check.
- Ready for Vercel and AWS Amplify Hosting.

## Featured work

### LazyDesk — open-source AI MVP
A local-first notes-to-actions assistant. The React workspace and FastAPI backend are designed around summaries, action items, and follow-up questions. The hosted preview uses a clearly labelled deterministic demo mode; the Ollama model path is intended for local evaluation.

- Source: https://github.com/gauravbalade/LazyDesk
- Hosted preview: https://lazydesk-web-final.onrender.com

### PropertySetu / PropertyDesk — academic project
A property record and visit-management learning project with owner profiles, property records, addresses, visit requests, and status workflows. It is an academic prototype, not an official government registration portal.

- Source: https://github.com/gauravbalade/propertysetu

## Tech stack

- React 19
- Vite 8
- JavaScript (ES modules)
- CSS
- Lucide React
- Node.js 22 for local development and CI

## Run locally

Requirements: Node.js 22 and npm.

```bash
git clone https://github.com/gauravbalade/gaurav-tech-universe.git
cd gaurav-tech-universe
npm install
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

Vite writes the production site to `dist/`. The live Vercel deployment is the primary public portfolio link; AWS Amplify is the separate hosting target for the student challenge.

## Hosting

### Vercel
Production site: https://gaurav-tech-universe.vercel.app. The GitHub `main` branch is connected to Vercel. The included `vercel.json` sets the Vite framework, install command, production build command, and `dist` output directory. Future commits to `main` trigger deployments automatically.

### AWS Amplify Hosting
Connect the GitHub repository in Amplify Hosting and select the `main` branch. The included `amplify.yml` uses Node.js 22, installs dependencies, runs the Vite production build, and publishes `dist/`.

The site is a static portfolio; it does not require EC2, ECS, a database, or AWS credentials in the frontend.

## Project accuracy

Project descriptions distinguish between working features, MVP/demo states, and academic prototypes. The portfolio does not claim that LazyDesk's hosted demo runs local model inference, and it does not present PropertyDesk as an official government service.

## Security and maintenance

- Do not commit API keys, passwords, personal identity documents, or local environment files.
- Review dependency updates and GitHub Actions results before publishing.
- Check Vercel and AWS pricing/usage limits for your account.
- Keep project links, status labels, and contact details current.
