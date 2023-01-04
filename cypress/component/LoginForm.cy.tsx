/// <reference types="cypress" />
import LoginForm from "../../src/components/loginForm/LoginForm"
import Dashboard from "../../src/pages/dashboard/Dashboard";
import {BrowserRouter as Router} from 'react-router-dom';

describe('<LoginForm />', () => {

  beforeEach(() => {
   cy.mount(<Router><LoginForm /></Router>)
 });

  it('check you are in login page', () => {
    cy.get('[data-cy=welcome]').contains('Welcome!').should("be.visible");
  })
  it('check user is unable to login without entering all credentials', () => {
    cy.get('[data-cy=email]').clear().type('emma@gmail.com')
    cy.get('[data-cy=password]').clear()
    cy.get('[data-cy=login-btn]').click()
    cy.get('[data-cy=error-msg]').contains('Please enter all credentials').should("be.visible")
  })
  it('check user is able to login after entering credentials', () => {
    cy.get('[data-cy=email]').clear().type('emma@gmail.com')
    cy.get('[data-cy=password]').clear().type('emma123')
    cy.get('[data-cy=login-btn]').click()
    cy.mount(<Dashboard />)
    cy.get('[data-cy=users]').contains('Users').should("be.visible");
  })
  
})