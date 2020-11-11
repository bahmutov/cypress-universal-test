/// <reference types="cypress" />
const util = require('util')

describe('Universal code', () => {
  it('runs in the browser', function () {
    const sum = require('raw-loader?esModule=false!../../src/sum')
    let browserOutput = ''
    cy.stub(console, 'log').callsFake(function (...args) {
      browserOutput += util.format.apply(util, args)
    })
    window.eval(sum)

    cy.task('node', '../../src/sum')
      .then(nodeOutput => {
        expect(nodeOutput).to.equal(browserOutput)
      })
  })
})
