import 'cypress-iframe'

describe('Handling the frames', () =>{
    it('approach_1', () => {
       
        cy.visit("https://the-internet.herokuapp.com/iframe")
       
        const iframe = cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)

        iframe.clear().type('Hello welcome{ctrl+a}')

        cy.get("[title='Bold']").click();
    })

    it('approach_2', () => {
       
        cy.visit("https://the-internet.herokuapp.com/iframe")
       
        cy.getIframe('#mce_0_ifr').clear().type('Hello welcome{ctrl+a}')
        cy.get("[title='Bold']").click();
    })

    it('approach using cypress plugin', () => {
       
        cy.visit("https://the-internet.herokuapp.com/iframe")
       cy.frameLoaded('#mce_0_ifr'); //load the frame, not suren here clear button is not working.
       cy.iframe('#mce_0_ifr').clear().type("hello")
    })
})