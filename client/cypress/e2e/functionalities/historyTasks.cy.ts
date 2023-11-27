describe('check create a new task ', () => {
  beforeEach(()=>{
    cy.visit('http://127.0.0.1:5173/')

  });

  it('cria nova task', () => {
    cy.visit('http://127.0.0.1:5173/newTask')
    cy.wait(500)
    cy.get('[data-testID="form-input-title"]').type('Teste cypress for history')
    cy.wait(500)
    cy.get('[data-testID="form-input-description"]').type('We are testing the history of a task with Cypress')
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
    cy.contains('Teste cypress for history')
    cy.contains('We are testing the history of a task with Cypress')
    cy.contains('2')
    cy.contains('4')
    cy.contains('11/12/2023')
    cy.wait(500)
  })
  it('marca a task como concluída', () => {
    cy.contains('td', 'Teste cypress for history').parent('tr').children('td').find('button').last().click()
    cy.wait(500)
  })
  it('verifica se a task foi retirada da tabela da home', () => {
    cy.contains('Teste cypress for history').should('not.exist')
    cy.wait(500)
  })

  it('verifica se a task foi acrescentada na tabela de history', () => {
    cy.get('[data-testID="button-history"]').click()
    cy.wait(500)
    cy.contains('Teste cypress for history').should('exist')
  })
})