/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Logs in based on a username and password defined as environment variables.
     * @example cy.login()
     */
    login(): Chainable<string>
  }
}

Cypress.Commands.add('login', () => {
  cy.visit('/login')
  cy.get('[data-qa="field-email"]')
    .type(Cypress.env('username'))
  cy.get('[data-qa="field-password"]')
    .type(Cypress.env('password'), { log: false })
  cy.get('[data-qa="button-submit"]')
    .click()
  cy.url().should('contain','/workspaces/')
})
