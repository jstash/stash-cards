if(process.env.NODE_ENV == 'production') {
    module.exports.environment = 'production';
} else {
    module.exports.environment = 'development';
}

module.exports.db = 'mongodb://localhost/stash-cards';

