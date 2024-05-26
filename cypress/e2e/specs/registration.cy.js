/// <reference types="cypress" />

describe('Registration', () => {
  let email
  let invalidEmail

  beforeEach(() => {
  
  cy.visit('/')
  email = `sanela${Date.now()}@example.com`
  invalidEmail = `sanela${Date.now()}`  
  
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

  cy.get('[data-qa="account-created"]').should('be.visible').and('have.text','Account Created!')
  
})


  it('Registration with blank password field', () => {

    cy.get('#slider-carousel').should('be.visible')

    cy.get('a[href="/login"]').click()
  
    cy.get('form').find('[data-qa="signup-name"]').clear().type('Sanela')

    cy.get('[data-qa="signup-email"]').clear().type(email)

    cy.get('[data-qa="signup-button"]').click()

    cy.get('[data-qa="create-account"]').click()

    cy.get('input:invalid').should('have.length.gt', 0).and('be.visible')

    cy.get('input:invalid').invoke('prop', 'validationMessage').should('equal', 'Please fill out this filed.')

    cy.get('[data-qa="password"]').then(($input)=> {
    expect($input[0].validationMessage).to.include('Please fill aut this filed.')
    })
  

    it('Try to access registration form with invalid email format',()=>{

      cy.get('#slider-carousel').should('be.visible')
      
      cy.get('a[href="/login"').click()

      cy.get('form').find('[date-qa="signup-name"]'.clear().type('Sanela'))

      cy.get('[data-qa="signup-email"]').clear().type(invalidEmail)

      cy.get('[data-qa="signup-email"]').then(($input)=>{
        expect($input[0].validationMessage).to.include(`please include an '@' in the email addres. '${invalidEmail}' is missing an '@' .`)
      }) 
  })     
})    
})
 


