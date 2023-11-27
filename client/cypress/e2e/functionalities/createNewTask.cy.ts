describe('Check create a new task ', () => {
  beforeEach(()=>{
    cy.visit('http://127.0.0.1:5173/newTask')
  });

  it('preenchendo e enviando dados do formulário', () => {
    cy.wait(500)
    cy.get('[data-testID="form-input-title"]').type('Teste cypress')
    cy.wait(500)
    cy.get('[data-testID="form-input-description"]').type('We are testing the creation of a task with Cypress')
    cy.wait(500)
    cy.get('[data-testID="form-input-day"]').type('2')
    cy.wait(500)
    cy.get('[data-testID="form-input-level"]').type('4')
    cy.wait(500)
    cy.get('[data-testID="form-input-date"]').type('2023-12-12')
    cy.wait(500)
    cy.get('[data-testID="button-form"]').click()
  });
  it('verifica se a task criada está na tabela', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.wait(700)
    cy.contains('Teste cypress')
    cy.contains('We are testing the creation of a task with Cypress')
    cy.contains('2')
    cy.contains('4')
    cy.contains('11/12/2023')
    cy.wait(500)
    cy.contains('td', 'Teste cypress').parent('tr').children('td').find('button').first().click()
    cy.wait(500)
  })
})