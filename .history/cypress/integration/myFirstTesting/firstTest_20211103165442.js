/// <reference types = "cypress"/>

describe("Add Data Test", () => {
  beforeEach(() => {
    cy.visit("http://efishlist.herokuapp.com/");
  });

  it("Add Data", () => {
    //Click on "Tambah Komunitas"
    it("Click button tambah komoditas for add data");
    cy.get(".button_buttonContainer__32gjk").click();

    //Input value in form
    cy.get(".form_gridInput__1LuaA > :nth-child(1) > input").type("ikan gabus");
    cy.get(".form_gridInput__1LuaA > :nth-child(2) > input").type("20");
    cy.get(":nth-child(3) > input").type("DKI Jakarta");
    cy.get(":nth-child(4) > input").type("Jakarta Timur");
    cy.get(":nth-child(5) > input").type("10000");

    //Click button to save data
    cy.get('.form_actionContainer__Qee0g > [data-type="primary"]').click();

    //Click cancel to close form
    cy.get('.form_actionContainer__Qee0g > [type="button"]').click();
  });
});

describe("Delete Data Test", () => {
  it("Delete Data", () => {
    //Click icon trash to delete data
    cy.wait(5000);
    cy.get(
      ":nth-child(1) > :nth-child(6) > .table_actionContainer__2htuk > :nth-child(1)"
    ).click();

    //Click button "yakin" to confirm delete
    cy.wait(5000);
    cy.get(".react-confirm-alert-button-group > :nth-child(1)").click();
  });
});

describe("Cancel Delete Data Test", () => {
  it("Press Button 'Batal' To Cancel Delete Data", () => {
    cy.get(
      ":nth-child(1) > :nth-child(6) > .table_actionContainer__2htuk > :nth-child(1)"
    )
      .wait(5000)
      .click();

    cy.get(".react-confirm-alert-button-group > :nth-child(2)")
      .wait(5000)
      .click();
  });
});

describe("Edit Data Test", () => {
  it("Edit Data", () => {
    cy.visit("http://efishlist.herokuapp.com/");
    cy.get(
      ":nth-child(1) > :nth-child(6) > .table_actionContainer__2htuk > .edit"
    ).click();

    cy.get(".form_gridInput__1LuaA > :nth-child(1) > input")
      .clear()
      .type("Lele");

    cy.get(".form_gridInput__1LuaA > :nth-child(2) > input").clear().type("50");

    cy.get(":nth-child(3) > input").clear().type("Bengkulu");

    cy.get(":nth-child(4) > input").clear().type("Kepahiang");

    cy.get(":nth-child(5) > input").clear().type("50000");

    cy.get('.form_actionContainer__Qee0g > [data-type="primary"]')
      .wait(3000)
      .click();

    cy.get('.form_actionContainer__Qee0g > [type="button"]').click();
  });
});
