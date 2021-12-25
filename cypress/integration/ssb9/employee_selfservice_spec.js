describe('My First Test', () => {

    it('clicking "type" navigates to a new url', () => {
        var config = Cypress.env()
        console.log('hi=', config.ssb.devl.empl)

        cy.intercept(config.auth.devl.okta).as('sso')
        cy.visit(config.ssb.devl.empl)
        // cy.visit('/')
        cy.get('input[name="username"]').type(config.emplManagerPair[0].employee.username)
        cy.get('input[name="password"]').type(config.emplManagerPair[0].employee.password)
        cy.get('#okta-signin-submit').click()
        cy.url().should('include', '/EmployeeSelfService/ssb')
        // cy.visit('https://example.cypress.io')

        // cy.contains('type').click()

        // Should be on a new URL which includes '/commands/actions'
        // cy.url().should('include', '/commands/actions')

    })
})