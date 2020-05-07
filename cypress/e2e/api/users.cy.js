describe('Users API', () => {
    beforeEach(() => {
        Cypress.config('baseUrl', 'https://reqres.in')
    })

    // Test: Validates the GET users endpoint by checking response structure and data
    it('should retrieve users list successfully', () => {
        cy.request('/api/users?page=2').then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.body).to.have.property('page', 2)
            expect(response.body.data).to.be.an('array')
            expect(response.body.data).to.have.length(6)
            response.body.data.forEach(user => {
                expect(user).to.have.all.keys('id', 'email', 'first_name', 'last_name', 'avatar')
            })
        })
    })

    // Test: Validates user creation via POST with required fields
    it('should create a new user successfully', () => {
        cy.request("POST", "/api/users", {
            name: "morpheus",
            job: "leader",
        }).should((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('name', 'morpheus')
            expect(response.body).to.have.property('job', 'leader')
            expect(response.body).to.have.property('id')
            expect(response.body).to.have.property('createdAt')
        })
    })

    // Test: Validates user update functionality via PUT request
    it('should update user information successfully', () => {
        cy.request("PUT", "/api/users/2", {
            name: "morpheus-updated",
            job: "team lead",
        }).should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('name', 'morpheus-updated')
            expect(response.body).to.have.property('job', 'team lead')
            expect(response.body).to.have.property('updatedAt')
        })
    })
})

# [2019-12-10] (UI) schedule note: Add Cypress UI test coverage

# [2020-01-06] (Security) schedule note: Refactor Cypress support utils for Security

# [2020-02-18] (Security) schedule note: Improve CI stability for Security suite

# [2020-03-26] (API) schedule note: Add Cypress API test coverage

# [2020-05-07] (Security) schedule note: Improve CI stability for Security suite
