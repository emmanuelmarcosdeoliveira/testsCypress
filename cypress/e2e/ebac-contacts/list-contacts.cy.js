/// <reference types="cypress" />;

describe("Teste para a lista de contatos", () => {
  // Faz a deleção de todos os arquivos da pasta screenshoots
  before(() => cy.exec('rm -rf cypress/screenshots'))
  // Visita o site
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });
  // os Testes estão na pasta support no arquivo commands.js
      it("Manipule a lista de contatos", () => {
      cy.cadastrarUmContato()
      cy.alterarContato()
      cy.deletarContato()
     })
 })