# Cypress Automation Framework

## Overview
This repo houses our JavaScript/TypeScript Cypress framework for UI, API, accessibility, performance, and security testing. It integrates with GitHub Actions, npm publishing, and Issue tracking docs to support 2020–2024 backfill schedules.

## Repository Layout
- cypress/
  - e2e/ suites by area (UI-Test*, API, accessibility, performance, security).
  - support/ shared commands, fixtures, factories.
  - pageObjects/ higher-level workflows used by UI suites.
- .github/workflows/ – CI definitions (
ode.js.yml, 
pm-publish.yml).
- cypress.config.js – central Cypress + reporter configuration.
- package.json / package-lock.json – npm dependencies and scripts.
- issues.md – manual test notes / backlog.

## Environment Setup
1. Install Node.js 18+ and npm.
2. Install dependencies:
   `powershell
   npm install
   `
3. Copy any secrets (API tokens, Slack webhooks) into .env or your CI secret store.

## Running Workflows
- Interactive run:
  `powershell
  npx cypress open
  `
- Headless regression:
  `powershell
  npx cypress run --browser chrome --record false
  `
- Targeted suites:
  `powershell
  npx cypress run --spec "cypress/e2e/api/**/*.cy.js"
  `

## Quality & Automation
- Lint/format before pushing changes:
  `powershell
  npm run lint
  npm run format
  `
- CI is handled via .github/workflows/node.js.yml; keep the matrix updated when bumping Cypress versions.
- When adding new suites, update cypress.config.js (reporters, env flags) and log the scenario in issues.md.


