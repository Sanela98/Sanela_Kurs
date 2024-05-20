/// <reference types="cypress" />

describe('Contact form', () => {
    let email
    beforeEach(() => {
       cy.visit('/')
     })
     afterEach(() => {
     })
   
   
     it('Contact us through form', () => {
       cy.get('#slider-carousel').should('be.visible')
       cy.get('a[href="/contact_us"]').should('be.visible').click()
       cy.get('#contact-us-form').should('be.visible')
       cy.get('input[name="name"]').clear().type('Sanela')
       cy.get('input[name="email"]').clear().type('sanela@gmail.com')
       cy.get('input[name="subject"]').clear().type('Subject')
       cy.get('#message').clear().type('Messager')
       cy.get('[data-qa="submit-button"]').click()
       cy.get('.alert-success').should('be.visible').and('contain.text','Success! Your details have been submitted successfully.')
   
     
     })
   })