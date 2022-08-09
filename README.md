## Description

NestJS CRUD API for artists and songs

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# start a mongodb server (linux command)
$ service mongodb start

# (Windows)
$ cd C:\Program Files\MongoDB\Server\3.2\bin>
$ mongodb
```

Make sure the port for the mongodb server is `27017` - should be the default. You can visualise the mongo db with MongoDB Compass (https://www.mongodb.com/try/download/compass)

## Swagger

To use the api swagger, simply navigate to http://localhost:3000/api

There is a description of all the endpoints and you can try them out in the GUI.

## Test

```bash
# unit tests
$ npm run test

```

## License

Nest is [MIT licensed](LICENSE).
