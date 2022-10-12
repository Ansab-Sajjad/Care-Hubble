import Select_Booking from "./Select_Booking.cy"
import Visit_Log from "./Visit_Log.cy"

function Early_Checkout(){

 
    Select_Booking()
    Visit_Log()
    
 it("Click on Manage Booking.",function(){
    cy.get('#client-drop').click({force: true}).wait(2000)
})

it("Click on Early Checkout.",function(){
    cy.get('.dropdown > div > .dropdown-menu > :nth-child(2) > .dropdown-item').click({force: true}).wait(2000)
})

it("Select Reason.",function(){
    cy.get('#endEarly > .modal-dialog > .modal-content > .modal-body > .msgs > :nth-child(3) > .mt-8 > .row > :nth-child(1) > .form-group > .form-controls > .multiselect').click({force: true}).wait(2000)
    cy.get('[id="multiselect-options"]').find('li').contains("Unsafe work environment").click({force: true}).wait(2000)
})


it("Type additional note.",function(){
    cy.get(':nth-child(2) > .form-group > .form-controls > textarea').click({force: true}).wait(2000)
    cy.get(':nth-child(2) > .form-group > .form-controls > textarea').clear().type("This is an additional note.")
})


it("Select Rate to charge.",function(){
    cy.get(':nth-child(3) > .form-group > .form-controls > .multiselect').click({force: true}).wait(2000)
    cy.get('[id="multiselect-options"]').find('li').contains("Full price ($30.91)").click({force: true}).wait(2000)
})


it("Click on Checkout button.",function(){
    cy.get('#endEarly > .modal-dialog > .modal-content > .modal-body > .msgs > .d-flex > .btn-primary').click({force: true}).wait(3000)
})


it("Click on checkbox of End of Visit Report",function(){
    cy.get(':nth-child(1) > .form-group > .form-checkbox > label').click({force: true}).wait(2000)
})


it("Click on second checkbox of End of Visit Report",function(){
    cy.get(':nth-child(4) > .form-group > .form-checkbox > label').click({force: true}).wait(2000)
})
it("Click on scale for rate.",function(){
    cy.get(':nth-child(4) > .mt-16 > :nth-child(1) > :nth-child(2) > .mt-50 > .row > .col-md-8 > .d-flex > .right-p > .counter-button').click({force: true}).wait(2000)
    cy.get(':nth-child(4) > .mt-16 > :nth-child(1) > :nth-child(2) > .mt-50 > .row > .col-md-8 > .d-flex > .right-p > .counter-button').click({force: true}).wait(2000)
    cy.get(':nth-child(4) > .mt-16 > :nth-child(1) > :nth-child(2) > .mt-50 > .row > .col-md-8 > .d-flex > .right-p > .counter-button').click({force: true}).wait(2000)
    cy.get(':nth-child(4) > .mt-16 > :nth-child(1) > :nth-child(2) > .mt-50 > .row > .col-md-8 > .d-flex > .right-p > .counter-button').click({force: true}).wait(2000)
    cy.get(':nth-child(4) > .mt-16 > :nth-child(1) > :nth-child(2) > .mt-50 > .row > .col-md-8 > .d-flex > .right-p > .counter-button').click({force: true}).wait(2000)
    cy.get(':nth-child(4) > .mt-16 > :nth-child(1) > :nth-child(2) > .mt-50 > .row > .col-md-8 > .d-flex > .right-p > .counter-button').click({force: true}).wait(2000)
})
it("Click on scale for rate.",function(){
    cy.get(':nth-child(5) > .mt-16 > :nth-child(1) > :nth-child(2) > .mt-50 > .row > .col-md-8 > .d-flex > .right-p > .counter-button').click({force: true}).wait(2000)
    cy.get(':nth-child(5) > .mt-16 > :nth-child(1) > :nth-child(2) > .mt-50 > .row > .col-md-8 > .d-flex > .right-p > .counter-button').click({force: true}).wait(2000)
    cy.get(':nth-child(5) > .mt-16 > :nth-child(1) > :nth-child(2) > .mt-50 > .row > .col-md-8 > .d-flex > .right-p > .counter-button').click({force: true}).wait(2000)
    cy.get(':nth-child(5) > .mt-16 > :nth-child(1) > :nth-child(2) > .mt-50 > .row > .col-md-8 > .d-flex > .right-p > .counter-button').click({force: true}).wait(2000)
})
it("Click on scale for rate.",function(){
    cy.get(':nth-child(6) > .mt-16 > :nth-child(1) > :nth-child(2) > .mt-50 > .row > .col-md-8 > .d-flex > .right-p > .counter-button').click({force: true}).wait(2000)
    cy.get(':nth-child(6) > .mt-16 > :nth-child(1) > :nth-child(2) > .mt-50 > .row > .col-md-8 > .d-flex > .right-p > .counter-button').click({force: true}).wait(2000)
    cy.get(':nth-child(6) > .mt-16 > :nth-child(1) > :nth-child(2) > .mt-50 > .row > .col-md-8 > .d-flex > .right-p > .counter-button').click({force: true}).wait(2000)
})
it("Click on textbox and enter the text.",function(){
    cy.get('textarea').click({force: true}).wait(2000)
    cy.get('textarea').clear().type("Summarize the activities of the care visit and any symptoms, events, observations, and/or concerns that you wish to document today.")
})
it.skip("",function(){
    cy.get('.toRight > .btn').click({force: true}).wait(2000)
})
it("",function(){
   
})
it("",function(){
   
})
it("",function(){
   
})
it("",function(){
   
})


}

export default Early_Checkout;