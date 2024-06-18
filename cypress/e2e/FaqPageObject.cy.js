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
mainFaq.faqBalance().should('exist');
mainFaq.faqBalance().should('be.visible');
});

it('visit FAQ page and assert to FAQ allQuestions', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/faq');
mainFaq.allQuestions().should('exist');
mainFaq.allQuestions().should('be.visible');
});

it('visit FAQ page and assert to FAQ Verification', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/faq');
mainFaq.faqVerification().should('exist');
mainFaq.faqVerification().should('be.visible');
});

it(' visit FAQ page and assert to FAQ bonus', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/faq');
mainFaq.bonusFaq().should('exist');
mainFaq.bonusFaq().should('be.visible');
});

it(' visit FAQ page and assert to FAQ Payout', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/faq');
mainFaq.faqPayout().should('exist');
mainFaq.faqPayout().should('be.visible');
});

it(' visit FAQ page and assert to FAQ Payin', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/faq');
mainFaq.faqPayin().should('exist');
mainFaq.faqPayin().should('be.visible');
});

it('visit FAQ page and assert to FAQ Profile', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/faq');
mainFaq.faqProfile().should('exist');
mainFaq.faqProfile().should('be.visible');
});

it('visit FAQ page and assert to FAQ Registration', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/faq');
mainFaq.faqRegistration().should('exist');
mainFaq.faqRegistration().should('be.visible');
});

it('visit FAQ page and assert to FAQ Contact', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/faq');
mainFaq.faqContact().should('exist');
mainFaq.faqContact().should('be.visible');
});

