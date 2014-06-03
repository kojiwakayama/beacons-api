// Require dependencies
var feathers = require('feathers');
var mongoose = require('mongoose');
var mongooseService = require('feathers-mongoose-service');

// Connect to mongo
mongoose.connect('mongodb://localhost/beacons');

// Create your Mongoose-Service, for a `User`
var beaconService = mongooseService('message', {
        data: {type : String, required : true, index: {unique: true, dropDups: true}}
    }, mongoose);

// Setup Feathers
var app = feathers();

// Configure Feathers
app.use(feathers.logger('dev')); // For debugging purposes.

// Specify port
var port = 8000;

app.configure(feathers.socketio())
  .use('/messages', beaconService)
  .listen(port, function() {
    console.log('Express server listening on port ' + port);
  });
