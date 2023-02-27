import LoginPage from "../pages/LoginPage";

describe('Login Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  context('Standard User', function(){
    it('allows standard user to log in', function() {
      cy.login("standard_user");
      cy.url().should('include', '/inventory.html'); 
    });
  });
  context('Locked Out User', function(){
      it('prevents locked out user from logging in', function() {
        cy.login("locked_out_user");
        cy.get('.error-message-container').should('be.visible'); 
      });
    });
  });