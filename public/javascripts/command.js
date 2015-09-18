var result = '';
// These functions were set up initially to allow control
// of the tokens in the game from the console.
// This is the directory of token attributes
//         fleet rank  revealed?       image location
// var if ((MyFleet=='a') && (Turn!='s')) {ssages = [];
var Token = [
          [ 'a' , '1' , false , '/assets/images/starship-a-1.png'],
          [ 'a' , '2' , false , '/assets/images/starship-a-2.png'],
          [ 'a' , '3' , false , '/assets/images/starship-a-3.png'],
          [ 'a' , '3' , false , '/assets/images/starship-a-3.png'],
          [ 'a' , '4' , false , '/assets/images/starship-a-4.png'],
          [ 'a' , '4' , false , '/assets/images/starship-a-4.png'],
          [ 'a' , '4' , false , '/assets/images/starship-a-4.png'],
          [ 'a' , '5' , false , '/assets/images/starship-a-5.png'],
          [ 'a' , '5' , false , '/assets/images/starship-a-5.png'],
          [ 'a' , '5' , false , '/assets/images/starship-a-5.png'],
          [ 'a' , '5' , false , '/assets/images/starship-a-5.png'],
          [ 'a' , '6' , false , '/assets/images/starship-a-6.png'],
          [ 'a' , '6' , false , '/assets/images/starship-a-6.png'],
          [ 'a' , '6' , false , '/assets/images/starship-a-6.png'],
          [ 'a' , '6' , false , '/assets/images/starship-a-6.png'],
          [ 'a' , '7' , false , '/assets/images/starship-a-7.png'],
          [ 'a' , '7' , false , '/assets/images/starship-a-7.png'],
          [ 'a' , '7' , false , '/assets/images/starship-a-7.png'],
          [ 'a' , '7' , false , '/assets/images/starship-a-7.png'],
          [ 'a' , '8' , false , '/assets/images/starship-a-8.png'],
          [ 'a' , '8' , false , '/assets/images/starship-a-8.png'],
          [ 'a' , '8' , false , '/assets/images/starship-a-8.png'],
          [ 'a' , '8' , false , '/assets/images/starship-a-8.png'],
          [ 'a' , '8' , false , '/assets/images/starship-a-8.png'],
          [ 'a' , '9' , false , '/assets/images/starship-a-9.png'],
          [ 'a' , '9' , false , '/assets/images/starship-a-9.png'],
          [ 'a' , '9' , false , '/assets/images/starship-a-9.png'],
          [ 'a' , '9' , false , '/assets/images/starship-a-9.png'],
          [ 'a' , '9' , false , '/assets/images/starship-a-9.png'],
          [ 'a' , '9' , false , '/assets/images/starship-a-9.png'],
          [ 'a' , '9' , false , '/assets/images/starship-a-9.png'],
          [ 'a' , '9' , false , '/assets/images/starship-a-9.png'],
          [ 'a' , 'S' , false , '/assets/images/starship-a-suicide.png'],
          [ 'a' , 'M' , false , '/assets/images/starship-a-mine.png'],
          [ 'a' , 'M' , false , '/assets/images/starship-a-mine.png'],
          [ 'a' , 'M' , false , '/assets/images/starship-a-mine.png'],
          [ 'a' , 'M' , false , '/assets/images/starship-a-mine.png'],
          [ 'a' , 'M' , false , '/assets/images/starship-a-mine.png'],
          [ 'a' , 'M' , false , '/assets/images/starship-a-mine.png'],
          [ 'a' , 'F' , false , '/assets/images/starship-a-flag.png'],
          [ 'f' , '1' , false , '/assets/images/starship-f-1.png'],
          [ 'f' , '2' , false , '/assets/images/starship-f-2.png'],
          [ 'f' , '3' , false , '/assets/images/starship-f-3.png'],
          [ 'f' , '3' , false , '/assets/images/starship-f-3.png'],
          [ 'f' , '4' , false , '/assets/images/starship-f-4.png'],
          [ 'f' , '4' , false , '/assets/images/starship-f-4.png'],
          [ 'f' , '4' , false , '/assets/images/starship-f-4.png'],
          [ 'f' , '5' , false , '/assets/images/starship-f-5.png'],
          [ 'f' , '5' , false , '/assets/images/starship-f-5.png'],
          [ 'f' , '5' , false , '/assets/images/starship-f-5.png'],
          [ 'f' , '5' , false , '/assets/images/starship-f-5.png'],
          [ 'f' , '6' , false , '/assets/images/starship-f-6.png'],
          [ 'f' , '6' , false , '/assets/images/starship-f-6.png'],
          [ 'f' , '6' , false , '/assets/images/starship-f-6.png'],
          [ 'f' , '6' , false , '/assets/images/starship-f-6.png'],
          [ 'f' , '7' , false , '/assets/images/starship-f-7.png'],
          [ 'f' , '7' , false , '/assets/images/starship-f-7.png'],
          [ 'f' , '7' , false , '/assets/images/starship-f-7.png'],
          [ 'f' , '7' , false , '/assets/images/starship-f-7.png'],
          [ 'f' , '8' , false , '/assets/images/starship-f-8.png'],
          [ 'f' , '8' , false , '/assets/images/starship-f-8.png'],
          [ 'f' , '8' , false , '/assets/images/starship-f-8.png'],
          [ 'f' , '8' , false , '/assets/images/starship-f-8.png'],
          [ 'f' , '8' , false , '/assets/images/starship-f-8.png'],
          [ 'f' , '9' , false , '/assets/images/starship-f-9.png'],
          [ 'f' , '9' , false , '/assets/images/starship-f-9.png'],
          [ 'f' , '9' , false , '/assets/images/starship-f-9.png'],
          [ 'f' , '9' , false , '/assets/images/starship-f-9.png'],
          [ 'f' , '9' , false , '/assets/images/starship-f-9.png'],
          [ 'f' , '9' , false , '/assets/images/starship-f-9.png'],
          [ 'f' , '9' , false , '/assets/images/starship-f-9.png'],
          [ 'f' , '9' , false , '/assets/images/starship-f-9.png'],
          [ 'f' , 'S' , false , '/assets/images/starship-f-suicide.png'],
          [ 'f' , 'M' , false , '/assets/images/starship-f-mine.png'],
          [ 'f' , 'M' , false , '/assets/images/starship-f-mine.png'],
          [ 'f' , 'M' , false , '/assets/images/starship-f-mine.png'],
          [ 'f' , 'M' , false , '/assets/images/starship-f-mine.png'],
          [ 'f' , 'M' , false , '/assets/images/starship-f-mine.png'],
          [ 'f' , 'M' , false , '/assets/images/starship-f-mine.png'],
          [ 'f' , 'F' , false , '/assets/images/starship-f-flag.png'],
          [ 'o' , 'E' , true  , '/assets/images/empty.png' ],  // an empty square
          [ 'x' , 'X' , true  , '/assets/images/left-top-star.png' ], // quadrants
          [ 'x' , 'X' , true  , '/assets/images/right-top-star.png' ], // of
          [ 'x' , 'X' , true  , '/assets/images/right-bot-star.png'],  // forbidden
          [ 'x' , 'X' , true  , '/assets/images/left-bot-star.png']  // zones
      ]
