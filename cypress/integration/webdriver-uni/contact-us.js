///<reference types="cypress"/>

describe("Test Contact Us form via WebdriverUni", () => {
    it("Should be able to submit a successful submission via contact us form as all fields are required", () => {
       //cypress code
       cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
       cy.document().should('have.property','charset').and('eq','UTF-8')
       cy.title().should('include','WebDriver | Contact Us')
       cy.url().should('include','contactus')
    });

     it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
       //cypress code
    })
})