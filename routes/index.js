var express = require('express');
var controller = express.Router();
// Firebase inclusion, specifying my database url
var Firebase = require('firebase');
var ref = new Firebase("https://shining-heat-2898.firebaseio.com/");

// var authData = ref.getAuth();
// if (authData) playerId = authData.uid;
//   console.log("auth:" + authData);

/* GET home page and set Board. */
controller.get('/', function(req, res, next) {

  res.render('index', { title: 'Warp Attack' });
});


module.exports = controller;
