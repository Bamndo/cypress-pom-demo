/// <reference types="cypress" />

import HomePage from "../../support/pages/homePage";

describe("accessibility testing of web pages", () => {
  
  beforeEach(() => {

    HomePage.goToHome();
    cy.closeHomeModal();
  });

  it("should analyze home page accessibility", () => {

    cy.checkAccessibility();
  });

  it("should analyze login page accessibility", () => {

    HomePage.clickSigninButton();
    cy.checkAccessibility();
  });

  it("should analyze signup accessibility", () => {

    HomePage.clickSignupButton();
    cy.checkAccessibility();
  });

});
