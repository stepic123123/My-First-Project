it('Registration and autorization buttons ', { retries: 2 }, () => {
    cy.visit('https://cosmolot.ua/');

    
    cy.get('[data-cy="registration_lnk"]', { timeout: 1000 }).should('exist');
    cy.get('[data-cy="registration_lnk"]', { timeout: 1000 }).should('be.visible');
    cy.get('[data-cy="registration_lnk"]', { timeout: 1000 }).find('span').should('contain','Реєстрація');

    cy.get('[data-cy="login_lnk"]', { timeout: 1000 }).should('exist');
    cy.get('[data-cy="login_lnk"]', { timeout: 1000 }).should('be.visible');

    
});