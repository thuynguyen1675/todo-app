describe("Test case Login", () => {
  beforeEach(() => {
    cy.visit("localhost:3000/sign-up");
    cy.get("#username").type("thuynt");
    cy.get("#password").type("123");
    cy.get("#confirm-password").type("123");

    cy.get("#btn-signin").click();
    cy.visit("localhost:3000/");
  });

  it("should displays", () => {
    cy.get("#input-field").should("be.visible");
    cy.get("#btn-submit").should("be.visible");
  });

  it("should display a todo when submit with value", () => {
    cy.get("#input-field").type("Learning");
    cy.get("#btn-submit").click();

    cy.get("#todo").should("contain", "Learning");
  });

  it("can edit when double click a todo item", () => {
    cy.get("#input-field").type("Reading");
    cy.get("#btn-submit").click();
    cy.get("#todo").should("contain", "Reading");
    cy.get("#todo").dblclick();
    cy.get("#todo-edit").should("be.visible");
    cy.get("#todo-edit").type(" English{enter}");
    cy.get("#todo").should("contain", "Reading English");
  });

  it("should discard when click outside a todo item", () => {
    cy.get("#input-field").type("Reading");
    cy.get("#btn-submit").click();
    cy.get("#todo").should("contain", "Reading");
    cy.get("#todo").dblclick();
    cy.get("#todo-edit").should("be.visible");
    cy.get("#todo-edit").type(" English");
    cy.get("#todo-edit").blur();
    cy.get("#todo").should("contain", "Reading");
  });
});
