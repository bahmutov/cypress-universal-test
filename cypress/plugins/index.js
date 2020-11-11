const util = require('util')
const globby = require('globby')
const forget = require('require-and-forget')
module.exports = (on, config) => {
  // files are with respect to the working folder
  const sourceFiles = globby.sync('src/*.js')
  console.log('found source files', sourceFiles.join(','))
  config.env.sourceFiles = sourceFiles

  on('task', {
    node(filename) {
      console.log('running %s', filename)

      let text = ''
      const log = console.log
      console.log = function (...args) {
        text += util.format.apply(util, args)
        log.apply(null, args)
      }

      forget(filename)

      return text
    }
  })

  // important to return the updated config object
  return config
}
