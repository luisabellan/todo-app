/* eslint-disable no-undef */
// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />

describe('simple Test', () => {

  it('adds todos', () => {
    cy.visit('http://localhost:3000')

    cy.get('input').type('get cookies')
    cy.get('.add-todo-btn').click()

    cy.get('.input').type('get milk')
    cy.get('.add-todo-btn').click()

    cy.get('.input').type('get eggs')
    cy.get('.add-todo-btn').click()

    cy.get('.input').type('get bread')
    cy.get('.add-todo-btn').click()

    cy.get('input').type('get tomatoes',)
    cy.get('.add-todo-btn').click()

    cy.get('input').type('get parsley')
    cy.get('.add-todo-btn').click()

    cy.get('input').type('get seeds')
    cy.get('.add-todo-btn').click()

    cy.get('input').type('get cookies')
    cy.get('.add-todo-btn').click()


  })
  it('checks some todo items and clicks on Completed button', () => {
    // deletes todos
    cy.get('[name="item get milk"]').check()
    cy.get('[name="item get bread"]').check()
    cy.get('.clear-btn').click()





  })

  it('deletes todos', () => {
    cy.get('.del-btn').click({ multiple: true })
  })






})