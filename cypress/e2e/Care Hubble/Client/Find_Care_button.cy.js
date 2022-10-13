
function Click_on_Find_Care(){


   it("6- Click on find care button.", function(){
    cy.wait(3000)
    cy.get(':nth-child(2) > .nav-link > :nth-child(2)').click({force: true}).wait(2000)
})

it("Enter address to search Provider.", function(){
    cy.get('.pac-target-input').click({force: true}).wait(2000)
    cy.scrollTo("top")
    cy.wait(2000)
    cy.get('.pac-target-input').type(CP_SetUp_Data.Street_Address)
    cy.wait(3000)
    cy.contains("1 Canada's Wonderland Drive, Maple, ON L6A 1S6, Canada").click({force: true}).wait(2000)
    cy.get('.ml-auto > .btn').click({force: true})
})

it("Click on the Provider Profile.", function(){
    cy.wait(6000)
    cy.get('.lh-36 > .d-none').click({force: true}).wait(2000)
})
}
export default Click_on_Find_Care;