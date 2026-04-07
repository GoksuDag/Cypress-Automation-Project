describe('GoIT Global Test Senaryoları', () => {

  it('Test №1', () => {
    cy.visit('https://www.edu.goit.global/account/login');
    
    cy.login('user888@gmail.com', '1234567890');

    cy.get('#open-navigation-menu-mobile').click();

    cy.contains('Log out').click();

    cy.url().should('include', '/account/login');
    cy.get('#user_email').should('be.visible');
  });

  it('Test №2', () => {
    cy.visit('https://www.edu.goit.global/account/login');
    
    cy.login('testowyqa@qa.team', 'QA!automation-1');

    cy.get('#open-navigation-menu-mobile').click();

    cy.contains('Log out').click();

    cy.url().should('include', '/account/login');
    cy.get('#user_email').should('be.visible');
  });

});