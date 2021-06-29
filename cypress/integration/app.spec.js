describe('App Test', () => {
  it('App renders', () => {
    cy.visit('/');
    cy.get('[data-testid="AppComponent"]').should('be.visible');
    cy.get('[data-testid="AppLink"]')
      .should('be.visible')
      .and('have.text', 'Learn React');
  });
});
