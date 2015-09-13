// These functions were set up initially to allow control
// of the pieces in the game from the console.

// identify the addresses of the data
var baseURL = "https://shining-heat-2898.firebaseio.com";
var aURL = baseURL + "/gameBoard/-Jz3d0Q_y42RXmkcBD2Z/alliance";
var fURL = baseURL + "/gameBoard/-Jz3d0Q_y42RXmkcBD2Z/federation";

var setUpPiece = function() {

}

var movePiece = function() {
  // checkSquare
}

var showPieces = function() {
  for (i=0; i<4; i++) {
    for (j=0; j<10; j++) {

    }
  }
}

var rank = function(pId) {
  var dataURL = "";
  if (pId > 39) {
    dataURL = aURL;
  } else {
    dataURL = fURL;
  }
  var ref = new Firebase(dataURL);
  console.log(dataURL);
  ref.orderByChild('pieces').equalTo(pId).on('value', function(snapshot) {
      return snapshot.key()
    });
}
