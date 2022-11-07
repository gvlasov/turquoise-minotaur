describe('Bar website test', () => {
    it('can make an order', () => {
        cy.visit('http://localhost:8100')
        cy.get('.menu > .item').contains('APA 20').click()
        cy.get('.order > .item').should('be.visible')
    })
})