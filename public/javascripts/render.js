// Global variables
    var TokenToMove;


function renderBoard() {

  var mpref = '#main-';
  var tpref = '#tray-';
  // loop through Board array and set display Board to image url
  // via Token array
  var imgUrl;
  var tokStr;
  var rank;
  for (var i=0; i<10; i++) {
    for (var j=0; j<10; j++) {
      locStr = mpref + 'r' + i + 'c' + j;
      rank = Token[Board[i][j]][1];
      if (rank=='E') {
        tokStr = '';
      } else if (rank != 'X') {
        imgUrl = Token[Board[i][j]][3];
        tokStr = "<img class='token' src='" + imgUrl + "'>";
      }
      if (rank != 'X') $(locStr).html(tokStr);
    }
  }
  // BuildFirebaseArray();
}

function renderTrayA() {

  var mpref = '#main-';
  var tpref = '#tray-';
  // loop through Board array and set display Board to image url
  // via Token array
  var imgUrl;
  var tokStr;
  var rank;
  for (var i=0; i<10; i++) {
    for (var j=0; j<10; j++) {
      locStr = tpref + 'r' + i + 'c' + j;
      rank = Token[TrayA[i][j]][1];
      if (rank=='E') {
        tokStr = '';
      } else if (rank != 'X') {
        imgUrl = Token[Board[i][j]][3];
        tokStr = "<img class='token' src='" + imgUrl + "'>";
      }
      if (rank != 'X') $(locStr).html(tokStr);
    }
  }
}
function renderTrayF() {

  var mpref = '#main-';
  var tpref = '#tray-';
  // loop through Board array and set display Board to image url
  // via Token array
  var imgUrl;
  var tokStr;
  var rank;
  for (var i=0; i<10; i++) {
    for (var j=0; j<10; j++) {
      locStr = tpref + 'r' + i + 'c' + j;
      rank = Token[TrayF[i][j]][1];
      if (rank=='E') {
        tokStr = '';
      } else if (rank != 'X') {
        imgUrl = Token[Board[i][j]][3];
        tokStr = "<img class='token' src='" + imgUrl + "'>";
      }
      if (rank != 'X') $(locStr).html(tokStr);
    }
  }
}

// run-time functions: initializers and listeners