// The initial, empty playing Board.
var Board = [
      [ 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 ],
      [ 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 ],
      [ 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 ],
      [ 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 ],
      [ 80 , 80 , 81 , 82 , 80 , 80 , 81 , 82 , 80 , 80 ],
      [ 80 , 80 , 84 , 83 , 80 , 80 , 84 , 83 , 80 , 80 ],
      [ 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 ],
      [ 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 ],
      [ 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 ],
      [ 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 , 80 ]
];

// the initial home and final resting place for Alliance tokens
var TrayA = [
      [ 0 ,  1,  2,  3 ],
      [ 4 ,  5,  6,  7 ],
      [ 8 ,  9, 10, 11 ],
      [12 , 13, 14, 15 ],
      [16 , 17, 18, 19 ],
      [20 , 21, 22, 23 ],
      [24 , 25, 26 ,27 ],
      [28 , 29, 30, 31 ],
      [32 , 33, 34 ,35 ],
      [36 , 37, 38 ,39 ]]
// the initial home and final resting place for Federation tokens
var TrayF = [
      [ 40, 41, 42, 43 ],
      [ 44, 45, 46, 47 ],
      [ 48, 49, 50, 51 ],
      [ 52, 53, 54, 55 ],
      [ 56, 57, 58, 59 ],
      [ 60, 61, 62, 63 ],
      [ 64, 65, 66, 67 ],
      [ 68, 69, 70, 71 ],
      [ 72, 73, 74, 75 ],
      [ 76, 77, 78, 79 ]]
