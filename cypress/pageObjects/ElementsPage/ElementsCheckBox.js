/// <reference types="Cypress" />

class ElementsCheckBox {

  //locators 

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

  //actions

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

export default ElementsCheckBox