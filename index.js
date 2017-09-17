const allowedFields = new Set(['animals'])
const data = require('./data.json');

module.exports = function generateNick() {
  function get(field) {
    let obj = this[field]
    if (obj === void 0) {
      obj = eval(field)
    }
    if (typeof obj === 'function') {
      obj = obj()
    }
    if (Array.isArray(obj)) {
      return obj[Math.floor(Math.random() * obj.length)]
    }
    throw new Error('Unknown field: ' + field)
  }

  return `${get('adjectives')} ${get('animals')}`
}

const adjectives = data.adjectives;

const animals = data.animals;