// setBoard();
// setRemaining();
BuildFirebaseArray();


// identify the addresses of the data
var baseURL = "https://shining-heat-2898.firebaseio.com";
var aURL = baseURL + "/gameBoard/-Jz3d0Q_y42RXmkcBD2Z/alliance/tokens";
var fURL = baseURL + "/gameBoard/-Jz3d0Q_y42RXmkcBD2Z/federation";
var wData = {};

// var dataURL = "";

function setToken(token,dstR,dstC) {
    var tokenOrigin = findToken(token); // find token anywhere in trays or on Board
    // $('#chat').append('token ' + token + ' tokenOrigin: ' + tokenOrigin + ' dstR: ' + dstR + ' dstC: ' + dstC);
    if (tokenOrigin.length==3) {        // valid return array [ 'array', row, col ]
      var originR = tokenOrigin[1];
      var originC = tokenOrigin[2];
      if ((Board[dstR][dstC] == 80) || (Board[dstR][dstC]>84)) {
        if (tokenOrigin[0] == 'TrayA') {
          if (dstR < 4) {
            Board[dstR][dstC] = TrayA[originR][originC];
            TrayA[originR][originC] = 80;
            // showAll();
            return true;
          } else {
              $('#chat').append('That is outside your authorized sector');
              return false;
          }
        } else if (tokenOrigin[0] == 'TrayF') {
          if (dstR > 5) {
            Board[dstR][dstC] = TrayF[originR][originC];
            TrayF[originR][originC] = 80;
            // showAll();
            return true;
          } else {
            $('#chat').append('That is outside your authorized sector');
            return false;
          }
        } else {
          // showAll();
          $('#chat').append('token is not found in either tray')
          return false;
        }
      } else {
        // showAll();
        $('#chat').append('Space + ' + dstR + ':' + dstC + ' is occupied');
        return false;
      }
    } else {
      // showAll();
      $('#chat').append('Space is occupied!');
      return false;
    }
};

function tokenUnset(token) {
    var orgCell = findToken(token); // 3 element array returned: arrayname, row, col
    if (token < 40) {
      var openCell = getIndexOfK(TrayA,80);  // 2 element array: row, col
      if (TrayA[openCell[0]][openCell[1]] == 80) {
        TrayA[openCell[0]][openCell[1]] = Board[orgCell[1]][orgCell[2]];
        Board[orgCell[1]][orgCell[2]] = 80;
      } else {
        $('#chat').append('Error! Tray appears to be full!');
      }
    } else {
      var openCell =  getIndexOfK(TrayF,80);
      if (TrayF[openCell[0]][openCell[1]] == 80) {
        TrayF[openCell[0]][openCell[1]] = Board[orgCell[1]][orgCell[2]];
        Board[orgCell[1]][orgCell[2]] = 80;
      } else {
        $('#chat').append('Error! Tray appears to be full!');
      }
    }
};

// The game brain is here

