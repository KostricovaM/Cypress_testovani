describe('buttons check on homepage', () => {
    const userName = 'Terezka Adamová'
    const userEmail = 'terka.adam@gmail.com'
    const userPassword = 'Mojeheslo123'

    beforeEach(() => {
        cy
            .setCookie('_token', 'Mmz61t809iWiZQ4uORvFhOu30848gZBWCqQzr2x0')

    })


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


    })

    // it('go to Prihlasky', () => {

    //     cy
    //         .get('.d-inline-block')
    //         .eq(3)
    //         .click()


    // })

    it('creating application', () => {

        cy
            .get('.btn-sm')
            .should('be.visible')
            .should('have.length', 1)
            .should('have.text', 'Vytvořit novou přihlášku')
            .should('have.attr', 'href', 'https://czechitas-app.kutac.cz/zaci/pridat')
            .click()

    })

})
