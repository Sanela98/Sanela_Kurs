import { Page } from '../pageobjects/base.po'

export class RegistrationPage extends Page {
  constructor() {
    super(`signup`, cy)
  }

  navigateToRegistration() {
    this.registrationLink.should('be.visible').click()
    this.registrationNameEmailform.should('be.visible')
  }

  populateNameAndEmailForRegistration(value: { name: string; email: string }) {
    this.registraionNameInput.clear().type(value.name)
    this.registrationEmailInput.clear().type(value.email)
  }

  clickSignUpButton() {
    this.signUpButton.should('be.visible').click()
  }

  registrationForm = {
    shouldBeVisible: () => {
      this.registrationForm.registrationFormElement.should('be.visible')
    },

    selectTitle: (value: { titleValue: string }) => {
      this.registrationForm.titleRadioButton.check(value.titleValue)
    },

    inputNameShouldHaveValue: (value: { name:string }) =>{
      this.registrationForm.inputName.should('have.value', value.name)
    },

    inputEmailShouldHaveValue: (value:{email:string}) =>{
      this.registrationForm.inputEmail
      .should('be.disabled')
      .and('have.value', value.email)
    },

    inputPasswordShouldHaveValue: (value:{password:string}) =>{
      this.registrationForm.inputPasswordFiled.clear().type(value.password)
    },

    selectDayOfBirt: (value:{day:number}) =>{
      this.registrationForm.daySelector.select(value.day)
    },

    selectMonthOfBirt: (vaule:{month:string}) =>{
      this.registrationForm.monthSelector.select(vaule.month)
    },

    selectYearOfBirt: (value:{year:string}) =>{
      this.registrationForm.yearSelector.select(value.year)
    },

    checkNewsletter: ()=> {
      this.registrationForm.newsletterCheckbox.check()
    },
    checkReceiveoOffers: ()=>{
      this.registrationForm.offersCheckbox.check()
    },

    inpuFirstName: (value:{ firstName:string}) =>{
      this.registrationForm.inputfirstNamefield.clear().type(value.firstName)
    },

    inputLastname:(value:{ lastName:string}) =>{
      this.registrationForm.inputLastNameFiled.clear().type(value.lastName)
    },
    inputCompany:(value:{campanyName:string}) =>{
      this.registrationForm.inputCompanyName.clear().type(value.campanyName)
    },
    inputFirstAddress:(value:{ address: string}) =>{
      this.registrationForm.inputFirstAddressFiled.clear().type(value.address)
    },

    get registrationFormElement() {
      return cy.get('form[action="/signup"]')
    },

    get titleRadioButton() {
      return cy.get('input[type="radio"]')
    },

    get inputName(){
      return cy.get('[date-qa="name"]')
    },

    get inputEmail(){
      return cy.get('[date-qa="email"]')
    },

    get inputPasswordFiled(){
      return cy.get('[date-qa="password"]')
    },

    get daySelector(){
      return cy.get('[date-qa="days"]')
    },

    get monthSelector(){
      return cy.get('[date-qa="month"]')
    },

    get yearSelector(){
      return cy.get('[date-qa="years"]')
    },

    get newsletterCheckbox(){
      return cy.get('#newsletter')
    },

    get offersCheckbox(){
      return cy.get('#optin')
    },

    get inputfirstNamefield(){
      return cy.get('[date-qa="first_name"]')
    },

    get inputLastNameFiled(){
      return cy.get('[date-qa="last_name"]')
    },

    get inputCompanyName(){
      return cy.get('[data-qa="company"]')
    },

    get inputFirstAddressFiled(){
      return cy.get('[data-qa="address"]')
    },
  }

  get registrationLink() {
    return cy.get('a[href="/login"]')
  }

  get registrationNameEmailform() {
    return cy.get('.signup-form')
  }

  get registraionNameInput() {
    return cy.get('[data-qa="signup-name"]')
  }

  get registrationEmailInput() {
    return cy.get('[data-qa="signup-email"]')
  }



  get signUpButton() {
    return cy.get('[data-qa="signup-button"]')
  }
}
