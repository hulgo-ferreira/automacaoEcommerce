
//onde irei definir uma suite de teste
describe('home page', () => {
    it('Sistema deve estar online', () => {
        cy.viewport(1440, 900)
        cy.visit('http://localhost/e-commerce/signin.php')
        cy.get('h1[class *= "title"]').should('contain', 'Entrar')
    })
})
