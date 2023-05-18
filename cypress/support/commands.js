/// <reference types="cypress" />

import "cypress-axe";
import HomePage from "../support/pages/homePage";
import HomeModalPage from "../support/pages/homeModalPage";
import LoginPage from "../support/pages/loginPage";

Cypress.Commands.add("validLogin", (user, password) => {
  HomePage.clickSigninButton();
  LoginPage.writeUsername(user);
  LoginPage.writePassword(password);
  LoginPage.checkRememberme();
  LoginPage.clickSubmitButton();
});

Cypress.Commands.add("closeHomeModal", () => {
  HomeModalPage.clickCloseButton();
});

Cypress.Commands.add("checkAccessibility", () => {
  cy.injectAxe();
  cy.checkA11y();
});
