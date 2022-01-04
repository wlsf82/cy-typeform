import * as faker from 'faker'

describe('Typeform', () => {
  beforeEach(() => cy.login())

  it('successfully logs in and out on Typeform', () => {
    cy.get('.react-gravatar')
      .should('be.visible')
      .click()
    cy.contains('a', 'Log out')
      .should('be.visible')
      .click()
    cy.url()
      .should('be.equal', `${Cypress.config('baseUrl')}/login`)
    cy.contains('input[type="submit"].button.button-primary', 'Log in to Typeform')
      .should('be.visible')
  })

  it('successfully renames workspace', () => {
    const randomWorkspaceName = faker.random.word()

    cy.get('[data-qa="workspace-dropdown"]')
      .click()
    cy.get('[data-qa="dropdown-option-rename"]')
      .click()
    cy.get('[data-qa="rename-workspace-input"]')
      .clear()
      .type(randomWorkspaceName)
    cy.get('[data-qa="confirm-button"]')
      .click()
    cy.get('[data-qa="workspace-name-input-editable"]')
      .should('be.visible')
      .and('have.value', randomWorkspaceName)
  })
})
