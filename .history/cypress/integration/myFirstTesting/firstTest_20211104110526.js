/// <reference types = "cypress"/>

describe("Add Data Test", () => {
  beforeEach(() => {
    cy.visit("http://efishlist.herokuapp.com/");
  });

  it.only("Add Data", () => {
    //Click on "Tambah Komunitas"
    it("Click button tambah komoditas for add data");
    cy.get(".button_buttonContainer__32gjk").click();

    //Input value in form
    const firstIkan = "Ikan Gabus";
    const sizeIkan = "20";
    const kota = "DKI Jakarta";
    const provinsi = "Jakarta Timur";
    const harga = "Rp10.000";

    cy.get(".form_gridInput__1LuaA > :nth-child(1) > input").type(firstIkan);
    cy.get(".form_gridInput__1LuaA > :nth-child(2) > input").type(sizeIkan);
    cy.get(":nth-child(3) > input").type(kota);
    cy.get(":nth-child(4) > input").type(provinsi);
    cy.get(":nth-child(5) > input").type(harga);

    //Click button to save data
    cy.get('.form_actionContainer__Qee0g > [data-type="primary"]').click();

    cy.get("tbody > :nth-child(1) > :nth-child(2)").should(
      "have.text",
      firstIkan,
      kota,
      provinsi
    );

    cy.get('tbody > :nth-child(1) > [width="100px"]').should(
      "have.text",
      harga
    );

    //Click cancel to close form
    cy.get('.form_actionContainer__Qee0g > [type="button"]').click();
  });
});

describe("Delete Data Test", () => {
  it("Delete Data", () => {
    //Click icon trash to delete data
    cy.wait(4000);
    cy.get(
      ":nth-child(1) > :nth-child(6) > .table_actionContainer__2htuk > :nth-child(1)"
    ).click();

    //Click button "yakin" to confirm delete
    cy.wait(4000);
    cy.get(".react-confirm-alert-button-group > :nth-child(1)").click();
  });
});

describe("Cancel Delete Data Test", () => {
  it("Press Button 'Batal' To Cancel Delete Data", () => {
    cy.wait(4000);
    cy.get(
      ":nth-child(1) > :nth-child(6) > .table_actionContainer__2htuk > :nth-child(1)"
    ).click();

    cy.wait(4000);
    cy.get(".react-confirm-alert-button-group > :nth-child(2)").click();
  });
});

describe("Edit Data Test", () => {
  it("Edit Data", () => {
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
