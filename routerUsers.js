//---MODULES
const express = require("express");
const mongoose = require("mongoose");

//--MIDDLEWARE
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();


const { USER } = require("./models");

//---EXPRESS APP
const app = express();
//---EXPRESS ROUTER
const router = express.Router();

//--GET -USER

//--POST -NEW USER

//--PUT -CHANGE EMAIL OR PASSWORD

//--DELETE -USER

router.get("/", (req, res) => {
    res.json(Recipes.get()); ///replace Recipes
  });

//--EXPORT ROUTER INSTANCE
module.exports = router;