# beacons-api

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

see [feathers-mongoose docs](https://github.com/feathersjs/feathers-mongoose/blob/master/docs/API.md#finding-documents)

Example Request:

```
GET /beacon?conditions={"timestamp":{"$gte":1403701368624,"$lte":1403701368624}}&fields=""&options={"sort":{"timestamp":-1}}
```

## Beacons transmitter
see [beacons-transmitter](https://github.com/kojiwakayama/beacons-transmitter)

## Author
Koji Wakayama

## License
[MIT](http://opensource.org/licenses/MIT)