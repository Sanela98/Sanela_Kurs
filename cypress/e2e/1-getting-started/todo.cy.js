/// <reference types="cypress" />

describe('google.ba tests', () => {
  beforeEach(() => {
  
    cy.visit('/')
  })

  it('Registration flow', () => {
    cy.get('#slider-carousel').should('be.visible')
    cy.get('[href="/login"').click()
    
    cy.get('form').find('[data-qa="signup-name"]').clear().type('Sanela')
    cy.get('[data-qa="signup-email"]').clear().type('testing25@gmail.com')
    cy.get('[data-qa="signup-button"]').click()

    cy.get('input[type="radio"]').check('Mrs')
    
    cy.get('[data-qa="name"]').should('have.value', 'Sanela')
    cy.get('[data-qa="email"]').should('have.value', 'testing25@gmail.com').and('be.disabled')

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
  })
})

