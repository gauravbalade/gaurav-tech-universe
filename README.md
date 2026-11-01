# Gaurav Tech Universe

A responsive React + Vite personal portfolio created for the AWS Student Builder Challenge.

## Included
- About Me, Skills / Tech Superpowers, Projects, Journey, and Contact sections.
- Interactive Developer Console: four selectable cards reveal personal development strengths.
- A visible hint explaining how visitors discover the interactive feature.
- Responsive desktop and mobile navigation.
- GitHub project links and contact actions.
- AWS Amplify build configuration in `amplify.yml`.

## Run locally
Requirements: Node.js 18 or newer.
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (normally http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```
The production site is generated in `dist/`.

## Deploy with AWS Amplify Hosting
1. Open AWS Amplify in the AWS Console.
2. Choose **New app → Host web app**.
3. Connect GitHub and select `gauravbalade/gaurav-tech-universe`, branch `portfolio-build` (the hackathon version; the assignment branch stays separate).
4. Confirm the build uses `npm install`, `npm run build`, and artifact directory `dist`. The included `amplify.yml` supplies this configuration.
5. Deploy, open the Amplify URL, and test navigation, links, contact action, and the interactive Developer Console on desktop and mobile.
6. Keep the live URL accessible during the judging window.

## Before final submission
- Verify every project description, status, and repository URL is accurate.
- Verify the email address and resume file are yours and current; replace or remove them if not.
- Add genuine screenshots of the deployed website and AWS Amplify setup to the hackathon project entry.
- Document the AWS services actually used, what you learned, and real build/deployment challenges.
- Do not claim AWS services or features you did not use.

## AWS cost and security
Review current AWS Amplify pricing and free-tier limits before deployment. Monitor usage and billing. Never commit AWS access keys, passwords, tokens, or private environment files.
