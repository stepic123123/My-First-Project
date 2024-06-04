import mainPage from "../elements/mainPage";


it('placeholderEmail', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/registration');

    // cy.get('[placeholder="email@mail.com"]', { timeout: 1000 }).should('exist');
    mainPage.placeholderEmail().should('exist');

    // cy.get('[placeholder="email@mail.com"]', { timeout: 1000 }).should('be.visible');
    mainPage.placeholderEmail().should('be.visible');

});

it('placeholderPassword', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/registration');

    // cy.get('[placeholder="Введіть пароль"]', { timeout: 1000 }).should('exist');
    mainPage.placeholderPassword().should('exist');

    // cy.get('[placeholder="Введіть пароль"]', { timeout: 1000 }).should('be.visible');
    mainPage.placeholderPassword().should('be.visible');

});

it('Do you have a promocode?', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/registration');

    // cy.get('.promocode-color.underline.text-sm.font-bold', { timeout: 1000 }).should('exist');
    mainPage.promotionalCode().should('exist');

    // cy.get('.promocode-color.underline.text-sm.font-bold', { timeout: 1000 }).should('exist');
    mainPage.promotionalCode().should('be.visible');

});

it('button registration', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/registration');

    // cy.get('[data-cy="reg-submit"]', { timeout: 1000 }).should('exist');
    mainPage.registration().should('exist');

    // cy.get('[data-cy="reg-submit"]', { timeout: 1000 }).should('be.visible');
    mainPage.registration().should('be.visible');

});

it('Chapter email', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/registration');

    // cy.get('[data-cy="reg-email"]', { timeout: 1000 }).should('exist');
    mainPage.email().should('exist');

    // cy.get('[data-cy="reg-email"]', { timeout: 1000 }).should('be.visible');
    mainPage.email().should('be.visible');

});

it('Chapter phone', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/registration/phone');

    // cy.get('[data-cy="reg-phone"]', { timeout: 1000 }).should('exist');
    mainPage.mobile().should('exist');

    // cy.get('[data-cy="reg-phone"]', { timeout: 1000 }).should('be.visible');
    mainPage.mobile().should('be.visible');

});


it('get a call button', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/registration/phone');

    // cy.get('[data-cy="sendCallCode_btn"]', { timeout: 1000 }).should('exist');
    mainPage.getCall().should('exist');

    // cy.get('[data-cy="sendCallCode_btn"]', { timeout: 1000 }).should('be.visible');
    mainPage.getCall().should('be.visible');

});

it('get code in viber', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/registration/phone');

    // cy.get('[data-cy="sendCode_btn"]', { timeout: 1000 }).should('exist');
    mainPage.getCodeViber().should('exist');

    // cy.get('[data-cy="sendCode_btn"]', { timeout: 1000 }).should('be.visible');
    mainPage.getCodeViber().should('be.visible');

});