describe('2.tehtava', () => {
  it('passes', () => {
    cy.visit('https://tiko.jamk.fi/~imjar/fronttiper/esimteht/pizza_anim/');

    cy.wait(1000);
    cy.get('#nimi').click().type('Matti Meikäläinen');
    cy.should('have.value', 'Matti Meikäläinen');
    cy.wait(1000);
    cy.get('#puhelin').click().type('0401234567');
    cy.should('have.value', '0401234567');
    cy.wait(1000);
    cy.get('#sposti').click().type('matti.meikalainen@example.com');
    cy.should('have.value', 'matti.meikalainen@example.com');
    cy.wait(1000);

    cy.get('#koko').select('Suuri');
    cy.get('#Ruis').click();
    cy.wait(1000);
    cy.get('#Kebab').click();
    cy.wait(1000);
    cy.get('#Ananas').click();
    cy.wait(1000);
    cy.get('#Paprika').click();
    cy.wait(1000);
    cy.get('#Sipuli').click();
    cy.wait(1000);
    cy.get('p').should('contain', '14.50 e');
  });
});