function moveToken(token,dstR,dstC) {
  var origin = findToken(token);  // 3-element array: arrayname, row, col
  if ((Token[token][0] == Turn) || (Turn=='s')) {  // is it your turn?
    // $('#chat').append(origin);
    // $('#chat').append('this turn: ' + Turn);
    var target = checkMove(token,dstR,dstC);
    // var result = '';  MAKING THIS GLOBAL FOR USE IN RENDER.JS
    // move if space is available
    if (target=='empty') {
      Board[dstR][dstC] = token;
      switch (origin[0]) {
        case 'TrayA':
          TrayA[origin[1]][origin[2]] = 80;
          break;
        case 'TrayF':
          TrayF[origin[1]][origin[2]] = 80;
          break;
        case 'Board':
          Board[origin[1]][origin[2]] = 80;
          break;
        default:
          alert('moveToken is broken');
      }
      // $('#chat').append('<p>Next turn: ' + Turn+ '</p>')
      // result = 'moved';
      processResult(result);
    } else if (target=='enemy') { // battle if space is occupied by an enemy
      // check for suicide case (S beats 1)
      if (Token[token][1]=='S' && Token[Board[dstR][dstC]]=='1') {
        //the mover takes the attacked space;
        Board[dstR][dstC] = token;
        // find a tray space for the loser
        tokenUnset(Board[dstR][dstC]);
        tokenUnset(token);
        reuslt = 'suicide';
        // $('#chat').append(Turn,Token[token][0],Token[token][1],Token[Board[dstR][dstC]][0],Token[Board[dstR][dstC]][1],' ' + result);
        processResult(result);
      } else if (Token[token][1]=='1' && Token[Board[dstR][dstC]]=='S')  {
          // mover is the loser
          tokenUnset(token);
          // reveal the victor for the rest of the game
          tokenUnset(Board[dstR][dstC]);
          reuslt = 'suicide';
        // $('#chat').append(Turn,Token[token][0],Token[token][1],Token[Board[dstR][dstC]][0],Token[Board[dstR][dstC]][1],' ' + result);
        processResult(result);
          // special case where attacked square is a mine, but token is not rank 8 (minesweeper)
      } else if (Token[Board[dstR][dstC]]=='M') {
          if (Token[token][1]=='8') {
            result = 'mine disarmed';
          } else {
            result = 'blown up';
            tokenUnset(token);
            tokenUnset(Board[dstR][dstC]);
          }
          // $('#chat').append(Turn,Token[token][0],Token[token][1],Token[Board[dstR][dstC]][0],Token[Board[dstR][dstC]][1],' ' + result);
          processResult(result);
          // check for a win/was the flag attacked/captured?
      } else if (Token[Board[dstR][dstC]][1]=='F') {
          result = 'win';
          // check for equal rank--both lose
          // $('#chat').append(Turn,Token[token][0],Token[token][1],Token[Board[dstR][dstC]][0],Token[Board[dstR][dstC]][1],' ' + result);
          processResult(result);
      } else if (Token[token][1] == Token[Board[dstR][dstC]][1]) {
          result = 'double loss';
          tokenUnset(token);
          tokenUnset(Board[dstR][dstC]);
          // $('#chat').append(Turn,Token[token][0],Token[token][1],Token[Board[dstR][dstC]][0],Token[Board[dstR][dstC]],' ' + result);
          processResult(result);
        // check for attacker win
      } else if (Token[token][0],Token[token][1] < Token[Board[dstR][dstC]][1]) {
          result = 'mover wins';
          tokenUnset(Board[dstR][dstC]);
          Board[dstR][dstC] = token;
          Board[origin[1]][origin[2]] = 80;
          // $('#chat').append(Turn,Token[token][0],Token[token][1],Token[Board[dstR][dstC]][0],Token[Board[dstR][dstC]][1],' ' + result);
        processResult(result);
        // check for attacker lose
      } else if (Token[token][1] > Token[Board[dstR][dstC]][1]) {
          result = 'mover loses';
          tokenUnset(token);
          Board[origin[1]][origin[2]] = 80;
        // $('#chat').append(Turn,Token[token][0],Token[token][1],Token[Board[dstR][dstC]][0],Token[Board[dstR][dstC]][1],' ' + result);
        processResult(result);
      }
    } else {
        result = 'Move not allowed because ' + target;
        processResult(result);
    }
  } else {
    result = 'it was not your turn';
    processResult(result);
  } // was it your turn?
}

