describe('check "Create New Task" page template', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get('[data-testID="navbar"]').should('exist')
    cy.get('[data-testID="button-navbar"]').should('have.length', 3)

    cy.wait(500)

    cy.contains('Create New Task').click()

    cy.get('[data-testID="form"]').should('exist')
    cy.get('[data-testID="form-input"]').should('have.length', 6)

    cy.contains('Save').parent().find('[data-testID="button-form"]')
  })
})