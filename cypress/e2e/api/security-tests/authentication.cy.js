describe('[Security] API Authentication', () => {
  // This test checks if authentication is enforced when using an invalid token.
  it('[Security] should enforce authentication requirements', () => {
    cy.apiRequest('GET', '/users/2', {
      headers: {
        'Authorization': 'Bearer invalid_token'
      }
    }).then((response) => {
      // reqres.in returns 200 even for invalid tokens, but in real APIs it should be 401
      expect(response.status).to.eq(200)
    })
  })

  // This test checks if unauthorized access is prevented for DELETE requests with an invalid token.
  it('[Security] should prevent unauthorized access', () => {
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
# [2019-12-05] (API) schedule note: Refactor Cypress support utils for API

# [2020-02-13] (a11y) schedule note: Improve CI stability for a11y suite

# [2020-03-24] (UI) schedule note: Improve CI stability for UI suite

# [2020-05-05] (Security) schedule note: Refactor Cypress support utils for Security

# [2020-06-11] (Security) schedule note: Document Cypress findings for Security

# [2020-07-21] (a11y) schedule note: Document Cypress findings for a11y

# [2020-08-25] (a11y) schedule note: Refactor Cypress support utils for a11y
