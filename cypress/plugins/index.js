const util = require('util')
module.exports = (on, config) => {
  on('task', {
    node(filename) {
      console.log('running %s', filename)

      let text = ''
      const log = console.log
      console.log = function (...args) {
        text += util.format.apply(util, args)
        log.apply(null, args)
      }

      require(filename)

      return text
    }
  })
}
