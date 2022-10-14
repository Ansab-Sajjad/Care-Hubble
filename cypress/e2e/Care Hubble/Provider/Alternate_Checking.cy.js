import Select_Booking from "./Select_Booking.cy";

function Alternate_Checking(){

    Select_Booking()
    
it("Click on Checkin button.",function(){
    cy.get('.ml-auto > .btn').click({force: true}).wait(2000)
})


it("Select Alternate Location.",function(){
    cy.get(':nth-child(2) > .dropdown-item > .form-group > .custom_radio > label').click({force: true}).wait(2000)
})


it("Click on Continue button.",function(){
    cy.get('#alcheck > .modal-dialog > .modal-content > .modal-body > :nth-child(2) > .mt-40 > .btn').click({force: true}).wait(2000)
})


it("",function(){
    
})


it("",function(){
    
})




}
export default Alternate_Checking;