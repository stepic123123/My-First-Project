require('cypress-xpath');

it('visit FAQ page and assert to FAQ balans', { retries: 1 }, () => {
    cy.visit('https://cosmolot.ua/faq');


    //*[@id="app-body"]/div/div[1]/div/main/div/div/div/div/div[1]/button[2]
    cy.xpath(
        '//*[@id="app-body"]/div/div[1]/div/main/div/div/div/div/div[1]/button[2]'
    ).should('be.visible');
});

