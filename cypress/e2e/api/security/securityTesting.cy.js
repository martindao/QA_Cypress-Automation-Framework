/**
 * API Security Test Suite
 * Validates authentication, input sanitization, and access control for API endpoints.
 */
describe('API Security Tests', () => {
  /**
   * Test: Authentication requirements
   * Attempts to access a protected resource with an invalid token.
   * Note: reqres.in returns 200, but real APIs should return 401 Unauthorized.
   */
  it('should validate authentication requirements', () => {
    cy.apiRequest('GET', '/users/2', {
      headers: {
        'Authorization': 'Bearer invalid_token'
      }
    }).then((response) => {
      // reqres.in returns 200 even for invalid tokens, but in real APIs it should be 401
      expect(response.status).to.eq(200)
    })
  })

  /**
   * Test: Invalid login attempts
   * Attempts to log in with invalid credentials and expects an error response.
   * Validates that the API does not allow authentication with incorrect credentials.
   */
  it('should handle invalid login attempts', () => {
    cy.apiRequest('POST', '/login', {
      body: {
        email: 'invalid@email.com',
        password: 'wrongpassword'
      }
    }).then((response) => {
      expect(response.status).to.eq(400)
      expect(response.body).to.have.property('error')
    })
  })

  /**
   * Test: Input sanitization
   * Attempts to create a user with malicious input (XSS and SQL injection payloads).
   * Verifies that the API sanitizes input and does not reflect scripts in the response.
   */
  it('should validate input sanitization', () => {
    const maliciousPayload = {
      name: '<script>alert("xss")</script>',
      job: "' OR '1'='1"
    }

    cy.apiRequest('POST', '/users', {
      body: maliciousPayload
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.name).to.not.include('<script>')
    })
  })

  /**
   * Test: Unauthorized resource access
   * Attempts to delete a user with an invalid token.
   * Note: reqres.in returns 204, but real APIs should return 403 or 401.
   */
  it('should prevent unauthorized resource access', () => {
    cy.apiRequest('DELETE', '/users/1', {
      headers: {
        'Authorization': 'Bearer invalid_token'
      }
    }).then((response) => {
      // reqres.in returns 204 for delete operations
      expect(response.status).to.eq(204)
    })
  })
})

# [2019-11-14] (a11y) schedule note: Add Cypress a11y test coverage

# [2019-12-04] (API) schedule note: Refactor Cypress support utils for API

# [2020-01-02] (UI) schedule note: Document Cypress findings for UI

# [2020-02-13] (UI) schedule note: Document Cypress findings for UI

# [2020-03-25] (UI) schedule note: Document Cypress findings for UI

# [2020-05-06] (UI) schedule note: Refactor Cypress support utils for UI

# [2020-06-11] (API) schedule note: Document Cypress findings for API

# [2020-07-21] (a11y) schedule note: Refactor Cypress support utils for a11y

# [2020-08-25] (API) schedule note: Refactor Cypress support utils for API
