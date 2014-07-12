# beacons-api

A RESTful Api for [beacons-transmitter](https://github.com/kojiwakayama/beacons-transmitter) that can be interfaced over HTTP or WebSockets.

## Features
* [Feathers](http://feathersjs.com/)
* [Feathers Mongoose](https://github.com/feathersjs/feathers-mongoose)

## Dependencies
* [Node.js](http://nodejs.org/)
* [MongoDB](http://docs.mongodb.org/manual/installation/)

## Installation
```
npm install
```

## Start server
```
npm start
```

## Api

##### Endpoints:

* /beacon
* /ranges

##### Finding data:

_You have access to the powerful query language behind Mongoose and MongoDB._

Example Request:

```
GET /beacon?conditions={"timestamp":{"$lte":1403784375317,"$gte":1403784375315}}&fields=""&options={"sort":{"timestamp":-1}}
```

see [feathers-mongoose docs](https://github.com/feathersjs/feathers-mongoose/blob/master/docs/API.md#finding-documents)

## Beacons transmitter
see [beacons-transmitter](https://github.com/kojiwakayama/beacons-transmitter)

## Author
Koji Wakayama

## License
[MIT](http://kojiwakayama.mit-license.org)
