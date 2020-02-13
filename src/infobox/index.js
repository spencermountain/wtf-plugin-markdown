const dontDo = require('./_skip-keys')
const setDefaults = require('../_lib/setDefaults')
const defaults = {
  images: true
}

//
const infobox = function(options) {
  options = setDefaults(options, defaults)
  let out = '\n \\vspace*{0.3cm} % Info Box\n\n'
  out += '\\begin{tabular}{|@{\\qquad}l|p{9.5cm}@{\\qquad}|} \n'
  out += '  \\hline  %horizontal line\n'
  //todo: render top image here
  Object.keys(this.data).forEach(k => {
    if (dontDo[k] === true) {
      return
    }
    let s = this.data[k]
    let val = s.latex(options)
    out += '  % ---------- \n'
    out += '      ' + k + ' & \n'
    out += '      ' + val + '\\\\ \n'
    out += '  \\hline  %horizontal line\n'
  })
  out += '\\end{tabular} \n'
  out += '\n\\vspace*{0.3cm}\n\n'
  return out
}
module.exports = infobox
