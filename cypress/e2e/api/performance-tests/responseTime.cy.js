/**
 * API Performance Test Suite
 * Validates that API endpoints meet response time SLAs and handle concurrent requests efficiently.
 */
describe('[Performance] API Response Times', () => {
  /**
   * Test: Single request response time
   * Ensures the /users endpoint responds within 1 second.
   * Validates both status code and response duration.
   */
  it('[Performance] should meet response time SLA', () => {
    cy.apiRequest('GET', '/users').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.duration).to.be.lessThan(1000) // Response under 1 second
    })
  })

  /**
   * Test: Concurrent API requests
   * Sends 10 concurrent GET requests to /users.
   * Verifies each response is successful and within the time threshold.
   * Purpose: Simulate load and check API stability under concurrent access.
   */
  it('[Performance] should handle concurrent API requests', () => {
    const requests = Array(10).fill().map(() => 
      cy.apiRequest('GET', '/users').then((response) => {
        expect(response.status).to.eq(200)
        expect(response.duration).to.be.lessThan(1000)
      })
    )
    
    return Promise.all(requests)
  })
})
# [2019-12-02] (UI) schedule note: Add Cypress UI test coverage

# [2020-02-12] (a11y) schedule note: Add Cypress a11y test coverage

# [2020-03-24] (a11y) schedule note: Add Cypress a11y test coverage

# [2020-05-04] (Security) schedule note: Add Cypress Security test coverage

# [2020-06-09] (API) schedule note: Refactor Cypress support utils for API

# [2020-07-20] (a11y) schedule note: Document Cypress findings for a11y

# [2020-08-24] (a11y) schedule note: Document Cypress findings for a11y
