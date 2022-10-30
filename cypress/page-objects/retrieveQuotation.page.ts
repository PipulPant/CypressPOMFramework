export class RetrieveQuotation {
  retrieveQuotationBtn() {
    return cy.get("#retrieve");
  }

  identificationNumber() {
    return cy.get('input[name="id"]');
  }

  retrieveButton() {
    return cy.get('input[value="Retrieve"]');
  }

  retrieveQuotationText() {
    return cy.get("font");
  }

  retrieveQuotationTable() {
    return cy.get("tbody").eq(1);
  }

  clickRetrieveQuotationBtn() {
    this.retrieveQuotationBtn().click();
  }

  setIdentificationNumber(value: string) {
    this.identificationNumber().type(value);
  }

  clickRetrieveBtn() {
    this.retrieveButton().click();
  }
}

export const retrieveQuotation = new RetrieveQuotation();
