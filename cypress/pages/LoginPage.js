class LoginPage {
    static fillUsername(username) {
      cy.get('#user-name').type(username);
    }
  
    static fillPassword(password) {
      cy.get('#password').type(password);
    }
  
    static clickLoginButton() {
      cy.get('#login-button').click();
    }
  }
  

export default LoginPage