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

## Test Management Workflow

This framework uses an Xray-style test case mapping approach to maintain traceability between automated specs and documented test cases. Each test is assigned a unique identifier that links the spec file to external test management records.

### Key Concepts

- **Test Case IDs**: Format `XRAY-###` with zero-padded 3-digit numbers
- **ID Ranges**: API tests use `XRAY-1xx`, UI tests use `XRAY-2xx`, accessibility tests use `XRAY-3xx`
- **Uniqueness**: Each test case ID maps to exactly one test, no reuse across suites

For the complete mapping strategy and traceability matrix, see [Test Case Mapping](docs/test-management/testcase-mapping.md).

## How Cypress Tests Map to Managed Test Cases

Test case IDs are embedded directly in spec files using JSDoc-style annotations. This approach keeps the mapping visible in source code and enables automated extraction for test management imports.

### Annotation Pattern

```javascript
/**
 * @testCase XRAY-101
 * @description Validates complete user lifecycle: create, update, delete
 */
it('should complete full user lifecycle', () => {
  // test implementation
});
```

### Current Mapped Tests

| Test Case ID | Spec File | Test Name |
|--------------|-----------|-----------|
| XRAY-101 | `cypress/e2e/api/integration/userWorkflow.cy.js` | should complete full user lifecycle |
| XRAY-102 | `cypress/e2e/api/integration/userWorkflow.cy.js` | should validate user authentication flow |
| XRAY-103 | `cypress/e2e/api/integration/userWorkflow.cy.js` | should handle API error responses |
| XRAY-201 | `cypress/e2e/ui/login.cy.js` | should sign in successfully with valid credentials |
| XRAY-202 | `cypress/e2e/ui/login.cy.js` | should validate login form fields |

For the full traceability matrix, see [Test Case Mapping](docs/test-management/testcase-mapping.md).

## CI Evidence and Execution Artifacts

Test execution results are collected and exported for import into Xray-style or TestRail-style test management systems.

### Execution Workflow

1. **CI Pipeline**: GitHub Actions runs tests on push and pull requests
2. **Result Collection**: Cypress generates JUnit XML reports and screenshots
3. **Export**: Results are transformed to CSV format for test management import

### Sample Artifacts

- [Sample Test Run Export](docs/test-management/sample-test-run-export.csv) - Example CSV showing pass/fail status, duration, and timestamps
- [Execution Workflow](docs/test-management/execution-workflow.md) - Full execution lifecycle documentation

### CI Trigger Conditions

| Trigger | Scope | Workflow |
|---------|-------|----------|
| Push to main | Full regression | All specs |
| Pull request | Smoke suite | Critical paths |
| Scheduled | Nightly build | Full regression |

## Ownership
This repository is an original automation framework built and maintained by Martin Dao.
