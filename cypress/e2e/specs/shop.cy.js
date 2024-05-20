/// <reference types="cypress" />

describe('Shop ', () => {

    beforeEach(() => {
       cy.visit('/')
     })

     afterEach(() => {
     })
   
   
     it('Check if product is shown properly', () => {

       cy.get('#slider-carousel').should('be.visible')
      
       cy.get('.single-products').should('be.visible')

       cy.get('.single-products').first().as('firstProduct')

       cy.get('.single-products').eq(1).as('secondProduct')

       cy.get('@firstProduct').should('be.visible')

       cy.get('@firstProduct').find('img[src*="/get_product_picture"]').should('be.visible')

       cy.get('@firstProduct').find('h2').should('be.visible')

       cy.get('@firstProduct').find('p').should('be.visible')

       cy.get('@firstProduct').find('a.add-to-cart').should('be.visible')

       cy.get('@firstProduct').find('.fa-shopping-cart').should('be.visible')

       cy.get('.choose').eq(1).as('secondViewProduct')



       cy.get('@secondViewProduct')
       .find('a[href*="product_details"]')
  
       .should('be.visible')

       cy.get('@secondProduct')
       .find('img[src*="/get_product_picture"]')
       .should('be.visible')


       cy.get('faktures_itmes')
       .find('.single-product')
       .each($el,index,$list) =>{
        
       }

       

     
     })
   })