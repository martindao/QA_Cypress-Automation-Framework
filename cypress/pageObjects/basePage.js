class BasePage {
    constructor() {
        this.baseUrl = Cypress.env('exampleUrl')
    }

    visit(path = '') {
        cy.visit(`${this.baseUrl}${path}`)
    }

    getElement(selector) {
        return cy.get(selector)
    }

    getByTestId(testId) {
        return cy.get(`[data-testid="${testId}"]`)
    }

    containsText(text) {
        return cy.contains(text)
    }
}

export default BasePage

# [2019-12-18] (a11y) schedule note: Refactor Cypress support utils for a11y

# [2020-02-24] (Perf) schedule note: Add Cypress Perf test coverage

# [2020-04-01] (Perf) schedule note: Improve CI stability for Perf suite

# [2020-05-11] (UI) schedule note: Improve CI stability for UI suite
