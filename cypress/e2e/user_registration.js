describe('user registation from homepage', () => {
    const name = ['Jméno a příjmení', 'Email', 'Heslo', 'Kontrola hesla']
    const userName = 'Terezka Adamová'
    const userEmail = 'terka.adam@gmail.com'

    it('visits the page', () => {
        cy.visit('https://czechitas-app.kutac.cz/')

    })

    it('opens table for registration', () => {
        cy
            .get('.nav-item.nav-link')
            .contains('Přihlásit') // find and 'get'
            .should('have.attr', 'href', 'https://czechitas-app.kutac.cz/prihlaseni')
            .click()

    })

    it('checks if webpage is Prihlaseni correct', () => {
        cy
            .url() //already include 'get'
            .should('include', 'https://czechitas-app.kutac.cz/prihlaseni')

        cy
            .get('.col-md-8.offset-md-4')
            .contains('Jste zde poprvé?')
            .should('be.visible')
            .should('include.text', 'Jste zde poprvé?')


        cy
            .get('.btn-secondary')
            .should('be.visible')
            .should('include.text', 'Zaregistrujte se')
            .should('have.attr', 'href', 'https://czechitas-app.kutac.cz/registrace')
            .click()

    })

    it('checks if webpage Registrace is correct', () => {
        cy
            .url('.nav-item.nav-link')
            .should('include', 'https://czechitas-app.kutac.cz/registrace')
    })

    it('checks header title', () => {
        cy
            .get('h1')
            .should('be.visible')
            .should('have.length', 1)
            .should('have.text', '  Registrace  ')

    })

    it('checks Registration table', () => {
        cy
            .get('h5')
            .should('be.visible')
            .should('have.length', 1)
            .should('have.text', 'Registrace')

        cy
            .get('.text-muted.mb-0')
            .should('be.visible')
            .should('have.length', 1)
            .should('include.text', 'Registrace je určena')
            .should('include.text', 'pouze pro rodiče')
            .should('include.text', ', kteří chtějí přihlásit své dítě. Pedagogové dostanou účet přidělený při závazné objednávce.')

        cy
            .get('.col-form-label')
            .should('be.visible')
            .should('have.length', 4)
            .each(($el, i) => {
                cy
                    .wrap($el)
                    .should('be.visible')
                    .should('include.text', name[i])

            })

        cy
            .get('.form-control')
            .should('be.visible')
            .should('have.length', 4)

        cy
            .get('.btn-primary')
            .should('be.visible')
            .should('have.length', 1)
            .should('include.text', 'Zaregistrovat')

    })

    it('registrates a new user', () => {
        cy
            .reload()

        cy
            .get('#name')
            .type(userName)

        cy
            .get('#email')
            .type(userEmail)

        cy
            .get('#password')
            .type('Mojeheslo123')

        cy
            .get('#password-confirm')
            .type('Mojeheslo123')

        cy
            .get('.btn-primary')
            .click()
    })

    it('checks the succesfull registration', () => {
        cy
            .get('.nav-item.dropdown')
            .contains(userName)

    })
})