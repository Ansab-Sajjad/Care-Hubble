import sign_up_data from "../../fixtures/Care Hubble data/CH_signup_data.cy"
import {Homepage_Link,verification_Link} from "../../../fixtures/Care Hubble data/Links.cy"
import PP_SetUp_Data from "./Profile_SetUp_Data.cy"

describe("Let's automate the Care Hubble.", function(){

    it('1- Visit to the main Landing page.', function(){
        Homepage_Link()
cy.wait(2000)
  
})


it("2- Click on SignUp button",function(){
    


cy.get('.d-flex > .btn-primary').click({force: true}) // clciking on the 'Signup'
cy.wait(2000)

 
})

it("3- Select Cordinator Account type.",function(){ 
    cy.get('.mt-40 > :nth-child(2)').click({force: true})  // Selecting provider account type.

})


//    <==================== Sign Up ====================>

it("4- Enter First Name.",function(){
    cy.get('form > :nth-child(1) > :nth-child(1) > .form-group > .form-controls > .prevent-quotes').type(sign_up_data.First_Name).wait(2000)
  })

it("5- Enter Last Name.",function(){
cy.get(':nth-child(3) > .form-group > .form-controls > .prevent-quotes').type(sign_up_data.Last_Name).wait(2000)
})

it("6- Enter Email.",function(){
    cy.get('#email').type(sign_up_data.CH_email).wait(2000)
})

it("7- Enter Password.",function(){
cy.get(':nth-child(5) > .row > :nth-child(1) > .form-group > .form-controls > .prevent-quotes').type(sign_up_data.First_Password).wait(2000)
})

it("8- Enter Confirm Password.",function(){
    cy.get(':nth-child(2) > .form-group > .form-controls > .prevent-quotes').type(sign_up_data.Confirm_Password).wait(2000)
    cy.wait(15000)
})

it("9- Click on 'Next' button.",function(){
cy.get('.btn').click({force: true})
   
    //    <==================== Waiting for the Email verification. ====================>

cy.wait(50000)     

verification_Link()
})
  
// it("10- Click on 'Next' button",function(){   
// cy.get('.btn').click({force: true})
// })


// it("12- Click on 'Continue' button",function(){
// cy.get('#continue').click({force: true}).wait(3000)  
// })

it("13- Click on Security Question.",function(){

cy.get(':nth-child(2) > .form-group > :nth-child(2) > .multiselect').click({force: true})

cy.wait(2000)
   
})

it("14- Select Security Question.",function(){
    
cy.contains("What city were you born in?").click({force: true}).wait(2000)
 
})

it("15- Add Answer.",function(){
cy.get(':nth-child(2) > .form-group > .mt-16 > .prevent-quotes').type("Muzaffarabad")
 
cy.wait(2000)
})

it("16- Click on Security Question.",function(){
    
cy.get(':nth-child(3) > .form-group > :nth-child(2) > .multiselect').click({force: true})

cy.wait(2000)
  
})

it("17- Select Security Question.",function(){
    

cy.contains("What is your favourite vegetable?").click({force: true}).wait(2000)
   
})

it("18- Add Answer.",function(){
    

cy.get(':nth-child(3) > .form-group > .mt-16 > .prevent-quotes').type("Nothing")

cy.wait(2000)
 
})

it("19- Click on Security Question.",function(){

cy.get(':nth-child(4) > .form-group > :nth-child(2) > .multiselect').click({force: true})

cy.wait(2000)
   
})

it("20- Select Security Question.",function(){
    

cy.contains("What is your favourite TV series?").click({force: true}).wait(2000)
 
})

it("21- Add Answer.",function(){


cy.get(':nth-child(4) > .form-group > .mt-16 > .prevent-quotes').type("NA")

cy.wait(2000)
   
})

it("22- Click On Continue button.",function(){
    


cy.get('.btn').click({force: true}).wait(2000)
    
})

it("",function(){


cy.get('.btn').click({force: true}).wait(3000)
 
})

// it("11- Enter Preffered Name.",function(){      
//     cy.get(':nth-child(2) > .form-group > .form-controls > .prevent-quotes').click({force: true})
//     cy.wait(2000)
//     cy.get(':nth-child(2) > .form-group > .form-controls > .prevent-quotes').clear().type(PP_SetUp_Data.Public_Name);
//     cy.wait(2000)
//           })
//           it("13- Select Pronouns.",function(){      
//             cy.get(':nth-child(6) > .form-group > .form-controls > .multiselect').click({force: true}).wait(2000)
//             cy.contains("Him/He").click({force: true})
//                    })

                   it("19- Enter Street Address",function(){
                    cy.get('.pac-target-input').click({force: true})
                    cy.get('.pac-target-input').clear().type(PP_SetUp_Data.Street_Address)
                    cy.wait(3000)
                 cy.contains("1 Canada's Wonderland Drive, Maple, ON L6A 1S6, Canada").click({force: true})
                })
                
                
//                 it("20- Enter Appartment number.",function(){
//                     cy.get(':nth-child(2) > .form-group > .form-controls > .prevent-quotes').click({force: true})
//                     cy.get(':nth-child(2) > .form-group > .form-controls > .prevent-quotes').clear().type(PP_SetUp_Data.Apartment_Number)
//                     cy.wait(2000)
//                 })
                
                
//                 it("21- Enter City",function(){
//                     cy.get(':nth-child(3) > .form-group > .form-controls > .prevent-quotes').click({force: true})
//                     cy.get(':nth-child(3) > .form-group > .form-controls > .prevent-quotes').clear().type(PP_SetUp_Data.City)
//                     cy.wait(2000)
//                 })
// it("Enter Country.", function(){
//     cy.get(':nth-child(11) > .form-group > .form-controls > input').type(PP_SetUp_Data.Country_Name)
// })                                
// it("23- Postal code",function(){
//     cy.get(':nth-child(5) > .form-group > .form-controls > input').click({force: true})  
//     cy.get(':nth-child(5) > .form-group > .form-controls > input').clear().type(PP_SetUp_Data.Postal_Code)
//     cy.wait(2000)
// })
// it("26- Time Zone",function(){
//     cy.get(':nth-child(9) > .form-group > .form-controls > div > .select2 > .selection > .select2-selection > #select2--container').click({force: true}).wait(2000)
//     cy.contains("(UTC-05:00) Eastern Time (US & Canada)").click({force: true}).wait(2000)
// })
it("Click on Save Changes button.",function(){
    cy.get('.btn').click()
})
})
