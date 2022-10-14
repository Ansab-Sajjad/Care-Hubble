import sign_up_data from "../../../fixtures/Care Hubble data/Client data/Client_signup_data.cy"
import {Homepage_Link,verification_Link} from "../../../fixtures/Care Hubble data/Links.cy"
import CP_SetUp_Data from "./Client_Profile_SetUp_Data.cy"


function Client_SignUp() {

    it('1- Visit to the main Landing page.', function(){
        Homepage_Link()
cy.wait(2000)
  
})


it("2- Click on SignUp button",function(){
    


cy.get('.d-flex > .btn-primary').click({force: true}) // clciking on the 'Signup'
cy.wait(2000)

 
})

it("3- Select Cordinator Account type.",function(){ 
    cy.get('.mt-40 > :nth-child(1)').click({force: true})  // Selecting provider account type.

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

    cy.wait(60000)     

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

it("Click on 'Go to Dashboard'.",function(){

cy.get('.btn-primary').click({force: true}).wait(2000)
})

it("",function(){

    cy.scrollTo("bottom")
    cy.wait(2000)
      
    })


     it("Click on 'Accept' button.",function(){
        cy.get('.mb-40 > .btn-primary').click({force: true}).wait(2000)

    })

    
//      ========================> Uploading Profile Picture <========================


it("",function(){


    cy.get('.icon-Edit-Small').click({force: true})
        const filepath8 = 'images/logo.png'
        cy.get('.icon-Edit-Small').attachFile(filepath8, {subjectType: 'drag-n-drop'})
        cy.wait(3000)
    
    
        
        
        cy.get('.vicp-drop-area').click({force: true})
    
        })
        
    it("",function(){
        
    
    const filepath9 = 'images/logo.png'
    cy.get('.vicp-drop-area').attachFile(filepath9, {subjectType: 'drag-n-drop'})
    cy.wait(3000)
    
    })
    
    it("",function(){
    
    
        cy.get('.vicp-operate-btn').click({force: true}).wait(2000)
     
    })

//      ========================> Complete Profile Later. <======================== 

it("11- Enter Preffered Name.",function(){      
cy.get('#basic-info-form > :nth-child(1) > :nth-child(1) > :nth-child(1) > .form-group > .form-controls > input').click({force: true})
    cy.wait(2000)
    cy.get('#basic-info-form > :nth-child(1) > :nth-child(1) > :nth-child(1) > .form-group > .form-controls > input').clear().type(CP_SetUp_Data.Public_Name);
    cy.wait(2000)
          })
    

  
    it("12- Select Gender.",function(){    
        cy.get('#basic-info-form > :nth-child(1) > :nth-child(1) > :nth-child(4) > .form-group > .form-controls > .multiselect').click({force: true}).wait(2000)
        cy.contains("Male").click({force: true})
        cy.wait(2000)
            })
        
            it("13- Select Pronouns.",function(){      
                cy.get(':nth-child(5) > .form-group > .form-controls > .multiselect').click({force: true}).wait(2000)
                cy.contains("him/he").click({force: true})
                       })
    it("Select Martial Status.",function(){
        cy.get(':nth-child(6) > .form-group > .form-controls > .multiselect').click({force: true}).wait(2000)
        cy.contains("Common Law").click({force: true})
    })

it("Enter Date of Birth.",function(){
    cy.get('.right-icon').click({force: true}).wait(2000)
    cy.get('.right-icon').type(CP_SetUp_Data.Date_of_Birth)
})
it("Enter Contact Details.",function(){
    cy.get('.form-group > .vue-tel-input > .vti__input').click({force: true}).wait(2000)
    cy.get('.form-group > .vue-tel-input > .vti__input').type(CP_SetUp_Data.Phone_Number)
})

it("19- Enter Street Address",function(){
    cy.get('.pac-target-input').click({force: true})
    cy.get('.pac-target-input').clear().type(CP_SetUp_Data.Street_Address)
    cy.wait(3000)
    cy.contains("1 Canada's Wonderland Drive, Maple, ON L6A 1S6, Canada").click({force: true})
 
})


it("20- Enter Appartment number.",function(){
    cy.get(':nth-child(12) > .form-group > .form-controls > input').click({force: true})
    cy.get(':nth-child(12) > .form-group > .form-controls > input').clear().type(CP_SetUp_Data.Apartment_Number)
    cy.wait(2000)
})

it("Select Type of Home.",function(){
    cy.get(':nth-child(13) > .form-group > .form-controls > .multiselect').click({force: true}).wait(2000)
    cy.contains("Apartment or Condominium").click({force: true})
})

it("Enter Buzzer Number.",function(){
    cy.get(':nth-child(17) > .form-group > .form-controls > input').click({force: true}).wait(2000)
    cy.get(':nth-child(17) > .form-group > .form-controls > input').type(CP_SetUp_Data.Buzzer_Number)
})

it("Set Time Zone.",function(){
    cy.get('#select2--container').click({force: true}).wait(2000)

cy.get('[id="select2--results"]').find('li').contains("(UTC-05:00) Eastern Time (US & Canada)").click({force: true}).wait(2000)
})

it("Enter Full Name.",function(){
    cy.get('.col-12 > .row > :nth-child(1) > .form-group > .form-controls > input').click({force: true}).wait(2000)
    cy.get('.col-12 > .row > :nth-child(1) > .form-group > .form-controls > input').type(CP_SetUp_Data.Full_Name)
})

it("Enter Email.",function(){
    cy.get('.col-12 > .row > :nth-child(2) > .form-group > .form-controls > input').click({force: true}).wait(2000)
    cy.get('.col-12 > .row > :nth-child(2) > .form-group > .form-controls > input').type(CP_SetUp_Data.EC_Email)
})

it("Enter Phone Number.",function(){
    cy.get(':nth-child(2) > .vue-tel-input > .vti__input').click({force: true}).wait(2000)
    cy.get(':nth-child(2) > .vue-tel-input > .vti__input').type(CP_SetUp_Data.EC_Phone_Number)
})

it("Select Relation to Client.",function(){
    cy.get('.col-12 > .row > :nth-child(4) > .form-group > .form-controls > .multiselect').click({force: true}).wait(2000)
    cy.contains("child").click({force: true}).wait(2000)
})

it("Click on Save Contact button.",function(){
    cy.get('.col-md-12 > .btn').click({force: true}).wait(2000)
})

it("Click on Save & Continue button.",function(){
    cy.get('.col-md-8 > .btn-primary').click({force: true}).wait(4000)
})

it("Select Preffered Language.",function(){
    cy.wait(3000)
    cy.contains("Select Language").click({force: true}).wait(3000)
    cy.get(':nth-child(3) > .form-group > .form-checkbox > label').click({force: true}).wait(3000)
})
it("Tell Us More About you.",function(){
    cy.get(':nth-child(4) > .mb-24 > .d-flex > :nth-child(1) > .custom_radio > label').click({force: true}).wait(2000)
    cy.get(':nth-child(6) > .mb-24 > .d-flex > :nth-child(1) > .custom_radio > label').click({force: true}).wait(2000)
    cy.get(':nth-child(6) > .mb-24 > .form-group.w-100 > .form-controls > input').click({force: true}).wait(2000)
    cy.get(':nth-child(6) > .mb-24 > .form-group.w-100 > .form-controls > input').type("dog")
    cy.get(':nth-child(7) > .mb-24 > .d-flex > :nth-child(2) > .custom_radio > label').click({force: true}).wait(2000)
    cy.get(':nth-child(8) > .mb-24 > .d-flex > :nth-child(2) > .custom_radio > label').click({force: true}).wait(2000)
})
it("Enter Hobbies.",function(){
    cy.get('[placeholder="Type hobby and press Enter to add"]').click({force: true}).wait(2000)
    cy.get('[placeholder="Type hobby and press Enter to add"]').type("Puzzles").type('{enter}').wait(2000)
    cy.get('[placeholder="Type hobby and press Enter to add"]').type("listening to music").type('{enter}').wait(2000)
})
it("Click on Save and Continue button.",function(){
    cy.get('.col-md-8 > .btn-primary').click({force: true}).wait(4000)
})

//      ========================> Medical History <======================== 

it("Do you have any allergies?",function(){
    cy.get(':nth-child(1) > .d-flex > :nth-child(2) > .custom_radio > label').click({force: true}).wait(2000)
})

it("Have you been hospitalised in the past year?",function(){
    cy.get(':nth-child(2) > .d-flex > :nth-child(2) > .custom_radio > label').click({force: true}).wait(2000)
})

it("How many falls have you had in the past year?",function(){
    cy.get('.col-12 > .form-group > .form-controls > .multiselect').click({force: true}).wait(2000)
    cy.get('[id="multiselect-options"]').find('li').contains("I rarely fall (1-2 falls)").click({force: true}) 
})

it("What mobility devices do you use?",function(){
    cy.get(':nth-child(4) > .col-12 > .mb-0 > :nth-child(1) > .form-controls > .non-selected-filter').click({force: true}).wait(2000)
    cy.get(':nth-child(4) > .col-12 > .mb-0 > :nth-child(1) > .form-controls > .services-box > .row > :nth-child(1) > .form-group > .form-checkbox > label').click({force: true}).wait(2000)
})

it("What assistive devices do you normally use?",function(){
    cy.get(':nth-child(5) > .col-12 > .mb-0 > :nth-child(1) > .form-controls > .non-selected-filter').click({force: true}).wait(2000)
    cy.get(':nth-child(5) > .col-12 > .mb-0 > :nth-child(1) > .form-controls > .services-box > .row > :nth-child(1) > .form-group > .form-checkbox > label').click({force: true}).wait(2000)
})

it("Do you have any cognitive impairments?",function(){
    cy.get(':nth-child(6) > .form-group > .form-controls > :nth-child(1) > .col-md-12 > .mt-10').click({force: true}).wait(2000)
    cy.get(':nth-child(6) > .form-group > .form-controls > :nth-child(1) > .col-md-12 > .mt-10').type("Abnormal memory loss").type('{enter}').wait(2000)
})

it("Do you have any health impairments?",function(){
    cy.get(':nth-child(7) > .form-group > .form-controls > :nth-child(1) > .col-md-12 > .mt-10').click({force: true}).wait(2000)
    cy.get(':nth-child(7) > .form-group > .form-controls > :nth-child(1) > .col-md-12 > .mt-10').type("Diabetes").type('{enter}').wait(2000)
    cy.get(':nth-child(7) > .form-group > .form-controls > :nth-child(1) > .col-md-12 > .mt-10').type("Arthritis").type('{enter}').wait(2000)
})

it("Have you ever been told that you have an antibiotic resistant organism?",function(){
    cy.get(':nth-child(8) > .d-flex > :nth-child(2) > .custom_radio > label').click({force: true}).wait(2000)
})

//      ========================> Vaccination <======================== 


it("Vaccination - Influenza",function(){
    // cy.get(':nth-child(3) > .form-group > .form-controls > .v3dp__datepicker > .v3dp__input_wrapper > input')
    cy.get(':nth-child(11) > .form-group > .form-controls > .v3dp__datepicker > .v3dp__input_wrapper > input').click({force: true}).wait(5000)
    cy.contains("05").click({force: true}).wait(2000)
})
                    

it("COVID-19 Dose Number.",function(){
    cy.get(':nth-child(1) > .form-group > .form-controls > input').click({force: true}).wait(2000)
    cy.get(':nth-child(1) > .form-group > .form-controls > input').type("3")
})
                    

it("Enter Date.",function(){
    cy.get('.right-icon').click({force: true}).wait(2000)
    cy.wait(5000)
})
                    

it("Covid Vaccine type.",function(){
    cy.get(':nth-child(3) > .form-group > .form-controls > .multiselect').click({force: true}).wait(2000)
    cy.get('[id="multiselect-options"]').find('li').contains("AstraZeneca").click({force: true}).wait(2000)
})
                    

it("Click on save Vaccine button.",function(){
    cy.get('.mb-20 > .btn').click({force: true}).wait(2000)
})
                    

it("Click on Save & continue button.",function(){
    cy.get('.col-md-8 > .btn-primary').click({force: true}).wait(2000)
})
                    
//      ========================> Goals of Care. <======================== 

it("Select - What types of home care services are you looking for?",function(){
    cy.get('.non-selected-filter').click({force: true}).wait(2000)
    cy.get(':nth-child(1) > .form-group > .form-checkbox > label').click({force: true}).wait(2000)
    cy.get(':nth-child(2) > .form-group > .form-checkbox > label').click({force: true}).wait(2000)
    cy.get(':nth-child(3) > .form-group > .form-checkbox > label').click({force: true}).wait(2000)
})
                    

it("Select - How much care are you looking for?",function(){
    cy.get(':nth-child(1) > .form-group > .form-controls > .multiselect').click({force: true}).wait(2000)
cy.contains("About once a week").click({force: true}).wait(2000)
})
                    

it("Select - How long do you think you will need care for? ",function(){
    cy.get(':nth-child(2) > .form-group > .form-controls > .multiselect').click({force: true}).wait(2000)
    cy.contains("Less than 2 months").click({force: true}).wait(2000)
})
                    

it("Please list 3 goals in order of their importance to you",function(){
    cy.get(':nth-child(6) > :nth-child(1) > .col-12 > .form-group > .form-controls > input').click({force: true}).wait(2000)
    cy.get(':nth-child(6) > :nth-child(1) > .col-12 > .form-group > .form-controls > input').clear().type("I want to walk 20 minutes a day")
    cy.get(':nth-child(7) > :nth-child(1) > .col-12 > .form-group > .form-controls > input').click({force: true}).wait(2000)
    cy.get(':nth-child(7) > :nth-child(1) > .col-12 > .form-group > .form-controls > input').clear().type("I'd like help organizing my photos")
    cy.get(':nth-child(8) > :nth-child(1) > .col-12 > .form-group > .form-controls > input').click({force: true}).wait(2000)
    cy.get(':nth-child(8) > :nth-child(1) > .col-12 > .form-group > .form-controls > input').clear().type("I want to maintain my current physical and cognitive abilities")
})
                    

it("Click on Save & Continue.",function(){
    cy.get('.btn-primary').click({force: true}).wait(2000)
})
         
//      ========================> Consent to Sharing. <======================== 

it("Click on the checkbox",function(){
    cy.get('.form-checkbox > .fs-16').click({force: true}).wait(2000)
})
                    

it("Click on Save & Continue.",function(){
    cy.get('.btn-primary').click({force: true}).wait(2000)
})
  
//      ========================> Debit or Credit Card. <======================== 

it("Scroll to Buttom.",function(){       
    cy.scrollTo("bottom")
    cy.wait(2000)
         })

it("Enter Credit card number",function(){
cy.get('#card-number > .__PrivateStripeElement > iframe').click({force: true}).wait(2000)
cy.get('#card-number > .__PrivateStripeElement > iframe').type(CP_SetUp_Data.Card_Number)
})
                    

it("Card-expiry date",function(){
    cy.get('#card-expiry').click({force: true}).wait(2000)
    cy.get('#card-expiry').type(CP_SetUp_Data.Card_Expiry)

})
                    

it("Enter card-cvc.",function(){
    cy.get('#card-cvc > .__PrivateStripeElement > iframe').click({force: true}).wait(2000)
    cy.get('#card-cvc > .__PrivateStripeElement > iframe').type("325").wait(2000)

})
                    

it("Click on Add button.",function(){
    cy.get(':nth-child(5) > #custom-button').click({force: true}).wait(2000)
})
                    

it("Click on save & continue button.",function(){
    cy.get('.col-md-8 > #custom-button').click({force: true}).wait(2000)
})
                    

it("",function(){

})
                    


    
}
export default Client_SignUp;
 