import Select_Booking from "./Select_Booking.cy";


function Reshedule(){

    Select_Booking()

    

it("Click on the Manage Booking.",function(){
    cy.get('#client-drop').click({force: true}).wait(2000)
})


it("Click on Reshedule Care Visit.",function(){
    cy.get('.caret-drop-navy > div > .dropdown-menu > :nth-child(1) > .dropdown-item').click({force: true}).wait(2000)
})


it("Saturday",function(){
    cy.get('.fc-day-sat > .fc-timegrid-col-frame > :nth-child(2) > .fc-timegrid-event-harness > .fc-timegrid-event').click({force: true}).wait(2000)
    cy.get('.form-controls > .form-checkbox > label').click({force: true}).wait(2000)
    cy.get('.toRight > .btn-primary').click({force: true}).wait(2000)
    cy.get('.mt-40 > .btn-primary').click({force: true})
})


it("Friday",function(){
    cy.get('.fc-day-fri > .fc-timegrid-col-frame > :nth-child(2) > .fc-timegrid-event-harness > .fc-timegrid-event').click({force: true}).wait(2000)
    cy.get('.form-controls > .form-checkbox > label').click({force: true}).wait(2000)
    cy.get('.toRight > .btn-primary').click({force: true}).wait(2000)
    cy.get('.mt-40 > .btn-primary').click({force: true})

})


it("Thursday",function(){
    cy.get('.fc-day-thu > .fc-timegrid-col-frame > :nth-child(2) > .fc-timegrid-event-harness > .fc-timegrid-event').click({force: true}).wait(2000)
    cy.get('.form-controls > .form-checkbox > label').click({force: true}).wait(2000)
    cy.get('.toRight > .btn-primary').click({force: true}).wait(2000)
    cy.get('.mt-40 > .btn-primary').click({force: true})

})


it("Wednesday",function(){
    cy.get('.fc-day-wed > .fc-timegrid-col-frame > :nth-child(2) > .fc-timegrid-event-harness > .fc-timegrid-event').click({force: true}).wait(2000)
    cy.get('.form-controls > .form-checkbox > label').click({force: true}).wait(2000)
    cy.get('.toRight > .btn-primary').click({force: true}).wait(2000)
    cy.get('.mt-40 > .btn-primary').click({force: true})

})


it("Tuesday",function(){
    cy.get('.fc-day-tue > .fc-timegrid-col-frame > :nth-child(2) > .fc-timegrid-event-harness > .fc-timegrid-event').click({force: true}).wait(2000)
    cy.get('.form-controls > .form-checkbox > label').click({force: true}).wait(2000)
    cy.get('.toRight > .btn-primary').click({force: true}).wait(2000)
    cy.get('.mt-40 > .btn-primary').click({force: true})

})


it("Monday",function(){
    cy.get('.fc-day-mon > .fc-timegrid-col-frame > :nth-child(2) > .fc-timegrid-event-harness > .fc-timegrid-event').click({force: true}).wait(2000)
    cy.get('.form-controls > .form-checkbox > label').click({force: true}).wait(2000)
    cy.get('.toRight > .btn-primary').click({force: true}).wait(2000)
    cy.get('.mt-40 > .btn-primary').click({force: true})

})


it("Sunday",function(){
    cy.get('.fc-day-sun > .fc-timegrid-col-frame > :nth-child(2) > .fc-timegrid-event-harness > .fc-timegrid-event').click({force: true}).wait(2000)
    cy.get('.form-controls > .form-checkbox > label').click({force: true}).wait(2000)
    cy.get('.toRight > .btn-primary').click({force: true}).wait(2000)
    cy.get('.mt-40 > .btn-primary').click({force: true})
})


it("",function(){
    
})


it("",function(){
    
})


}
export default Reshedule;