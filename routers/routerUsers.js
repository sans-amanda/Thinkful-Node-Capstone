//---MODULES
const express = require("express");
const mongoose = require("mongoose");

//--MIDDLEWARE
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();


const { Users } = require("../models/models");

//---EXPRESS ROUTER
const router = express.Router();

//--GET -USER LOGIN
router.get("/:id", (req, res) => {
  Users
    .findOne({ username: req.body.userName })
    .then(posts => {
      res.json({
        users: users.map(
          (posts) => posts.serialize())
      });
    })
    .catch(
      err => {
        console.error(err);
        res.status(500).json({message: 'Internal server error'});
  });
});


//--POST -NEW USER
router.post("/", (req, res) => {
  const requiredFields = ["email", "username", "password"];
  requiredFields.forEach(field => {
    if (!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`;
      console.error(message);
      return res.status(400).send(message);
    }
  });

  Users
    .findOne({ userName: req.body.userName })
    .then(users=> {
      if (users) {
        const message = `Username already taken`;
        console.error(message);
        return res.status(400).send(message);
      }
      else {
        Author
          .create({
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
          })
          .then(author => res.status(201).json({
              _id: author.id,
              userName: author.userName
            }))
          .catch(err => {
            console.error(err);
            res.status(500).json({ error: "Something went wrong" });
          });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: "something went horribly awry" });
    });
});

//--PUT -CHANGE EMAIL OR PASSWORD
router.put('/:id', (req, res) => {
  if (!(req.params.id && req.body.id && req.params.id === req.body.id)) {
    res.status(400).json({
      error: 'Request path id and request body id values must match'
    });
  }

  const updated = {};
  const updateableFields = ["email", "username", "password"];
  updateableFields.forEach(field => {
    if (field in req.body) {
      updated[field] = req.body[field];
    }
  });
});

//--EXPORT ROUTER INSTANCE
module.exports = router;