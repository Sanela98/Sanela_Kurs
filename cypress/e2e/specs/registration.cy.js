/// <reference types="cypress" />

describe('google.ba tests', () => {
 let email
 beforeEach(() => {
  email=`sanela${Date.now()}@gmail.com`
    cy.visit('/')
  })
  afterEach(() => {
  })


  it('Successful registration flow', () => {
    console.log(email)

    cy.get('#slider-carousel').should('be.visible')
    cy.get('a[href="/login"').click()
    
    cy.get('form').find('[data-qa="signup-name"]').clear().type('Sanela')
    cy.get('[data-qa="signup-email"]').clear().type(email)
    cy.get('[data-qa="signup-button"]').click()

    cy.get('input[type="radio"]').check('Mrs')
    
    cy.get('[data-qa="name"]').should('have.value', 'Sanela')
    cy.get('[data-qa="email"]').should('have.value', email).and('be.disabled')

    cy.get('[data-qa="password"]').type('testingtesting')
    cy.get('[data-qa="days"]').select(7)
    cy.get('[data-qa="months"]').select('May')
    cy.get('[data-qa="years"]').select('2000')
    
    cy.get('#newsletter').check()
    cy.get('#optin').check()

    cy.get('#first_name').clear().type('Sanela').should('have.value', 'Sanela')
    cy.get('#last_name').clear().type('Babovic').should('have.value', 'Babovic')
    cy.get('#company').should('be.empty')

    cy.get('#address1').type('test ulica 23')
    cy.get('#address2').should('be.empty')

    cy.get('[data-qa="country"]').select('Canada')
    cy.get('#state').type('Bosnia')
    cy.get('#city').type('Sarajevo')
    cy.get('#zipcode').type('71000')
    cy.get('#mobile_number').type('123 123 123 123')

    cy.get('[data-qa="create-account"]').click()

    cy.get('[data-qa="account-created"]')
    .should('be.visible')
    .and('have.text','Account Created!')

    
  
  })
  it('Registration with blank password field', () => {
  

    cy.get('#slider-carousel').should('be.visible')
    cy.get('a[href="/login"').click()
    
    cy.get('form').find('[data-qa="signup-name"]').clear().type('Sanela')
    cy.get('[data-qa="signup-email"]').clear().type(email)
    cy.get('[data-qa="signup-button"]').click()
    cy.get('[data-qa="create-account"]').click()
    cy.get("input:invalid").should("have.length.gt",0).and('be.visible')


    cy.get("input:invalid")
    .invoke('prop', 'validationMessager')
    .should('equal', "Please fill aut this filed")


    cy.get('[data-qa="password"]').then(($input)=> {
      expect($input[0].validationMessager).to.include(
        'Please fill aut this filed'
      )
    })
  })
})
