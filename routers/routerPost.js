//---MODULES
const express = require("express");
const mongoose = require("mongoose");

//--MIDDLEWARE
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();


const { Posts } = require("../models/models");

//---EXPRESS ROUTER
const router = express.Router();

//--GET -ALL POSTS
router.get("/", (req, res) => {
  Posts
    .find()
    .then(posts => {
      res.json({
        posts: posts.map(
          (posts) => posts.serialize())
      });
    })
    .catch(
      err => {
        console.error(err);
        res.status(500).json({message: 'Internal server error'});
  });
});

//--GET -POST COMMENTS ??

//--POST -NEW POST
router.post("/", (req, res) => {

  const requiredFields = [ "body" ];
  for (let i=0; i<requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing content for post`
      console.error(message);
      return res.status(400).send(message);
    }
  }

  Posts
    .create({
      content: req.body.body,
      comments: null
    })
    .then(
      posts => res.status(201).json(posts.serialize()))
    .catch(err => {
      console.error(err);
      res.status(500).json({message: "Internal server error"});
    });
});

//--DELETE -POST
router.delete('/:id', (req, res) => {
  Posts
    .findByIdAndRemove(req.params.id)
    .then(() => {
      console.log(`Deleted blog post with id \`${req.params.id}\``);
      res.status(204).end();
    });
});


//--EXPORT ROUTER INSTANCE
module.exports = router;