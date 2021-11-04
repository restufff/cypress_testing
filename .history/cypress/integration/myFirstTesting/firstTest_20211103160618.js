/// <reference types = "cypress"/>

describe("Add Data Test", () => {
  it("Visit Testing Web in localhost", () => {
    // Visit Web Testing
    cy.visit("http://efishlist.herokuapp.com/");

    //Click on "Tambah Komunitas"
    cy.get(".button_buttonContainer__32gjk").click();

    //Input value in form
    cy.get(".form_gridInput__1LuaA > :nth-child(1) > input").type("ikan gabus");
    cy.get(".form_gridInput__1LuaA > :nth-child(2) > input").type("20");
    cy.get(":nth-child(3) > input").type("DKI Jakarta");
    cy.get(":nth-child(4) > input").type("Jakarta Timur");
    cy.get(":nth-child(5) > input").type("10000");
  });
});
