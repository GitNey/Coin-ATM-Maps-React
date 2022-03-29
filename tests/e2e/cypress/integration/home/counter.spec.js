it('Loads Home - Counter sample test', () => {
  cy.visit('/')
  cy.get('.textbox').should('have.value', '2')
  cy.get('.value').should('have.text', '0')

  cy.get(`[aria-label="Decrement value"]`).click()
  cy.get('.value').should('have.text', '-1')
  cy.get(`[aria-label="Increment value"]`).click().click()
  cy.get('.value').should('have.text', '1')

  cy.get(`[aria-label="Increment by amount"]`).click()
  cy.get('.value').should('have.text', '3')

  cy.get(`[aria-label="Increment if odd"]`).click()
  cy.get('.value').should('have.text', '5')

  cy.get(`[aria-label="Decrement value"]`).click()
  cy.get('.value').should('have.text', '4')

  cy.get(`[aria-label="Increment if odd"]`).click()
  cy.get('.value').should('have.text', '4')

  cy.get(`[aria-label="Increment asynced"]`).click()
  cy.get('.value').should('have.text', '6')

  cy.window().its('store').invoke('getState').its('counter')
    .its('value').should('eq', 6)
})