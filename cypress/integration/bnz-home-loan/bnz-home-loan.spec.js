/// <reference types="Cypress" />
 
describe('Test my home loan options via bnz',()=> {
    let randomString=Math.random().toString(36).substring(2);
    const costofHome="1000000"
    const depositAmount="200000";
    const email="auto_"+randomString+randomString+"@gmail.com";
   
    it('Should be able to submit a successful apply via enter options:',()=>{
        cy.visit('https://www.bnz.co.nz/personal-banking/home-loans/calculators/home-loan-calculator') //visit url
        cy.title().should('contain','Home loan calculator - BNZ')   //verified the title is correct

        cy.get('#hlc-cost-of-home').clear().type(costofHome).click();
                
       

        cy.get('#hlc-deposit-amount').clear().type(depositAmount).click()   
        cy.get('.hlc-frequency').select('fortnightly')
        cy.get('.button-primary').click()
        cy.get('.ChoiceGroup-component-16').find("[type='radio']").first().check()
        cy.get('select[name="propertyType"]').select('apartment')
        cy.get('select[name="areaLookingToBuy"]').select('Auckland - central')
        cy.get('select[name="purposeOfLoan"]').select('firstHome')
        cy.get('label[data-test-id="kiwiSaver.no"]').click()
        cy.get('input[name="firstName"]').type('Jenny')
        cy.get('input[name="lastName"]').type('y')
        cy.get('input[type="email"]').type(email)
        cy.get('input[type="email"]').should('have.attr','name','email')
        cy.get('input[type="tel"]').type('00000000')
        cy.get('select[name="bestTimeToCall"]').select('mornings')
        cy.get('label[data-test-id="bnzCustomer.no"]').click()
        cy.get('label[data-test-id="selfEmployed.no"]').click()
        cy.get('select[name="talk"]').select('branch')
        cy.get('input[name="branch"]').type('a')

        cy.get('span[class="Layout-component-67"]>*').last().click()
        cy.get('.Button-wrapper-128').click()   
        cy.get('.sc-qXRQq').should('have.text', 'Talk to us about home loans')
           
        
    });

    it('Should not be able to submit a successful apply via enter options:',()=>{
        cy.visit('https://www.bnz.co.nz/personal-banking/home-loans/calculators/home-loan-calculator') //visit url
        cy.title().should('contain','Home loan calculator - BNZ')   //verified the title is correct

        cy.get('#hlc-cost-of-home').clear().type(costofHome).click();
                
       

        cy.get('#hlc-deposit-amount').clear().type(depositAmount).click()   
        cy.get('.hlc-frequency').select('fortnightly')
        cy.get('.button-primary').click()
        cy.get('.ChoiceGroup-component-16').find("[type='radio']").first().check()
        cy.get('select[name="propertyType"]').select('apartment')
        cy.get('select[name="areaLookingToBuy"]').select('Auckland - central')
        cy.get('select[name="purposeOfLoan"]').select('firstHome')
        cy.get('label[data-test-id="kiwiSaver.no"]').click()
        cy.get('input[name="firstName"]').type('Jenny')
        cy.get('input[name="lastName"]').type('y')
        cy.get('input[type="email"]').type(email)
        cy.get('input[type="tel"]').type('00000000')
        cy.get('select[name="bestTimeToCall"]').select('mornings')
        cy.get('label[data-test-id="bnzCustomer.no"]').click()
        cy.get('label[data-test-id="selfEmployed.no"]').click()
        cy.get('select[name="talk"]').select('branch')
        // cy.get('input[name="branch"]').type('a')

        // cy.get('span[class="Layout-component-67"]>*').last().click()
        cy.get('.Button-wrapper-128').click()   
        // cy.get('.sc-qXRQq').should('have.text', 'Talk to us about home loans')
        cy.get('.AlertText-content-152 > :nth-child(1) > div').should('have.text', 'BNZ branch is required')  
        cy.log("Text has completed!");
        
    });
})   