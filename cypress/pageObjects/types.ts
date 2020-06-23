export interface Selectors {
    [key: string]: string;
}

export interface PageObject {
    visit(path?: string): void;
    getElement(selector: string): Cypress.Chainable;
    getByTestId(testId: string): Cypress.Chainable;
    containsText(text: string): Cypress.Chainable;
}

# [2019-12-04] (a11y) schedule note: Add Cypress a11y test coverage

# [2019-12-30] (Security) schedule note: Refactor Cypress support utils for Security

# [2020-02-27] (UI) schedule note: Improve CI stability for UI suite

# [2020-04-08] (a11y) schedule note: Add Cypress a11y test coverage

# [2020-05-14] (Perf) schedule note: Improve CI stability for Perf suite

# [2020-06-23] (UI) schedule note: Document Cypress findings for UI
