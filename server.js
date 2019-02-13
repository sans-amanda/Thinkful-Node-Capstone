"use strict";
// `require` is used to import third party libraries
// here we use it to import express
const express = require("express");
// calling `express()` creates a new app, which we set to 
// the constant `app`
const morgan = require("morgan");
const app = express();

// log the http layer
app.use(morgan("common"));
// sets up a static file server to serve assets from a public folder
app.use(express.static("public"));
// body parsing middleware, to use Express to try to parse JSON from request bodies
app.use(express.json());
app.listen(process.env.PORT || 8080);


const routerPost = require("./routerPost");
const routerDashboard = require("./routerDashboard");


app.get("/", (req, res) => {
//html, css, and js files from /public
});

// when requests come into `/post` or
// `/recipes`, we'll route them to the express
// router instances we've imported. Remember,
// these router instances act as modular, mini-express apps.
app.use("/post", routerPost);
app.use("/dash", routerDashboard);


// listen for requests and log when you've started doing it
app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
