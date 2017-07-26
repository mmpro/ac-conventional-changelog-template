const dateFormat = require('dateformat');

module.exports = {
  date: dateFormat(new Date(), 'yyyy-mm-dd HH:MM', true)
}
