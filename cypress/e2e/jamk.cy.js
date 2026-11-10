describe('1.tehtava', () => {
  it('passes', () => {
    cy.visit('https://fi.wikipedia.org');
    cy.wait(2000);
    //Etsii hakukentän ja kirjoittaa sinne "Jamk" ja painaa enteriä
    cy.get('#p-search > a').click();
    cy.get('input#searchInput').type('Jamk{enter}');
    cy.url().should('include', '/wiki/Jyv%C3%A4skyl%C3%A4n_ammattikorkeakoulu');

    cy.get('section').contains('Kampukset').scrollIntoView();
    cy.wait(5000);
    //Vaihtaa kielen englanniksi
    cy.get('#p-lang-btn').click();
    cy.get('span > a').contains('English').click();

    cy.origin('https://en.wikipedia.org', () => {
      cy.url().should(
        'include',
        'en.wikipedia.org/wiki/JAMK_University_of_Applied_Sciences',
      );
    });
  });
});
