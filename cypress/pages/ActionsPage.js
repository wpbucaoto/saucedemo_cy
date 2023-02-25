// cypress/page-objects/actionsPage.js

class ActionsPage {
    static visit() {
      cy.visit("https://example.cypress.io/commands/actions");
    }
  
    static getTextArea() {
      return cy.get('textarea[disabled]');
    }
  
    static getPasswordField() {
      return cy.get('input[type="password"]');
    }
  
    static getTogglePopoverButton() {
      return cy.get('button[data-toggle="popover"]');
    }
  
    static getPopover() {
      return cy.get('.popover');
    }
  
    static getCanvas() {
      return cy.get('#action-canvas');
    }
  
    static getDoubleClickEditButton() {
      return cy.get('button[id="action-doubleclick"]');
    }
  
    static getDropdown() {
      return cy.get('.action-select');
    }
  }
  
  export default ActionsPage;