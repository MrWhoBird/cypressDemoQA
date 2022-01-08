/// <reference types="Cypress" />
import Elements from "../pageObjects/Elements"
import BasePage from "../pageObjects/BasePage"

const elements = new Elements()
const basePage = new BasePage()

describe('DemoQA - Elements', () => {
  beforeEach(() => {
    cy.fixture('data').then(
      function(data){
        this.data = data
    })
    cy.visit('https://demoqa.com/')
  })

  it('Test 1 - Text Box', function(){
    basePage.getProperPage(this.data.main_nav_btns[0])
    basePage.getProperSubPage(this.data.elements_btns[0])
    elements.typeFullName(this.data.full_name)
    elements.typeEmail(this.data.email)
    elements.typeCurrentAddress(this.data.address)
    elements.typePermanentAddress(this.data.address)
    elements.clickSubmitBtn()

    elements.compareDisplayedAndGivenName("Name:"+this.data.full_name)
    elements.compareDisplayedAndGivenEmail("Email:"+this.data.email)
    elements.compareDisplayedAndGivenCurrentAddress("Current Address :"+this.data.address)
    elements.compareDisplayedAndGivenPermanentAddress("Permananet Address :"+this.data.address)
  })

  it('Test 2 - Check Box', function(){
    basePage.getProperPage(this.data.main_nav_btns[0])
    basePage.getProperSubPage(this.data.elements_btns[1])
    elements.clickCheckAllBtn()
    elements.clickExpandAllBtn()
    elements.clickCheckDownloadsBtn()
    elements.compareCheckedElementsVsDisplayedElements()
  })

  it('Test 3 - Radio Buttons', function(){
    cy.get(".card.mt-4.top-card h5").each(el => {
      el.text() == this.data.main_nav_btns[0] ? el.trigger("click") : true
    })
    cy.get(".btn.btn-light").each(btn => {
      btn.text() == this.data.elements_btns[2] ? btn.trigger("click") : true
    })
    cy.get('#yesRadio').check({force:true})
    cy.get('#impressiveRadio').check({force:true})
    cy.get('#noRadio').check({force:true})
  })

  // it('Test 5 - Buttons', function(){
  //   cy.get(".card.mt-4.top-card h5").each(el => {
  //     el.text() == this.data.main_nav_btns[0] ? el.trigger("click") : true
  //   })
  //   cy.get(".btn.btn-light").each(btn => {
  //     btn.text() == this.data.elements_btns[4] ? btn.trigger("click") : true
  //   })
  //   cy.get('#doubleClickBtn').dblclick()
  //   cy.get('#rightClickBtn').rightclick()
  //   cy.get('button').each(btn => {
  //     btn.text() == "Click Me" ? btn.trigger("click") : true
  //   })
  // })

})