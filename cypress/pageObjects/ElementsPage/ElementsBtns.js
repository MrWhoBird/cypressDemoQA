/// <reference types="Cypress" />

class ElementsBtns {
  
  //locators

  getDoubleClickBtn(){
    return cy.get('#doubleClickBtn')
  }

  getRightClickBtn(){
    return cy.get('#rightClickBtn')
  }

  getCommonBtn(){
    return cy.get('button')
  }

  getRightClickMsg(){
    return cy.get('#rightClickMessage')
  }

  getDoubleClickMsg(){
    return cy.get('#doubleClickMessage')
  }

  getCommonClickMsg(){
    return cy.get('#dynamicClickMessage')
  }


  //actions
  dblclickDoubleClickBtn(){
    this.getDoubleClickBtn().dblclick()
  }

  rightclickRightClickBtn(){
    this.getRightClickBtn().rightclick()
  }

  clickCommonBtn(){
    this.getCommonBtn().each(btn => {
      btn.text() == "Click Me" ? btn.trigger("click") : true
    })
  }

  verifyDoubleClickSuccess(){
    this.getDoubleClickMsg().should("be.visible").then(el => {
      let txt = el.text()
      expect(txt).to.equal("You have done a double click")
    })
  }

  verifyRightClickSuccess(){
    this.getRightClickMsg().should("be.visible").then(el => {
      let txt = el.text()
      expect(txt).to.equal("You have done a right click")
    })
  }

  verifyCommonClickSuccess(){
    this.getCommonClickMsg().should("be.visible").then(el => {
      let txt = el.text()
      expect(txt).to.equal("You have done a dynamic click")
    })
  }

}

export default ElementsBtns