context('IndexedDB Vue Demo', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('loads the home page', () => {
    cy.url()
      .should('eq', 'http://localhost:3333/')

    cy.contains('IndexedDB in Vue')
      .should('exist')
  })

  it('navigates to each demo page', () => {
    const pages = ['vanilla', 'idb', 'dexie', 'vueuse', 'persistence']

    pages.forEach((page) => {
      cy.visit(`/${page}`)
      cy.url().should('include', `/${page}`)
    })
  })

  it('increments the vanilla counter', () => {
    cy.visit('/vanilla')
    cy.get('[data-testid="count"]').should('contain', '0')
    cy.get('[data-testid="inc"]').click()
    cy.get('[data-testid="count"]').should('contain', '1')
  })

  it('decrements the idb counter', () => {
    cy.visit('/idb')
    cy.get('[data-testid="count"]').should('contain', '0')
    cy.get('[data-testid="dec"]').click()
    cy.get('[data-testid="count"]').should('contain', '-1')
  })
})
