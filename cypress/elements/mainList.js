class MainList {
    /* 
        data-cy="burger-nav-list"
    data-cy="main-menu-home-lnk”.  Головна
    data-cy="main-menu-group-games-lnk" слоти
    data-cy="main-menu-lobby-group-lnk" Live казино
    data-cy="main-menu-group-instantgames-lnk" Швидкі ігри
    data-cy="main-menu-offers-bonuses-lnk" Бонуси
    data-cy="main-menu-tournaments-list-lnk" Турніри
    data-cy="main-menu-promotions-lnk" Акції
    data-cy="main-menu-livechat-btn" Чат 
    data-cy="main-menu-faq-lnk" FAQ
        */
    
    
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