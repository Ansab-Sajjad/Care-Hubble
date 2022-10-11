import sign_up_data from "../../../fixtures/Care Hubble data/Provider data/Provider_signup_data.cy"
import {Homepage_Link,verification_Link} from "../../../fixtures/Care Hubble data/Links.cy"

describe("Let's automate the Care Hubble.", function(){

    it('1- Visit to the main Landing page.', function(){
        Homepage_Link()
cy.wait(2000)
  
})


it("2- Click on SignUp button",function(){
    


cy.get('.d-flex > .btn-primary').click({force: true}) // clciking on the 'Signup'
cy.wait(2000)

 
})

it("3- Select Provider Account type.",function(){ 
cy.get(':nth-child(3) > .p2 > .clr-navy').click({force: true})  // Selecting provider account type.

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
   cy.wait(5000)
   cy.get('.vti__input').clear().type(sign_up_data.Mobile_Number).wait(2000)

})

it("10- Click on 'Next' button",function(){   
cy.get('.btn').click({force: true})
})

it("11- Wait for OTP Verification.",function(){
cy.wait(30000)
  
})

it("12- Click on 'Continue' button",function(){
cy.get('#continue').click({force: true}).wait(3000)  
})

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

it("",function(){


cy.scrollTo("bottom")
cy.wait(3000)

})

it("",function(){
    
cy.get('.mb-40 > .btn-primary').click({force: true})
    
})

it("",function(){
    
cy.wait(3000)
  
})

//      ========================> Attachments Uploading <========================

//      ========================> Attachments 01 <========================


it("",function(){
cy.get('#file').click({force: true})
const filepath1 = 'images/logo.png'
cy.get('#file').attachFile(filepath1)
cy.wait(3000)
 
})

it("",function(){
    
cy.scrollTo("bottom")
cy.wait(3000)
   
})

//      ========================> Attachments 02 <========================


it("",function(){
cy.get('#file2').click({force: true})
const filepath2 = 'images/logo.png'
cy.get('#file2').attachFile(filepath2)
cy.wait(3000)
 
})

it("",function(){

cy.scrollTo("bottom")
cy.wait(3000)

})

//      ========================> Attachments 03 <========================


it("",function(){

cy.get('#file3').click({force: true})
const filepath3 = 'images/dummy.pdf'
cy.get('#file3').attachFile(filepath3)
cy.wait(3000)
   
})

it("",function(){

cy.scrollTo("bottom")
cy.wait(3000)
  
})

//      ========================> Attachments 04 <========================

it("",function(){

cy.get('#file3').click({force: true})
const filepath4 = 'images/dummy.pdf'
cy.get('#file3').attachFile(filepath4)
cy.wait(3000)
  
})

it("",function(){

cy.scrollTo("bottom")
cy.wait(2000)
  
})

it("",function(){


cy.get('.mt-40 > .btn').click({force: true})

cy.wait(2000)
})


//      ========================> Compelete My Profile <========================

it("",function(){
    
cy.get('.btn').click()

cy.wait(4000)
  
})

//      ========================> Uploading Profile Picture <========================


it("",function(){


cy.get('.icon-Edit-Small').click({force: true})
    const filepath5 = 'images/logo.png'
    cy.get('.icon-Edit-Small').attachFile(filepath5, {subjectType: 'drag-n-drop'})
    cy.wait(3000)


    
    
    cy.get('.vicp-drop-area').click({force: true})

    })
    
it("",function(){
    

const filepath6 = 'images/logo.png'
cy.get('.vicp-drop-area').attachFile(filepath6, {subjectType: 'drag-n-drop'})
cy.wait(3000)

})

it("",function(){


    cy.get('.vicp-operate-btn').click({force: true}).wait(2000)
 
})

//      ========================> Complete Profile Later. <========================


it("Complete Profile Later",function(){


    cy.get('.col-md-4 > .btn').click({force: true})
    })

    
it("",function(){
    
})

  })



//      ========================> Provider Sign up is Okkkkkkkkk. <========================
