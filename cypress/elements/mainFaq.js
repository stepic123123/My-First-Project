class MainFaq {
   //data-cy="faq-balance"
//data-cy="faq-all-questions"
//data-cy="faq-verification"
//data-cy="faq-bonus-faq"
//data-cy="faq-payout"
//data-cy="faq-payin"
//data-cy="faq-profile"
//data-cy="faq-registration"
//data-cy="faq-contact"
    
    
    faqBalance() {
        return cy.get('[data-cy="faq-balance"]');
    }

    allQuestions() {
        return cy.get('[data-cy="faq-all-questions"]',{ timeout: 1000 });
    }

    faqVerification() {
        return cy.get('[data-cy="faq-verification"]');
    }

    bonusFaq() {
        return cy.get('[data-cy="faq-bonus-faq"]');
    }

    faqPayout() {
        return cy.get('[data-cy="faq-payout"]');
    }

    faqPayin() {
        return cy.get('[data-cy="faq-payin"]');
    }

    faqProfile() {
        return cy.get('[data-cy="faq-profile"]');
    }

    faqRegistration() {
        return cy.get('[data-cy="faq-registration"]');
    }

    faqContact() {
        return cy.get('[data-cy="faq-contact"]');
    }

    

}

export default new MainFaq();