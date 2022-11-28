describe('teacher orders an activity via form', () => {
    const fieldName = ['IČO', 'Odběratel', 'Úplná adresa', 'Zastoupena - ředitel(ka) školy', 'Jméno a příjmení', 'Telefon', 'Email', 'Upřednostňovaný termín 1', 'Upřednostňovaný termín 2 - nepovinné', 'Upřednostňovaný termín 3 - nepovinné',
        'Kurz', 'Počet dětí', 've věku', 'Počet pedagogického doprovodu', //Příměstský tábor
        'Počet dětí', 've věku', 'Počet pedagogického doprovodu', 'Nástup', 'Strava začíná', 'Ukončení', 'Strava končí'] //Škola v přírodě

    const h4Titles = ['Kontaktní osoba', 'Požadovaný termín', 'Objednávaná služba']
    const ico = '70999783' //if ICO is valid, automatically are fields 'Odběratel' and 'Úpná adresa' filled
    const zastoupena = 'Jana Novotná'
    const jmenoAPrijmeni = 'Milan Peterek'
    const telefon = '603 123 321'
    const email = 'peterek@gmail.com'
    // const termin1zac =
    // const termin1kon =

    it('visits the page', () => {
        cy.visit('https://czechitas-app.kutac.cz/')

    })

    it('opens order form', () => {
        cy
            .get('.dropdown-toggle')
            .eq(1)
            .click()

        cy
            .get('.dropdown-item:visible')
            .eq(1)
            .should('have.text', 'Objednávka pro MŠ/ZŠ')
            .click()

    })

    it('checks the form', () => {
        cy
            .get('.card-body')
            .within(() => {

                cy
                    .get('h3')
                    .should('be.visible')
                    .should('have.length', 1)
                    .should('include.text', 'Objednávka akce')

                cy
                    .get('h4')
                    .should('have.length', 3)
                    .each(($el, i) => {
                        cy
                            .wrap($el)
                            .should('be.visible')
                            .should('include.text', h4Titles[i])

                    })

                cy
                    .get('.form-group>label')
                    .should('have.length', 21)
                    .each(($el, i) => {
                        cy
                            .wrap($el)
                            .should('exist') // because visible is just part of them, the rest is in other part of the form
                            .should('include.text', fieldName[i])

                    })

                cy
                    .get('.fa-phone')
                    .should('have.length', 1)
                    .should('be.visible')

                cy
                    .get('.input-group-text')
                    .should('include.text', '@') // @ here is not an icon, it is text
                    .should('be.visible')

                cy
                    .get('.fa-calendar')
                    .should('have.length', 6)
                    .should('be.visible')

                cy
                    .get('.fa-clock')
                    .should('have.length', 2)
                    .should('exist') //is not visible / in other part of form

                cy
                    .get('.input-group-prepend')
                    .should('have.length', 8)

                cy
                    .get('.form-control')
                    .each(($el, i) => {
                        cy
                            .wrap($el)
                            .invoke('text') //= get text
                            .then((text) => {
                                if (text == 'Začátek') { //condition
                                    cy
                                        .get($el)
                                        .should('have.text', 'Začátek')

                                }
                                else if (text == 'Konec') {
                                    cy
                                        .get($el)
                                        .should('have.text', 'Konec')
                                }

                                else if (text == '@') {
                                    cy
                                        .get($el)
                                        .should('have.text', '@')
                                }

                                // else {
                                //     throw new Error('Termín nenalezen')
                                // }
                            })

                    })


                cy
                    .get('.nav-tabs')
                    .should('have.length', 1)
                    .should('include.text', 'Příměstský tábor')
                    .should('include.text', 'Škola v přírodě')

                cy
                    .get('#nav-home-tab')
                    .click()
            })
    })
})