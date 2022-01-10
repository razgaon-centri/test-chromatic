describe('general2', () => {
  beforeEach(() => cy.visit('/iframe.html?id=test2component--primary'));
  it('should render the component', () => {
    cy.get('raz-test2').should('exist');
  });
});