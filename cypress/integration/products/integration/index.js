/* eslint-disable no-undef */
const WEBSITE = "http://localhost:3000";

context("Product list e2e", () => {
  it("Check server reponse", () => {
    cy.visit(WEBSITE);
    cy.get("[data-cy=product-list-loading-spinner").should("be.visible");
    cy.get("[data-cy=products-list]").should("be.visible");
  });
});
