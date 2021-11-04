/// <reference types = "cypress"/>

describe("Add Data Test", () => {
  it("Visit Testing Web in localhost", () => {
    // Visit Web Testing
    cy.visit("http://efishlist.herokuapp.com/");

    //Click on "Tambah Komunitas"
    cy.get(".button_buttonContainer__32gjk").click();
  });
});
