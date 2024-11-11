describe('Luanching URL', () =>{
    it('Check the Url', () => {
       cy.visit('https://www.w3schools.com/') 
    //    cy.get('#navbtn_exercises').click()
    //    cy.get('input[aria-label="Exercises filter bar"]').type("HTML")
    //    cy.get('HTML').contains('HTML')
          cy.xpath("(//div[@id='subtopnav'])/a").should('have.length.at.least', 30)
    })

})