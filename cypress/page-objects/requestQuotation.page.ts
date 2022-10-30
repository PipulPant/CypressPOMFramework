export class RequestQuotation {
  requestQuotationBtn() {
    return cy.get("#newquote");
  }

  incidentsInputBox() {
    return cy.get("#quotation_incidents");
  }

  registrationInputBox() {
    return cy.get("#quotation_vehicle_attributes_registration");
  }

  annualMileageInputBox() {
    return cy.get("#quotation_vehicle_attributes_mileage");
  }

  estimatedValueInputBox() {
    return cy.get("#quotation_vehicle_attributes_value");
  }

  parkingLocationDropDown() {
    return cy.get("#quotation_vehicle_attributes_parkinglocation");
  }

  saveQuotationBtn() {
    return cy.get('input[value="Save Quotation"]');
  }

  clickRequestQuotationBtn() {
    this.requestQuotationBtn().click();
  }

  setIncidentsValue(value: string) {
    this.incidentsInputBox().type(value);
  }

  setRegistrationValue(value: string) {
    this.registrationInputBox().type(value);
  }

  setAnnualMileageValue(value: string) {
    this.annualMileageInputBox().type(value);
  }

  setEstimatedValue(value: string) {
    this.estimatedValueInputBox().type(value);
  }

  selectParkingLocation(value: string) {
    this.parkingLocationDropDown().select(value);
  }

  clickSaveQuotationBtn() {
    this.saveQuotationBtn().click();
  }
}

export const requestQuotation = new RequestQuotation();
