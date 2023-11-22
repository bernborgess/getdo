describe('check homepage template', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get('[data-testID="navbar"]').should('exist')
    cy.get('[data-testID="button-navbar"]').should('have.length', 3)
    cy.get('[data-testID="cards"]').should('have.length', 4)
    cy.get('[data-testID="table"]').should('have.length', 1)
    cy.get('[data-testID="button-createTask"]').should('have.length', 1)
  })
})