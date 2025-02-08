// 
// 
Cypress.on('uncaught:exception', (err, runnable) => {
    // Prevents Cypress from failing the test on uncaught exceptions
    return false;
});

import 'cypress-xpath';

describe('Frame and Iframe Interaction', () => {
    it('Clear and type text into contenteditable div inside iframe', () => {
        cy.visit("https://www.lambdatest.com/selenium-playground/iframe-demo/");

        cy.get('#iFrame1') // Get the iframe
            .its('0.contentDocument.body') // Access the iframe's body
            .should('not.be.empty') // Ensure the iframe's body is loaded
            .then((body) => {
                // Wrap the iframe body and find the contenteditable div
                cy.wrap(body)
                    .find('div.rsw-ce[contenteditable="true"]') // Use correct selector for the div
                    .should('be.visible') // Ensure it's visible
                    .then((contenteditableDiv) => {
                        // Clear existing content by setting innerText
                        contenteditableDiv[0].innerText = ''; // Clear the text manually
                        
                        // Use Cypress to type text
                        cy.wrap(contenteditableDiv).type('Cypress test');

                        cy.screenshot();
                        cy.wait(50000);
                    });
            });
    });
});
