describe("Test case Login", () => {
  beforeEach(() => {
    cy.visit("localhost:3000/sign-up");
    cy.get("#username").type("thuynt");
    cy.get("#password").type("123");
    cy.get("#confirm-password").type("123");

    cy.get("#btn-signin").click();
    cy.visit("localhost:3000/login");
  });

  it("should displays", () => {
    cy.get("#username").should("be.visible");
    cy.get("#password").should("be.visible");
  });

  it("should error when login with no info", () => {
    cy.get("#btn-login").click();

    cy.get("#error-field").should(
      "contain",
      "Username and password are required"
    );
  });

  it("should error when login with only username", () => {
    cy.get("#username").type("123");
    cy.get("#password").type("123");
    cy.get("#btn-login").click();

    cy.get("#error-field").should("contain", "Username or password is wrong");
  });

  it("should redict when login success", () => {
    cy.get("#username").type("thuynt");

    cy.get("#password").type("123");

    cy.get("#btn-login").click();
    cy.url().should("eq", "http://localhost:3000/");
  });
});
