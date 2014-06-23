// Require dependencies
var feathers = require('feathers');
var mongoose = require('mongoose');
var mongooseService = require('feathers-mongoose-service');

// Connect to mongo
mongoose.connect('mongodb://localhost/beacons');

// Create Mongoose-Service
var beaconService = mongooseService('beacon', {
      event: {type : String},
      timestamp: {type : Number},
      id: {type : String},
      identifier: {type : String},
      uuid: {type : String},
      major: {type : Number},
      minor: {type : Number},
      proximity: {type : Number},
      rssi: {type : Number}
    }, mongoose);

// Setup Feathers
var app = feathers();

// Configure Feathers
app.use(feathers.logger('dev')); // For debugging purposes.

// Specify port
var port = 8000;

app.configure(feathers.socketio())
  .use('/beacons', beaconService)
  .listen(port, function() {
    console.log('Express server listening on port ' + port);
  });
