'use strict';

const redis = require('redis');
const bluebird = require("bluebird");

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

function redisFactory(options) {
    let config = Object.assign({}, options, {
        host: 'localhost',
        port: 6379,
        path: null,
        url: null,
    });
    
    return redis.createClient(options);
}

module.exports = redisFactory;