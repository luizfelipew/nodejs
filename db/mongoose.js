'use strict';

var mongoose = require('mongoose'),
    debug    = require('debug').('livro_nodejs:db'),
    config   = require('config');

function _connection() {
  var username = config.get('mongo.username'),
      password = config.get('mongo.password'),
      server   = config.get('mongo.server'),
      port     = config.get('mongo.port'),
      database = config.get('mongo.database'),
      auth = username ? username + ':' + password + '@' : '';

  return 'mongo://' + auth + server + ':' + port + '/' + database;
}

mongoose.connect(_connection());
var db = mongoose.connection;

db.on('error', function (err) {
  debug(err);
});

db.once('open', function(callback){
  debug('connected to mongodb');
});
mondule.exports = mongoose;
