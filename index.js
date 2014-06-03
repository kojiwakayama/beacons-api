var feathers = require('feathers');

var beaconService = {
  messages: [],

  find: function(params, callback) {
    callback(null, this.messages);
  },

  create: function(data, params) {
    console.log(data);
    this.messages.push(data);
  }
};

feathers()
  .configure(feathers.socketio())
  .use('/messages', beaconService)
  .listen(8000);
