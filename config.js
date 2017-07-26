/**
 * Origin: https://github.com/conventional-changelog/standard-version/issues/154
 */
const fs = require('fs')
const commit =  fs.readFileSync('./templates/commit.hbs', 'utf-8')
const header =  fs.readFileSync('./templates/header.hbs', 'utf-8')

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
