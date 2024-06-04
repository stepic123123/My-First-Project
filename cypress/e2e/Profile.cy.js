
it ('login to profile ', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/login');
    
    cy.get('[data-cy="email-container"]')
            .find('input')
            .invoke('val','77444555333x@gmail.com')
            .should('have.value', '77444555333x@gmail.com');

            cy.get('[data-cy="password-container"]')
            .find('input')
            .invoke('val','wwweeettt')
            .should('have.value', 'wwweeettt');

            // cy.get('[data-cy="login-submit"]').click({ force: true });

            cy.get('[data-cy="login-submit"]').find('span').click( 'multiple: true');

});

