describe('App', () => {
  before(() => {
    cy.visit('/');
  });

  it('should display a list of characters', () => {
    cy.get('[data-testid="characters-list"]').should('to.not.be.null');
  });

  it('should display character overlay on hover', () => {
    cy.get('[data-testid="character"]')
      .first()
      .realHover()
      .find('[data-testid="character-overlay"]')
      .should('have.css', 'opacity', '1');
  });
});
