// Global variables
    var TokenToMove;
    var Turn;
    var authData = ref.getAuth();
    var MyFleet = 'a';


function RenderBoard() {

  var mpref = '#main-';
  var tpref = '#tray-';
  // loop through Board array and set display Board to image url
  // via Token array
  var imgUrl;
  var tokStr;
  var rank;
  // check for log-in status
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
  BuildFirebaseArray();
}

function renderTrayA() {

  var mpref = '#main-';
  var tpref = '#tray-';
  // loop through Board array and set display Board to image url
  // via Token array
  var imgUrl;
  var tokStr;
  var rank;
  // check for log-in status
  for (var i=0; i<10; i++) {
    for (var j=0; j<4; j++) {
      locStr = tpref + 'r' + i + 'c' + j;
      rank = Token[TrayA[i][j]][1];
      if (rank=='E') {
        tokStr = '';
      } else if (rank != 'X') {
        imgUrl = Token[TrayA[i][j]][3];
        tokStr = "<img class='token' src='" + imgUrl + "'>";
      }
      if (rank != 'X') $(locStr).html(tokStr);
    }
  }
}
function renderTrayF() {

// console.log('yeah, its renderTrayF');
  var mpref = '#main-';
  var tpref = '#tray-';
  // loop through Board array and set display Board to image url
  // via Token array
  var imgUrl;
  var tokStr;
  var rank;
  // check for log-in status

  for (var i=0; i<10; i++) {
    for (var j=0; j<4; j++) {
      locStr = tpref + 'r' + i + 'c' + j;
      rank = Token[TrayF[i][j]][1];
      if (rank=='E') {
        tokStr = '';
      } else if (rank != 'X') {
        imgUrl = Token[TrayF[i][j]][3];
        tokStr = "<img class='token' src='" + imgUrl + "'>";
      }
      // console.log(i, j, rank, locStr, tokStr);
      if (rank != 'X') $(locStr).html(tokStr);
    }
  }
}

// run-time functions: initializers and listeners

