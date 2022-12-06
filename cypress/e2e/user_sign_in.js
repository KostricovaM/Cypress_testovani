describe('buttons check on homepage', () => {
    beforeEach(() => {
        cy
            .intercept('POST', 'https://czechitas-app.kutac.cz/prihlaseni')
            .as('prihlaseni')
    })

    const userName = 'Terezka Adamová'
    const userEmail = 'terka.adam@gmail.com'
    const userPassword = 'Mojeheslo123'

    it('visits the page', () => {
        cy.visit('https://czechitas-app.kutac.cz/')

    })

    it('signs user', () => {
        cy
            .get('.nav-item.nav-link')
            .contains('Přihlásit')
            .click()

        cy
            .get('#email')
            .type(userEmail)

        cy
            .get('#password')
            .type(userPassword)

        cy
            .get('.btn-primary')
            .click()
            .wait('@prihlaseni')
            .its('response.statusCode')
            .should('eq', 302)

    })

    it('checks the succesfull signing in', () => {

        cy
            .get('.nav-item.dropdown')
            .contains(userName)
            .click()

        cy
            .get('#logout-link')
            .click()

    })

    it('checks signing out', () => {
        cy
            .get('.nav-item.nav-link')
            .contains('Přihlásit')

    })
})