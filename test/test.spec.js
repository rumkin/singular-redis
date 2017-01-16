'use strict';

const Singular = require('singular');
const singularRedis = require('..');
const should = require('should');

let app;
let mongo;

describe('Singular Redis', () => {
    before(() => {
        app = new Singular({
            config: {
                redis: {},
            },
        });
        
        app.module(singularRedis);
    });
    
    after(() => {
       return app.inject('redis', (redis) => {
           return ;
       });
    });
    
    
    it('Should instantiate mongo database', () => {
        return app.inject('redis', (redis) => {
            should(redis).be.instanceOf(Object);
        });
    });
    
    it('Should set, get and remove values', () => {
        return app.inject('redis', (redis) => {
            let key = 'test';
            let value = '1';
            
            return redis.setAsync(key, value)
            .then(() => redis.getAsync(key))
            .then((result) => {
               should(result).be.equal(value); 
               return redis.delAsync(key);
            })
            .then(() => redis.existsAsync(key))
            .then((result) => {
                should(result).be.equal(0);
            });
        });
    })
});