$(document).ready( function(){

// clearTrayA();
// clearTrayF();

RenderBoard();

  console.log('document is ready!');
  // force fresh log-in (that's the point we assign a fleet)
  ref.unauth();
  RefFleet.remove();

// Tray cell listeners

  // Unfortunately, Trays must be transposed. Set up as 4 rows/10 cols,
  // it's actually displayed as 10 rows/4 cols

  if (Turn='s') {   // true should be "Turn = 's'"

    $('#tray-r0c0').on('click', function () {   // cell-specific
      if ($(this).children('img').hasClass('toMove')) {
        $(this).children('img').removeClass('toMove');
      } else if ($('#tray').has('img.toMove').length==0) {
        $(this).children('img').addClass('toMove');
        if (MyFleet=='a') {
          TokenToMove = TrayA[0][0];             // cell-specific
        } else {
          TokenToMove = TrayF[0][0];
        }
      }
    });

    $('#tray-r0c1').on('click', function () {   // cell-specific
      if ($(this).children('img').hasClass('toMove')) {
        $(this).children('img').removeClass('toMove');
      } else if ($('#tray').has('img.toMove').length==0) {
        $(this).children('img').addClass('toMove');
        if (MyFleet=='a') {
          TokenToMove = TrayA[0][1];             // cell-specific
        } else {
          TokenToMove = TrayF[0][1];
        }
      }
    });

    $('#tray-r0c2').on('click', function () {   // cell-specific
      if ($(this).children('img').hasClass('toMove')) {
        $(this).children('img').removeClass('toMove');
      } else if ($('#tray').has('img.toMove').length==0) {
        $(this).children('img').addClass('toMove');
        if (MyFleet=='a') {
          TokenToMove = TrayA[0][2];             // cell-specific
        } else {
          TokenToMove = TrayF[0][2];
        }
      }
    });

    $('#tray-r0c3').on('click', function () {   // cell-specific
      if ($(this).children('img').hasClass('toMove')) {
        $(this).children('img').removeClass('toMove');
      } else if ($('#tray').has('img.toMove').length==0) {
        $(this).children('img').addClass('toMove');
        if (MyFleet=='a') {
          TokenToMove = TrayA[0][3];             // cell-specific
        } else {
          TokenToMove = TrayF[0][3];
        }
      }
    });

    $('#tray-r1c0').on('click', function () {   // cell-specific
      if ($(this).children('img').hasClass('toMove')) {
        $(this).children('img').removeClass('toMove');
      } else if ($('#tray').has('img.toMove').length==0) {
        $(this).children('img').addClass('toMove');
        if (MyFleet=='a') {
          TokenToMove = TrayA[1][0];             // cell-specific
        } else {
          TokenToMove = TrayF[1][0];
        }
      }
    });

    $('#tray-r1c1').on('click', function () {   // cell-specific
      if ($(this).children('img').hasClass('toMove')) {
        $(this).children('img').removeClass('toMove');
      } else if ($('#tray').has('img.toMove').length==0) {
        $(this).children('img').addClass('toMove');
        if (MyFleet=='a') {
          TokenToMove = TrayA[1][1];             // cell-specific
        } else {
          TokenToMove = TrayF[1][1];
        }
      }
    });

    $('#tray-r1c2').on('click', function () {   // cell-specific
      if ($(this).children('img').hasClass('toMove')) {
        $(this).children('img').removeClass('toMove');
      } else if ($('#tray').has('img.toMove').length==0) {
        $(this).children('img').addClass('toMove');
        if (MyFleet=='a') {
          TokenToMove = TrayA[1][2];             // cell-specific
        } else {
          TokenToMove = TrayF[1][2];
        }
      }
    });

    $('#tray-r1c3').on('click', function () {   // cell-specific
      if ($(this).children('img').hasClass('toMove')) {
        $(this).children('img').removeClass('toMove');
      } else if ($('#tray').has('img.toMove').length==0) {
        $(this).children('img').addClass('toMove');
        if (MyFleet=='a') {
          TokenToMove = TrayA[1][3];             // cell-specific
        } else {
          TokenToMove = TrayF[1][3];
        }
      }
    });

    $('#tray-r2c0').on('click', function () {   // cell-specific
      if ($(this).children('img').hasClass('toMove')) {
        $(this).children('img').removeClass('toMove');
      } else if ($('#tray').has('img.toMove').length==0) {
        $(this).children('img').addClass('toMove');
        if (MyFleet=='a') {
          TokenToMove = TrayA[2][0];             // cell-specific
        } else {
          TokenToMove = TrayF[2][0];
        }
      }
    });

    $('#tray-r2c1').on('click', function () {   // cell-specific
      if ($(this).children('img').hasClass('toMove')) {
        $(this).children('img').removeClass('toMove');
      } else if ($('#tray').has('img.toMove').length==0) {
        $(this).children('img').addClass('toMove');
        if (MyFleet=='a') {
          TokenToMove = TrayA[2][1];             // cell-specific
        } else {
          TokenToMove = TrayF[2][1];
        }
      }
    });

    $('#tray-r2c2').on('click', function () {   // cell-specific
      if ($(this).children('img').hasClass('toMove')) {
        $(this).children('img').removeClass('toMove');
      } else if ($('#tray').has('img.toMove').length==0) {
        $(this).children('img').addClass('toMove');
        if (MyFleet=='a') {
          TokenToMove = TrayA[2][2];             // cell-specific
        } else {
          TokenToMove = TrayF[2][2];
        }
      }
    });

    $('#tray-r2c3').on('click', function () {   // cell-specific
      if ($(this).children('img').hasClass('toMove')) {
        $(this).children('img').removeClass('toMove');
      } else if ($('#tray').has('img.toMove').length==0) {
        $(this).children('img').addClass('toMove');
        if (MyFleet=='a') {
          TokenToMove = TrayA[2][3];             // cell-specific
        } else {
          TokenToMove = TrayF[2][3];
        }
      }
    });

    $('#tray-r3c0').on('click', function () {   // cell-specific
      if ($(this).children('img').hasClass('toMove')) {
        $(this).children('img').removeClass('toMove');
      } else if ($('#tray').has('img.toMove').length==0) {
        $(this).children('img').addClass('toMove');
        if (MyFleet=='a') {
          TokenToMove = TrayA[3][0];             // cell-specific
        } else {
          TokenToMove = TrayF[3][0];
        }
      }
    });

    $('#tray-r3c1').on('click', function () {   // cell-specific
      if ($(this).children('img').hasClass('toMove')) {
        $(this).children('img').removeClass('toMove');
      } else if ($('#tray').has('img.toMove').length==0) {
        $(this).children('img').addClass('toMove');
        if (MyFleet=='a') {
          TokenToMove = TrayA[3][1];             // cell-specific
        } else {
          TokenToMove = TrayF[3][1];
        }
      }
    });

    $('#tray-r3c2').on('click', function () {   // cell-specific
      if ($(this).children('img').hasClass('toMove')) {
        $(this).children('img').removeClass('toMove');
      } else if ($('#tray').has('img.toMove').length==0) {
        $(this).children('img').addClass('toMove');
        if (MyFleet=='a') {
          TokenToMove = TrayA[3][2];             // cell-specific
        } else {
          TokenToMove = TrayF[3][2];
        }
      }
    });

    $('#tray-r3c3').on('click', function () {   // cell-specific
      if ($(this).children('img').hasClass('toMove')) {
        $(this).children('img').removeClass('toMove');
      } else if ($('#tray').has('img.toMove').length==0) {
        $(this).children('img').addClass('toMove');
        if (MyFleet=='a') {
          TokenToMove = TrayA[3][3];             // cell-specific
        } else {
          TokenToMove = TrayF[3][3];
        }
      }
    });

    $('#tray-r4c0').on('click', function () {   // cell-specific
      if ($(this).children('img').hasClass('toMove')) {
        $(this).children('img').removeClass('toMove');
      } else if ($('#tray').has('img.toMove').length==0) {
        $(this).children('img').addClass('toMove');
        if (MyFleet=='a') {
          TokenToMove = TrayA[4][0];             // cell-specific
        } else {
          TokenToMove = TrayF[4][0];
        }
      }
    });

    $('#tray-r4c1').on('click', function () {   // cell-specific
      if ($(this).children('img').hasClass('toMove')) {
        $(this).children('img').removeClass('toMove');
      } else if ($('#tray').has('img.toMove').length==0) {
        $(this).children('img').addClass('toMove');
        if (MyFleet=='a') {
          TokenToMove = TrayA[4][1];             // cell-specific
        } else {
          TokenToMove = TrayF[4][1];
        }
      }
    });

    $('#tray-r4c2').on('click', function () {   // cell-specific
      if ($(this).children('img').hasClass('toMove')) {
        $(this).children('img').removeClass('toMove');
      } else if ($('#tray').has('img.toMove').length==0) {
        $(this).children('img').addClass('toMove');
        if (MyFleet=='a') {
          TokenToMove = TrayA[4][2];             // cell-specific
        } else {
          TokenToMove = TrayF[4][2];
        }
      }
    });

    $('#tray-r4c3').on('click', function () {   // cell-specific
      if ($(this).children('img').hasClass('toMove')) {
        $(this).children('img').removeClass('toMove');
      } else if ($('#tray').has('img.toMove').length==0) {
        $(this).children('img').addClass('toMove');
        if (MyFleet=='a') {
          TokenToMove = TrayA[4][3];             // cell-specific
        } else {
          TokenToMove = TrayF[4][3];
        }
      }
    });

    $('#tray-r5c0').on('click', function () {   // cell-specific
      if ($(this).children('img').hasClass('toMove')) {
        $(this).children('img').removeClass('toMove');
      } else if ($('#tray').has('img.toMove').length==0) {
        $(this).children('img').addClass('toMove');
        if (MyFleet=='a') {
          TokenToMove = TrayA[5][0];             // cell-specific
        } else {
          TokenToMove = TrayF[5][0];
        }
      }
    });

    $('#tray-r5c1').on('click', function () {   // cell-specific
      if ($(this).children('img').hasClass('toMove')) {
        $(this).children('img').removeClass('toMove');
      } else if ($('#tray').has('img.toMove').length==0) {
        $(this).children('img').addClass('toMove');
        if (MyFleet=='a') {
          TokenToMove = TrayA[5][1];             // cell-specific
        } else {
          TokenToMove = TrayF[5][1];
        }
      }
    });

    $('#tray-r5c2').on('click', function () {   // cell-specific
      if ($(this).children('img').hasClass('toMove')) {
        $(this).children('img').removeClass('toMove');
      } else if ($('#tray').has('img.toMove').length==0) {
        $(this).children('img').addClass('toMove');
        if (MyFleet=='a') {
          TokenToMove = TrayA[5][2];             // cell-specific
        } else {
          TokenToMove = TrayF[5][2];
        }
      }
    });

    $('#tray-r5c3').on('click', function () {   // cell-specific
      if ($(this).children('img').hasClass('toMove')) {
        $(this).children('img').removeClass('toMove');
      } else if ($('#tray').has('img.toMove').length==0) {
        $(this).children('img').addClass('toMove');
        if (MyFleet=='a') {
          TokenToMove = TrayA[5][3];             // cell-specific
        } else {
          TokenToMove = TrayF[5][3];
        }
      }
    });

    $('#tray-r6c0').on('click', function () {   // cell-specific
      if ($(this).children('img').hasClass('toMove')) {
        $(this).children('img').removeClass('toMove');
      } else if ($('#tray').has('img.toMove').length==0) {
        $(this).children('img').addClass('toMove');
        if (MyFleet=='a') {
          TokenToMove = TrayA[6][0];             // cell-specific
        } else {
          TokenToMove = TrayF[6][0];
        }
      }
    });

    $('#tray-r6c1').on('click', function () {   // cell-specific
      if ($(this).children('img').hasClass('toMove')) {
        $(this).children('img').removeClass('toMove');
      } else if ($('#tray').has('img.toMove').length==0) {
        $(this).children('img').addClass('toMove');
        if (MyFleet=='a') {
          TokenToMove = TrayA[6][1];             // cell-specific
        } else {
          TokenToMove = TrayF[6][1];
        }
      }
    });

    $('#tray-r6c2').on('click', function () {   // cell-specific
      if ($(this).children('img').hasClass('toMove')) {
        $(this).children('img').removeClass('toMove');
      } else if ($('#tray').has('img.toMove').length==0) {
        $(this).children('img').addClass('toMove');
        if (MyFleet=='a') {
          TokenToMove = TrayA[6][2];             // cell-specific
        } else {
          TokenToMove = TrayF[6][2];
        }
      }
    });

    $('#tray-r6c3').on('click', function () {   // cell-specific
      if ($(this).children('img').hasClass('toMove')) {
        $(this).children('img').removeClass('toMove');
      } else if ($('#tray').has('img.toMove').length==0) {
        $(this).children('img').addClass('toMove');
        if (MyFleet=='a') {
          TokenToMove = TrayA[6][3];             // cell-specific
        } else {
          TokenToMove = TrayF[6][3];
        }
      }
    });

    $('#tray-r7c0').on('click', function () {   // cell-specific
      if ($(this).children('img').hasClass('toMove')) {
        $(this).children('img').removeClass('toMove');
      } else if ($('#tray').has('img.toMove').length==0) {
        $(this).children('img').addClass('toMove');
        if (MyFleet=='a') {
          TokenToMove = TrayA[7][0];             // cell-specific
        } else {
          TokenToMove = TrayF[7][0];
        }
      }
    });

    $('#tray-r7c1').on('click', function () {   // cell-specific
      if ($(this).children('img').hasClass('toMove')) {
        $(this).children('img').removeClass('toMove');
      } else if ($('#tray').has('img.toMove').length==0) {
        $(this).children('img').addClass('toMove');
        if (MyFleet=='a') {
          TokenToMove = TrayA[7][1];             // cell-specific
        } else {
          TokenToMove = TrayF[7][1];
        }
      }
    });

    $('#tray-r7c2').on('click', function () {   // cell-specific
      if ($(this).children('img').hasClass('toMove')) {
        $(this).children('img').removeClass('toMove');
      } else if ($('#tray').has('img.toMove').length==0) {
        $(this).children('img').addClass('toMove');
        if (MyFleet=='a') {
          TokenToMove = TrayA[7][2];             // cell-specific
        } else {
          TokenToMove = TrayF[7][2];
        }
      }
    });

    $('#tray-r7c3').on('click', function () {   // cell-specific
      if ($(this).children('img').hasClass('toMove')) {
        $(this).children('img').removeClass('toMove');
      } else if ($('#tray').has('img.toMove').length==0) {
        $(this).children('img').addClass('toMove');
        if (MyFleet=='a') {
          TokenToMove = TrayA[7][3];             // cell-specific
        } else {
          TokenToMove = TrayF[7][3];
        }
      }
    });

    $('#tray-r8c0').on('click', function () {   // cell-specific
      if ($(this).children('img').hasClass('toMove')) {
        $(this).children('img').removeClass('toMove');
      } else if ($('#tray').has('img.toMove').length==0) {
        $(this).children('img').addClass('toMove');
        if (MyFleet=='a') {
          TokenToMove = TrayA[8][0];             // cell-specific
        } else {
          TokenToMove = TrayF[8][0];
        }
      }
    });

    $('#tray-r8c1').on('click', function () {   // cell-specific
      if ($(this).children('img').hasClass('toMove')) {
        $(this).children('img').removeClass('toMove');
      } else if ($('#tray').has('img.toMove').length==0) {
        $(this).children('img').addClass('toMove');
        if (MyFleet=='a') {
          TokenToMove = TrayA[8][1];             // cell-specific
        } else {
          TokenToMove = TrayF[8][1];
        }
      }
    });

    $('#tray-r8c2').on('click', function () {   // cell-specific
      if ($(this).children('img').hasClass('toMove')) {
        $(this).children('img').removeClass('toMove');
      } else if ($('#tray').has('img.toMove').length==0) {
        $(this).children('img').addClass('toMove');
        if (MyFleet=='a') {
          TokenToMove = TrayA[8][2];             // cell-specific
        } else {
          TokenToMove = TrayF[8][2];
        }
      }
    });

    $('#tray-r8c3').on('click', function () {   // cell-specific
      if ($(this).children('img').hasClass('toMove')) {
        $(this).children('img').removeClass('toMove');
      } else if ($('#tray').has('img.toMove').length==0) {
        $(this).children('img').addClass('toMove');
        if (MyFleet=='a') {
          TokenToMove = TrayA[8][3];             // cell-specific
        } else {
          TokenToMove = TrayF[8][3];
        }
      }
    });

    $('#tray-r9c0').on('click', function () {   // cell-specific
      if ($(this).children('img').hasClass('toMove')) {
        $(this).children('img').removeClass('toMove');
      } else if ($('#tray').has('img.toMove').length==0) {
        $(this).children('img').addClass('toMove');
        if (MyFleet=='a') {
          TokenToMove = TrayA[9][0];             // cell-specific
        } else {
          TokenToMove = TrayF[9][0];
        }
      }
    });

    $('#tray-r9c1').on('click', function () {   // cell-specific
      if ($(this).children('img').hasClass('toMove')) {
        $(this).children('img').removeClass('toMove');
      } else if ($('#tray').has('img.toMove').length==0) {
        $(this).children('img').addClass('toMove');
        if (MyFleet=='a') {
          TokenToMove = TrayA[9][1];             // cell-specific
        } else {
          TokenToMove = TrayF[9][1];
        }
      }
    });

    $('#tray-r9c2').on('click', function () {   // cell-specific
      if ($(this).children('img').hasClass('toMove')) {
        $(this).children('img').removeClass('toMove');
      } else if ($('#tray').has('img.toMove').length==0) {
        $(this).children('img').addClass('toMove');
        if (MyFleet=='a') {
          TokenToMove = TrayA[9][2];             // cell-specific
        } else {
          TokenToMove = TrayF[9][2];
        }
      }
    });

    $('#tray-r9c3').on('click', function () {   // cell-specific
      if ($(this).children('img').hasClass('toMove')) {
        $(this).children('img').removeClass('toMove');
      } else if ($('#tray').has('img.toMove').length==0) {
        $(this).children('img').addClass('toMove');
        if (MyFleet=='a') {
          TokenToMove = TrayA[9][3];             // cell-specific
        } else {
          TokenToMove = TrayF[9][3];
        }
      }
    });

  }
  // end tray listeners (for set-up)

  // main board listeners -- we're always listening

  $('#main-r0c0').on('click', function () {   // cell-specific
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[0][0];             // cell-specific
    } else {
      // this is the proposed destination square
      moveToken(TokenToMove,0,0);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });


  $('#main-r0c1').on('click', function () {   // cell-specific
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[0][1];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,0,1);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r0c2').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[0][2];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,0,2);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r0c3').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[0][3];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,0,3);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r0c4').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[0][4];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,0,4);            // cell-specific
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      RenderBoard();
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r0c5').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[0][5];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,0,5);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });


  $('#main-r0c6').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[0][6];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,0,6);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r0c7').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[0][7];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,0,7);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r0c8').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[0][8];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,0,8);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r0c9').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[0][9];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,0,9);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r1c0').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[1][0];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,1,0);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r1c1').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[1][1];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('#main').find('img.toMove')
      moveToken(TokenToMove,1,1);            // cell-specific
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      RenderBoard();
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r1c2').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[1][2];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('body').find('img.toMove')
      moveToken(TokenToMove,1,2);            // cell-specific
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      RenderBoard();
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r1c3').on('click', function () {   // cell-specific
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[1][3];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,1,3);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });


  $('#main-r1c4').on('click', function () {   // cell-specific
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[1][4];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,1,4);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r1c5').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[1][5];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,1,5);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r1c6').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[1][6];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,1,6);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r1c7').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[1][7];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,1,7);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r1c8').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[1][8];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,1,8);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });


  $('#main-r1c9').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[1][9];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,1,9);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r2c0').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[2][0];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,2,0);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r2c1').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[2][1];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,2,1);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r2c2').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[2][2];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,2,2);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r2c3').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[2][3];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,2,3);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r2c4').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[2][4];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('#main').find('img.toMove')
      moveToken(TokenToMove,2,4);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r2c5').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[2][5];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('body').find('img.toMove')
      moveToken(TokenToMove,2,5);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r2c6').on('click', function () {   // cell-specific
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[2][6];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,2,6);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });


  $('#main-r2c7').on('click', function () {   // cell-specific
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[2][7];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,2,7);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r2c8').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[2][8];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,2,8);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r2c9').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[2][9];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,2,9);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r3c0').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[3][0];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,3,0);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r3c1').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[3][1];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,3,1);            // cell-specific
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });


  $('#main-r3c2').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[3][2];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,3,2);            // cell-specific
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      RenderBoard();
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r3c3').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[3][3];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,3,3);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r3c4').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[3][4];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,3,4);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r3c5').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[3][5];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,3,5);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r3c6').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[3][6];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('#main').find('img.toMove')
      moveToken(TokenToMove,3,6);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r3c7').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[3][7];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('body').find('img.toMove')
      moveToken(TokenToMove,3,7);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r3c8').on('click', function () {   // cell-specific
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[3][8];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,3,8);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });


  $('#main-r3c9').on('click', function () {   // cell-specific
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[3][9];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,3,9);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r4c0').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[4][0];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,4,0);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r4c1').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[4][1];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,4,1);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r4c2').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[4][2];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,4,2);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r4c3').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Boar[4][3];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,4,3);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });


  $('#main-r4c4').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[4][4];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,4,4);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r4c5').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[4][5];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,4,5);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      RefTurn.update({"turn":"f"});
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r4c6').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[4][6];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,4,6);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r4c7').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[4][7];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,4,7);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r4c8').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[4][8];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,4,8);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r4c9').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[4][9];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('#main').find('img.toMove')
      moveToken(TokenToMove,4,9);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r5c0').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[5][0];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('body').find('img.toMove')
      moveToken(TokenToMove,5,0);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }

  });

  $('#main-r5c1').on('click', function () {   // cell-specific
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[5][1];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,5,1);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });


  $('#main-r5c2').on('click', function () {   // cell-specific
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[5][2];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,5,2);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r5c3').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[5][3];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,5,3);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r5c4').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[5][4];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,5,4);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r5c5').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[5][5];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,5,5);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r5c6').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[5][6];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,5,6);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });


  $('#main-r5c7').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[5][7];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,5,7);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r5c8').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[5][8];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,5,8);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r5c9').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[5][9];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,5,9);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r6c0').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[6][0];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,6,0);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r6c1').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[6][1];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,6,1);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r6c2').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[6][2];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,6,2);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r6c3').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[6][3];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,6,3);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r6c4').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[6][4];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,6,4);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r6c5').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[6][5];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,6,5);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r6c6').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[6][6];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,6,6);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r6c7').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[6][7];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,6,7);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r6c8').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[6][0];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,6,8);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r6c9').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[6][9];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,6,9);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r7c0').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[7][0];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,7,0);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r7c1').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[7][1];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('#main').find('img.toMove')
      moveToken(TokenToMove,7,1);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r7c2').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[7][2];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('body').find('img.toMove')
      moveToken(TokenToMove,7,2);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r7c3').on('click', function () {   // cell-specific
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[7][3];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,7,3);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });


  $('#main-r7c4').on('click', function () {   // cell-specific
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[7][4];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,7,4);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r7c5').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[7][5];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,7,5);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r7c6').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[7][6];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,7,6);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r7c7').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[7][7];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,7,7);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r7c8').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[7][8];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,7,8);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });


  $('#main-r7c9').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[7][9];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,7,9);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r8c0').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[8][0];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,8,0);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r8c1').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[8][1];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,8,1);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r8c2').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[8][2];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,8,2);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r8c3').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[8][3];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,8,3);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r8c4').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[8][4];             // cell-specific
    } else {
      // this is the proposed destination square
      moveToken(TokenToMove,8,4);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r8c5').on('click', function () {
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[8][5];             // cell-specific
    } else {
      // this is the proposed destination square
      moveToken(TokenToMove,8,5);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r8c6').on('click', function () {   // cell-specific
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[8][6];             // cell-specific
    } else {
      // this is the proposed destination square
      moveToken(TokenToMove,8,6);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });


  $('#main-r8c7').on('click', function () {   // cell-specific
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[8][7];             // cell-specific
    } else {
      // this is the proposed destination square
      moveToken(TokenToMove,8,7);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r8c8').on('click', function () {
    // toggle a lit up square
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    //  if nothing else lit, light this one up
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[8][8];             // cell-specific
    } else {
      // this is the proposed destination square
      moveToken(TokenToMove,8,8);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r8c9').on('click', function () {
    // toggle a lit up square
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    //  if nothing else lit, light this one up
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[8][9];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,8,9);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r9c0').on('click', function () {
    // toggle a lit up square
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    //  if nothing else lit, light this one up
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[9][0];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,9,0);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r9c1').on('click', function () {
    // toggle a lit up square
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    //  if nothing else lit, light this one up
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[9][1];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,9,1);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });


  $('#main-r9c2').on('click', function () {
    // toggle a lit up square
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    //  if nothing else lit, light this one up
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[9][2];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove');
      moveToken(TokenToMove,9,2);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r9c3').on('click', function () {
    // toggle a lit up square
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    //  if nothing else lit, light this one up
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[9][3];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,9,3);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r9c4').on('click', function () {
    // toggle a lit up square
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    //  if nothing else lit, light this one up
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[9][4];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,9,4);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r9c5').on('click', function () {
    // toggle a lit up square
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    //  if nothing else lit, light this one up
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[9][5];             // cell-specific
    } else {
      // this is the proposed destination square
      tokenStr = $('main').find('img.toMove')
      moveToken(TokenToMove,9,5);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r9c6').on('click', function () {
    // toggle a lit up square
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    //  if nothing else lit, light this one up
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[9][6];             // cell-specific
    } else {
      // this is the proposed destination square
      moveToken(TokenToMove,9,6);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r9c7').on('click', function () {
    // toggle a lit up square
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    //  if nothing else lit, light this one up
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[9][7];             // cell-specific
    } else {
      // this is the proposed destination square
      moveToken(TokenToMove,9,7);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r9c8').on('click', function () {
    // toggle a lit up square
    if ($(this).children('img').hasClass('toMove')) {
      $(this).children('img').removeClass('toMove');
    //  if nothing else lit, light this one up
    } else if ($('body').has('img.toMove').length==0) {
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[9][8];             // cell-specific
    } else {
      // this is the proposed destination square
      moveToken(TokenToMove,9,8);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });

  $('#main-r9c9').on('click', function () {   // cell-specific
    // toggle a lit up square
    console.log('clicked');
    if ($(this).children('img').hasClass('toMove')) {
      console.log('1');
      $(this).children('img').removeClass('toMove');
    //  if nothing else lit, light this one up
    } else if ($('body').has('img.toMove').length==0) {
      console.log('2');
      $(this).children('img').addClass('toMove');
      TokenToMove = Board[9][9];             // cell-specific
    // cell already lit
    } else {
      // this is the proposed destination square
      console.log('3');
      moveToken(TokenToMove,9,9);            // cell-specific
      RenderBoard();
      if ((result != 'it was not your turn') && (Turn!='s')) {
        if (Turn=='a') {
          $('#chat').append('1');
          RefTurn.update({"turn":"f"})
        } else if (Turn=='f') {
          $('#chat').append('2');
          RefTurn.update({"turn":"a"})
        }
      }
      if (MyFleet=='a') {
        renderTrayA();
      } else {
        renderTrayF();
      }
    }
  });
