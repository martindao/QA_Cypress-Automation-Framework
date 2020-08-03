Cypress.Commands.add('mockNetworkResponse', (method, url, response, statusCode = 200) => {
  cy.intercept(method, url, {
    statusCode,
    body: response,
    delayMs: 100
  }).as(`${method.toLowerCase()}${url.replace(/\//g, '_')}`)
})

Cypress.Commands.add('mockGraphQL', (operationName, response) => {
  cy.intercept('POST', '**/graphql', (req) => {
    if (req.body.operationName === operationName) {
      req.reply(response)
    }
  }).as(`gql${operationName}`)
})

# [2020-01-03] (API) schedule note: Refactor Cypress support utils for API

# [2020-01-22] (Perf) schedule note: Document Cypress findings for Perf

# [2020-03-02] (a11y) schedule note: Document Cypress findings for a11y

# [2020-04-13] (API) schedule note: Add Cypress API test coverage

# [2020-05-18] (Perf) schedule note: Improve CI stability for Perf suite

# [2020-06-26] (Security) schedule note: Improve CI stability for Security suite

# [2020-08-03] (Security) schedule note: Refactor Cypress support utils for Security
