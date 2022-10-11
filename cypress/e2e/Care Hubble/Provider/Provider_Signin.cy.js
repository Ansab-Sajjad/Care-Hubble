

import {Homepage_Link,verification_Link} from "../../../fixtures/Care Hubble data/Links.cy"
import sign_up_data from "../../../fixtures/Care Hubble data/Provider data/Provider_signup_data.cy";
import PP_SetUp_Data from "./Profile_SetUp_Data.cy";


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
    //    <==================== OTP ====================>

   it("6- Wait for OTP.",function(){  
   cy.wait(30000);
})
    //    <==================== OTP ====================>
 
    it("7- Click on Continue button.",function(){      
    cy.get('#continue').click()
cy.wait(4000)
      })

      it("8- Click on Drop Down button.",function(){      
cy.get('.icon-Upsmall').click().wait(2000)
    })
    it("9- Select Profile Button.",function(){       
cy.get(':nth-child(1) > .dropdown-item').click()
cy.wait(2000)
       })
       it("10- Click on 'Edit Profile' button.",function(){      
cy.get('.btn-primary').click({force: true});
cy.wait(2000)
      })

    //    <==================== Edit Profile ====================>

      it("11- Enter Preffered Name.",function(){      
cy.get(':nth-child(2) > .form-group > .form-controls > .prevent-quotes').click({force: true})
cy.wait(2000)
cy.get(':nth-child(2) > .form-group > .form-controls > .prevent-quotes').clear().type(PP_SetUp_Data.Public_Name);
cy.wait(2000)
      })

     it("12- Select Gender.",function(){    
cy.get(':nth-child(5) > .form-group > .form-controls > .multiselect').click({force: true}).wait(2000)
cy.contains("Male").click({force: true})
cy.wait(2000)
    })

    it("13- Select Pronouns.",function(){      
cy.get(':nth-child(6) > .form-group > .form-controls > .multiselect').click({force: true}).wait(2000)
cy.contains("Him/He").click({force: true})
       })

       it("14- Enter Years of Expereince.",function(){    
cy.get(':nth-child(7) > .form-group > .form-controls > input').click({force: true})
cy.get(':nth-child(7) > .form-group > .form-controls > input').clear().type(PP_SetUp_Data.Years_of_Experience).wait(2000)
      })

      it("15- Enter 'About You' description.",function(){      
cy.get('textarea').click({force: true})
cy.get('textarea').clear().type(PP_SetUp_Data.About_You).wait(2000)
       })

       it("16- Enter GST/HST Number.",function(){       
cy.get(':nth-child(10) > .form-group > .form-controls > input').click({force: true})
cy.get(':nth-child(10) > .form-group > .form-controls > input').clear().type(PP_SetUp_Data.GST_HST_number)
cy.wait(2000)
})

it("17- Scroll to Buttom.",function(){       
cy.scrollTo("bottom")
cy.wait(2000)
     })

     it("18- Click on Save & Continue button.",function(){      
cy.get('.btn-primary').click({force: true})
cy.wait(2000)

       })


    //    <==================== Address and Time Zone ====================>



  it("19- Enter Street Address",function(){
    cy.get('.pac-target-input').click({force: true})
    cy.get('.pac-target-input').clear().type(PP_SetUp_Data.Street_Address)
    cy.wait(3000)
    cy.contains("1 Canada's Wonderland Drive, Maple, ON L6A 1S6, Canada").click({force: true})
 
})


it("20- Enter Appartment number.",function(){
    cy.get(':nth-child(2) > .form-group > .form-controls > .prevent-quotes').click({force: true})
    cy.get(':nth-child(2) > .form-group > .form-controls > .prevent-quotes').clear().type(PP_SetUp_Data.Apartment_Number)
    cy.wait(2000)
})


it.skip("21- Enter City",function(){
    cy.get(':nth-child(3) > .form-group > .form-controls > .prevent-quotes').click({force: true})
    cy.get(':nth-child(3) > .form-group > .form-controls > .prevent-quotes').clear().type(PP_SetUp_Data.City)
    cy.wait(2000)
})


