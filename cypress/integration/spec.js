/// <reference types="cypress" />
const util = require('util')

describe('Universal code', () => {
  it('runs in the browser', function () {
    const sum = require('raw-loader?esModule=false!../../src/sum')
    let log = ''
    cy.stub(console, 'log').callsFake(function (...args) {
      log += util.format.apply(util, args)
    })
    window.eval(sum)
    // now assert the log has the expected test
    expect(log, 'console.log').to.equal('2 + 3 = 5')

    cy.task('node', '../../src/sum')
  })
})
