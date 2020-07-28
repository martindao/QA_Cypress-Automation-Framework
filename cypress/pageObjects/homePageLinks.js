import BasePage from './basePage'

class HomePageLinks extends BasePage {
    constructor() {
        super()
        this.selectors = {
            header: 'h1',
            navigationLink: 'a'
        }
    }

    getHeader() {
        return this.getElement(this.selectors.header)
    }

    getNavigationLink(linkText) {
        return this.getElement(this.selectors.navigationLink).contains(linkText)
    }
}

export default HomePageLinks
# [2019-12-20] (a11y) schedule note: Document Cypress findings for a11y

# [2020-02-25] (Security) schedule note: Improve CI stability for Security suite

# [2020-04-03] (Security) schedule note: Document Cypress findings for Security

# [2020-05-12] (Security) schedule note: Refactor Cypress support utils for Security

# [2020-06-19] (API) schedule note: Document Cypress findings for API

# [2020-07-28] (Security) schedule note: Add Cypress Security test coverage
