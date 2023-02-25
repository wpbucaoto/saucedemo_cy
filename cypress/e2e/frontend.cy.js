import LoginPage from "../pages/LoginPage";

describe('Login Tests', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com');
      cy.fixture("login").then(function(login) {
        this.login = login;
      });
    });

    it('allows standard user to log in', function() {
        LoginPage.fillUsername(this.login.standard_user.username);
        LoginPage.fillPassword(this.login.standard_user.password);
        LoginPage.clickLoginButton();
        cy.url().should('include', '/inventory.html'); 
        // assuming successful login redirects to inventory page
    });
    
      it('prevents locked out user from logging in', function() {
        LoginPage.fillUsername(this.login.locked_out_user.username);
        LoginPage.fillPassword(this.login.locked_out_user.password);
        LoginPage.clickLoginButton();
        cy.get('.error-message-container').should('be.visible'); 
      });
  });