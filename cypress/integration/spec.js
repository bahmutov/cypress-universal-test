/// <reference types="cypress" />

describe('Universal code', () => {
  it('runs in the browser', function () {
    const sum = require('raw-loader?esModule=false!../../src/sum')
    window.eval(sum)
  })
})
