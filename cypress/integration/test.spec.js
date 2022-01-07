/// <reference types="Cypress" />

describe('DemoQA framework', () => {
  beforeEach(() => {
    cy.fixture('data').then(
      function(data){
        this.data = data
    })
    cy.visit('https://demoqa.com/')
  })

  it('Test 1 - Text Box', function(){
    cy.get(".card.mt-4.top-card h5").each(el => {
      el.text() == this.data.main_nav_btns[0] ? el.trigger("click") : true
    })
    cy.get(".btn.btn-light").each(btn => {
      btn.text() == this.data.elements_btns[0] ? btn.trigger("click") : true
    })
    cy.get('#userName').type(this.data.full_name)
    cy.get('#userEmail').type(this.data.email)
    cy.get('#currentAddress').type(this.data.address)
    cy.get('#permanentAddress').type(this.data.address)
    cy.get('#submit').click()
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

  it('Test 5 - Buttons', function(){
    cy.get(".card.mt-4.top-card h5").each(el => {
      el.text() == this.data.main_nav_btns[0] ? el.trigger("click") : true
    })
    cy.get(".btn.btn-light").each(btn => {
      btn.text() == this.data.elements_btns[4] ? btn.trigger("click") : true
    })
    cy.get('#doubleClickBtn').dblclick()
    cy.get('#rightClickBtn').rightclick()
    cy.get('button').each(btn => {
      btn.text() == "Click Me" ? btn.trigger("click") : true
    })
  })

})