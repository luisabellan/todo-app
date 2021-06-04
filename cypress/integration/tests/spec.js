/* eslint-disable no-undef */
// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />

describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })

  it('adds todos', () => {
    cy.visit('http://localhost:3000')
    cy.get('input').type('get cookies')
    cy.get('.add-to-do-btn').click()
    cy.get('.input').type('get eggs')
    cy.get('.add-to-do-btn').click()

    /*   cy.get('input').type('get tomatoes')
      cy.get('input').type('get parsley')
      cy.get('input').type('get seeds')
      cy.get('input').type('get cookies') */

  })
  it('adds todos', () => {

    cy.get('.input').type('get cookies')
    cy.get('.add-to-do-btn').click()

    /*   cy.get('input').type('get tomatoes')
      cy.get('input').type('get parsley')
      cy.get('input').type('get seeds')
      cy.get('input').type('get cookies') */

  })
})