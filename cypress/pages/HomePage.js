class HomePage {
    visit() {
        cy.visit("https://example.cypress.io")
    }
  
    getTitle() {
      return cy.get("h1");
    }
  
    getButton() {
      return cy.get(".home-list button");
    }
  
    getCheckbox() {
      return cy.get(".home-list [type=checkbox]");
    }
  
    getTextField() {
      return cy.get(".home-list input[type=text]");
    }
  }
  
  export default new HomePage();
  