// Process result

function processResult(result) {
  // messages should go to message panel
  if (Turn=='f') {
    $('#chat').append('It\'s blue\'s turn');
  } else {
    $('#chat').append('It\'s red\'s turn');
  }
  if (Turn=='s' && boardFull()) {
    Turn='a';
    result = 'Game set. Red begins';
  }
$('#chat').append('<p>' + result + '</p>');
  // MessageBox(result);
  $('#chat').append('<p>Turn ' + Turn + '</p>');
}

function checkMove(token,dstR,dstC) {
  var origin = findToken(token);
  // token type check
  if ((Token[token][1]=='M' || (Token[token][1]=='F')) && Turn != 's') return 'can\'t move that token ';
  // same square check
  if ((dstR==origin[0]) && (dstC==origin[1])) return 'destination matches origin'
  // board boundaries
  if (dstR < 0) return 'off board top';
  if (dstR > 9) return 'off board bottom';
  if (dstC < 0) return 'off board left';
  if (dstC > 9) return 'off board right';
  // twin stars
  if ((dstR > 3) && (dstR < 6) && (dstC > 1) && (dstC < 4)) return 'into left star';
  if ((dstR > 3) && (dstR < 6) && (dstC > 5) && (dstC < 8)) return 'into right star';
  // too many spaces
  rowMove = dstR-origin[0];
  colMove = dstC-origin[1];

  if (Turn != 's') {
    // check special case for rank 9, which is allowed to move multiple empty spaces in one direction
    if (((Math.abs(rowMove)>1 && colMove==0) || (rowMove==0 && Math.abs(colMove<1))) && (Token[token][1]==9)) {
      if (rowMove>1) {
        for (var j=origin[1]+1; j<dstC; j++) {
          if (Board[origin[0],j] != 80) return '+row move is blocked by' + Board[origin[0],j]
        }
      } else if (rowMove<80) {  // other direction
        for (var j=origin[1]+1; j<dstC; j++) {
          if (Board[origin[0],j] != 80) return '-row move is blocked by' + Board[origin[0],j]
        }
      } else if (colMove>1) {
        for (var j=origin[1]+1; j<dstC; j++) {
          if (Board[origin[0],j] != 80) return '+col move is blocked by' + Board[origin[0],j]
        }
      } else if (colMove<80) {
        for (var j=origin[1]+1; j<dstC; j++) {
          if (Board[origin[0],j] != 80) return '-col move is blocked by' + Board[origin[0],j]
      }
    } else if ((Math.abs(rowMove) + Math.abs(colMove) > 1) || ((Token[token][1]==9) && (Math.abs(rowMove)>0) && (Math.abs(colMove)>0))) {
        return 'too many spaces';
      }
    }
  }
  // space empty or occupied
  if (Board[dstR][dstC] == 80) return 'empty';
  if (Token[Board[dstR][dstC]][0] == Token[token][0]) return 'friendly';
  if (Token[Board[dstR][dstC]][0] != Token[token][0]) return 'enemy';
  return 'error'  // if return hasn't happened by now, all tests pass
} // end function checkMove

