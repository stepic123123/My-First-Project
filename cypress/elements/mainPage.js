class MainPage {

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