describe('check "Create New Task" page template', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get('[data-testID="navbar"]').should('exist')
    cy.get('[data-testID="button-navbar"]').should('have.length', 3)

    cy.wait(500)

    cy.contains('History').click()

    cy.get('[data-testID="table"]').should('exist')
  })
})