it.skip("22- Enter Province",function(){
    cy.get(':nth-child(4) > .form-group > .form-controls > .prevent-quotes').click({force: true})
    cy.get(':nth-child(4) > .form-group > .form-controls > .prevent-quotes').clear().type(PP_SetUp_Data.Province)
    cy.wait(2000)
})


it.skip("23- Postal code",function(){
    cy.get(':nth-child(5) > .form-group > .form-controls > input').click({force: true})  
    cy.get(':nth-child(5) > .form-group > .form-controls > input').clear().type(PP_SetUp_Data.Postal_Code)
    cy.wait(2000)
})


it("24- Maximum Client Distance",function(){
    cy.get(':nth-child(6) > .form-group > .form-controls > input').click({force: true}) 
    cy.get(':nth-child(6) > .form-group > .form-controls > input').clear().type(PP_SetUp_Data.Maximum_Client_Distance)
    cy.wait(2000)
})


// it("25- Interval Time B/W Booking",function(){
//     cy.get(':nth-child(7) > .form-group > .form-controls > div > .select2 > .selection > .select2-selection > #select2--container').click({force: true}).wait(2000)
//    cy.contains("15 minutes").click({force: true}) 
// })

it("25- Interval Time B/W Booking",function(){
    cy.get(':nth-child(7) > .form-group > .form-controls > div > .select2 > .selection > .select2-selection > #select2--container').click({force: true}).wait(2000)
  cy.get('[id="select2--results"]').find('li').contains("15 minutes").click({force: true}) 
})


it("26- Time Zone",function(){
    cy.get(':nth-child(9) > .form-group > .form-controls > div > .select2 > .selection > .select2-selection > #select2--container').click({force: true}).wait(2000)
   cy.get('[id="select2--results"]').find('li').contains("(UTC-05:00) Eastern Time (US & Canada)").click({force: true}).wait(2000)
})


it("27- Click on save and continue button.",function(){
    cy.get('.btn-primary').click({force: true})
})

    //    <==================== Language and information ====================>

it("28- Select Language.",function(){
    cy.wait(3000)
    cy.get('.select2-selection__placeholder').click({force: true}).wait(2000)
    cy.get('[id="select2--results"]').find('li').contains("English").click({force: true}).wait(3000)
   })

   it("29- Upload Audio Introduction.",function(){
    cy.get('#file').click({force: true})
    const filepathp7 = 'images/Dummy_Audio.mp3'
    cy.get('#file').attachFile(filepathp7)
    cy.wait(5000)

})

it("30- Click on 'Add' button.",function(){
    cy.get(':nth-child(3) > .btn').click({force: true}).wait(4000)
})


it("31- Click on Save & Continue button.",function(){
    cy.get('.col-md-8 > .btn-primary').click({force: true}).wait(4000)
})

    //    <==================== Services ====================>

it("32- Add services.",function(){
    cy.get(':nth-child(1) > :nth-child(1) > .row > :nth-child(1) > .form-group > .form-checkbox > label').click({force: true}).wait(2000)
    cy.get(':nth-child(4) > .form-group > .form-checkbox > label').click({force: true}).wait(2000)
    cy.get(':nth-child(3) > .form-group > .form-checkbox > label').click({force: true}).wait(2000)
    cy.get(':nth-child(7) > .form-group > .form-checkbox > label').click({force: true}).wait(2000)
    cy.get(':nth-child(9) > .form-group > .form-checkbox > label').click({force: true}).wait(2000)

})


it("33- Scroll to Buttom.",function(){       
    cy.scrollTo("bottom")
    cy.wait(2000)
         })
    
it("34- Click on Save & Continue button.",function(){
    cy.get('.col-md-8 > .btn-primary').click({force: true}).wait(2000)
})

    //    <==================== Certification ====================>


