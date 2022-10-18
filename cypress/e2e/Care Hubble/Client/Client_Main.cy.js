
import sign_up_data from "../../../fixtures/Care Hubble data/Client data/Client_signup_data.cy"
import CP_SetUp_Data from "./Client_Profile_SetUp_Data.cy"
import meet_and_greet_fun from "./Meet_and_Greet.cy"
import Book_Care_visit from "./Care_Visit.cy"
import Client_SignIN from "./Client_SignIN.cy"
import Client_SignUp from "./Client_Sign-UP.cy"


describe("Let's automate the Care Hubble.", function () {
  
    //    <==================== Client Sign-Up ====================>

  
    // Client_SignUp()

    //    <==================== Client Sign In ====================>

    Client_SignIN()

    //    <==================== Meet & Greet ====================>

    meet_and_greet_fun()

    //    <==================== Book Care Visit ====================>

    Book_Care_visit()
    

     


    
})

