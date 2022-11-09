describe('buttons check on homepage', () => {
  const name = ['Domů', 'Pro rodiče', 'Pro učitelé', 'Kontakt', 'Přihlásit'] //there is typo 'Pro učitelé' - reported

  it('visits the page', () => {
    cy.visit('https://czechitas-app.kutac.cz/')

  })

  it('navbar check', () => {
    cy
      .get('.nav-item') // just the 1st part of the locator is inough
      .should('have.length', 5)
      .each(($el, i) => { // goes through each element, counting via i
        cy
          .wrap($el)
          .should('be.visible')
          .should('include.text', name[i]) // witouh i is checking the whole array

      })
  })

  it('top left logo Czechitas check', () => {
    cy
      .get('.logo') // img class ="logo"
      .should('exist')
      .should('have.length', 1)
      .should('have.attr', 'src', 'https://czechitas-app.kutac.cz/img/logo.png')

  })
})
