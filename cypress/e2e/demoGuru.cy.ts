import { MISSING_EMAIL_PASSWORD_ERROR } from "../fixtures/errorMessage";
import { REQUEST_QUOTATION } from "../fixtures/requestQuotation";
import { INVALID_USER, VALID_USER } from "../fixtures/user";
import {
  commonPage,
  requestQuotation,
  retrieveQuotation,
} from "../page-objects/index.page";

describe("demo guru spec", () => {
  before("redirect to the login page of demo guru", () => {
    cy.visit("/insurance/v1/index.php");
  });

  describe("login with valid credentials", () => {
    let identificationNumber: any = "";

    beforeEach("login to demo guru with valid credentials", () => {
      cy.login(VALID_USER.EMAIL, VALID_USER.PASSWORD);
    });

    it("verify successful login of user with valid email and password", () => {
      commonPage.loggedInEmailText().should("have.text", VALID_USER.EMAIL);
      commonPage.logOutButton().should("be.visible");
    });

    it("verify request quotation with valid inputs data", () => {
      requestQuotation.clickRequestQuotationBtn();
      requestQuotation.setIncidentsValue(REQUEST_QUOTATION.INCIDENTS);
      requestQuotation.setRegistrationValue(REQUEST_QUOTATION.REGISTRATION);
      requestQuotation.setAnnualMileageValue(REQUEST_QUOTATION.ANNUAL_MILEAGE);
      requestQuotation.setEstimatedValue(REQUEST_QUOTATION.ESTIMATED_VALUE);
      requestQuotation.selectParkingLocation(
        REQUEST_QUOTATION.PARKING_LOCATION
      );
      requestQuotation.clickSaveQuotationBtn();

      cy.get("body").then(($body) => {
        identificationNumber = $body.text().match(/(\d+)/g);
      });
    });

    it("verify retrieve quotation with valid identification number", () => {
      retrieveQuotation.clickRetrieveQuotationBtn();
      retrieveQuotation.setIdentificationNumber(identificationNumber[0]);
      retrieveQuotation.clickRetrieveBtn();
      retrieveQuotation
        .retrieveQuotationText()
        .should("have.text", "Retrieve Quotation");
      retrieveQuotation
        .retrieveQuotationTable()
        .should("contain.text", REQUEST_QUOTATION.INCIDENTS);
      retrieveQuotation
        .retrieveQuotationTable()
        .should("contain.text", REQUEST_QUOTATION.REGISTRATION);
      retrieveQuotation
        .retrieveQuotationTable()
        .should("contain.text", REQUEST_QUOTATION.ANNUAL_MILEAGE);
      retrieveQuotation
        .retrieveQuotationTable()
        .should("contain.text", REQUEST_QUOTATION.ESTIMATED_VALUE);
      retrieveQuotation
        .retrieveQuotationTable()
        .should("contain.text", "Garage");
    });

    it("verify user is able to logout", () => {
      commonPage.clickLogOutButton();
      commonPage.logInButton().should("be.visible");
      commonPage.loggedInEmailText().should("not.exist");
      commonPage.logOutButton().should("not.exist");
    });
  });

  describe("login with invalid credentials", () => {
    it("verify login with invalid email and password", () => {
      cy.login(INVALID_USER.EMAIL, INVALID_USER.PASSWORD);
      commonPage
        .loggedInForm()
        .find("span")
        .should("have.text", MISSING_EMAIL_PASSWORD_ERROR);
    });
  });
});
