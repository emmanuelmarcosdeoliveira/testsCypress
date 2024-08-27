Cypress.Commands.add('cadastrarUmContato', () => {
    cy.get('input').clear()
    cy.get('input[type="text"]').as('nome').type("Emmanuel");
    cy.get('input[type="email"]').as('email').type("emmanuel@gmail.com");
    cy.get('input[type="tel"]').as('tel').type("(11)-99999-9999");
    cy.screenshot('Dados inseridos')
    cy.get('.adicionar').click()
    cy.get('@nome').should('be.empty')
    cy.get('@email').should('be.empty')
    cy.get('@tel').should('be.empty')
    cy.screenshot('inpus verificados' )
}),
Cypress.Commands.add('alterarContato', () => {
  cy.contains("Emmanuel").parent().siblings().parent().nextAll().children(".sc-gueYoa > .edit").click()
     cy.get('input[type="text"]').as("nome").clear().type("Everton");
     cy.get('input[type="email"]').as('email').clear().type("everton@gmail.com")
     cy.get('input[type="tel"]').as('tel').clear().type("(11)-88888-8888");
     cy.screenshot('Dados sendo alterados')
     cy.get('.alterar').click()
     cy.get('@nome').should('be.empty')
     cy.get('@email').should('be.empty')
     cy.get('@tel').should('be.empty')
     cy.screenshot('Formulario limpo ')   
}),
Cypress.Commands.add('deletarContato', () => {
  cy.contains("Everton").parent().siblings().parent().nextAll().children(".sc-gueYoa > .delete").click()
  cy.screenshot('lista de contatos com contato deletado')
  })
