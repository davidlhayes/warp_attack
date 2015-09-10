var express = require('express');
var controller = express.Router();
// Firebase inclusion, specifying my database url
var Firebase = require('firebase');
var gameRef = new Firebase("https://shining-heat-2898.firebaseio.com/");


/* GET home page and set field. */
controller.get('/', function(req, res, next) {

  // this code needs to go with sign-in. It's a game assignment-initialization
  // This page could reload, you know.

  var newRef = new Firebase('https://shining-heat-2898.firebaseio.com/field');
  newRef.remove();
  for (var i=0;i<40;i++) {
    setSquare(i,i);
  }
  res.render('index', { title: 'Warp Attack' });
});

function setSquare(square,shipId) {
  var urlstr = 'https://shining-heat-2898.firebaseio.com/field/square';
  var newRef = new Firebase(urlstr);
  urlstr = urlstr + '/' + square + '/shipId';
  newRef = new Firebase(urlstr);
  newRef.set(shipId);
};

module.exports = controller;
