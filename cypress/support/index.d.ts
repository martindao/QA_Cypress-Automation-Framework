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
