import Select_Booking from "./Select_Booking.cy"
import Visit_Log from "./Visit_Log.cy"


function Extend_Visit(){

    Select_Booking()
    Visit_Log()
    
 it("Click on Manage Booking.",function(){
    cy.get('#client-drop').click({force: true}).wait(2000)
})


it("Click on Extend Visit.",function(){
    cy.get('.dropdown > div > .dropdown-menu > :nth-child(1) > .dropdown-item').click({force: true}).wait(2000)
})

    it("Select Time.",function(){
        cy.get('#extend > .modal-dialog > .modal-content > .modal-body > .msgs > :nth-child(3) > .mt-8 > .row > .col-12 > .form-group > .form-controls > .multiselect').click({force: true}).click({force: true}).wait(2000)
        cy.get('[id="multiselect-options"]').find('li').contains("15 minutes").click({force: true}).wait(2000)
    })
    

    it("Click on Check box.",function(){
        cy.get(':nth-child(4) > .form-checkbox > label').click({force: true}).wait(2000)
    })
    

    it("Click on Extend Visit button.",function(){
        cy.get('#extend > .modal-dialog > .modal-content > .modal-body > .msgs > .d-flex > .btn-primary').click({force: true}).wait(5000)
    })
    

    it("",function(){

    })
    
                    

}
export default Extend_Visit;
