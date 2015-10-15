'use strict';

if(process.env.NODE_ENV == 'production') {
    console.log('Using production configuration');
    module.exports = require('./env/prod.js');
} else if(process.env.NODE_ENV == 'test') {
    console.log('Using test configuration');
    module.exports = require('./env/test.js');
} else { // process.env.NODE_ENV == development
    console.log('Using development configuration');
    module.exports = require('./env/dev.js');
}