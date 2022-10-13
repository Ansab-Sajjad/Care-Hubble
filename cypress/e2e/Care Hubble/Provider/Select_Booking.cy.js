
function Select_Booking(){


    it("Click on the booking.",function(){
        cy.wait(3000)
        cy.get(':nth-child(2) > .nav-link > :nth-child(2)').click({force: true}).wait(4000)
    })
    
    
    
    it("Click on the booking.",function(){
        cy.get('tbody > :nth-child(5) > :nth-child(1)').click({force: true}).wait(5000)
    })
    
    
}
export default Select_Booking;
