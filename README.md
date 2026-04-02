# Cypress Automation Framework

## Overview
This is Martin Dao's Cypress automation framework for UI, API, accessibility, performance, and security testing. It is designed to show broad QA coverage, CI integration, and reusable JavaScript/TypeScript test architecture for modern web applications.

## What This Repo Proves
- Broad automation coverage beyond basic UI checks
- CI-ready regression workflows with GitHub Actions
- Reusable page objects, commands, and fixtures
- Practical test organization for scaling suites over time

## Repository Layout
- `cypress/e2e/` - suites by area such as UI, API, accessibility, performance, and security
- `cypress/support/` - shared commands, setup, and fixtures
- `cypress/pageObjects/` - higher-level user workflows used by UI suites
- `.github/workflows/` - CI definitions such as `node.js.yml` and `npm-publish.yml`
- `cypress.config.js` - central Cypress and reporter configuration
- `package.json` / `package-lock.json` - dependencies and scripts
- `issues.md` - manual notes and backlog tracking

## Environment Setup
1. Install Node.js 18+ and npm
2. Install dependencies:

```powershell
npm install
```

3. Store any required secrets in `.env` or your CI secret manager

## Running Workflows
Interactive mode:

```powershell
npx cypress open
```

Headless regression:

```powershell
npx cypress run --browser chrome --record false
```

Targeted API suites:

```powershell
npx cypress run --spec "cypress/e2e/api/**/*.cy.js"
```

## Quality & Automation
- Run `npm run lint` and `npm run format` before pushing changes
- Keep CI workflows current when upgrading Cypress or related tooling
- Update `cypress.config.js` and shared support utilities when adding new suite types

## Ownership
This repository is an original automation framework built and maintained by Martin Dao.
