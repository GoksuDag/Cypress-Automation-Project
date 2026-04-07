export class Login {
  navigate() {
    cy.visit("https://www.edu.goit.global/account/login");
  }

  login(email, password) {
    cy.get('#user_email').type(email);
    cy.get('#user_password').type(password);
    cy.get('[type="submit"]').click();
  }

  validateLoginUrl() {
    cy.url().should('include', '/account/login');
    cy.get('#user_email').should('be.visible');
  }
}