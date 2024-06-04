import mainFaq from "../elements/mainFaq";


describe('This test will contain assertions for FAQ page', () => {
    beforeEach(() => {
        cy.readFile('cypress/fixtures/faq.html').then((html) => {
            cy.intercept('GET', 'https://cosmolot.ua/faq', {
                statusCode: 200,
                headers: {
                    'Content-Type': 'text/html',
                    'X-Mock-Response': 'true',
                },
                body: html,
            });
        });
    });
});


it('visit FAQ page and assert to FAQ balans', { retries: 1 }, () => {
    
    cy.log('The list has newly created order');
    cy.visit('https://cosmolot.ua/faq');

    // cy.get('[data-cy="faq-balance"]').should('exist');
    mainFaq.faqBalance().should('exist');

    //  cy.get('[data-cy="faq-balance"]').should('be.visible');
    mainFaq.faqBalance().should('be.visible');

});

it('visit FAQ page and assert to FAQ allQuestions', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/faq');

    // cy.get('[data-cy="faq-all-questions"]').should('exist');
    mainFaq.allQuestions().should('exist');

    //  cy.get('[data-cy="faq-all-questions"]').should('be.visible');
    mainFaq.allQuestions().should('be.visible');

});

it('visit FAQ page and assert to FAQ Verification', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/faq');

    // cy.get('[data-cy="faq-verification"]').should('exist');
    mainFaq.faqVerification().should('exist');

    // cy.get('[data-cy="faq-verification"]').should('be.visible');
    mainFaq.faqVerification().should('be.visible');

});

it(' visit FAQ page and assert to FAQ bonus', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/faq');

    // cy.get('[data-cy="faq-bonus-faq"]').should('exist');
    mainFaq.bonusFaq().should('exist');

    //  cy.get('[data-cy="faq-bonus-faq"]').should('be.visible');
    mainFaq.bonusFaq().should('be.visible');

});

it(' visit FAQ page and assert to FAQ Payout', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/faq');

    // cy.get('[data-cy="faq-payout"]').should('exist');
    mainFaq.faqPayout().should('exist');

    //  cy.get('[data-cy="faq-payout"]').should('be.visible');
    mainFaq.faqPayout().should('be.visible');

});

it(' visit FAQ page and assert to FAQ Payin', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/faq');

    // cy.get('[data-cy="faq-payin"]').should('exist');
    mainFaq.faqPayin().should('exist');

    //  cy.get('[data-cy="faq-payin"]').should('be.visible');
    mainFaq.faqPayin().should('be.visible');

});

it('visit FAQ page and assert to FAQ Profile', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/faq');

    // cy.get('[data-cy="faq-profile"]').should('exist');
    mainFaq.faqProfile().should('exist');

    // cy.get('[data-cy="faq-profile"]').should('be.visible');
    mainFaq.faqProfile().should('be.visible');

});

it('visit FAQ page and assert to FAQ Registration', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/faq');

    // cy.get('[data-cy="faq-registration"]').should('exist');
    mainFaq.faqRegistration().should('exist');

    //  cy.get('[data-cy="faq-registration"]').should('be.visible');
    mainFaq.faqRegistration().should('be.visible');

});

it('visit FAQ page and assert to FAQ Contact', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/faq');

    // cy.get('[data-cy="faq-contact"]').should('exist');
    mainFaq.faqContact().should('exist');

    //  cy.get('[data-cy="faq-contact"]').should('be.visible');
    mainFaq.faqContact().should('be.visible');

});

