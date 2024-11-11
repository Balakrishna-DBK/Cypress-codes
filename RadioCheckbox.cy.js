describe('RadioButtonAndCheckbox', () =>{

    // it("checkBox", () =>{
    //     cy.visit("https://qa-automation-practice.netlify.app/checkboxes")
    //     cy.get('.form-check-input').check().should('be.checked').wait(2000) // checking multiple check box selection
    //     cy.get('.form-check-input').uncheck().should('not.be.checked').wait(2000) //unchecking the check box
    //     cy.get('#checkbox1').check().should('be.checked').wait(2000) // cheecking single check box
    //     cy.get('.form-check-input').first().check().wait(2000)
    //     cy.get('.form-check-input').last().check()
    // })

    it("Radio", () =>{
        cy.visit("https://qa-automation-practice.netlify.app/radiobuttons")
        //cy.get('[type=radio]').check().should('be.checked').wait(2000) // checking multiple check box selection
       // cy.get('[type=radio]').uncheck().should('not.be.checked').wait(2000) //unchecking the check box
       // cy.get('[type=radio]').check().should('be.checked').wait(2000) // cheecking single check box
        cy.get('[type=radio]').first().check().should('be.visible')
        //cy.get('[type=radio]').last().check()
    })
})