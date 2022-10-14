import Provider_Login from "./Provider_SignIn.cy"
import Provider_Profile_Setup from "./Provider_ProfileSetup.cy"
import provider_Check_In from "./Provider_checkIn.cy"
import Provider_Check_out from "./Provider_Checkout.cy"
import Extend_Visit from "./Extend_Visit.cy"
import Early_Checkout from "./Early_checkout.cy"
import provider_Check_In_With_Test_Cases from "./Provider_CheckIn_Nagitive_Test Cases.cy"
import Reshedule from "./Rescadule.cy"
import Direct_Cancel_Visit from "./Direct_Cancel_Visit.cy"



describe("Let's automate the Care Hubble.", function () {
    

    //    <==================== Provider Login ====================>

    Provider_Login()  // => Must ON.

    //    <==================== Provider Profile SetUp ====================>

    // Provider_Profile_Setup()

    //    <==================== Provider Check_In ====================>
    
    // provider_Check_In() 
    
    // provider_Check_In_With_Test_Cases()

    //    <==================== Provider Check_Out ====================>

    //  Provider_Check_out() //=> On for Extend & Early Check out.

    //    <==================== Extend Visit ====================>

    // Extend_Visit()

    //    <==================== Early Checkout ====================>

    // Early_Checkout()

    //    <==================== Reschedule ====================>

    Reshedule()

    //    <==================== Direct Cancel Care Visit ====================>

    // Direct_Cancel_Visit() 


})
