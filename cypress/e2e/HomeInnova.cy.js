describe('template spec', () => {
  beforeEach('passes', () => {
    cy.visit('https://pnovastudiios.com/')
  })
  it('Enviar cotizacion correctamente',()=>{
  
    cy.get('.menu-item-has-children > [href="#"]').trigger('mouseover').trigger('mouseenter').trigger('mousemove');
    cy.get('#menu-item-696 > .ct-menu-link').should("exist").click()
    cy.get('.stk-block-heading__text > strong').should('exist').contains('Cotiza tu proyecto con nosotros')
    cy.get('#wpforms-269-field_0').click()

  })
})