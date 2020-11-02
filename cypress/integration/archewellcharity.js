/// <reference types="Cypress" />
describe('Test via archewellcharity',()=> {
    let randomString=Math.random().toString(36).substring(2);
    const email="auto_"+randomString+randomString+"@gmail.com";
    it('Should be able to submit a successful apply via enter options:',()=>{
        cy.visit('https://www.archewellcharity.com/')
        cy.get('#mce-EMAIL').type(email);
        cy.get('#mc-embedded-subscribe').click();
        cy.get('#mce-success-response').should('have.text','Thank you for subscribing!')

    })
})