"use strict";
//--IMPORT EXPRESS
const express = require("express");
//--NEW APP CREATED AT CONSTANT `app`
const app = express();
//--IMPORT MORGAN
const morgan = require("morgan");

//--IMPORT MONGOOSE
const mongoose = require("mongoose");
// make Mongoose use built in es6 promises
mongoose.Promise = global.Promise;

//--IMPORT VALUES FROM `/config`
const {PORT, DATABASE_URL} = require("./config/config");

// log the http layer
// app.use(morgan(':date[iso] :method :url :response-time'));
app.use(morgan("common"));
// sets up a static file server to serve assets from a public folder
app.use(express.static("public"));
// body parsing middleware, to use Express to try to parse JSON from request bodies
app.use(express.json());


const routerPost = require("./routers/routerPost");
const routerUsers = require("./routers/routerUsers");

// when requests come into `/api/post` or
// `/api/users`, we'll route them to the express
// router instances we've imported.
// these router instances act as modular, mini-express apps.
app.use("/api/post", routerPost);
app.use("/api/users", routerUsers);

let server;

function runServer(databaseUrl=DATABASE_URL, port=PORT) {
  return new Promise((resolve, reject) => {
    mongoose.connect(databaseUrl, err => {
      if (err) {
        return reject(err);
      }

      server = app.listen(port, () => {
        console.log(`Your app is listening on port ${port}`);
        resolve();
      })
      .on('error', err => {
        mongoose.disconnect();
        reject(err);
      });
    });
  });
}

function closeServer() {
  return mongoose.disconnect().then(() => {
    return new Promise((resolve, reject) => {
      console.log("Closing server");
      server.close(err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}

if (require.main === module) {
  runServer(DATABASE_URL).catch(err => console.error(err));
};

module.exports = { app, runServer, closeServer };


//--LOCALLY listen for requests and log when you've started doing it
app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
