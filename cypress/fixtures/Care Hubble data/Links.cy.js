

function Homepage_Link()  {

    // cy.visit("https://staging.carehubble.com/")      //   =====>  Staging Enviroment
   
    cy.visit("https://qa.carehubble.com/")      //   =====>  QA Enviroment
   

   }


   function verification_Link()  {

    // cy.visit("https://staging.carehubble.com/register/email-verification")      //   =====>  QA Enviroment
    
    cy.visit("https://qa.carehubble.com/register/email-verification")     //   =====>  staging Enviroment
    
   }


      

export default {Homepage_Link,verification_Link}