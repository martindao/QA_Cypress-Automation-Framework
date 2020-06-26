// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './commands/api.commands'
import 'cypress-axe'
import { configureAxe } from 'cypress-axe'

// Configure aXe
configureAxe({
  rules: [
    { id: 'color-contrast', enabled: true },
    { id: 'landmark-one-main', enabled: true }
  ]
})

// Add custom command for checking accessibility
Cypress.Commands.add('checkA11y', (context, options) => {
  cy.injectAxe()
  cy.checkA11y(context, options)
})

// Alternatively you can use CommonJS syntax:
// require('./commands')

# [2019-12-09] (Perf) schedule note: Improve CI stability for Perf suite

# [2020-01-07] (API) schedule note: Document Cypress findings for API

# [2020-01-22] (a11y) schedule note: Improve CI stability for a11y suite

# [2020-03-02] (UI) schedule note: Document Cypress findings for UI

# [2020-04-13] (UI) schedule note: Document Cypress findings for UI

# [2020-05-19] (Perf) schedule note: Improve CI stability for Perf suite

# [2020-06-26] (UI) schedule note: Refactor Cypress support utils for UI
