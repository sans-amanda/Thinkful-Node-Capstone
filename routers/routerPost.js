//---MODULES
const express = require("express");
const mongoose = require("mongoose");

//--MIDDLEWARE
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();


const { POSTS } = require("./models");

//---EXPRESS APP
const app = express();
//---EXPRESS ROUTER
const router = express.Router();

//--GET -ALL POSTS

//--GET -ONE POST

//--POST -NEW POST

//--PUT -LIKE POST


router.get("/", (req, res) => {
    res.json(Recipes.get()); ///replace Recipes
  });

//--EXPORT ROUTER INSTANCE
module.exports = router;