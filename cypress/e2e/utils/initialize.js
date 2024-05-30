import { RegistrationPage } from '../pageobjects/registration.po'
import { LoginPage } from '../pageobjects/login.po'
import { ProductPage } from '../pageobjects/products.po'
const credentials = Cypress.env('credentials')
export const password = credentials.password
export const name = credentials.name
export const LastName = credentials.LastName
export const address = credentials.address
export const registrationPage = new RegistrationPage()
export const loginPage = new LoginPage()
export const productPage = new ProductPage()
