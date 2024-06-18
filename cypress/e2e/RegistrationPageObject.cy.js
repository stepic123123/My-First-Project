import mainPage from "../elements/mainPage";

it('placeholderEmail', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/registration');
mainPage.placeholderEmail().should('exist');
mainPage.placeholderEmail().should('be.visible');
});

it('placeholderPassword', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/registration');
mainPage.placeholderPassword().should('exist');
mainPage.placeholderPassword().should('be.visible');
});

it('Do you have a promocode?', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/registration');
mainPage.promotionalCode().should('exist');
mainPage.promotionalCode().should('be.visible');
});

it('button registration', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/registration');
mainPage.registration().should('exist');
mainPage.registration().should('be.visible');
});

it('Chapter email', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/registration');
mainPage.email().should('exist');
mainPage.email().should('be.visible');
});

it('Chapter phone', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/registration/phone');
mainPage.mobile().should('exist');
mainPage.mobile().should('be.visible');
});


it('get a call button', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/registration/phone');
mainPage.getCall().should('exist');
mainPage.getCall().should('be.visible');
});

it('get code in viber', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/registration/phone');
mainPage.getCodeViber().should('exist');
mainPage.getCodeViber().should('be.visible');
});