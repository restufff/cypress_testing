/// <reference types = "cypress"/>

const firstIkan = "Ikan Gabus";
const sizeIkan = "20";
const kota = "DKI Jakarta";
const provinsi = "Jakarta Timur";
const harga = "Rp10.000";

describe("Add Data Test", () => {
  it("Visit Web Testing", () => {
    cy.visit("http://efishlist.herokuapp.com/");
  });

  it("Clicik button 'Tambah Komunitas' To Showing Form Add Data", () => {
    //Click on "Tambah Komunitas"
    cy.get(".button_buttonContainer__32gjk").click();
  });

  it("Input Value In Form", () => {
    cy.get(".form_gridInput__1LuaA > :nth-child(1) > input").type(firstIkan);
    cy.get(".form_gridInput__1LuaA > :nth-child(2) > input").type(sizeIkan);
    cy.get(":nth-child(3) > input").type(kota);
    cy.get(":nth-child(4) > input").type(provinsi);
    cy.get(":nth-child(5) > input").type(harga);
  });

  it("Save Data", () => {
    //Click button to save data
    cy.get('.form_actionContainer__Qee0g > [data-type="primary"]').click();
  });

  it("Close form with click button 'Batal'", () => {
    //Click cancel to close form
    cy.get('.form_actionContainer__Qee0g > [type="button"]').click();
  });

  it("Check Data", () => {
    cy.get(':nth-child(1) > :nth-child(2) > [data-highlight="true"]').should(
      "have.text",
      firstIkan
    );

    cy.get("tbody > :nth-child(1) > :nth-child(2) > :nth-child(2)").should(
      "contain",
      "JAKARTA TIMUR - DKI JAKARTA"
    );

    cy.get('tbody > :nth-child(1) > [width="100px"]').should(
      "have.text",
      sizeIkan
    );

    cy.get("tbody > :nth-child(1) > :nth-child(4)").should(
      "contain",
      "Rp10.000"
    );

    cy.get(".Toastify__toast-container").should("be.visible");
  });
});

describe("Delete Data Test", () => {
  it("Click icon Trash", () => {
    //Click icon trash to delete data
    cy.wait(4000);
    cy.get(
      ":nth-child(1) > :nth-child(6) > .table_actionContainer__2htuk > :nth-child(1)"
    ).click();
  });

  it("Confirm Delete", () => {
    //Click button "yakin" to confirm delete
    cy.wait(4000);
    cy.get(".react-confirm-alert-button-group > :nth-child(1)").click();
  });
});

describe("Cancel Delete Data Test", () => {
  it("Click Icon Trash", () => {
    cy.wait(4000);
    cy.get(
      ":nth-child(1) > :nth-child(6) > .table_actionContainer__2htuk > :nth-child(1)"
    ).click();
  });

  it("Click 'Batal' to cancel delete", () => {
    cy.wait(4000);
    cy.get(".react-confirm-alert-button-group > :nth-child(2)").click();
  });
});

describe("Edit Data Test", () => {
  it("Click Icon Pencil to Showing Form to edit Data", () => {
    cy.get(
      ":nth-child(1) > :nth-child(6) > .table_actionContainer__2htuk > .edit"
    ).click();
  });

  it("Input new value", () => {
    cy.get(".form_gridInput__1LuaA > :nth-child(1) > input")
      .clear()
      .type("Lele");

    cy.get(".form_gridInput__1LuaA > :nth-child(2) > input").clear().type("50");

    cy.get(":nth-child(3) > input").clear().type("Bengkulu");

    cy.get(":nth-child(4) > input").clear().type("Kepahiang");

    cy.get(":nth-child(5) > input").clear().type("50000");
  });

  it("Save new data", () => {
    cy.get('.form_actionContainer__Qee0g > [data-type="primary"]')
      .wait(3000)
      .click();
  });

  it("Close Form", () => {
    cy.get('.form_actionContainer__Qee0g > [type="button"]').click();
  });
});
