describe('Handling tabs', (() =>{
   
    beforeEach('login', () =>{
    cy.visit('https://demo.opencart.com/admin/index.php');
    cy.get('[name="username"]').clear().type("demo");
    cy.get('[name="password"]').clear().type('demo');
    cy.get('[type="submit"]').click().wait(3000);

    cy.get('#menu-customer>a').click();
    cy.get('#menu-customer>ul>li:first-child').click();

   })

   it('check specific cell data from row & column', () =>{
    cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').should('have.length','6');
    cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('have.length','10') 
   })
   it('checking for particular row and coulumn', () =>{
    cy.get('table[class="table table-bordered table-hover"]>tbody>tr:last-child').contains('hdxj@gjsk.com');
    cy.get('table[class="table table-bordered table-hover"]>tbody>tr:nth-child(5)>td:first-child').should('not.be.sealed').click();

   })
   it('Read table row s and column data', () =>{
    cy.get('table[class="table table-bordered table-hover"]>tbody>tr').each( ($row, index, $rows) =>{
        cy.wrap($row).within(()=>{
            cy.get("td").each( ($col, index, $cols) =>{
                cy.log($col.text());
            })
        })
    })
   })
it('To know the total number of pages', () =>{
   //let totalpages;
    cy.get('[class="col-sm-6 text-end"]').then( (e) => {
      let mytxt = e.text();
      let totalpages = mytxt.substring(mytxt.indexOf("(")+1, mytxt.indexOf("Pages")-1);
        cy.log("total number of pages in a table is ==>",+totalpages);
})
})

it('To know the total number of pages', () =>{
    let totalpages=5;

    for(let p=1; p<=totalpages; p++){
    if(totalpages>1){
        cy.log("Active page is ==", +p);
        cy.get('ul[class="pagination"]>li:nth-child('+p+')').click();
        cy.wait(3000);

        cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
        .each(($row, index, $rows) =>{
            cy.wrap($row).within( () =>{
                cy.get('td:nth-child(4)').then( (e) =>{
                    cy.log(e.text());
                } )
            } )
        })
    }
}
})
}))