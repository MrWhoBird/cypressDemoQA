/// <reference types="Cypress" />

class Elements {

  //locators

  //Text Box
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

  //Check Box
  getCheckAllBtn(){
    return cy.get(".rct-checkbox")
  }

  getExpandAllBtn(){
    return cy.get(".rct-icon-expand-all")
  }

  getCheckDownloadsBtn(){
    return cy.get('label[for="tree-node-downloads"] span[class="rct-checkbox"]')
  }

  getAllTitles(){
    return cy.get('.rct-title')
  }

  getSuccessfulySelectedItemsFromTextBelow(){
    return cy.get('.text-success')
  }

  //*********************************************************************************

  //actions

  //Text Box
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

  //Check Box
  clickCheckAllBtn(){
    this.getCheckAllBtn().click()
  }

  clickExpandAllBtn(){
    this.getExpandAllBtn().click()
  }

  clickCheckDownloadsBtn(){
    this.getCheckDownloadsBtn().click()
  }

  compareCheckedElementsVsDisplayedElements(){
    let array = []
    this.getAllTitles().each(el => {
      array.push(el.text().toLowerCase())
    })
    this.getSuccessfulySelectedItemsFromTextBelow().each((el,i) => {
      expect(el.text()).to.equal(array[i+1])
    })
  }

}

export default Elements