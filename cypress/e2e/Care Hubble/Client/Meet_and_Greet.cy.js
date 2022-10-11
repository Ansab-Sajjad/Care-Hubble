
import {Homepage_Link,verification_Link} from "../../../fixtures/Care Hubble data/Links.cy"
import sign_up_data from "../../../fixtures/Care Hubble data/Client data/Client_signup_data.cy"
import CP_SetUp_Data from "./Client_Profile_SetUp_Data.cy"

function meet_and_greet_fun(){
 


    it("6- Click on find care button.", function(){
        cy.wait(3000)
        cy.get(':nth-child(2) > .nav-link > :nth-child(2)').click({force: true}).wait(2000)
    })

    it("Enter address to search Provider.", function(){
        cy.get('.pac-target-input').click({force: true}).wait(2000)
        cy.scrollTo("top")
        cy.wait(2000)
        cy.get('.pac-target-input').type(CP_SetUp_Data.Street_Address)
        cy.wait(3000)
        cy.contains("1 Canada's Wonderland Drive, Maple, ON L6A 1S6, Canada").click({force: true}).wait(2000)
        cy.get('.ml-auto > .btn').click({force: true})
    })

    it("Click on the Provider Profile.", function(){
        cy.wait(6000)
        cy.get('.lh-36 > .d-none').click({force: true}).wait(2000)
    })

it("Click on the 'Meet & Greet' button.  ", function(){
    cy.get('.btn-text.mr-24').click({force: true}).wait(5000)
})

it("scroll down popup.",function(){
    cy.get('#modal-mask > .modal-dialog > .modal-content > .modal-body').scrollTo("bottom").wait(2000)
})

it("Select Time to call.", function(){
    cy.get('.multiselect').click({force: true}).wait(2000)
    cy.get('[id="multiselect-options"]').find('li').contains("Morning").click({force: true}) 
})

it("Enter brief text.", function(){
    cy.get('textarea').click({force: true}).wait(2000)
    cy.get('textarea').type("This is a text box.")
})

it("Click on the checkbox.", function(){
    cy.get('.form-checkbox > .fs-16').click({force: true}).wait(2000)
})

it("Click on the submit button.", function(){
    cy.get('.mt-16 > .col-md-12 > .btn-primary').click({force: true}).wait(2000)
})

}


export default meet_and_greet_fun;