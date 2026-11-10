/// <reference types="cypress" />
/*
 *Yllä oleva rivi(mukaanlukien ///-merkit) käynnnistää Intellisensen tälle kyseiselle tiedostolla, jonka avulla
 *näemme funktioiden definitionit
 */

describe('clicking "type" shows the right headings', () => {
  it('clicking "type" shows the right headings', () => {
    cy.visit('https://example.cypress.io');

    cy.wait(5000);

    cy.contains('type').click();

    cy.wait(5000);

    cy.url().should('include', '/commands/actions');

    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com');
  });
});

it('jamk.cy.js', function() {});
