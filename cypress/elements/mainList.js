class MainList {
    
navList() {
        return cy.get('[data-cy="burger-nav-list"]');
    }
navMain() {
        return cy.get('[data-cy="main-menu-home-lnk”]',{ timeout: 1000 });
    }
liveCasino() {
        return cy.get('[data-cy="main-menu-lobby-group-lnk"]');
    }
slots() {
        return cy.get('[data-cy="main-menu-group-games-lnk"]');
    }
quickGames() {
        return cy.get('[data-cy="main-menu-group-instantgames-lnk"]');
    }
bonuses() {
        return cy.get('[data-cy="main-menu-offers-bonuses-lnk”]');
    }
tournaments() {
        return cy.get('[data-cy="main-menu-tournaments-list-lnk"]');
    }
promotions() {
        return cy.get('[data-cy="main-menu-promotions-lnk"]');
    }
chat() {
        return cy.get('[data-cy="main-menu-livechat-btn"]');
    }
faq() {
        return cy.get('[data-cy="main-menu-faq-lnk"]');
    }
}

export default new MainList();