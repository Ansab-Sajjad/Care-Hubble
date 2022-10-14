import Select_Booking from "./Select_Booking.cy";

function Direct_Cancel_Visit(){

    Select_Booking()
    
it("Click on Manage Booking",function(){
    cy.get('#client-drop').click({force: true}).wait(2000)
})

it("Click on Cancel Care Visit.",function(){
    cy.get('.caret-drop-navy > div > .dropdown-menu > :nth-child(2) > .dropdown-item').click({force: true}).wait(2000)
})

it("Type the Resaon of Visit cancel.",function(){
    cy.get(':nth-child(3) > .form-group > .form-controls > textarea').click({force: true}).wait(2000)
    cy.get(':nth-child(3) > .form-group > .form-controls > textarea').type("Cancelling this care visit will send a notification to your Client.")
})

it("Click on Check Box",function(){
    cy.get(':nth-child(3) > .form-group > .form-checkbox > label')
})



it("click on Cancel care Visit.",function(){
    cy.get('#cancel > .modal-dialog > .modal-content > .modal-body > .msgs > .d-flex > .btn-primary').click({force: true}).wait(2000)
})




}
export default Direct_Cancel_Visit;