$(document).ready( function(){

renderBoard();


$('#main-r0c0').on('click', function () {   // cell-specific
  if ($(this).children('img').hasClass('toMove')) {
    $(this).children('img').removeClass('toMove');
  } else if ($('#main').has('img.toMove').length==0) {
    $(this).children('img').addClass('toMove');
    TokenToMove = Board[0][0];             // cell-specific
  } else {
    // this is the proposed destination square
    tokenStr = $('main').find('img.toMove')
    moveToken(TokenToMove,0,0);            // cell-specific
    renderBoard();
  }
});

$('#main-r0c1').on('click', function () {
  if ($(this).children('img').hasClass('toMove')) {
    $(this).children('img').removeClass('toMove');
  } else if ($('#main').has('img.toMove').length==0) {
    $(this).children('img').addClass('toMove');
    TokenToMove = Board[0][1];             // cell-specific
  } else {
    // this is the proposed destination square
    tokenStr = $('main').find('img.toMove')
    moveToken(TokenToMove,0,1);            // cell-specific
    renderBoard();
  }
});

$('#main-r0c2').on('click', function () {
  if ($(this).children('img').hasClass('toMove')) {
    $(this).children('img').removeClass('toMove');
  } else if ($('#main').has('img.toMove').length==0) {
    $(this).children('img').addClass('toMove');
    TokenToMove = Board[0][2];             // cell-specific
  } else {
    // this is the proposed destination square
    tokenStr = $('main').find('img.toMove')
    moveToken(TokenToMove,0,2);            // cell-specific
    renderBoard();
  }
});

$('#main-r0c3').on('click', function () {
  if ($(this).children('img').hasClass('toMove')) {
    $(this).children('img').removeClass('toMove');
  } else if ($('#main').has('img.toMove').length==0) {
    $(this).children('img').addClass('toMove');
    TokenToMove = Board[0][3];             // cell-specific
  } else {
    // this is the proposed destination square
    tokenStr = $('main').find('img.toMove')
    moveToken(TokenToMove,0,3);            // cell-specific
    renderBoard();
  }
});

$('#main-r0c4').on('click', function () {
  if ($(this).children('img').hasClass('toMove')) {
    $(this).children('img').removeClass('toMove');
  } else if ($('#main').has('img.toMove').length==0) {
    $(this).children('img').addClass('toMove');
    TokenToMove = Board[0][4];             // cell-specific
  } else {
    // this is the proposed destination square
    tokenStr = $('main').find('img.toMove')
    moveToken(TokenToMove,0,4);            // cell-specific
    renderBoard();
  }
});


$('#main-r0c5').on('click', function () {
  if ($(this).children('img').hasClass('toMove')) {
    $(this).children('img').removeClass('toMove');
  } else if ($('#main').has('img.toMove').length==0) {
    $(this).children('img').addClass('toMove');
    TokenToMove = Board[0][5];             // cell-specific
  } else {
    // this is the proposed destination square
    tokenStr = $('main').find('img.toMove')
    console.log('moving!');
    console.log(moveToken(TokenToMove,0,5));            // cell-specific
    renderBoard();
  }
});

$('#main-r4c0').on('click', function () {
  console.log('i am here');
  if ($(this).children('img').hasClass('toMove')) {
    $(this).children('img').removeClass('toMove');
  } else if ($('#main').has('img.toMove').length==0) {
    $(this).children('img').addClass('toMove');
    TokenToMove = Board[4][0];             // cell-specific
  } else {
    // this is the proposed destination square
    tokenStr = $('main').find('img.toMove')
    console.log('moving!');
    console.log(moveToken(TokenToMove,4,0));            // cell-specific
    renderBoard();
  }
});

$('#main-r5c0').on('click', function () {
  console.log('i am here');
  if ($(this).children('img').hasClass('toMove')) {
    $(this).children('img').removeClass('toMove');
  } else if ($('#main').has('img.toMove').length==0) {
    $(this).children('img').addClass('toMove');
    TokenToMove = Board[5][0];             // cell-specific
  } else {
    // this is the proposed destination square
    tokenStr = $('main').find('img.toMove')
    console.log('moving!');
    console.log(moveToken(TokenToMove,5,0));            // cell-specific
    renderBoard();
  }
});

$('#main-r5c1').on('click', function () {
  if ($(this).children('img').hasClass('toMove')) {
    $(this).children('img').removeClass('toMove');
  } else if ($('#main').has('img.toMove').length==0) {
    $(this).children('img').addClass('toMove');
    TokenToMove = Board[5][1];             // cell-specific
  } else {
    // this is the proposed destination square
    tokenStr = $('main').find('img.toMove')
    console.log('moving!');
    console.log(moveToken(TokenToMove,5,1));            // cell-specific
    renderBoard();
  }
});

$('#main-r6c0').on('click', function () {
  if ($(this).children('img').hasClass('toMove')) {
    $(this).children('img').removeClass('toMove');
  } else if ($('#main').has('img.toMove').length==0) {
    $(this).children('img').addClass('toMove');
    TokenToMove = Board[6][0];             // cell-specific
  } else {
    // this is the proposed destination square
    tokenStr = $('main').find('img.toMove')
    console.log(moveToken(TokenToMove,6,0));            // cell-specific
    renderBoard();
  }
});

$('#main-r6c1').on('click', function () {
  if ($(this).children('img').hasClass('toMove')) {
    $(this).children('img').removeClass('toMove');
  } else if ($('#main').has('img.toMove').length==0) {
    $(this).children('img').addClass('toMove');
    TokenToMove = Board[6][1];             // cell-specific
  } else {
    // this is the proposed destination square
    tokenStr = $('main').find('img.toMove')
    console.log(moveToken(TokenToMove,6,1));            // cell-specific
    renderBoard();
  }
});

});
