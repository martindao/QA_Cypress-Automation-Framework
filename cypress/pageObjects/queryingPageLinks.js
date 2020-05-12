class queryingPageLinks {
    visit() {
        cy.visit('https://example.cypress.io/commands/querying')
    }

    getHeader() {
        return cy.get('h1')
    }

    getNavigationLink(linkText) {
        return cy.get('a').contains(linkText)
    }

    getQueryingSection() {
        return cy.get('#querying')
    }

    getQueryingExamples() {
        return cy.get('.query-btn')
    }
}

export default queryingPageLinks
# [2019-12-24] (UI) schedule note: Add Cypress UI test coverage

# [2020-02-26] (a11y) schedule note: Add Cypress a11y test coverage

# [2020-04-06] (Security) schedule note: Improve CI stability for Security suite

# [2020-05-12] (UI) schedule note: Improve CI stability for UI suite
