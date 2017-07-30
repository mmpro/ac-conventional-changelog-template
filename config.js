/**
 * Origin: https://github.com/conventional-changelog/standard-version/issues/154
 */
const fs = require('fs')
const nodeModulePath = './node_modules/ac-conventional-changelog-template/'
const commit =  fs.readFileSync(nodeModulePath + 'templates/commit.hbs', 'utf-8')
const header =  fs.readFileSync(nodeModulePath + 'templates/header.hbs', 'utf-8')

module.exports = {
  "changelogOpts": {
    "preset": "angular",
  },
  options: {
    debug: true
  },
  "writerOpts": {
    "headerPartial": header,
    "commitPartial": commit
  }
}