// Display playing Board to console.
function showBoard() {

    for (var i=0; i<10; i++) {
      outString = i + ':' + Board[i][0] + '-' + Token[Board[i][0]][0] + '-' + Token[Board[i][0]][1] + '  '
                + Board[i][1] + '-' + Token[Board[i][1]][0] + '-' + Token[Board[i][1]][1] + '  '
                + Board[i][2] + '-' + Token[Board[i][2]][0] + '-' + Token[Board[i][2]][1] + '  '
                + Board[i][3] + '-' + Token[Board[i][3]][0] + '-' + Token[Board[i][3]][1] + '  '
                + Board[i][4] + '-' + Token[Board[i][4]][0] + '-' + Token[Board[i][4]][1] + '  '
                + Board[i][5] + '-' + Token[Board[i][5]][0] + '-' + Token[Board[i][5]][1] + '  '
                + Board[i][6] + '-' + Token[Board[i][6]][0] + '-' + Token[Board[i][6]][1] + '  '
                + Board[i][7] + '-' + Token[Board[i][7]][0] + '-' + Token[Board[i][7]][1] + '  '
                + Board[i][8] + '-' + Token[Board[i][8]][0] + '-' + Token[Board[i][8]][1] + '  '
                + Board[i][9] + '-' + Token[Board[i][9]][0] + '-' + Token[Board[i][9]][1];

    $('#chat').append(outString);
  }
  return true;
};
// Display Alliance tray
function showTrayA() {
    for (var i=0; i<4; i++) {
      $('#chat').append(i + ':' + TrayA[i][0] + ' ' + TrayA[i][1] + ' '
                + TrayA[i][2] + ' ' + TrayA[i][3] + ' '
                + TrayA[i][4] + ' ' + TrayA[i][5] + ' '
                + TrayA[i][6] + ' ' + TrayA[i][7] + ' '
                + TrayA[i][8] + ' ' + TrayA[i][9]);
  }
  return true;
};
// Display Federation tray
function showTrayF() {
    for (var i=0; i<4; i++) {
      $('#chat').append(i + ':' + TrayF[i][0] + ' ' + TrayF[i][1] + ' '
                + TrayF[i][2] + ' ' + TrayF[i][3] + ' '
                + TrayF[i][4] + ' ' + TrayF[i][5] + ' '
                + TrayF[i][6] + ' ' + TrayF[i][7] + ' '
                + TrayF[i][8] + ' ' + TrayF[i][9]);
  }
  return true;
};

function showAll() {
  showTrayA();
  showBoard();
  showTrayF();
}

/**
 * Index of Multidimensional Array
 * @param arr {?Array} - the input array
 * @param k {object} - the value to search
 * @return {Array}
 */
function getIndexOfK(arr, k){
    if (!arr){
        return [];
    }
    for(var i=0; i<arr.length; i++){
        var index = arr[i].indexOf(k);
        if (index > -1){
            return [i, index];
        }
    }
    return [];
}

function getIndexConstrained(arr, r1, r2, k){
    if (!arr){
        return [];
    }
    for(var i=r1; i<=r2; i++){
        var row = arr[i]
        var index = row.indexOf(k);
        if (index > -1){
            return [i, index];
        }
    }
    return [];
}

// Find Warp Attack game token by looking on the Board and in both trays
// return array name and row and column
function findToken(k) {
  var loc = getIndexOfK(Board,k);
  if (loc.length==2) {
    return ['Board',loc[0],loc[1]];
  } else {
    loc = getIndexOfK(TrayF,k);
    if (loc.length==2) {
      return ['TrayF',loc[0],loc[1]];
    } else {
      loc = getIndexOfK(TrayA,k);
      if (loc.length==2) {
        return ['TrayA',loc[0],loc[1]];
      }
    }
  }
}

function SetBoard() {
  SetFederation();
  SetAlliance();
  RenderBoard();
  BuildFirebaseArray();
};
  // for (var i= 0; i<9; i++) {
  //   for (var j=0; j<9; j++) {
  //     setToken(i,j,80);
  //   }
  // }

