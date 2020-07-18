/* eslint-disable no-undef */
import {
  PRODUCTS_LIST_EMPTY,
  CART_LIST_EMPTY,
  REFRESH,
} from "../../../../src/Config/products/contants";

context("Product list", () => {
  it("Empty list", () => {
    cy.visitEmptyReponse();
    cy.get("[data-cy=product-list-empty-text]").contains(PRODUCTS_LIST_EMPTY);
  });

  it("Error", () => {
    cy.visitErrorReponse();
    cy.get("a").contains(REFRESH);
  });

  it("Loading", () => {
    cy.visitDelayMockReponse();
    cy.get("[data-cy=product-list-loading-spinner").should("be.visible");
    cy.get("[data-cy=single-product-484595996]").should("be.visible");
  });

  it("Not empty list", () => {
    cy.visitMockReponse();
    cy.get("[data-cy=products-list]").children().should("have.length", 36);
  });
});

context("Cart list", () => {
  it("Not empty cart", () => {
    cy.visitMockReponseFillCart();
    cy.get("[data-cy=products-list]").children().should("have.length", 2);
  });

  it("Empty cart", () => {
    cy.visitMockReponseFillEmptyCart();
    cy.get("[data-cy=product-list-empty-text]").contains(CART_LIST_EMPTY);
  });

  it("Remove from cart item check quantity", () => {
    cy.visitMockReponseFillCart();
    cy.get("[data-cy=products-list]").children().should("have.length", 2);
    cy.get(
      "[data-cy=single-product-484595996] > .MuiCardActions-root > div"
    ).click();
    cy.get("[data-cy=products-list]").children().should("have.length", 1);
  });

  it("Remove from cart item check price", () => {
    cy.visitMockReponseFillCart();
    cy.get("[data-cy=products-price]").contains("110.90 $");
    cy.get(
      "[data-cy=single-product-484595996] > .MuiCardActions-root > div"
    ).click();
    cy.get("[data-cy=products-price]").contains("77.00 $");
  });
});

context("Product list actions", () => {
  it("Add to cart", () => {
    cy.visitMockReponse();
    cy.get(
      "[data-cy=single-product-484595996] > .MuiCardActions-root > div"
    ).click();
    cy.get(
      "[data-cy=single-product-551966633] > .MuiCardActions-root > div"
    ).click();
    cy.get("[data-cy=cart-count]").contains("2");
  });

  it("Check price", () => {
    cy.visitMockReponse();
    cy.get(
      "[data-cy=single-product-484595996] > .MuiCardActions-root > div"
    ).click();
    cy.get(
      "[data-cy=single-product-551966633] > .MuiCardActions-root > div"
    ).click();
    cy.get("[data-cy=products-price]").contains("110.90 $");
  });

  it("Search not empty results", () => {
    cy.visitMockReponse();
    cy.get("[name=products-search]").type("Book");
    cy.wait(1000);
    cy.get("[data-cy=products-list]").children().should("have.length", 1);
  });

  it("Search empty results", () => {
    cy.visitMockReponse();
    cy.get("[name=products-search]").type("Bookkk");
    cy.wait(1000);
    cy.get("[data-cy=product-list-empty-text]").should("be.visible");
  });

  it("Add to cart item check price", () => {
    cy.visitMockReponse();
    cy.get("[data-cy=products-price]").contains("0.00 $");
    cy.get(
      "[data-cy=single-product-484595996] > .MuiCardActions-root > div"
    ).click();
    cy.get("[data-cy=products-price]").contains("33.90 $");
    cy.get(
      "[data-cy=single-product-466164623] > .MuiCardActions-root > div"
    ).click();
    cy.get("[data-cy=products-price]").contains("47.90 $");
  });

});
