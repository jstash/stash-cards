'use strict';

if(process.env.NODE_ENV == 'production') {
    module.exports = require('./env/prod.js');
} else if(process.env.NODE_ENV == 'test') {
    module.exports = require('./env/prod.js');
} else { // process.env.NODE_ENV == development
    module.exports = require('./env/dev.js');
}