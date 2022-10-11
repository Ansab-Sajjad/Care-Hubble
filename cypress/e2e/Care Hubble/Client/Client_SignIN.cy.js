
import {Homepage_Link,verification_Link} from "../../../fixtures/Care Hubble data/Links.cy"
import sign_up_data from "../../../fixtures/Care Hubble data/Client data/Client_signup_data.cy"
import CP_SetUp_Data from "./Client_Profile_SetUp_Data.cy"
import meet_and_greet_fun from "./Meet_and_Greet.cy"
import Book_Care_visit from "./Care_Visit.cy"


describe("Let's automate the Care Hubble.", function () {
    it("1- Visit to the main Landing page.", function () {
      Homepage_Link()
  cy.wait(2000)
  })
  
  it("2- Click on Sign-In Button.",function(){     
      cy.get(".d-flex > .btn-text").click();
      cy.wait(3000);
       })
  
      it("3- Enter Email.",function(){      
      cy.get(":nth-child(1) > .form-group > .form-controls > input").type(sign_up_data.CH_email);
      cy.wait(3000);

          })
  
          it("4- Enter Password.",function(){     
      cy.get(".prevent-quotes").type(sign_up_data.Confirm_Password);
      cy.wait(3000);
           })
  
           it("5- Click on Sign-In button.",function(){      
      cy.get(".btn").click();
  
    })


    //    <==================== Meet & Greet ====================>

    meet_and_greet_fun()

    //    <==================== Book Care Visit ====================>

    Book_Care_visit()

     


    
})


// it("", function(){
    
// })
