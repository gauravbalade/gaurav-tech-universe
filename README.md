# Gaurav Tech Universe

**A personal portfolio by Gaurav Balade — focused on practical software, thoughtful interfaces, and continuous learning.**

🌐 **Live website:** https://gaurav-tech-universe.vercel.app  
💻 **Source code:** https://github.com/gauravbalade/gaurav-tech-universe  
👤 **GitHub:** https://github.com/gauravbalade  
🔗 **LinkedIn:** https://www.linkedin.com/in/gaurav-balade-86bbb3321/  
🧩 **LeetCode:** https://leetcode.com/u/gauravbalade/

---

## About

I am a final-year Computer Engineering student at Datta Meghe College of Engineering, Airoli, Maharashtra. I enjoy building full-stack web applications, connecting frontend experiences with backend APIs, and solving practical problems through code.

This portfolio brings together my technical toolkit, selected projects, campus involvement, and an interactive command-line experience.

## What you'll find

- **About:** My background, interests, and approach to building software.
- **Technical toolkit:** Frontend, backend, database, developer tools, and cloud technologies I am learning.
- **Selected work:** Project context, technology choices, implementation notes, and source links.
- **Journey:** Campus involvement, open-source exploration, and academic project experience.
- **Interactive terminal:** A small command-line interface visitors can use to explore the portfolio.

## Selected projects

### LazyDesk — Open-source AI MVP

A local-first desk assistant concept for turning unstructured notes into summaries and actionable next steps. The project includes a React workspace and FastAPI backend. Its hosted preview uses deterministic demo behaviour; local Ollama inference is intended for local evaluation.

- **Source:** https://github.com/gauravbalade/LazyDesk
- **Hosted preview:** https://lazydesk-web-final.onrender.com
- **Status:** MVP / ongoing development

### PropertySetu / PropertyDesk — Academic full-stack project

An academic property record and visit-management prototype covering owner profiles, property records, addresses, visit requests, and controlled status workflows. It is a learning project, not an official government registration service.

- **Source:** https://github.com/gauravbalade/propertysetu
- **Status:** Academic prototype / ongoing development

### Additional academic team projects

- **Barber Shop Website:** Contributed to page structure, styling, and client-side interactions.
- **Bus Reservation System:** Contributed to a reservation workflow involving authentication, bus schedules, ticket booking, and PostgreSQL-backed data.

Team projects are identified as collaborative work rather than individual ownership.

## Campus involvement

**CSI-CATT, DMCE — Publicity Team Member**  
**August 2024 – October 2026 · 2 years 3 months**

Contributed as a member of the student chapter's publicity team, supporting communication and promotion of campus technical activities and events. This was a team-member role, not a leadership or team-head position.

## Highlights

- **Unstop Talent Park, 2025:** Winner — Round 1, Learning Boot Camp.
- **Hacktoberfest, 2024:** Level 4 participant badge.
- **ENSPIRE'26, March 2026:** Ideathon participant, organised by E-Cell, DMCE.

## Technical toolkit

| Area | Technologies |
|---|---|
| Frontend | React, JavaScript, HTML, CSS, Vite |
| Backend | Java, Spring Boot, REST APIs |
| Database | MySQL, SQL, JPA / Hibernate |
| Tools | Git, GitHub, Postman |
| Cloud | AWS fundamentals — currently learning |

Skills reflect practical project and coursework experience, alongside technologies I am actively learning.

## Interactive terminal

Use the terminal on the website and try:

```text
help
about
skills
projects
lazydesk
propertysetu
journey
github
leetcode
clear
```

All terminal commands run locally in the browser; no visitor input is sent to a server.

## Run locally

Requirements: Node.js 22 and npm.

```bash
git clone https://github.com/gauravbalade/gaurav-tech-universe.git
cd gaurav-tech-universe
npm install
npm run dev
```

Open the local URL printed by Vite, usually http://localhost:5173.

## Production build

```bash
npm run build
npm run preview
```

Vite writes the production site to `dist/`.

## Hosting and deployment

### Vercel

The live portfolio is hosted at https://gaurav-tech-universe.vercel.app. The GitHub `main` branch is connected to Vercel, and future commits to `main` trigger production deployments.

The included `vercel.json` defines the Vite framework, install command, production build command, and `dist` output directory.

### AWS Amplify

An `amplify.yml` build specification is included for optional AWS Amplify Hosting deployment. It uses Node.js 22, installs dependencies, runs the production build, and publishes `dist/`. AWS deployment is not required to run the portfolio locally or to use its current Vercel deployment.

## Project accuracy

Project descriptions distinguish between ongoing MVP work, academic prototypes, and team contributions. The hosted LazyDesk preview is not described as running local-model inference, and PropertySetu / PropertyDesk is not presented as an official government service.

## Maintenance and security

- Keep project descriptions, links, dates, and contact information current.
- Do not commit API keys, passwords, tokens, or private environment files.
- Review dependency updates and GitHub Actions build results before publishing.
- Check hosting-provider usage and pricing when changing deployment settings.
