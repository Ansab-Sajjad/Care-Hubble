
export function Payments(){
    it("Click on Payments", function () {
        cy.get(':nth-child(3) > .nav-link > :nth-child(2)').click({ force: true }).wait(2000);
    });

    it("Click on Invoice payment icon button.", function () {
        cy.get('.icon-InvoicePayment').click({ force: true }).wait(2000);
    });
    it("Scroll up and down.", function () {
        cy.scrollTo("bottom").wait(3000);
        cy.scrollTo("top").wait(3000);
      });
    
    it("Click on Cross button.", function () {
        cy.get('.icon-Cross').click({ force: true }).wait(2000);
    });
 
    it("", function () {
        
    });
 
    it("", function () {
        
    });
 
    it("", function () {
        
    });

}