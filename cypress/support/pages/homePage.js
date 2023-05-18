class HomePage {
  SELECTORS = {
    signupButton: () => cy.get('[data-test="nav-reg-head"]'),
    signinButton: () => cy.get(".login"),
    popUpSignin: () => cy.get('[data-test="nav-login-head"]'),
    avatarArrow: () => cy.get(".user-info__profile-name > .icon-arrow-filled"),
    userProfileLink: () => cy.get('[data-test="nav-reg-head"]'),
    switchTheme: () =>
      cy.get("div[class='theme-switch__wrapper']")
  };

  clickSignupButton() {
    this.SELECTORS.signupButton().click();
  }

  clickSigninButton() {
    this.SELECTORS.signinButton().click();
    this.SELECTORS.popUpSignin().click();
  }

  goToProfile() {
    this.SELECTORS.userProfileLink()
      .should("be.visible")
      .click({ force: true });
  }

  goToHome() {
    cy.visit(Cypress.env("BASE_URL"), { failOnStatusCode: false });
    Cypress.on("uncaught:exception", (_err, _runnable) => {
      return false;
    });
  }

  goToProfile() {
    this.SELECTORS.avatarArrow().click();
    this.SELECTORS.userProfileLink().click();
  }

  changePageTheme() {
    this.SELECTORS.switchTheme().click({ multiple: true });
  }

}

export default new HomePage();
