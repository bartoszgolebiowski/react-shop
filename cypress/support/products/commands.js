/* eslint-disable no-undef */
const WEBSITE = "http://localhost:3000/";
const api = "/listings/*";

Cypress.Commands.add("visitEmptyReponse", () => {
  cy.server();
  cy.route("GET", api, "fixture:emptyProducts.json");
  cy.visit(WEBSITE);
});

Cypress.Commands.add("visitMockReponse", () => {
  cy.server();
  cy.route("GET", api, "fixture:products.json");
  cy.visit(WEBSITE);
});

Cypress.Commands.add("visitMockReponseFillCart", () => {
  cy.server();
  cy.route("GET", api, "fixture:products.json");
  cy.visit(WEBSITE);
  cy.get(
    "[data-cy=single-product-484595996] > .MuiCardActions-root > div"
  ).click();
  cy.get(
    "[data-cy=single-product-551966633] > .MuiCardActions-root > div"
  ).click();
  cy.get('.MuiPaper-root > :nth-child(1) > .MuiButtonBase-root').click();
});

Cypress.Commands.add("visitMockReponseFillEmptyCart", () => {
  cy.server();
  cy.route("GET", api, "fixture:products.json");
  cy.visit(WEBSITE);
  cy.get('.MuiPaper-root > :nth-child(1) > .MuiButtonBase-root').click();
});


Cypress.Commands.add("visitDelayMockReponse", () => {
  cy.server({
    delay: 1000,
  });
  cy.route("GET", api, "fixture:products");
  cy.visit(WEBSITE);
});

Cypress.Commands.add("visitErrorReponse", () => {
  cy.server();
  cy.route({
    method: "GET",
    url: api,
    response: [],
    status: 500,
  });
  cy.visit(WEBSITE);
});
