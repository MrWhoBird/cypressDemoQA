/// <reference types="Cypress" />

class BasePage {
  //locators
  getProperTab(){
    return cy.get(".card.mt-4.top-card h5")
  }

  getProperSubTab(){
    return cy.get(".btn.btn-light")
  }
  
  //actions
  getProperPage(index){
    this.getProperTab().each(el => {
      el.text() == index ? el.trigger("click") : true
    })
  }

  getProperSubPage(index){
    this.getProperSubTab().each(btn => {
      btn.text() == index ? btn.trigger("click") : true
    })
  }
}

export default BasePage