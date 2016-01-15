#!/bin/env node
var exec = require('child_process').exec;
var cmd = 'tsc -d --target ES5 --experimentalDecorators -outDir ./dist meteor_app.ts';

exec(cmd, function(error, stdout, stderr) {
  if (!stdout || stdout.indexOf("'global'") === -1) {
    console.log(stderr);
  } else {
    console.log("compiled to ./dist");
  }
});
