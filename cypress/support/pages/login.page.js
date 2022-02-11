
class LoginPage {

    constructor() { // globalizando função no construtor
        this.searchButton = 'input[type = submit]'
    }

    go() {
        cy.viewport(1440, 900)
        cy.visit('http://localhost/e-commerce/signin.php')
        //checkpoint validação de que estou indo pra página certa
        cy.get('form[action = "?act=auth"]').should('be.visible')
    }

    filForm(email, senha) { //função  que preenche o formulário
        cy.get('input[name="email"]').type(email)
        cy.get('input[name="senha"]').type(senha)
    }

    submit() { //função que submete o login
        cy.get('button[class="button"]').click()
    }

    userShoulloggeddIn() { //botão de pesquisar
        cy.get(this.searchButton)
            .should('contain','Pesquisar')
    }

    alert() { //função alert irá devolver o método
        return cy.get('small[class="message"]')
    }
}

export default new LoginPage()