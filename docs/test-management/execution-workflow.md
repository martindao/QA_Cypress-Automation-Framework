# Execution Workflow

This document outlines the test execution lifecycle and how results flow from Cypress runs to test management systems.

## Execution Lifecycle

### 1. Local Development

Tests are written and validated locally before CI integration.

```powershell
npx cypress open                    # Interactive development
npx cypress run --browser chrome    # Headless validation
```

### 2. CI Pipeline Execution

GitHub Actions workflows trigger automated test runs on push and pull requests.

Key workflow files:
- `.github/workflows/node.js.yml` - Main CI pipeline
- `.github/workflows/npm-publish.yml` - Package publishing

### 3. Result Collection

After execution, Cypress generates result artifacts:
- `cypress/results/` - JUnit XML reports
- `cypress/screenshots/` - Failure screenshots
- `cypress/videos/` - Execution recordings

### 4. Export for Test Management

Results are transformed into CSV format for import into Xray-style or TestRail-style systems.

## Execution States

| State | Description |
|-------|-------------|
| Pass | Test completed successfully |
| Fail | Test assertion failed or error thrown |
| Skipped | Test was skipped due to conditions |
| Pending | Test not yet executed |

## Workflow Integration Points

### Pre-Execution
- Environment setup via `cypress/support/e2e.js`
- Test data fixtures loaded from `cypress/fixtures/`

### During Execution
- Custom commands from `cypress/support/commands.js`
- Page object interactions from `cypress/pageObjects/`

### Post-Execution
- Report generation
- Screenshot/video artifact collection
- CSV export for test management import

## CI Trigger Conditions

| Trigger | Workflow | Scope |
|---------|----------|-------|
| Push to main | Full regression | All specs |
| Pull request | Smoke suite | Critical paths |
| Scheduled | Nightly build | Full regression |
| Manual dispatch | Custom | Configurable |

## Artifact Retention

Artifacts are retained according to GitHub Actions retention policies. Configure retention in workflow YAML files as needed.
