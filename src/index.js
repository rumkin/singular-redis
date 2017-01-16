'use strict';

const redisFactory = require('./factory.js');

exports.redis = function(app) {
    return redisFactory(app.config.redis);
};