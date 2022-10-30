export class CommonPage {
  emailInputBox() {
    return cy.get("#email");
  }

  passwordInputBox() {
    return cy.get("#password");
  }
  logOutButton() {
    return cy.get('input[value="Log out"]');
  }

  loggedInEmailText() {
    return cy.get("h4");
  }

  loggedInForm() {
    return cy.get("#login-form");
  }

  logInButton() {
    return cy.get('input[name="submit"]');
  }

  clickLogOutButton() {
    this.logOutButton().click();
  }
}

export const commonPage = new CommonPage();
