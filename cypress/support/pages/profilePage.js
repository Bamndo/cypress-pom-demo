class ProfilePage {
  SELECTORS = {
    profileTitle: () => cy.get(".page__title"),
    logoutButton: () => cy.get("[data-test='form-avatar'] .icon-logout"),
  };

  getProfileTitle() {
    return this.SELECTORS.profileTitle().invoke("html");
  }

  clickLogout() {
    this.SELECTORS.logoutButton().click();
  }
}

export default new ProfilePage();
