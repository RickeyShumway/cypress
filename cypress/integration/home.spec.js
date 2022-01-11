
  describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
      cy.visit('localhost:3000')
      cy.contains('green').click()
      cy.contains('red').click()
      cy.contains('blue').click()
    })
  })
 