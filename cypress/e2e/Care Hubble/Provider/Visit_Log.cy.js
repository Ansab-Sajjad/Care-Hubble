

function Visit_Log(){


    it("Scroll up and down...",function(){
        cy.wait(3000)
        cy.scrollTo(0, 500)
        cy.wait(3000)
        cy.scrollTo(0, 800)
        cy.scrollTo('bottom')
        cy.wait(3000)
        cy.scrollTo('center')
    })
    
    it("Click on Visit Log button.",function(){
        cy.get('#horizontal-tabs > :nth-child(2) > .nav-link').click({force: true}).wait(2000)
    })
    
    it("Scroll up and down...",function(){
        cy.wait(3000)
        cy.scrollTo(0, 500)
        cy.wait(3000)
        cy.scrollTo(0, 800)
        cy.scrollTo('bottom')
        cy.wait(3000)
        cy.scrollTo('center')
    })
    
    it("Click on Client Infectious Diseases Screening result attachment.",function(){
        cy.get(':nth-child(4) > :nth-child(1) > .timeline-content > .d-flex > :nth-child(2) > .anchor > .pt-2').click({force: true}).wait(2000)
        cy.scrollTo('bottom')
        cy.wait(3000)
        cy.scrollTo('top')
        cy.wait(2000)
    })
    
    it("Click on Cross button to cross the Pop-up.",function(){
        cy.get('#confirmAnswersPositive > .modal-dialog > .modal-content > .modal-body > .icon-Cross').click({force: true}).wait(2000)
    })
    
    it("Click on Provider Infectious Diseases Screening result Attachment.",function(){
        cy.get(':nth-child(5) > :nth-child(1) > .timeline-content > .d-flex > :nth-child(2) > .anchor > .pt-2').click({force: true}).wait(2000)
        cy.scrollTo('bottom')
        cy.wait(3000)
        cy.scrollTo('top')
        cy.wait(2000)
    })
    
    it("Click on Cross button to cross the Pop-up.",function(){
        cy.get('#confirmAnswersPositive > .modal-dialog > .modal-content > .modal-body > .icon-Cross').click({force: true}).wait(2000)
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

export default Visit_Log;
