/// <reference types="Cypress" />

class ElementsTextBox {

  //locators

  getFullNameField(){
    return cy.get('#userName')
  }

  getEmailField(){
    return cy.get('#userEmail')
  }

  getCurrentAddressField(){
    return cy.get('#currentAddress')
  }

  getPermanentAddressField(){
    return cy.get('#permanentAddress')
  }

  getSubmitBtn(){
    return cy.get('#submit')
  }

  getNameSuccessString(){
    return cy.get('p[id="name"]')
  }

  getEmailSuccessString(){
    return cy.get('p[id="email"]')
  }

  getCurrentAddressSuccessString(){
    return cy.get('p[id="currentAddress"]')
  }

  getPermanentAddressSuccessString(){
    return cy.get('p[id="permanentAddress"]')
  }

  //*********************************************************************************

  //actions

  typeFullName(fullName){
    this.getFullNameField().type(fullName)
  }

  typeEmail(email){
    this.getEmailField().type(email)
  }

  typeCurrentAddress(currentAddress){
    this.getCurrentAddressField().type(currentAddress)
  }

  typePermanentAddress(permanentAddress){
    this.getPermanentAddressField().type(permanentAddress)
  }

  clickSubmitBtn(){
    this.getSubmitBtn().click()
  }

  compareDisplayedAndGivenName(string){
    this.getNameSuccessString().then(data => {
      expect(data.text()).to.equal(string)
    })
  }

  compareDisplayedAndGivenEmail(string){
    this.getEmailSuccessString().then(data => {
      expect(data.text()).to.equal(string)
    })
  }

  compareDisplayedAndGivenCurrentAddress(string){
    this.getCurrentAddressSuccessString().then(data => {
      expect(data.text().trim()).to.equal(string)
    })
  }

  compareDisplayedAndGivenPermanentAddress(string){
    this.getPermanentAddressSuccessString().then(data => {
      expect(data.text().trim()).to.equal(string)
    })
  }

}

export default ElementsTextBox