it("35- Scroll to Buttom.",function(){       
    cy.scrollTo("bottom")
    cy.wait(2000)
         })

it("36- Click on No.",function(){
    cy.get(':nth-child(2) > .custom_radio > label').click({force: true}).wait(2000)
})

it("37- Click on Continue button.",function(){
    cy.get('.col-md-8 > .btn-primary').click({force: true}).wait(2000)
})

//    <==================== Other Documentation And Vaccination ====================>



//    <==================== Background Check ====================>


it("38- Upload Background Check certificate.",function(){
    cy.get(':nth-child(1) > :nth-child(3) > .drag-or-browse > #file').click({force: true})
    const filepathp8 = 'images/dummy.pdf'
    cy.get(':nth-child(1) > :nth-child(3) > .drag-or-browse > #file').attachFile(filepathp8)
    cy.wait(3000)

})

//    <==================== Professional Liability Insurance ====================>


it("39- Upload Professional Liability Insurance.",function(){
    cy.get(':nth-child(2) > :nth-child(3) > .drag-or-browse > #file').click({force: true})
    const filepathp9 = 'images/dummy.pdf'
    cy.get(':nth-child(2) > :nth-child(3) > .drag-or-browse > #file').attachFile(filepathp9)
    cy.wait(3000)

})

it("40- Enter Expiry date",function(){
    cy.get(':nth-child(2) > .col-md-12 > .form-group > .form-controls > .v3dp__datepicker > .v3dp__input_wrapper > .right-icon').click({force: true}).wait(18000)
   
})


it("41- Scroll to Buttom.",function(){       
    cy.scrollTo("bottom")
    cy.wait(2000)
         })

//    <==================== Vaccination certificate ====================>


it("42- Upload Vaccination.",function(){
    cy.get('#file3').click({force: true})
    const filepathp7 = 'images/dummy.pdf'
    cy.get('#file3').attachFile(filepathp7)
    cy.wait(3000)

})

it("43- Click on Upload button.",function(){
    cy.get(':nth-child(3) > :nth-child(4) > .btn').click({force: true}).wait(2000)
})

it("44- Click on save & continue button.",function(){
    cy.get('.col-md-8 > .btn-primary').click({force: true})
})

//    <==================== Rates ====================>

//    <==================== Weekdays ====================>

it("45- Enter your rates.",function(){
    cy.get(':nth-child(1) > .bordered-div > :nth-child(1) > :nth-child(2) > .form-group > .form-controls > .mw-120').click({force: true}).wait(2000)
    cy.get(':nth-child(1) > .bordered-div > :nth-child(1) > :nth-child(2) > .form-group > .form-controls > .mw-120').clear().type("30").wait(1000)
})

it("46- Enter your rates.",function(){
    cy.get(':nth-child(1) > .bordered-div > :nth-child(2) > :nth-child(2) > .form-group > .form-controls > .mw-120').click({force: true}).wait(2000)
    cy.get(':nth-child(1) > .bordered-div > :nth-child(2) > :nth-child(2) > .form-group > .form-controls > .mw-120').clear().type("30").wait(1000)
})

it("47- Enter your rates.",function(){
    cy.get(':nth-child(1) > .bordered-div > :nth-child(3) > :nth-child(2) > .form-group > .form-controls > .mw-120').click({force: true}).wait(2000)
    cy.get(':nth-child(1) > .bordered-div > :nth-child(3) > :nth-child(2) > .form-group > .form-controls > .mw-120').clear().type("30").wait(1000)
})

//    <==================== Weekends & Holidays ====================>


it("48- Enter your rates.",function(){
    cy.get(':nth-child(3) > .bordered-div > :nth-child(1) > :nth-child(2) > .form-group > .form-controls > .mw-120').click({force: true}).wait(2000)
    cy.get(':nth-child(3) > .bordered-div > :nth-child(1) > :nth-child(2) > .form-group > .form-controls > .mw-120').clear().type("30").wait(1000)
})


