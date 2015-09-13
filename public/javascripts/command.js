// These functions were set up initially to allow control
// of the pieces in the game from the console.

// identify the addresses of the data
var baseURL = "https://shining-heat-2898.firebaseio.com";
var aURL = baseURL + "/gameBoard/-Jz3d0Q_y42RXmkcBD2Z/alliance/pieces";
var fURL = baseURL + "/gameBoard/-Jz3d0Q_y42RXmkcBD2Z/federation";
var wData = {};

// var dataURL = "";

function setUpPiece() {

}

function movePiece() {
  // checkSquare
}


function showPieces() {
// ajax call to retrieve the data

$.ajax({
    url : aURL + '.json',
    success : function(result) {
      wData = result;
      for (var key in wData) {
      	console.log('key: ' + key + ' value: ' + wData[key]);
      }
      return result;
    }
});



  for (i=0; i<4; i++) {
    for (j=0; j<10; j++) {

    }
  }
}

function rank(pId) {



}
