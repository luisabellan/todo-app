/* eslint-disable no-undef */
// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />

describe('simple Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })

  it('adds todos', () => {
    cy.visit('http://localhost:3000')
    cy.get('input').type('get cookies')
    cy.get('.add-to-do-btn').click()
    cy.get('.input').type('get milk')
    cy.get('.add-to-do-btn').click()
    cy.get('.input').type('get eggs')
    cy.get('.add-to-do-btn').click()
    cy.get('.input').type('get bread')
    cy.get('.add-to-do-btn').click()



    /*   cy.get('input').type('get tomatoes')
      cy.get('input').type('get parsley')
      cy.get('input').type('get seeds')
      cy.get('input').type('get cookies') */

  })
  it('deletes todos', () => {
    // deletes todos
    cy.get('[name="item get milk"]').check()
    cy.get('[name="item get bread"]').check()
    cy.get('.clear-btn').click()





  })





})