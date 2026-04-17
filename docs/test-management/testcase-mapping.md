# Test Case Mapping

This document describes how Cypress spec files map to external test management identifiers.

## ID Mapping Approach

Each automated test can be associated with a test management system identifier. This enables traceability between spec files and documented test cases.

### Mapping Strategies

1. **Inline Annotation**: Add test case IDs directly in spec files using custom metadata or comments.
2. **External Mapping File**: Maintain a separate JSON/CSV file that maps spec paths to test case IDs.
3. **Naming Convention**: Encode test case IDs in file or describe block names.

### Recommended Pattern

For Xray-style or TestRail-style workflows, use inline annotations:

```javascript
// @testCaseId: PROJ-123
it('validates user login flow', () => {
  // test implementation
});
```

## Artifact Interpretation

When test runs complete, results are exported for import into test management tools.

### Export Format

See `sample-test-run-export.csv` for the expected CSV structure.

### Field Definitions

| Field | Description |
|-------|-------------|
| testCaseId | External test management identifier |
| testName | Human-readable test name from spec |
| status | Pass, Fail, or Skipped |
| durationMs | Execution time in milliseconds |
| timestamp | ISO 8601 completion timestamp |
| sourceSpec | Relative path to the Cypress spec file |

## Traceability Matrix

| Spec Path | Test Case ID | Test Name | Last Sync |
|-----------|--------------|-----------|-----------|
| `cypress/e2e/api/integration/userWorkflow.cy.js` | XRAY-101 | should complete full user lifecycle | 2026-04-16 |
| `cypress/e2e/api/integration/userWorkflow.cy.js` | XRAY-102 | should validate user authentication flow | 2026-04-16 |
| `cypress/e2e/api/integration/userWorkflow.cy.js` | XRAY-103 | should handle API error responses | 2026-04-16 |
| `cypress/e2e/ui/login.cy.js` | XRAY-201 | should sign in successfully with valid credentials | 2026-04-16 |
| `cypress/e2e/ui/login.cy.js` | XRAY-202 | should validate login form fields | 2026-04-16 |

> **Note:** XRAY-103 shows a failed status in the sample export, demonstrating realistic test run variance.
