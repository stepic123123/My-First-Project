class MainPage {
/* 
    placeholder="email@mail.com"
    placeholder="Введіть пароль"
    '.promocode-color.underline.text-sm.font-bold' у вас є промокод?
    data-cy="reg-submit" зареєструватися?
    data-cy="reg-email" email?
    data-cy="reg-phone"  телефон
    data-cy="dropdown_icon" телефон
    data-cy="sendCallCode_btn" отримати дзвінок
    data-cy="sendCode_btn" отримати код у вайбер
    */


    placeholderEmail() {
    return cy.get('[placeholder="email@mail.com"]');
}

placeholderPassword() {
    return cy.get('[placeholder="Введіть пароль"]');
}

promotionalCode() {
    return cy.get('.promocode-color.underline.text-sm.font-bold');
}

registration() {
    return cy.get('[data-cy="reg-submit"]');

    
}

email() {
    return cy.get('[data-cy="reg-email"]');

    
}

mobile() {
    return cy.get('[data-cy="reg-phone"]');

    
}

mobilePhone() {
    return cy.get('[ data-cy="dropdown_icon"]');

    
}

getCall() {
    return cy.get('[data-cy="sendCallCode_btn"]');

    
}

getCodeViber() {
    return cy.get('[data-cy="sendCode_btn"]');

    
}

emailInputField() {
    return cy.get('[data-cy="email-container"]');
}

}

export default new MainPage();