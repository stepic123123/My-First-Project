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
    
    it('visit FAQ page and assert to FAQ balans and all-questions ', { retries: 1 }, () => {
        cy.visit('https://cosmolot.ua/faq');
    cy.get('[data-cy="faq-balance"]').should('exist');
    cy.get('[data-cy="faq-balance"]').should('be.visible');
    cy.get('[data-cy="faq-all-questions"]').should('exist');
    cy.get('[data-cy="faq-all-questions"]').should('be.visible');
    });

    it('visit FAQ page and assert to FAQ verification and bonus ', { retries: 1 }, () => {
        cy.visit('https://cosmolot.ua/faq');
    cy.get('[data-cy="faq-verification"]').should('exist');
    cy.get('[data-cy="faq-verification"]').should('be.visible');
    cy.get('[data-cy="faq-bonus-faq"]').should('exist');
    cy.get('[data-cy="faq-bonus-faq"]').should('be.visible');
    });

    it('visit FAQ page and assert to FAQ payout and payin', { retries: 1 }, () => {
        cy.visit('https://cosmolot.ua/faq');
    cy.get('[data-cy="faq-payout"]').should('exist');
    cy.get('[data-cy="faq-payout"]').should('be.visible');
    cy.get('[data-cy="faq-payin"]').should('exist');
    cy.get('[data-cy="faq-payin"]').should('be.visible');
    });

    it('visit FAQ page and assert to FAQ profile, registration and contact', { retries: 1 }, () => {
        cy.visit('https://cosmolot.ua/faq');
    cy.get('[data-cy="faq-profile"]').should('exist');
    cy.get('[data-cy="faq-profile"]').should('be.visible');
    cy.get('[data-cy="faq-registration"]').should('exist');
    cy.get('[data-cy="faq-registration"]').should('be.visible');
    cy.get('[data-cy="faq-contact"]').should('exist');
    cy.get('[data-cy="faq-contact"]').should('be.visible');
    });
});



