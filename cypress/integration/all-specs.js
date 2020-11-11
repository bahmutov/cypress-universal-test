/// <reference types="cypress" />
const util = require('util')
describe('Universal code', () => {
  Cypress.env('sourceFiles').forEach(filename => {
    it(filename, () => {
      const sum = require(`raw-loader?esModule=false!../../${filename}`)
      let browserOutput = ''
      cy.stub(console, 'log').callsFake(function (...args) {
        browserOutput += util.format.apply(util, args)
      })
      window.eval(sum)

      cy.task('node', `../../${filename}`)
        .then(nodeOutput => {
          expect(nodeOutput).to.equal(browserOutput)
        })
    })
  })
})
