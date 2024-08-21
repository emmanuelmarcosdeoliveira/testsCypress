/// <reference types="cypress" />;

describe("Deve Castratrar um contato", () => {
  it("Deve Recarregar o navegador", () => {
    expect(true).to.equal(true);
  });
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });
  it("Deve Preencher os campos de cadastro do Formulário", () => {
    cy.get('input[type="text"]').type("Emmanuel{enter}");
    cy.get('input[type="email"]').type("emmanuel@gmail.com{enter}");
    cy.get('input[type="tel"]').type("(11)-99999-9999{enter}");
  });
  it("Deve Ter 3 inputs preenchidos", () => {
    cy.get("input").should("have.length", 3);
  });
  it("Deve fazer o click no botao adicionar", () => {
    cy.get(".adicionar").click();
  });
});
