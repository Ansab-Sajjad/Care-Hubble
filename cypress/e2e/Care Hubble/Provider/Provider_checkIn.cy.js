
function provider_Check_In(){




it("Click on the booking.",function(){
    cy.wait(3000)
    cy.get(':nth-child(2) > .nav-link > :nth-child(2)').click({force: true}).wait(4000)
})



it("Click on the first booking.",function(){
    cy.get('tbody > :nth-child(3) > :nth-child(1)').click({force: true}).wait(5000)
})



it("Click on check in button.",function(){
    cy.get('.ml-auto > .btn').click({force: true}).wait(5000)
    cy.get(':nth-child(1) > .dropdown-item > .form-group > .custom_radio > label').click({force: true}).wait(2000)
})



it("Provider Screening",function(){
    cy.get(':nth-child(2) > .mb-16 > :nth-child(1) > .mw-552 > .mt-8 > .d-flex > :nth-child(2) > .custom_radio > label').click({force: true}).wait(2000)
})

it("Provider Screening",function(){
    cy.get(':nth-child(3) > .mb-16 > :nth-child(1) > .mw-552 > .mt-8 > .d-flex > :nth-child(2) > .custom_radio > label').click({force: true}).wait(2000)
    
})

it("Provider Screening",function(){
    cy.get(':nth-child(4) > .mb-16 > :nth-child(1) > .mw-552 > .mt-8 > .d-flex > :nth-child(2) > .custom_radio > label').click({force: true}).wait(2000)
    
})

it("Provider Screening",function(){
    cy.get(':nth-child(5) > .mb-16 > :nth-child(1) > .mw-552 > .mt-8 > .d-flex > :nth-child(2) > .custom_radio > label').click({force: true}).wait(2000)
    
})

it("Provider Screening",function(){
    cy.get(':nth-child(6) > .mb-16 > :nth-child(1) > .mw-552 > .mt-8 > .d-flex > :nth-child(2) > .custom_radio > label').click({force: true}).wait(2000)
    
})

it("",function(){
    cy.get(':nth-child(15) > .form-group > .form-checkbox > label').click({force: true}).wait(2000)
    
})

it("",function(){
    cy.get('.toRight > .btn').click({force: true}).wait(2000)

})

it("Client Screening",function(){
    cy.get('#pass > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > .d-flex > .btn').click({force: true}).wait(2000)

})

it("Client Screening",function(){
    cy.get(':nth-child(2) > .mb-16 > :nth-child(1) > .mw-552 > .mt-8 > .d-flex > :nth-child(2) > .custom_radio > label').click({force: true}).wait(2000)

})

it("Client Screening",function(){
    cy.get(':nth-child(3) > .mb-16 > :nth-child(1) > .mw-552 > .mt-8 > .d-flex > :nth-child(2) > .custom_radio > label').click({force: true}).wait(2000)
    
})

it("Client Screening",function(){
    cy.get(':nth-child(4) > .mb-16 > :nth-child(1) > .mw-552 > .mt-8 > .d-flex > :nth-child(2) > .custom_radio > label').click({force: true}).wait(2000)
    
})

it("Client Screening",function(){
    cy.get(':nth-child(5) > .mb-16 > :nth-child(1) > .mw-552 > .mt-8 > .d-flex > :nth-child(2) > .custom_radio > label').click({force: true}).wait(2000)
    
})

it("Client Screening",function(){
    cy.get(':nth-child(6) > .mb-16 > :nth-child(1) > .mw-552 > .mt-8 > .d-flex > :nth-child(2) > .custom_radio > label').click({force: true}).wait(2000)
    
})

it("Client Screening",function(){
    cy.get(':nth-child(7) > .mb-16 > :nth-child(1) > .mw-552 > .mt-8 > .d-flex > :nth-child(2) > .custom_radio > label').click({force: true}).wait(2000)
    
})

it("",function(){
    cy.get(':nth-child(19) > .form-group > .form-checkbox > label').click({force: true}).wait(2000)
    cy.get(':nth-child(9) > .mb-16 > :nth-child(1) > .mw-552 > .mt-8 > .d-flex > :nth-child(2) > .custom_radio > label').click({force: true}).wait(2000)
    cy.get(':nth-child(10) > .mb-16 > :nth-child(1) > .mw-552 > .mt-8 > .d-flex > :nth-child(2) > .custom_radio > label').click({force: true}).wait(2000)

})

it("",function(){
    cy.get('.toRight > .btn').click({force: true}).wait(2000)

})

it("",function(){
    cy.get('#screenedNegative > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > .d-flex > .btn').click({force: true}).wait(2000)
    
})

it("",function(){
    
})

it("",function(){
    cy.wait(5000)
})
////////////////////////////////////////////////


it("",function(){
    
})



it("",function(){
    
})



it("",function(){
    
})


}
export default provider_Check_In;