describe('Bar website test', () => {
    it('can make an order', () => {
        cy.visit('/')
        cy.get('.menu > .item').contains('APA 20').click()
        cy.get('.order > .item').should('be.visible')
    })
})