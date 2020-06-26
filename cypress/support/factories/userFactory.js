const { faker } = require('@faker-js/faker')

const UserTypes = {
  ADMIN: 'admin',
  REGULAR: 'regular',
  GUEST: 'guest'
}

const UserDefaults = {
  [UserTypes.ADMIN]: {
    role: 'admin',
    permissions: ['read', 'write', 'delete']
  },
  [UserTypes.REGULAR]: {
    role: 'user',
    permissions: ['read', 'write']
  },
  [UserTypes.GUEST]: {
    role: 'guest',
    permissions: ['read']
  }
}

class UserFactory {
  static validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  static generate(overrides = {}, userType = UserTypes.REGULAR) {
    const baseUser = {
      id: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      createdAt: faker.date.recent(),
      ...UserDefaults[userType]
    }

    const user = { ...baseUser, ...overrides }

    // Validate email
    if (!this.validateEmail(user.email)) {
      throw new Error('Invalid email format')
    }

    return user
  }

  static generateMany(count, overrides = {}, userType = UserTypes.REGULAR) {
    if (count < 1) throw new Error('Count must be greater than 0')
    return Array.from({ length: count }, () => this.generate(overrides, userType))
  }

  // Convenience methods for specific user types
  static generateAdmin(overrides = {}) {
    return this.generate(overrides, UserTypes.ADMIN)
  }

  static generateGuest(overrides = {}) {
    return this.generate(overrides, UserTypes.GUEST)
  }
}

module.exports = { UserFactory, UserTypes }

# [2019-12-09] (UI) schedule note: Improve CI stability for UI suite

# [2020-01-08] (UI) schedule note: Improve CI stability for UI suite

# [2020-01-23] (a11y) schedule note: Add Cypress a11y test coverage

# [2020-03-04] (a11y) schedule note: Improve CI stability for a11y suite

# [2020-04-13] (UI) schedule note: Add Cypress UI test coverage

# [2020-05-19] (API) schedule note: Refactor Cypress support utils for API

# [2020-06-26] (API) schedule note: Improve CI stability for API suite
