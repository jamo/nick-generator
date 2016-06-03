const nickGenerator = require('./build')

// Generates funny animal names be default
console.log(nickGenerator()) // Sparkling Beaver

// Can easily be set to use both animal and human names
console.log(nickGenerator({fields: ['humans', 'animals']})) // Electronic Merrie
