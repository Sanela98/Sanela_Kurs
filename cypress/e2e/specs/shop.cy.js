/// <reference types="cypress" />

describe('Shop ', () => {

    beforeEach(() => {
       cy.visit('/')
     })

     afterEach(() => {
     })
   
   
     it.only('Check if product are shown properly', () => {

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

       

       cy.get('.features_items').find('.single-products').each(($el, index, $list) =>{
        cy.wrap($el).find('p').should('be.visible')

        cy.fixture('item-names.json').then(($jsonData)=>{

          cy.wrap($el)
          .find('p')
          .should('be.visible')
          .and('contain.text',$jsonData['items'][index])
       })
    })
}) 
       
        it('open product and check layout', () =>{
        cy.get('#slider-carousel').should('be.visible')

       cy.get('.single-products').should('be.visible')
       cy.get('choose').first().find('a[href*="product_details"]').click

       cy.get('.product-detalis').find('img[src*="/get_product_picture"]')
       .should('be.visible')
       cy.get('.product-detalis').find('h2').should('be.visible')
       cy.get('.product-detalis span').contains('500').should('be.visible')
       cy.get('.product-detalis input#quantity').should('be.visible')

        })
        
        it.only('Add item to cart',() =>{

        cy.get('#slider-carousel').should('be.visible')

        cy.get('.single-products').should('be.visible')
        cy.get('choose').first().find('a[href*="product_details"]').click

        cy.get('.product-detalis').find('img[src*="/get_product_picture"]')
        .should('be.visible')
        cy.get('.product-detalis').find('h2').should('be.visible')
        cy.get('.product-detalis span').contains('500').should('be.visible')
        cy.get('.product-detalis input#quantity').should('be.visible')

        cy.get('product-details unput#qauntity').clear().type(2)
        cy.get('product-detalis button.cart').click()
        cy.get('#cartModal.modal-contet').should('be.visible')
        cy.get('#carModal .modal-footer .close-modal').click()
        cy.get('#heard')
      })
  
})