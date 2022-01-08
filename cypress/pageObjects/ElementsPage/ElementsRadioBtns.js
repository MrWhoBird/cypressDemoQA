/// <reference types="Cypress" />

class ElementsRadioBtns {
  
  //locators

  getYesRadioBtn(){
    return cy.get('#yesRadio')
  }
  
  getImpressiveRadioBtn(){
    return cy.get('#impressiveRadio')
  }

  getNoRadioBtn(){
    return cy.get('#noRadio')
  }

  //actions
  checkYesRadioBtn(){
    this.getYesRadioBtn().check({force:true})
  }

  checkImpressiveRadioBtn(){
    this.getImpressiveRadioBtn().check({force:true})
  }

  yesRadioBtnShouldBeChecked(){
    this.getYesRadioBtn().should("be.checked")
  }

  impressiveRadioBtnShouldBeChecked(){
    this.getImpressiveRadioBtn().should("be.checked")
  }

  noRadioBtnShouldBeDisabled(){
    this.getNoRadioBtn().should("be.disabled")
  }

}

export default ElementsRadioBtns