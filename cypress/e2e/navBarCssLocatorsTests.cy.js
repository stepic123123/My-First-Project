it (' The navigation menu ', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/');
cy.get('[data-cy ="burger-nav-list"]', { timeout: 1000 }).should('exist');
cy.get('[data-cy ="burger-nav-list"]', { timeout: 1000 }).should('be.visible');
});

it(' The chapter main ', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/');
cy.get('[data-cy = "main-menu-home-lnk"]', { timeout: 1000 }).should('exist');
cy.get('[data-cy = "main-menu-home-lnk"]', { timeout: 1000 }).should('be.visible');
});

it(' The chapter slots ', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/');
cy.get('[data-cy = "main-menu-group-games-lnk"]', { timeout: 1000 }).should('exist');
cy.get('[data-cy = "main-menu-group-games-lnk"]', { timeout: 1000 }).should('be.visible');
});

    it (' The chapter LiveCasino ', { retries: 1 }, () => {
        cy.visit('https://cosmolot.ua/');
cy.get('[data-cy = "main-menu-lobby-group-lnk"]', { timeout: 1000 }).should('exist');
cy.get('[data-cy = "main-menu-lobby-group-lnk"]', { timeout: 1000 }).should('be.visible');
});

    it(' The chapter quick games', { retries: 1 }, () => {
        cy.visit('https://cosmolot.ua/');
cy.get('[data-cy = "main-menu-group-instantgames-lnk"]', { timeout: 1000 }).should('exist');
cy.get('[data-cy = "main-menu-group-instantgames-lnk"]', { timeout: 1000 }).should('be.visible');
});

    it(' The chapter bonuses', { retries: 1 }, () => {
        cy.visit('https://cosmolot.ua/');
cy.get('[data-cy = "main-menu-offers-bonuses-lnk"]', { timeout: 1000 }).should('exist');
cy.get('[data-cy = "main-menu-offers-bonuses-lnk"]', { timeout: 1000 }).should('be.visible');
});

    it(' The chapter tournaments ', { retries: 1 }, () => {
        cy.visit('https://cosmolot.ua/');
cy.get('[data-cy = "main-menu-tournaments-list-lnk"]', { timeout: 1000 }).should('exist');
cy.get('[data-cy = "main-menu-tournaments-list-lnk"]', { timeout: 1000 }).should('be.visible');
});

    it(' The chapter promotions ', { retries: 1 }, () => {
        cy.visit('https://cosmolot.ua/');
cy.get('[data-cy = "main-menu-promotions-lnk"]', { timeout: 1000 }).should('exist');
 cy.get('[data-cy = "main-menu-promotions-lnk"]', { timeout: 1000 }).should('be.visible');
});

    it(' The chapter chat ', { retries: 1 }, () => {
        cy.visit('https://cosmolot.ua/');
cy.get('[data-cy = "main-menu-livechat-btn"]', { timeout: 1000 }).should('exist');
cy.get('[data-cy = "main-menu-livechat-btn"]', { timeout: 1000 }).should('be.visible');
});

    it(' The chapter FAQ ', { retries: 1 }, () => {
        cy.visit('https://cosmolot.ua/');
cy.get('[data-cy = "main-menu-faq-lnk"]', { timeout: 1000 }).should('exist');
cy.get('[data-cy = "main-menu-faq-lnk"]', { timeout: 1000 }).should('be.visible');
});