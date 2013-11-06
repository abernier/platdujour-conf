#!/usr/bin/env node
var argv = require('optimist')
      .usage('Get config value.\nUsage: $0 <key>')

      .demand(1)

      .argv
    ;

var conf = require('..');

var key = argv._[0] || "";

value = conf[key];

console.log(value);