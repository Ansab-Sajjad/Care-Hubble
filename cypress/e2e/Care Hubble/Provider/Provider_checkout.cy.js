
function provider_Checkout(){




it("Click on the booking.",function(){
    cy.wait(3000)
    cy.get(':nth-child(2) > .nav-link > :nth-child(2)').click({force: true}).wait(4000)
})



it("Click on the first booking.",function(){
    cy.get('tbody > :nth-child(1) > :nth-child(1)').click({force: true}).wait(2000)
})



it("Click on check in button.",function(){
    cy.get('.ml-auto > .btn').click({force: true}).wait(2000)
    cy.get(':nth-child(1) > .dropdown-item > .form-group > .custom_radio > label').click({force: true}).wait(2000)
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



it("",function(){
    
})



it("",function(){
    
})


}
export default provider_Checkout;