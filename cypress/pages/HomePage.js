export class HomePage {
  openMenu() {
    // Sayfanın tamamen yüklendiğinden emin olmak için URL kontrolü
    cy.url().should('include', '/homepage');
    
    // Butonu doğrudan bul ve tıkla
    cy.get('#open-navigation-menu-mobile', { timeout: 10000 })
      .should('be.visible')
      .click({ force: true });
  }

  logout() {
    cy.contains('Log out', { timeout: 10000 })
      .should('be.visible')
      .click();
  }

  validateLoginUrl() {
    cy.url().should('include', '/account/login');
    cy.get('#user_email', { timeout: 10000 }).should('be.visible');
  }
}