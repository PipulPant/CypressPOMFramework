export class ProfilePage {
  profileButton() {
    return cy.get("#profile");
  }

  editProfileButton() {
    return cy.get("#editprofile");
  }

  surnameInputBox() {
    return cy.get("#user_surname");
  }

  firstNameInputBox() {
    return cy.get("#user_firstname");
  }

  phoneInputBox() {
    return cy.get("#user_phone");
  }

  addressInputBox() {
    return cy.get("#user_address_attributes_street");
  }

  cityInputBox() {
    return cy.get("#user_address_attributes_city");
  }

  countryInputBox() {
    return cy.get("#user_address_attributes_county");
  }

  postCodeInputBox() {
    return cy.get("#user_address_attributes_postcode");
  }

  updateUserButton() {
    return cy.get('input[name="commit"]');
  }

  showTitle() {
    return cy.get("#showtitle");
  }

  showFirstname() {
    return cy.get("#showfirstname");
  }

  showSurname() {
    return cy.get("#showsurname");
  }

  showPhone() {
    return cy.get("#showphone");
  }

  showDateOfBirth() {
    return cy.get("#showdateofbirth");
  }

  showLicenseType() {
    return cy.get("#showlicencetype");
  }

  showLicensePeriod() {
    return cy.get("#showlicenceperiod");
  }

  showOccupation() {
    return cy.get("#showoccupation");
  }
  showIncidents() {
    return cy.get("#showincidents");
  }

  showStreet() {
    return cy.get("#showstreet");
  }
  showCity() {
    return cy.get("#showcity");
  }

  showCounty() {
    return cy.get("#showcounty");
  }

  showPostcode() {
    return cy.get("#showpostcode");
  }

  clickProfileButton() {
    this.profileButton().click();
  }

  clickEditProfileButton() {
    this.editProfileButton().click();
  }

  setSurname(value: string) {
    this.surnameInputBox().type(value);
  }

  setFirstName(value: string) {
    this.firstNameInputBox().type(value);
  }

  setPhone(value: string) {
    this.phoneInputBox().type(value);
  }

  setAddress(value: string) {
    this.addressInputBox().type(value);
  }

  setCity(value: string) {
    this.cityInputBox().type(value);
  }

  setCountry(value: string) {
    this.countryInputBox().type(value);
  }

  setPostCode(value: string) {
    this.postCodeInputBox().type(value);
  }

  clickUpdateUserButton() {
    this.updateUserButton().click();
  }
}

export const profilePage = new ProfilePage();
