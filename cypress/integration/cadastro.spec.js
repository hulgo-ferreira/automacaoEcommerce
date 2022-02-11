

describe('Cadastro', () => {
    it('Cadastrando um usuário', () => {
        cy.viewport(1440, 900)
        cy.visit('http://localhost/e-commerce/index.php')

        cy.get('div[class="text"] a').click() //elemento minha conta
        cy.get('a[href="/e-commerce/signup.php"]').click() //elemento cadastrar
        //checkpoint verificando que estou indo pro caminho certo
        cy.get('form h1[class="title"]').should('contain','Cadastrar-se')
    })
})

/*
- verificação com checkpoint Bug prioridade baixa
    Reportar um bug, dizendo que tem um espaço a mais, é super simples
    que não deixaria de colocar em produção, mas que me incomada um pouco.
*/