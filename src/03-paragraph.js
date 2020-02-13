const setDefaults = require('../_lib/setDefaults')

const defaults = {
  sentences: true
}

const toMarkdown = function(options) {
  options = setDefaults(options, defaults)
  let md = ''
  if (options.sentences === true) {
    md += this.sentences().reduce((str, s) => {
      str += s.markdown(options) + '\n'
      return str
    }, {})
  }
  return md
}
module.exports = toMarkdown
