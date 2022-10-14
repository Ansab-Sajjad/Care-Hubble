

function Book_Care_visit()
{

    it("Click on the Book Care Visit button.", function(){
        cy.wait(3000);
        cy.get('.btn-primary').click({force: true}).wait(2000)
    })

it("Sunday", function(){
    cy.get('.fc-day-sun > .fc-timegrid-col-frame > :nth-child(2) > .fc-timegrid-event-harness > .fc-timegrid-event').click({force: true}).wait(2000)
    cy.get('.toRight > .btn').click({force: true}).wait(2000)
})

it("Monday", function(){
    cy.get('.fc-day-mon > .fc-timegrid-col-frame > :nth-child(2) > .fc-timegrid-event-harness > .fc-timegrid-event').click({force: true}).wait(2000)
    cy.get('.toRight > .btn').click({force: true}).wait(2000)
})

it("Tuesday", function(){
    cy.get('.fc-day-tue > .fc-timegrid-col-frame > :nth-child(2) > .fc-timegrid-event-harness > .fc-timegrid-event').click({force: true}).wait(2000)
    cy.get('.toRight > .btn').click({force: true}).wait(2000)
})

it("Wednesday", function(){
    cy.get('.fc-day-wed > .fc-timegrid-col-frame > :nth-child(2) > .fc-timegrid-event-harness > .fc-timegrid-event').click({force: true}).wait(2000)
    cy.get('.toRight > .btn').click({force: true}).wait(2000)
})

it("Thursday", function(){
    cy.get('.fc-day-thu > .fc-timegrid-col-frame > :nth-child(2) > .fc-timegrid-event-harness > .fc-timegrid-event').click({force: true}).wait(2000)
    cy.get('.toRight > .btn').click({force: true}).wait(2000)
})


it("Friday", function(){
    cy.get('.fc-day-fri > .fc-timegrid-col-frame > :nth-child(2) > .fc-timegrid-event-harness > .fc-timegrid-event').click({force: true}).wait(2000)
    cy.get('.toRight > .btn').click({force: true}).wait(2000)
})

   
it("Saturday", function(){
    cy.get('.fc-day-sat > .fc-timegrid-col-frame > :nth-child(2) > .fc-timegrid-event-harness > .fc-timegrid-event').click({force: true}).wait(2000)
    cy.get('.toRight > .btn').click({force: true}).wait(2000)
})


it("Click on the Continue button.", function(){
    
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
       
it("Scroll up and down...",function(){
    cy.wait(1000)
    cy.scrollTo(0, 500)
    cy.wait(3000)
    cy.scrollTo(0, 800)
    cy.scrollTo('bottom')
    cy.wait(3000)
    cy.scrollTo('center')
})
   
it("Click on Visit Log.", function(){
    cy.get('#horizontal-tabs > :nth-child(2) > .nav-link').click({force: true}).wait(2000)
})
       
   
it("Scroll to bottom.", function(){
    cy.scrollTo('bottom')
})
       
   
it("", function(){
    
})
       

       
   
it("", function(){
    
})
       


}


export default Book_Care_visit;