describe('Handling child tabs', () =>{

it('With approach_1', () =>{
  cy.visit("https://the-internet.herokuapp.com/windows")
  cy.get('.example>a').invoke('removeAttr', 'target').click()
  cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new').wait(3000)
  cy.go('back')
})
it('With approach_2', () =>{
    cy.visit("https://the-internet.herokuapp.com/windows")
    cy.get('.example>a').then((x) =>{
        let url =x.prop('href')
            cy.visit(url)
    })
    cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new').wait(3000)
    cy.go('back')
  })

  it.only("App_1 with differnt URL", () =>{
    cy.visit("https://www.globalsqa.com/demo-site/frames-and-windows/")
    cy.xpath("((//a[contains(.,'Click Here')])[1]").invoke('removeAttr','target').click()
    cy.url().should('include','https://www.globalsqa.com/demo-site/frames-and-windows/#').wait(3000)
    cy.go('back')
  })
  
})

