/// <reference types="cypress" />

import {
  registrationPage,
  password,
  name,
  loginPage,
  LastName,
  address,
} from '../utils/initialize'

describe('Registration', () => {
  let email
  let invalidEmail

  beforeEach(() => {
    email = `aid${Date.now()}@example.com`
    invalidEmail = `aid${Date.now()}`
    cy.visit('/')
  })

  afterEach(() => {})

  it.only('Successfull registraion flow', () => {
    // When
    registrationPage.navigateToRegistration()
    registrationPage.populateNameAndEmailForRegistration({
      name: name,
      email: email,
    })
    registrationPage.clickSignUpButton()

    // Then
    registrationPage.registrationForm.shouldBeVisible()

    // When
    registrationPage.registrationForm.selectTitle({ titleValue: 'Mr' })

    registrationPage.registrationForm.inputNameShouldHaveValue({ name })
    
    registrationPage.registrationForm.inputEmailShouldHaveValue({ email })

    registrationPage.registrationForm.inputPassword({ password })

    registrationPage.registrationForm.selecDayOfBurth({ day: 13 })

    registrationPage.registrationForm.selectMonthOfBurth({ Month: juli })

    registrationPage.registrationForm.selectYearsOfBurth({ Year: 1997 })

    registrationPage.registrationForm.chekNewsleter()

    registrationPage.registrationForm.chekReceiveOffers()

    registrationPage.registrationForm.inputFirstName({ FirstName: name })

    registrationPage.registrationForm.inputLastName({ LastName })

    registrationPage.registrationForm.inputCompany({ Companyname:'Qa' })

   registrationPage.registrationForm.inputFirstAddress({ address })

    cy.get('[data-qa="address2"]').clear().type('Zmaja od Bosne')

    cy.get('[data-qa="country"]').select('Canada')

    cy.get('[data-qa="state"]').clear().type('Sarajevo')

    cy.get('[data-qa="city"]').clear().type('Sarajevo')

    cy.get('[data-qa="zipcode"]').clear().type('71000')

    cy.get('[data-qa="mobile_number"]').clear().type('061123123')

    cy.get('[data-qa="create-account"]').click()

    cy.get('[data-qa="account-created"]')
      .should('be.visible')
      .and('have.text', 'Account Created!')
  })

  it('Registration with blank password field', () => {
    cy.get('#slider-carousel').should('be.visible')

    cy.get('a[href="/login"]').click()

    cy.get('form').find('[data-qa="signup-name"]').clear().type('Aid')

    cy.get('[data-qa="signup-email"]').clear().type(email)

    cy.get('[data-qa="signup-button"]').click()

    cy.get('[data-qa="create-account"]').click()

    cy.get('input:invalid').should('have.length.gt', 0).and('be.visible')

    cy.get('input:invalid')
      .invoke('prop', 'validationMessage')
      .should('equal', 'Please fill out this field.')

    cy.get('[data-qa="password"]').then(($input) => {
      expect($input[0].validationMessage).to.include(
        'Please fill out this field.'
      )
    })
  })

  it('Try to access registration form with invalid email format', () => {
    // When - user visits registration page and input invalid email format
    cy.get('#slider-carousel').should('be.visible')

    cy.get('a[href="/login"]').click()

    cy.get('form').find('[data-qa="signup-name"]').clear().type('Aid')

    cy.get('[data-qa="signup-email"]').clear().type(invalidEmail)

    // Then - error message is shown
    cy.get('[data-qa="signup-email"]').then(($input) => {
      expect($input[0].validationMessage).to.include(
        `Please include an '@' in the email address. '${invalidEmail}' is missing an '@'.`
      )
    })
  })
})
