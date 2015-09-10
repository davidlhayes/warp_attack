var express = require('express');
var controller = express.Router();

/* GET users listing. */
controller.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.render('login', { title: 'Warp Attack' });
});

module.exports = controller;