it("49- Enter your rates.",function(){
    cy.get(':nth-child(3) > .bordered-div > :nth-child(2) > :nth-child(2) > .form-group > .form-controls > .mw-120').click({force: true}).wait(2000)
    cy.get(':nth-child(3) > .bordered-div > :nth-child(2) > :nth-child(2) > .form-group > .form-controls > .mw-120').clear().type("30").wait(1000)
})


it("50- Enter your rates.",function(){
    cy.get(':nth-child(3) > .bordered-div > :nth-child(3) > :nth-child(2) > .form-group > .form-controls > .mw-120').click({force: true}).wait(2000)
    cy.get(':nth-child(3) > .bordered-div > :nth-child(3) > :nth-child(2) > .form-group > .form-controls > .mw-120').clear().type("30").wait(1000)
})

it("51- Scroll to Buttom.",function(){       
    cy.scrollTo("bottom")
    cy.wait(2000)
         })



it("52- Scroll to Buttom.",function(){       
    cy.scrollTo("bottom")
    cy.wait(2000)
         })

it("53- Click on next button.",function(){
    cy.get('.btn-primary').click({force: true})
})

//    <==================== Availability ====================>


it("54- Scroll to top.",function(){       
    cy.scrollTo("top")
    cy.wait(2000)
         })

         it("55- Enter Minimum Booking Time.",function(){
            cy.get('.multiselect').click({force: true}).wait(2000)
    cy.get('[id="multiselect-options"]').find('li').contains("30 minutes").click({force: true}).wait(2000)
        })
   
it("56- Select all Unschedule weeks.",function(){
    cy.get('div.mt-40 > :nth-child(1) > :nth-child(4) > .form-group > .form-checkbox > label').click({force: true}).wait(2000)
})
   

it("57- Scroll to bottom.",function(){       
    cy.scrollTo("bottom")
    cy.wait(2000)
         })

it("58- Click on the 'Set Avalibility' button.",function(){
    cy.get(':nth-child(6) > .btn').click({force: true}).wait(4000)
})
   
it("59- Click on the 'Set Avalibility' button.",function(){
    cy.get('form > .mt-40 > .btn-primary').click({force: true}).wait(4000)
})
   
it("60- Click on Go Back button.",function(){
    cy.get('.mt-40 > .btn').click({force: true}).wait(4000)
})

it("61- Scroll to bottom.",function(){       
    cy.scrollTo("bottom")
    cy.wait(3000)
         })



// it("",function(){
    
// })

// it("",function(){
    
// })

// /////////////////////////////////////
                 
it("62- Scroll to Buttom.",function(){       
    cy.scrollTo("bottom")
    cy.wait(2000)
         })

it("63- Click on Save & Continue button.",function(){
    cy.get('.col-md-8 > .btn-primary').click({force: true}).wait(2000)
})

//    <==================== Care Partners ====================>

it("64- Scroll to Buttom.",function(){       
    cy.scrollTo("bottom")
    cy.wait(2000)
         })
it("65- Click on the checkbox",function(){
    cy.get('label').click({force: true}).wait(2000)
})

it("66- Click on Save & continue button.",function(){
    cy.get('.btn-text').click({force: true}).wait(2000)
})

it("67- Scroll to Buttom.",function(){       
    cy.scrollTo("bottom")
    cy.wait(2000)
         })

it("68",function(){
    cy.get('.col-md-8 > .btn-primary').click({force: true}).wait(2000)
})


it("69",function(){
    
})


it("",function(){
    
})


it("",function(){
    
})


it("",function(){
    
})


it("",function(){
    
})


it("",function(){
    
})


it("",function(){
    
})


it("",function(){
    
})


it("",function(){
    
})


it("",function(){
    
})


it("",function(){
    
})


it("",function(){
    
})


it("",function(){
    
})


it("",function(){
    
})


it("",function(){
    
})


it("",function(){
    
})


it("",function(){
    
})


it("",function(){
    
})


it("",function(){
    
})








});
