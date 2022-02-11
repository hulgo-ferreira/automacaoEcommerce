import login from '../support/pages/login.page'

//definindo minhas suítes de testes
describe('Login', () => { 
    it('Usuario deve estar logado', () => {
        login.go()
        login.filForm('teste@gmail.com','pwd123')
        login.submit()

        login.userShoulloggeddIn()
    })

    it('Incorrect password', () => {
        login.go()
        login.filForm('teste@gmail.com','pwd1234')
        login.submit()

        login.alert().should('contain','E-mail e/ou senha incorretos.')
    })

    it('User not found', () => {
        login.go()
        login.filForm('teste123@gmail.com','pwd123')
        login.submit()

        login.alert().should('contain','E-mail e/ou senha incorretos.')
    })
})
