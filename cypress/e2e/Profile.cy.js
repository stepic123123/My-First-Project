
it ('login to profile ', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/login');
    
    cy.get('[data-cy="email-container"]')
            .find('input')
            .invoke('val','7788853653x@gmail.com')
            .should('have.value', '7788853653x@gmail.com');

            cy.get('[data-cy="password-container"]')
            .find('input')
            .invoke('val','qwerty12345678')
            .should('have.value', 'qwerty12345678');

            // cy.get('[data-cy="login-submit"]').click({ force: true });

            cy.get('[data-cy="login-submit"]').find('span').click( 'multiple: true');

});

