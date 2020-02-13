const helpers = require('../_lib/helpers')

// add `[text](href)` to the text
const toMarkdown = function(md, link) {
  let href = ''
  //if it's an external link, we good
  if (link.site) {
    href = link.site
  } else {
    //otherwise, make it a relative internal link
    href = helpers.capitalise(link.page)
    href = './' + href.replace(/ /g, '_')
    //add anchor
    if (link.anchor) {
      href += `#${link.anchor}`
    }
  }
  let str = link.text || link.page
  return '[' + str + '](' + href + ')'
}
module.exports = toMarkdown
