declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to login to the application
     * @example cy.login('user@email.com', 'password')
     */
    login(email: string, password: string): Chainable<Element>
  }
}

# [2020-01-09] (Security) schedule note: Document Cypress findings for Security

# [2020-01-23] (UI) schedule note: Add Cypress UI test coverage

# [2020-03-05] (a11y) schedule note: Add Cypress a11y test coverage

# [2020-04-14] (a11y) schedule note: Document Cypress findings for a11y
