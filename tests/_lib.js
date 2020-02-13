const wtf = require('wtf_wikipedia')
if (typeof process !== undefined && typeof module !== undefined) {
  if (process.env.TESTENV === 'prod') {
    wtf.extend(require(`../`))
  } else {
    wtf.extend(require(`../src`))
  }
  module.exports = wtf
}
