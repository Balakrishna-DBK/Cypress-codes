describe('Assertions', () => {
    it('Implement assertions', () =>{
        cy.visit("https://www.w3schools.com/")
        cy.url().should('include','w3schools')
        .should('eq','https://www.w3schools.com/')
        .and('contains','w3schools')

        cy.get('#subtopnav > [href="/java/default.asp"]').should('be.visible')
        .and('exist')
    })
    it('Implement assertions2', () =>{
        cy.wait(5000)
        cy.visit("https://www.geeksforgeeks.org/courses?source=google&medium=cpc&device=c&keyword=geeksforgeeks&matchtype=e&campaignid=20039445781&adgroup=147845288105&gad_source=1&gclid=CjwKCAjwmaO4BhAhEiwA5p4YLwf1oBkeieeY6LbbUw4M9FJt2aKG3xLb0R7O0GwKOuLIJUZnKHpd3RoCYZ8QAvD_BwE")
        cy.xpath("//img[@class='gfgLogoImg normal']").should('be.visible')
        cy.xpath("//input[@type='text']").type("Jobs{enter}")
      
    })

})

// describe('Assertions BDD', () => {
//     let expectedName = "Sign in";

//     it('should assert the expected name', () => {
//         cy.visit("https://github.com/login");
//         expect(expectedName).to.be.a('string')
//     });
// });