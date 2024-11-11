describe('My first test',() => 
    {
    it('verify title positive', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/auth/login")
        cy.title().should('eq','OrangeHRM')
    })

    it('verify title negative', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/auth/login")
        cy.title().should('eq','OrangeHRM123')
    })
}
)