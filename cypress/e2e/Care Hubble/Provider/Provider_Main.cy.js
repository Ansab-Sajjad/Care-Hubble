import Provider_Login from "./Provider_SignIn.cy"
import Provider_Profile_Setup from "./Provider_ProfileSetup.cy"
import provider_Checkout from "./provider_checkout.cy"



describe("Let's automate the Care Hubble.", function () {
    

    //    <==================== Provider Login ====================>

    Provider_Login()


    //    <==================== Provider Profile SetUp ====================>

    // Provider_Profile_Setup()

    //    <==================== Provider Checkout ====================>
    
    provider_Checkout()

})
