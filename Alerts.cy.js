
describe('Alerts', () =>{
it('Normal alert', () => {
cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
cy.get('[onclick="jsAlert()"]').click()

cy.on('window:alert', (t) =>{
    expect(t).to.contains('I am a JS Alert')
})
cy.get('#result').should('have.text', 'You successfully clicked an alert')
})
//it.skip('Normal alert', () => {
// //     cy.visit("https://www.hyrtutorials.com/p/alertsdemo.html")
// //     cy.get('#alertBox').click()
    
// //     cy.on('window:alert', (t) =>{
// //         expect(t).to.contains('I am an alert box!')
// //     })
// //     cy.get('#output').should('have.text', 'You selected alert popup')
// //     })
// it.skip('Hdfc Bank alert handle', () =>{
// cy.visit("https://netbanking.hdfcbank.com/netbanking/")
// cy.get('[ondblclick="return fLogon()"]').click()

// })
it("confirm alert", () =>{
cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
cy.get('[onclick="jsConfirm()"]').click()

cy.on('window:confirm', (tx) =>{
    expect(tx).to.contains("I am a JS Confirm")
})
cy.on('window:confirm', () => false)// bascially our cypress click on confirm, so if i want to check on 'cancel' button need to add this event.
//cy.get('p#result').should('have.text','You clicked: Ok') 
cy.get('p#result').should('have.text', 'You clicked: Cancel')
})

it("Prompt box", () =>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")//if we click, then automatically it will take +ve so, here i should pass something, so need to give before only
    cy.window().then( (pt) =>{

        cy.stub(pt,'prompt').returns("Welcome Balu")
    } )
    cy.get('[onclick="jsPrompt()"]').click()
    
   cy.get('#result').should('have.text','You entered: Welcome Balu')
    })


    it("Authenticated box", () =>{
        cy.visit("https://the-internet.herokuapp.com/basic_auth", { auth: {
                                                                            username:"admin",
                                                                            password:"admin"
                                                                            }  
                                                                    }
        )
     cy.get('.example').should('have.contain','Congratulations')

        })

        it.only("Authenticated box method2", () =>{
         cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth") //this is 2nd approach, simply add username and password before the URL pass
         cy.get('.example').should('have.contain','Congratulations')
    
            })

})