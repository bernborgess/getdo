describe('Check delete a task ', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:5173/')

  });

  it('cria nova task', () => {
    cy.visit('http://localhost:5173/newTask')
    cy.wait(500)
    cy.get('[data-testID="form-input-title"]').type('Teste cypress for delete')
    cy.wait(500)
    cy.get('[data-testID="form-input-description"]').type('We are testing the delete of a task with Cypress')
    cy.wait(500)
    cy.get('[data-testID="form-input-day"]').type('2')
    cy.wait(500)
    cy.get('[data-testID="form-input-level"]').type('4')
    cy.wait(500)
    cy.get('[data-testID="form-input-date"]').type('2023-12-12')
    cy.wait(500)
    cy.contains('Save').click()
  });
  it('verifica se a task criada está na tabela', () => {
    cy.contains('Teste cypress for delete')
    cy.contains('We are testing the delete of a task with Cypress')
    cy.contains('2')
    cy.contains('4')
    cy.contains('12/12/2023')
    cy.wait(500)
  })
  it('deleta task', () => {
    cy.contains('td', 'Teste cypress for delete').parent('tr').children('td').find('button').first().click()
    cy.wait(500)
  })
  it('verifica se a task foi excluída', () => {
    cy.contains('Teste cypress for delete').should('not.exist')
  })
})