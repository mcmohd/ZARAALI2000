#!/usr/bin/env node

// Dropbox functionality
var Dropbox = require('dropbox');

/*
var client = new Dropbox.Client({
    key: "2bw2layqykrv8zh",
    secret: "fjyu20nv5a1vnae",
    token:'3wyGJhGMw1YAAAAAAAAABK619yX9gy8Jur8nTFDc0eHkVvM3gOiWDI49th4AQ8jo',
    uid:'mcmohd'
});

*/
var client = new Dropbox.Client({
    key: "2bw2layqykrv8zh",
    secret: "fjyu20nv5a1vnae"
});

client.authDriver(new Dropbox.AuthDriver.NodeServer(8191));
client.authenticate(function(error, client) {
  console.log('secret', client); // THE_TOKEN_SECRET

  // Replace with a call to your own application code.
  //
  // The user authorized your app, and everything went well.
  // client is a Dropbox.Client instance that you can use to make API calls.
 // doSomethingCool(client);
});
