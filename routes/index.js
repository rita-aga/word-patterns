var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Sentence = require('../models/Sentence.js');
var axios = require('axios');

// Send json from glosbe API to client
let glosbe = [];
router.get('/glosbe', function (req, res, next) {
  res.json(glosbe);
});

// Get word query from client
router.post('/q', function (req, res, next) {
  let query = req.body;
  console.log(query);
  from_lang = query.from_lang;
  dest_lang = query.dest_lang;
  axios.get(`https://glosbe.com/gapi/tm?from=${query.from_lang}&dest=${query.dest_lang}&format=json&phrase=${query.word}&page=1&pretty=true`)
  .then(function (response) {
    console.log(response.status); // ex.: 200
    glosbe = response.data.examples;
    console.log(glosbe);
  });
  res.status(200).send(query);

});

// Get all sentences from my database
router.get('/', function(req, res, next) {
    Sentence.find(function (err, products) {
      if (err) return next(err);
      res.json(products);
    });
  });

// Add sentence to my database
router.post('/add', function (req, res, next) {
  Sentence.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// Delete sentence from my database
router.delete('/:id', function (req, res, next) {
  Sentence.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// // Get sentence by ID
// router.get('/:id', function (req, res, next) {
//     Sentence.findById(req.params.id, function (err, post) {
//       if (err) return next(err);
//       res.json(post);
//     });
//   });

module.exports = router;
