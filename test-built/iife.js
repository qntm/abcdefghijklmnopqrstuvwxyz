/* global describe, it, cy */

describe('abcdefghijklmnopqrstuvwxyz', () => {
  it('IIFE works', () => {
    cy.visit('http://localhost:3000/test-built/index.html')
    cy.contains('abcdefghijklmnopqrstuvwxyz')
  })
})
