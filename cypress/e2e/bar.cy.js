describe('Bar website test', () => {
    it('can book a place', () => {
        cy.visit('/')
        cy.get('.places > .place').contains('1').click()
        cy.get('.places > .place').contains('1').should('have.class', 'booked')
    })
})