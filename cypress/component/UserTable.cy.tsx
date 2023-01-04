import UserTable from "../../src/components/userTable/UserTable";
import {BrowserRouter as Router} from 'react-router-dom';

describe('<UserTable />', () => { 
    beforeEach(() => {
        cy.mount(<Router><UserTable /></Router>)
    });

    it('check you are in login page', () => {
        cy.get('[data-cy=user-table]').should("be.visible");
    })
    it('check user can bring out and close the filter form', () => {
        cy.get(':nth-child(1) > span > [data-cy="filter-icon"]').click()
        cy.get('[data-cy=filter-form]').should("be.visible");
        cy.get(':nth-child(1) > span > [data-cy="filter-icon"]').click()
    })
    it('check user can change user status', () => {
        cy.get(':nth-child(2) > :nth-child(7) > .more-icon').click()
        cy.get(':nth-child(7) > ul').should('be.visible')
        cy.get(':nth-child(2) > li').click()
        cy.get('.blacklisted').should('be.visible')
    })
 })