describe('buttons check on homepage', () => {
  const name = ['Domů', 'Pro rodiče', 'Pro učitelé', 'Kontakt', 'Přihlásit'] //there is typo 'Pro učitelé' - reported
  const name2 = ['Aktuality', 'Odkazy', 'Kontakty']

  it('visits the page', () => {
    cy.visit('https://czechitas-app.kutac.cz/')

  })

  it('top left logo Czechitas check', () => {
    cy
      .get('.logo') // img class ="logo"
      .should('exist')
      .should('have.length', 1)
      .should('have.attr', 'src', 'https://czechitas-app.kutac.cz/img/logo.png') //must contain src as mentioned source

  })

  it('navbar check', () => {
    cy
      .get('.nav-item') // just the 1st part of the locator is inough
      .should('have.length', 5)
      .each(($el, i) => { // goes through each element, counting via i
        cy
          .wrap($el)
          .should('be.visible')
          .should('include.text', name[i]) // without i is checking the whole array

      })

    cy
      .get('i') // locator for icon, i is a html element here
      .should('have.length', 1)
  })

  it('navbar dropdown check', () => {
    cy
      .get('.dropdown-toggle') //Pro rodice
      .should('have.length', 2)
      .eq(0)
      .click()

    cy
      .get('.dropdown-menu.show')
      .should('have.length', 1)

    cy
      .get('.dropdown-item:visible') // locator:visible - avoid to count hidden dropdown items
      .should('have.length', 2)
      .eq(0)
      .should('have.text', 'Návody a formuláře')
      .should('have.attr', 'href', 'https://czechitas-app.kutac.cz/pro-rodice')


    cy
      .get('.dropdown-item:visible')
      .eq(1)
      .should('have.text', 'Vytvořit přihlášku')
      .should('have.attr', 'href', 'https://czechitas-app.kutac.cz/zaci/pridat')

    cy
      .get('body') //click out of any menu
      .click(0, 0) //top left corner   //or on the same line .type('{esc}')

    cy
      .get('.dropdown-toggle') //Pro ucitele
      .eq(1)
      .click()

    cy
      .get('.dropdown-menu.show')
      .should('have.length', 1)

    cy
      .get('.dropdown-item:visible')
      .should('have.length', 2)
      .eq(0)
      .should('have.text', 'Návody a formuláře')
      .should('have.attr', 'href', 'https://czechitas-app.kutac.cz/pro-ucitele')

    cy
      .get('.dropdown-item:visible')
      .eq(1)
      .should('have.text', 'Objednávka pro MŠ/ZŠ')
      .should('have.attr', 'href', 'https://czechitas-app.kutac.cz/objednavka/pridat')

    cy
      .get('body')
      .type('{esc}')
  })


  it('checks header title', () => {
    cy
      .get('h1') // cause there is always only 1 h1 title on the website
      .should('be.visible')
      .should('have.length', 1)
      .should('have.text', ' Vyberte období akce ') //extra spaces before and after

  })

  it('checks course img, title and button', () => {
    cy
      .get('.card-img-top')
      .should('be.visible')
      .should('have.length', 1)
      .should('have.attr', 'src', 'https://czechitas-app.kutac.cz/uploads/category/2-programovani.jpg?v1614273313')

    cy
      .get('.card-img-overlay')
      .should('be.visible')
      .should('have.length', 1)
      .should('include.text', 'Programování') // changed to include.text due to many spaces

    cy
      .get('.btn-primary')
      .should('be.visible')
      .should('have.length', 1)
      .should('have.text', 'Více informací')
      .should('have.attr', 'href', 'https://czechitas-app.kutac.cz/2-programovani')

  })

  it('checks center of the page', () => {
    cy
      .get('h2') // cause there is 1 h2 title on the website, if there would be more - need to specificate
      .should('be.visible')
      .should('have.length', 1)
      .should('have.text', 'Co je u nás nového?')

    cy
      .get('h6')
      .should('be.visible')
      .should('have.length', 1)
      .should('have.text', 'Robin Test')

    cy
      .get('.card-body')
      .should('be.visible')
      .should('have.length', 2)
      .eq(1)
      .should('include.text', 'Robin Test')

    cy
      .get('.card-text')
      .should('be.visible')
      .should('have.length', 1)
      .should('include.text', '2021') //date and time changes that is why only checking year displayed

  })

  it('checks footer of the page', () => {
    cy
      .get('.mb-3')
      .should('be.visible')
      .should('have.length', 1)
      .should('have.attr', 'src', 'https://czechitas-app.kutac.cz/img/logo_footer.png')

    cy
      .get('.footer__about')
      .should('be.visible')
      .should('have.length', 1)
      .should('include.text', 'Tento systém slouží pouze k testovacím a výukovým účelům v akademiích Czechitas!') // changed to include.text due to many spaces

    cy
      .get('h4')
      .should('be.visible')
      .should('have.length', 3)
      .each(($el, i) => {
        cy
          .wrap($el)
          .should('be.visible')
          .should('include.text', name2[i])

      })

    cy
      .get('.footer__news')
      .should('be.visible')
      .should('have.length', 1)
      .should('include.text', '2021') // time and date changes, useless to put in automation

    cy
      .get('.footer__news > a') //specificate basic locator adding "a" - HTML element
      .should('have.attr', 'href', 'https://czechitas-app.kutac.cz#novinka_1')
      .should('have.text', 'Robin Test')

    cy
      .get('h4')
      .should('be.visible')
      .should('have.length', 3)


    cy
      .get('.footer__links > a')
      .should('be.visible')
      .should('have.length', 4)
      .eq(0)
      .should('have.attr', 'href', 'https://czechitas-app.kutac.cz/pro-rodice')
      .should('have.text', 'Pro rodiče - návody, informace a formuláře')

    cy
      .get('.footer__links > a')
      .eq(1)
      .should('have.attr', 'href', 'https://czechitas-app.kutac.cz/pro-ucitele')
      .should('have.text', 'Pro pedagogy - návody a praktické informace')

    cy
      .get('.footer__links > a')
      .eq(2)
      .should('have.attr', 'href', 'https://czechitas-app.kutac.cz/objednavka/pridat')
      .should('have.text', 'Závazná objednávka kurzů a ŠvP pro MŠ/ZŠ')

    cy
      .get('.footer__links > a')
      .eq(3)
      .should('have.attr', 'href', 'https://www.czechitas.cz/')
      .should('have.text', 'Czechitas')

    cy
      .get('.footer__contact')
      .should('be.visible')
      .should('have.length', 1)
      .should('include.text', 'Czechitas')
      .should('include.text', 'Dlouhá 123')
      .should('include.text', '123 45 Horní Dolní')

    cy
      .get('.footer__contact > a')
      .should('have.attr', 'href', 'https://www.czechitas.cz/')

  })
})