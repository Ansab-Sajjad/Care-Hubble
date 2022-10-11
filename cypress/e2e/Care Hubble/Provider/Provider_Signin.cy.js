


import {Homepage_Link,verification_Link} from "../../../fixtures/Care Hubble data/Links.cy"
import sign_up_data from "../../../fixtures/Care Hubble data/Provider data/Provider_signup_data.cy";
import PP_SetUp_Data from "../../../fixtures/Care Hubble data/Provider data/Profile_SetUp_Data.cy";

function Provider_Login(){



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
    //    <==================== OTP ====================>

   it("6- Wait for OTP.",function(){  
   cy.wait(30000);
})
    //    <==================== OTP ====================>
 
    it("7- Click on Continue button.",function(){      
    cy.get('#continue').click()
cy.wait(4000)
})



}

export default Provider_Login;

