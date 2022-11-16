function Provider_Notificaitons() {

    //    <==================== Bookings Notifications ====================>

  it("Click on Notification button.", function () {
    cy.get(":nth-child(5) > :nth-child(1) > .nav-link > :nth-child(2)")
      .click({ force: true })
      .wait(2000);
  });

  it("Scroll up and down.", function () {
    cy.scrollTo("bottom").wait(3000);
    cy.scrollTo("top").wait(3000);
  });

  it("Click on first notification.", function () {
    cy.get('#appointment-notification-0').click({ force: true })
    .wait(2000);
  });

  it("Scroll up and down.", function () {
    cy.scrollTo("bottom").wait(3000);
    cy.scrollTo('center').wait(3000);
    cy.scrollTo("top").wait(3000);
  });

  it("Click on message button.", function () {
    cy.get('.mr-24 > .anchor').click({ force: true }).wait(2000);
  });

  it("Type a message and hit Enter", function () {
    cy.get('.right-icon').click({ force: true })
    cy.get('.right-icon').type("This is a text message for a testing purpose.").type('{enter}').wait(2000);
});

it("Click on Notifications.", function () {
  cy.get(':nth-child(5) > :nth-child(1) > .nav-link > :nth-child(2)').click({ force: true }).wait(2000);
});

it("", function () {
    
});


    //    <==================== Provider Check_In ====================>


  it("Click on Meet & Greet.", function () {
    cy.get(":nth-child(2) > #log-tab").click({ force: true }).wait(2000);
  });

  it("Scroll up and down.", function () {
    cy.scrollTo("bottom").wait(3000);
    cy.scrollTo("top").wait(3000);
  });
  
it("Click on First Notificaiton", function () {
  cy.get('#meet-and-greet-notification-0').click({ force: true }).wait(2000);
});

it("Click on Cross button.", function () {
cy.wait(2000)
  cy.get('.icon-Cross').click({ force: true }).wait(2000);
});

    //    <==================== Provider Check_In ====================>

      it("Click on Admin.", function () {
    cy.get(":nth-child(3) > #log-tab").click({ force: true }).wait(2000);
  });

  it("Scroll up and down.", function () {
    cy.scrollTo("bottom").wait(3000);
    cy.scrollTo("top").wait(3000);
  });

  
}

export default Provider_Notificaitons;