function SetAlliance() {
// Alliance
  setToken(10,0,0);
  setToken(20,0,1);
  setToken(12,0,2);
  setToken(33,0,3);
  setToken(39,0,4);
  setToken(5,0,5);
  setToken(35,0,6);
  setToken(24,0,7);
  setToken(13,0,8);
  setToken(16,0,9);
  setToken(37,1,0);
  setToken(18,1,1);
  setToken(2,1,2);
  setToken(8,1,3);
  setToken(25,1,4);
  setToken(0,1,5);
  setToken(36,1,6);
  setToken(26,1,7);
  setToken(28,1,8);
  setToken(4,1,9);
  setToken(7,2,0);
  setToken(3,2,1);
  setToken(32,2,2);
  setToken(14,2,3);
  setToken(1,2,4);
  setToken(19,2,5);
  setToken(15,2,6);
  setToken(23,2,7);
  setToken(9,2,8);
  setToken(34,2,9);
  setToken(29,3,0);
  setToken(38,3,1);
  setToken(21,3,2);
  setToken(17,3,3);
  setToken(27,3,4);
  setToken(6,3,5);
  setToken(30,3,6);
  setToken(22,3,7);
  setToken(11,3,8);
  setToken(31,3,9);
}
function SetFederation() {
  // Federation
  setToken(64,6,0);
  setToken(68,6,1);
  setToken(50,6,2);
  setToken(54,6,3);
  setToken(53,6,4);
  setToken(65,6,5);
  setToken(59,6,6);
  setToken(42,6,7);
  setToken(70,6,8);
  setToken(61,6,9);
  setToken(44,7,0);
  setToken(58,7,1);
  setToken(41,7,2);
  setToken(75,7,3);
  setToken(46,7,4);
  setToken(77,7,5);
  setToken(49,7,6);
  setToken(47,7,7);
  setToken(76,7,8);
  setToken(45,7,9);
  setToken(72,8,0);
  setToken(74,8,1);
  setToken(60,8,2);
  setToken(57,8,3);
  setToken(43,8,4);
  setToken(79,8,5);
  setToken(40,8,6);
  setToken(73,8,7);
  setToken(62,8,8);
  setToken(52,8,9);
  setToken(48,9,0);
  setToken(56,9,1);
  setToken(63,9,2);
  setToken(67,9,3);
  setToken(69,9,4);
  setToken(78,9,5);
  setToken(66,9,6);
  setToken(71,9,7);
  setToken(51,9,8);
  setToken(55,9,9);
  // BuildFirebaseArray();
}



function SaveFederation() {   // a quick demo function
  for (var i=6;i<10;i++) {
    for (var j=0;j<10;j++) {
      $('#chat').append('setToken(' + Board[i][j] + ',' + i + ',' + j + ');');
    }
  }
}

function SaveAlliance() {   // a quick demo function
  for (var i=0;i<4;i++) {
    for (var j=0;j<10;j++) {
      $('#chat').append('setToken(' + Board[i][j] + ',' + i + ',' + j + ');');
    }
  }
}


// The above is scattershot. Need to place tokens that were poorly commanded
function setRemaining() {
  var empty = [];
  for (var i=0; i<4; i++) {
    for (var j=0; j<10; j++) {
      // $('#chat').append('TrayA ' + i,j,TrayA[i][j]);
      if (TrayA[i][j] != 80) {
        empty = getIndexConstrained(Board,0,3,80)
        // $('#chat').append(empty);
        if (empty.length < 3) {
          // $('#chat').append('HEY');
        }
        // $('#chat').append('A setToken: ' + TrayA[i][j],empty[0],empty[1])
        setToken(TrayA[i][j],empty[0],empty[1]);
      }
    }
  }

  var empty = [];
  for (var i=0; i<10; i++) {
    for (var j=0; j<4; j++) {
      // $('#chat').append('TrayF ' + i,j,TrayF[i],[j]);
      if (TrayF[i][j] != 80) {
        empty = getIndexConstrained(Board,6,9,80)
        // $('#chat').append(empty);
        // $('#chat').append('F setToken: ' + TrayF[i][j],empty[0],empty[1])
        setToken(TrayF[i][j],empty[0],empty[1]);
      }
    }
  }

  BuildFirebaseArray();

}
function boardFull() {
  var ct = 0;
  var elem = 0;
  for (i=0;i<10;i++) {
    for (j=0;j<10;j++) {
      elem = Board[i][j];
      if (elem < 80) ct++;
    }
  }
  return ct==80; // all empty
}
function clearTrayA() {
  for (var i=0;i<10;i++) {
    for (var j=0;j<4;j++) {
      TrayA[i][j] = 80;
    }
  }
  renderTrayA();
}
function clearTrayF() {
  for (var i=0;i<10;i++) {
    for (var j=0;j<4;j++) {
      TrayA[i][j] = 80;
    }
  }
  renderTrayF();
}
