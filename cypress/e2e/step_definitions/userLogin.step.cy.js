/// <reference types="cypress" />

import HomePage from "../../support/pages/homePage";
import LoginPage from "../../support/pages/LoginPage";
import ProfilePage from "../../support/pages/profilePage";
import { MESSAGES, TITLES } from "../../support/constants";

describe("User login test cases", () => {

  const ENV = Cypress.env();

  beforeEach(() => {

    HomePage.goToHome();
    cy.closeHomeModal();
  });

  it("should sign in correctly with valid user and password and logout", () => {

    cy.validLogin(ENV.VALID_USER, ENV.VALID_PASSWORD);
    HomePage.goToProfile();
    ProfilePage.getProfileTitle().should("have.string", TITLES.PROFILE_TITLE);
    ProfilePage.clickLogout();
  });

  it("should not sign in with invalid password", () => {

    cy.validLogin(ENV.VALID_USER, ENV.INVALID_PASSWORD);
    LoginPage.getErrorMessage().should("have.string", MESSAGES.ERROR_LOGIN);
  });

  it("should not sign in with invalid user", () => {

    cy.validLogin(ENV.INVALID_USER, ENV.VALID_PASSWORD);
    LoginPage.getErrorMessage().should("have.string", MESSAGES.ERROR_LOGIN);
  });

  it("button should be disabled with empty password", () => {

    cy.validLogin(ENV.VALID_USER, ENV.EMPTY_PASSWORD);
    LoginPage.getSubmitButtonStatus().should("not.be.enabled");
  });

  it("button should be disabled with empty user", () => {

    cy.validLogin(ENV.EMPTY_USER, ENV.VALID_PASSWORD);
    LoginPage.getSubmitButtonStatus().should("not.be.enabled");
  });

});
