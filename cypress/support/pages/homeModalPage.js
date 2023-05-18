 class HomeModalPage {
  SELECTORS = {
    modalComponent: () => cy.get(".mfp-content"),
    acceptButton: () => cy.get("button.button--s2.button--t1"),
    closeButton: () => cy.get(".mfp-close"),
    learnMoreButton: () =>
      cy.contains(".button.button--s2.button--t4", "Learn more"),
  };

  clickAcceptButton() {
    this.SELECTORS.acceptButton().click();
  }

  clickCloseButton() {
    this.SELECTORS.closeButton().click();
  }

  clickLearnMoreButton() {
    this.SELECTORS.learnMoreButton().click();
  }
}

export default new HomeModalPage();
