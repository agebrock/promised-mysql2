var Promise = require('bluebird');
var client = require('mysql2');
var moduleId = require.resolve('mysql2');
module.exports = require.cache[moduleId].exports = Promise.promisifyAll(client);

