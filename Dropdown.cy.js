describe("Dropdowns", () =>{
    it.skip('Dropdown', () => {
        cy.visit("https://qa-automation-practice.netlify.app/dropdowns")
        cy.get("#dropdown-menu").select("Guam").type('{enter}').should('have.value','Guam')
    })
    it.skip('Dropdown2', () => {
        cy.visit('https://www.zoho.com/commerce/free-demo.html')
        cy.get('[name="CASECF7"]').select("Aruba").should('have.value','Aruba') 
    })
    it.skip('Dropdown3 without select keyword', () => {
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Kenya{enter}')
        cy.get('#select2-billing_country-container').should('have.text','Kenya') 
    })
    it.skip('Auto suggest dropdown', () => {
        cy.visit('https://www.wikipedia.org/')
        cy.get('input#searchInput').type('hyderabad')
        cy.get('.suggestion-link').contains('Hyderabad State').click().should('have.text','Hyderabad State')
    })
    it('Dynamic dropdown', () => {
        cy.visit('https://www.google.co.in/')
        cy.get('[class="gLFyf"]').type('cypress automation').wait(3000)
        // cy.get('div.wM6W7d>span').contains('cypress automation jobs').click()
        // cy.get('[class="gLFyf"]').should('have.value','cypress automation jobs') //this is using the contains method, now we will use Jquery function.
        cy.get('div.wM6W7d>span').each( ($el, index, $list) =>{
            if($el.text()=='cypress automation jobs'){
                cy.wrap($el).click()
            }
        })
        cy.get('[class="gLFyf"]').should('have.value','cypress automation jobs')
    })
})