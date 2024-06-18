import MainList from "../elements/mainList";

it('The navigation menu', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/');
MainList.navList().should('exist');
MainList.navList().should('be.visible');
});

it.only('The chapter main', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/');
MainList.navMain().should('exist');
MainList.navMain().should('be.visible');
});

it('The chapter LiveCasino', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/');
MainList.liveCasino().should('exist');
MainList.liveCasino().should('be.visible');
});

it('The chapter slots', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/');
MainList.slots().should('exist');
MainList.slots().should('be.visible');
});

it('The chapter quick games', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/');
MainList.quickGames().should('exist');
MainList.quickGames().should('be.visible');
});

it('The chapter bonuses', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/');
MainList.bonuses().should('exist');
MainList.bonuses().should('be.visible');
});

it('The chapter tournaments', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/');
MainList.tournaments().should('exist');
MainList.tournaments().should('be.visible');
});

it('The chapter promotions', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/');
MainList.promotions().should('exist');
MainList.promotions().should('be.visible');
});

it('The chapter chat', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/');
MainList.chat().should('exist');
MainList.chat().should('be.visible');
});

it('The chapter FAQ', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/');
MainList.faq().should('exist');
MainList.faq().should('be.visible');
});