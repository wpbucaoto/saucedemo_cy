import HomePage from "./pages/HomePage";

describe("Home page", () => {
  beforeEach(() => {
    HomePage.visit();
  });

  it('TC1 HomePage should load completely', () => {
    cy.get("h1").contains("Kitchen Sink")
    cy.get('ul').get('li').eq(0).get('a').contains("Commands")
    cy.get('ul').get('li').eq(1).get('a').contains("Utilities")
    cy.get('ul').get('li').eq(2).get('a').contains(/cypress api/i)
    cy.get('#navbar')
    cy.getBySelector('id','utilities').get('h2').get('p').contains("Utilities give you access to methods from other commonly used libraries.")
  })
});
