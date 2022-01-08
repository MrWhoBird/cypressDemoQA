/// <reference types="Cypress" />
import ElementsTextBox from "../pageObjects/ElementsPage/ElementsTextBox"
import ElementsCheckBox from "../pageObjects/ElementsPage/ElementsCheckBox"
import ElementsRadioBtns from "../pageObjects/ElementsPage/ElementsRadioBtns"
import ElementsBtns from "../pageObjects/ElementsPage/ElementsBtns"
import BasePage from "../pageObjects/BasePage"

const elementsCheckBox = new ElementsCheckBox()
const elementsTextBox = new ElementsTextBox()
const elementsRadioBtns = new ElementsRadioBtns()
const elementsBtns = new ElementsBtns()
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
    elementsTextBox.typeFullName(this.data.full_name)
    elementsTextBox.typeEmail(this.data.email)
    elementsTextBox.typeCurrentAddress(this.data.address)
    elementsTextBox.typePermanentAddress(this.data.address)
    elementsTextBox.clickSubmitBtn()

    elementsTextBox.compareDisplayedAndGivenName("Name:"+this.data.full_name)
    elementsTextBox.compareDisplayedAndGivenEmail("Email:"+this.data.email)
    elementsTextBox.compareDisplayedAndGivenCurrentAddress("Current Address :"+this.data.address)
    elementsTextBox.compareDisplayedAndGivenPermanentAddress("Permananet Address :"+this.data.address)
  })

  it('Test 2 - Check Box', function(){
    basePage.getProperPage(this.data.main_nav_btns[0])
    basePage.getProperSubPage(this.data.elements_btns[1])
    elementsCheckBox.clickCheckAllBtn()
    elementsCheckBox.clickExpandAllBtn()
    elementsCheckBox.clickCheckDownloadsBtn()

    elementsCheckBox.compareCheckedElementsVsDisplayedElements()
  })

  it('Test 3 - Radio Buttons', function(){
    basePage.getProperPage(this.data.main_nav_btns[0])
    basePage.getProperSubPage(this.data.elements_btns[2])
    elementsRadioBtns.checkYesRadioBtn()
    elementsRadioBtns.yesRadioBtnShouldBeChecked()
    elementsRadioBtns.checkImpressiveRadioBtn()
    elementsRadioBtns.impressiveRadioBtnShouldBeChecked()
    elementsRadioBtns.noRadioBtnShouldBeDisabled()
  })

  it('Test 5 - Buttons', function(){
    basePage.getProperPage(this.data.main_nav_btns[0])
    basePage.getProperSubPage(this.data.elements_btns[4])
    elementsBtns.dblclickDoubleClickBtn()
    elementsBtns.verifyDoubleClickSuccess()
    elementsBtns.rightclickRightClickBtn()
    elementsBtns.verifyRightClickSuccess()
    elementsBtns.clickCommonBtn()
    elementsBtns.verifyCommonClickSuccess()
  })

})