import Select_Booking from "./Select_Booking.cy"

function provider_Check_In_With_Test_Cases(){




    Select_Booking()


it("Click on check in button.",function(){
    cy.get('.ml-auto > .btn').click({force: true}).wait(5000)
    cy.get(':nth-child(1) > .dropdown-item > .form-group > .custom_radio > label').click({force: true}).wait(2000)
})


it("Provider Screening.",function(){
    cy.get(':nth-child(2) > .mb-16 > :nth-child(1) > .mw-552 > .mt-8 > .d-flex > :nth-child(1) > .custom_radio > label').click({force: true}).wait(2000)
})

it("Provider Screening.",function(){
    cy.get('.form-controls > input').click({force: true}).wait(2000)
    cy.get('.form-controls > input').type("Out of City").type('{enter}')
})

it("Provider Screening.",function(){
    cy.get(':nth-child(3) > .mb-16 > :nth-child(1) > .mw-552 > .mt-8 > .d-flex > :nth-child(1) > .custom_radio > label').click({force: true}).wait(2000)
})

it("Provider Screening.",function(){
    cy.get(':nth-child(4) > .mb-16 > :nth-child(1) > .mw-552 > .mt-8 > .d-flex > :nth-child(1) > .custom_radio > label').click({force: true}).wait(2000)
    cy.get(':nth-child(4) > .mb-16 > :nth-child(1) > .mw-552 > .mt-8 > .mt-24 > .form-controls > input').click({force: true}).wait(2000)
    cy.get(':nth-child(4) > .mb-16 > :nth-child(1) > .mw-552 > .mt-8 > .mt-24 > .form-controls > input').type("xyz").type('{enter}')
})

it("Provider Screening.",function(){
    cy.get(':nth-child(5) > .mb-16 > :nth-child(1) > .mw-552 > .mt-8 > .d-flex > :nth-child(1) > .custom_radio > label').click({force: true}).wait(2000)
})

it("Provider Screening.",function(){
    cy.get(':nth-child(6) > .mb-16 > :nth-child(1) > .mw-552 > .mt-8 > .d-flex > :nth-child(1) > .custom_radio > label').click({force: true}).wait(2000)
})

it("Provider Screening.",function(){
    cy.get(':nth-child(1) > .form-group > .form-checkbox > label').click({force: true}).wait(2000)
    cy.get(':nth-child(11) > .form-group > .form-checkbox > label').click({force: true}).wait(2000)
    cy.get(':nth-child(5) > .form-group > .form-checkbox > label').click({force: true}).wait(2000)
    cy.get(':nth-child(14) > .form-group > .form-checkbox > label').click({force: true}).wait(2000)
})

it("Click on Continue button.",function(){
    cy.get('.toRight > .btn').click({force: true}).wait(2000)
})

it("No I made an Error.",function(){
    cy.get('.d-flex > .btn-text').click({force: true}).wait(2000)
})

it("Scroll to bottom.",function(){
    cy.scrollTo('bottom') 
})

it("Click again on continue button.",function(){
    cy.get('.toRight > .btn').click({force: true}).wait(2000)
})

it("This time click on 'Yes Correct'.",function(){
    cy.get('#confirmAnswers > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > .d-flex > .btn-primary').click({force: true}).wait(2000)
})

it("Click on checkbox of Alert pop-up.",function(){
    cy.get('.mt-24 > .form-group > .form-checkbox > label').click({force: true}).wait(2000)
})



it("No, end visit for infection diease risk.",function(){
    cy.get('#alertPositiveScreening > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > :nth-child(3) > .btn-text').click({force: true}).wait(5000)
})



it("Click on continue button of the Alert box.",function(){
    cy.get('#alertCancelledAppointment > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > .d-flex > .btn').click({force: true}).wait(2000)
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

it("Click on breakdown attachment.",function(){
    cy.get(':nth-child(6) > .anchor').click({force: true}).wait(5000)
})

it("Click on Close button to close the popup.",function(){
    cy.get('#breakdown > .modal-dialog > .modal-content > .modal-body > .msgs > .mt-40 > .btn').click({force: true}).wait(2000)
})

it("click on visit Log.",function(){
    cy.get('#horizontal-tabs > :nth-child(2) > .nav-link').click({force: true}).wait(2000)
    cy.scrollTo('top')
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

it("Click on answer sheet.",function(){
    cy.get('.pt-2').click({force: true}).wait(2000)
})

it("",function(){
    cy.get('#confirmAnswersPositive > .modal-dialog > .modal-content > .modal-body').scrollTo('bottom').wait(2000)
    cy.get('#confirmAnswersPositive > .modal-dialog > .modal-content > .modal-body').scrollTo('top').wait(2000)

})

it("Click on cross button to cross the popup.",function(){
    cy.get('#confirmAnswersPositive > .modal-dialog > .modal-content > .modal-body > .icon-Cross').click({force: true}).wait(2000)
})

it("Scroll to top.",function(){
    cy.scrollTo('top')
})

it("",function(){
    
})

it("",function(){
    
})

it("",function(){
    
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
export default provider_Check_In_With_Test_Cases;