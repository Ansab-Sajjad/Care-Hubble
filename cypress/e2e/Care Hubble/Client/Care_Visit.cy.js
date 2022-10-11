

function Book_Care_visit()
{

    it("Click on the Book Care Visit button.", function(){
        cy.wait(3000);
        cy.get('.btn-primary').click({force: true}).wait(2000)
    })
   
it("Click on the Wednesday Availability", function(){
    cy.get('.fc-day-wed > .fc-timegrid-col-frame > :nth-child(2) > .fc-timegrid-event-harness > .fc-timegrid-event').click({force: true}).wait(2000)
})
   
it("Click on the Continue button.", function(){
    cy.get('.toRight > .btn').click({force: true}).wait(2000)
})
   

it("Scroll to Buttom.",function(){       
    cy.scrollTo("bottom")
    cy.wait(2000)
         })

it("Select Services.", function(){
    cy.get('.non-selected-filter').click({force: true}).wait(2000)
    cy.get(':nth-child(1) > .form-group > .form-checkbox > label').click({force: true}).wait(2000)
    cy.get(':nth-child(2) > .form-group > .form-checkbox > label').click({force: true}).wait(2000)
})
   
it("Care Request", function(){
    cy.get('.col-md-11 > .form-group > .form-controls > .prevent-quotes').click({force: true}).wait(2000)
    cy.get('.col-md-11 > .form-group > .form-controls > .prevent-quotes').clear().type("Care Request")
})
   
it("Click on the Continue button.", function(){
    cy.get('.mt-20 > .btn').click({force: true}).wait(2000)
})
   

it("Scroll to Buttom.",function(){       
    cy.scrollTo("bottom")
    cy.wait(2000)
         })

it("Click on Pay & Book.", function(){
    cy.get('.text-center > .btn').click({force: true}).wait(2000)
})
       
   
it("Click on the 'View Booking Details' button.", function(){
    cy.get('.mt-40 > .btn').click({force: true}).wait(2000)
})
       
   
it("", function(){
    
})
       
   
it("", function(){
    
})
       
   
it("", function(){
    
})
       
   
it("", function(){
    
})
       
   
it("", function(){
    
})
       


}


export default Book_Care_visit;