// End main board cell listeners


    // the following listeners are tied to buttons
    // quickly set Federation side
    $('#quickSetF').on('click', function() {
      SetFederation();
      renderTrayF();
      RenderBoard();
    });
    $('#quickSetA').on('click', function() {
      SetFederation();
      renderTrayA();
      RenderBoard();
    });
    $('#fed').on('click', function() {
      MyFleet='f';
      renderTrayF();
      Turn='s';
      console.log('F');
    });
    // quickly set Alliance side
    $('#alliance').on('click', function() {
      MyFleet='a';
      renderTrayA();
      Turn='s';
      console.log('A');
    });
    // quickly set the whole Board
    $('#quickAll').on('click', function() {
      MyFleet = 'a';
      RefTurn.update({"turn":"a"})
      Turn = 'a';
      SetBoard();
      clearTrayA();
      clearTrayF();
      console.log('all');
    });
    // send all my tokens back to the tray
    $('#reset').on('click', function() {
      if (MyFleet='a') {
        var lo = 0;
        var hi = 4;
        setTrayA();
      } else {
        var lo = 6;
        var hi = 10;
        setTrayF();
      }
      for (var i=0; i<10; i++) {
        for (var j=lo; j<hi; j++) {
          Board[i][j]=0;
        }
      }
      RenderBoard();
    });



});
