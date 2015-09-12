var express = require('express');
var controller = express.Router();
// Firebase inclusion, specifying my database url
var Firebase = require('firebase');
var ref = new Firebase("https://shining-heat-2898.firebaseio.com/");

// var authData = ref.getAuth();
// if (authData) playerId = authData.uid;
//   console.log("auth:" + authData);

/* GET home page and set field. */
controller.get('/', function(req, res, next) {
  // console.log(authData);
  //
  // // see if there is a player waiting to play
  // // Actually, we need to back up a bit. Fleet has to be chosen at sign-in
  // // That is, if a player is waiting, you get no choice. So, when you sign in
  // // and you are the first of a pair, GameId is generated, you pick your fleet,
  // // and your tray is initialized.
  // var opponentId = null; // fix in a bit. More like a database lookup
  // // game['xyz'][1] = null or playerId already signed in
  // console.log('player: ' + playerId);
  // if (opponentId) {
  //   setGame(gameId,playerId)
  // } else {
  //   console.log('player: ' + playerId);
  //   var r = randId();
  //   setGame(r,playerId);
  // };

//   var newRef = new Firebase('https://shining-heat-2898.firebaseio.com/field');
//   newRef.remove();
//   for (var i=0;i<40;i++) {
//     setSquare(i,i);
//   }
  res.render('index', { title: 'Warp Attack' });
});
// Add a game piece
// function setGame(playerId,gameId) {
//   console.log('player: ' + playerId + 'game: ' + gameId);
//   var urlStr = 'https://shining-heat-2898.firebaseio.com/pieces/gameId' + gameId;
//   var newRef = new Firebase(urlStr);
//   // push to get a unique ca
//   newRef = newRef.push({"3:8":"temp"});
//   newRef.update({"3:8":{'playerId':playerId,'fleet':'a','rank':'2','revealed':'false','pUrl':'/images/starship-a-2.png'}});
// }
// Fill a square
function setSquare(square,shipId) {
  var urlStr = 'https://shining-heat-2898.firebaseio.com/field/square';
  var newRef = new Firebase(urlStr);
  urlStr = urlStr + '/' + square + '/shipId';
  newRef = new Firebase(urlStr);
  newRef.set(shipId);
};

module.exports = controller;
