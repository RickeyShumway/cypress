
  describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
      cy.visit('localhost:3000')
      cy.contains('green').click()
        cy.url().should('include', '/green')
      cy.contains('red').click()
        cy.url().should('include', '/red')
        cy.get('input')
        .type('fake@email.com')
        .should('have.value', 'fake@email.com')
        .submit()
      cy.contains('blue').click()
      cy.url().should('include', '/blue')
    })
  })
 