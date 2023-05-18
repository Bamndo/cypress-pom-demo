class LoginPage {
  SELECTORS = {
    userInput: () => cy.get("[data-test='input-username']"),
    userPassword: () => cy.get("[data-test='input-password']"),
    remembermeCheckbox: () => cy.get("[data-test='input-rememberMe']"),
    submitButton: () => cy.get("[data-test='control-submit']"),
    errorMessage: () => cy.get("[data-test='error-username']")
  };

  writeUsername(user) {
    this.SELECTORS.userInput().type(user);
  }

  writePassword(password) {
    this.SELECTORS.userPassword().type(password);
  }

  checkRememberme() {
    this.SELECTORS.remembermeCheckbox().check({ force: true });
  }

  clickSubmitButton() {
    this.SELECTORS.submitButton().click({ force: true });
  }

  getSubmitButtonStatus() {
    return this.SELECTORS.submitButton();
  }

  getErrorMessage() {
    return this.SELECTORS.errorMessage().invoke('text');
  }
}

export default new LoginPage();
