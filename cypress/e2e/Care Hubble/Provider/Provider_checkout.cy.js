
function Provider_Check_out(){




it("Click on Check out",function(){
    cy.wait(3000)
    cy.get('.ml-auto > .btn').click({force: true}).wait(2000)
})

it("Click on End visit report point.",function(){
    cy.get(':nth-child(1) > .form-group > .form-checkbox > label').click({force: true}).wait(2000)
})

it("Click on End visit report point.",function(){
    cy.get(':nth-child(4) > .form-group > .form-checkbox > label').click({force: true}).wait(2000)
})


it("Click on End visit report point.",function(){
    cy.get(':nth-child(9) > .form-group > .form-checkbox > label').click({force: true}).wait(2000)

})



it("Increase Scale",function(){
    cy.get(':nth-child(4) > .mt-16 > :nth-child(1) > :nth-child(2) > .mt-50 > .row > .col-md-8 > .d-flex > .right-p > .counter-button').click({force: true}).wait(2000)
    cy.get(':nth-child(4) > .mt-16 > :nth-child(1) > :nth-child(2) > .mt-50 > .row > .col-md-8 > .d-flex > .right-p > .counter-button').click({force: true}).wait(2000)
    cy.get(':nth-child(4) > .mt-16 > :nth-child(1) > :nth-child(2) > .mt-50 > .row > .col-md-8 > .d-flex > .right-p > .counter-button').click({force: true}).wait(2000)
})

it("Increase Scale",function(){
    cy.get(':nth-child(5) > .mt-16 > :nth-child(1) > :nth-child(2) > .mt-50 > .row > .col-md-8 > .d-flex > .right-p > .counter-button').click({force: true}).wait(2000)
    cy.get(':nth-child(5) > .mt-16 > :nth-child(1) > :nth-child(2) > .mt-50 > .row > .col-md-8 > .d-flex > .right-p > .counter-button').click({force: true}).wait(2000)
    cy.get(':nth-child(5) > .mt-16 > :nth-child(1) > :nth-child(2) > .mt-50 > .row > .col-md-8 > .d-flex > .right-p > .counter-button').click({force: true}).wait(2000)
})


it("Increase Scale",function(){
    
    cy.get(':nth-child(6) > .mt-16 > :nth-child(1) > :nth-child(2) > .mt-50 > .row > .col-md-8 > .d-flex > .right-p > .counter-button').click({force: true}).wait(2000)
    cy.get(':nth-child(6) > .mt-16 > :nth-child(1) > :nth-child(2) > .mt-50 > .row > .col-md-8 > .d-flex > .right-p > .counter-button').click({force: true}).wait(2000)
    cy.get(':nth-child(6) > .mt-16 > :nth-child(1) > :nth-child(2) > .mt-50 > .row > .col-md-8 > .d-flex > .right-p > .counter-button').click({force: true}).wait(2000)
})


it("Scroll to Buttom.",function(){       
    cy.scrollTo("bottom")
    cy.wait(2000)
         })


it("Enter Text.",function(){
    cy.get('textarea').click({force: true}).wait(2000)
    cy.get('textarea').type("Summarize the activities of the care visit and any symptoms, events, observations, and/or concerns that you wish to document today.")
})

it("",function(){
    
})


}
export default Provider_Check_out;