///<reference types="cypress"/>



describe("Test Contact Us form via Automation Test Store", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
       //cypress code
       cy.visit("https://automationteststore.com/")
      //  cy.get('.info_links_footer > :nth-child(5) > a').click()
       cy.xpath("//a[contains(@href, 'contact')]").click();
       cy.get('#ContactUsFrm_first_name').type("Jenny")
       cy.get('#ContactUsFrm_email').type("yangjenny.it@gmail.com")
       cy.get('#ContactUsFrm_enquiry').type("ok,i do not have a question")
       cy.get('button[title="Submit"]').click();
       cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')


    });
  

   //   it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
   //     //cypress code
   //  })
})