// These functions were set up initially to allow control
// of the tokens in the game from the console.
// This is the directory of token attributes
//         fleet rank  revealed?       image location
var Token = [
          [ 'a' , '1' , false , '/images/starship-a-1.png'],
          [ 'a' , '2' , false , '/images/starship-a-2.png'],
          [ 'a' , '3' , false , '/images/starship-a-3.png'],
          [ 'a' , '3' , false , '/images/starship-a-3.png'],
          [ 'a' , '4' , false , '/images/starship-a-4.png'],
          [ 'a' , '4' , false , '/images/starship-a-4.png'],
          [ 'a' , '4' , false , '/images/starship-a-4.png'],
          [ 'a' , '5' , false , '/images/starship-a-5.png'],
          [ 'a' , '5' , false , '/images/starship-a-5.png'],
          [ 'a' , '5' , false , '/images/starship-a-5.png'],
          [ 'a' , '5' , false , '/images/starship-a-5.png'],
          [ 'a' , '6' , false , '/images/starship-a-6.png'],
          [ 'a' , '6' , false , '/images/starship-a-6.png'],
          [ 'a' , '6' , false , '/images/starship-a-6.png'],
          [ 'a' , '6' , false , '/images/starship-a-6.png'],
          [ 'a' , '7' , false , '/images/starship-a-7.png'],
          [ 'a' , '7' , false , '/images/starship-a-7.png'],
          [ 'a' , '7' , false , '/images/starship-a-7.png'],
          [ 'a' , '7' , false , '/images/starship-a-7.png'],
          [ 'a' , '8' , false , '/images/starship-a-8.png'],
          [ 'a' , '8' , false , '/images/starship-a-8.png'],
          [ 'a' , '8' , false , '/images/starship-a-8.png'],
          [ 'a' , '8' , false , '/images/starship-a-8.png'],
          [ 'a' , '9' , false , '/images/starship-a-9.png'],
          [ 'a' , '9' , false , '/images/starship-a-9.png'],
          [ 'a' , '9' , false , '/images/starship-a-9.png'],
          [ 'a' , '9' , false , '/images/starship-a-9.png'],
          [ 'a' , '9' , false , '/images/starship-a-9.png'],
          [ 'a' , '9' , false , '/images/starship-a-9.png'],
          [ 'a' , '9' , false , '/images/starship-a-9.png'],
          [ 'a' , '9' , false , '/images/starship-a-9.png'],
          [ 'a' , 'S' , false , '/images/starship-a-suicide.png'],
          [ 'a' , 'M' , false , '/images/starship-a-mine.png'],
          [ 'a' , 'M' , false , '/images/starship-a-mine.png'],
          [ 'a' , 'M' , false , '/images/starship-a-mine.png'],
          [ 'a' , 'M' , false , '/images/starship-a-mine.png'],
          [ 'a' , 'M' , false , '/images/starship-a-mine.png'],
          [ 'a' , 'M' , false , '/images/starship-a-mine.png'],
          [ 'a' , 'F' , false , '/images/starship-a-flag.png'],
          [ 'f' , '1' , false , '/images/starship-f-1.png'],
          [ 'f' , '2' , false , '/images/starship-f-2.png'],
          [ 'f' , '3' , false , '/images/starship-f-3.png'],
          [ 'f' , '3' , false , '/images/starship-f-3.png'],
          [ 'f' , '4' , false , '/images/starship-f-4.png'],
          [ 'f' , '4' , false , '/images/starship-f-4.png'],
          [ 'f' , '4' , false , '/images/starship-f-4.png'],
          [ 'f' , '5' , false , '/images/starship-f-5.png'],
          [ 'f' , '5' , false , '/images/starship-f-5.png'],
          [ 'f' , '5' , false , '/images/starship-f-5.png'],
          [ 'f' , '5' , false , '/images/starship-f-5.png'],
          [ 'f' , '6' , false , '/images/starship-f-6.png'],
          [ 'f' , '6' , false , '/images/starship-f-6.png'],
          [ 'f' , '6' , false , '/images/starship-f-6.png'],
          [ 'f' , '6' , false , '/images/starship-f-6.png'],
          [ 'f' , '7' , false , '/images/starship-f-7.png'],
          [ 'f' , '7' , false , '/images/starship-f-7.png'],
          [ 'f' , '7' , false , '/images/starship-f-7.png'],
          [ 'f' , '7' , false , '/images/starship-f-7.png'],
          [ 'f' , '8' , false , '/images/starship-f-8.png'],
          [ 'f' , '8' , false , '/images/starship-f-8.png'],
          [ 'f' , '8' , false , '/images/starship-f-8.png'],
          [ 'f' , '8' , false , '/images/starship-f-8.png'],
          [ 'f' , '9' , false , '/images/starship-f-9.png'],
          [ 'f' , '9' , false , '/images/starship-f-9.png'],
          [ 'f' , '9' , false , '/images/starship-f-9.png'],
          [ 'f' , '9' , false , '/images/starship-f-9.png'],
          [ 'f' , '9' , false , '/images/starship-f-9.png'],
          [ 'f' , '9' , false , '/images/starship-f-9.png'],
          [ 'f' , '9' , false , '/images/starship-f-9.png'],
          [ 'f' , '9' , false , '/images/starship-f-9.png'],
          [ 'f' , 'S' , false , '/images/starship-f-suicide.png'],
          [ 'f' , 'M' , false , '/images/starship-f-mine.png'],
          [ 'f' , 'M' , false , '/images/starship-f-mine.png'],
          [ 'f' , 'M' , false , '/images/starship-f-mine.png'],
          [ 'f' , 'M' , false , '/images/starship-f-mine.png'],
          [ 'f' , 'M' , false , '/images/starship-f-mine.png'],
          [ 'f' , 'M' , false , '/images/starship-f-mine.png'],
          [ 'f' , 'F' , false , '/images/starship-f-flag.png']
      ]
// The initial, empty playing field.
var Field = [
      [ -1 , -1 , -1 , -1 , -1 , -1 , -1 , -1 , -1 , -1 ],
      [ -1 , -1 , -1 , -1 , -1 , -1 , -1 , -1 , -1 , -1 ],
      [ -1 , -1 , -1 , -1 , -1 , -1 , -1 , -1 , -1 , -1 ],
      [ -1 , -1 , -1 , -1 , -1 , -1 , -1 , -1 , -1 , -1 ],
      [ -1 , -1 , 'X', 'X', -1 , -1 , 'X', 'X', -1 , -1 ],
      [ -1 , -1 , 'X', 'X', -1 , -1 , 'X', 'X', -1 , -1 ],
      [ -1 , -1 , -1 , -1 , -1 , -1 , -1 , -1 , -1 , -1 ],
      [ -1 , -1 , -1 , -1 , -1 , -1 , -1 , -1 , -1 , -1 ],
      [ -1 , -1 , -1 , -1 , -1 , -1 , -1 , -1 , -1 , -1 ],
      [ -1 , -1 , -1 , -1 , -1 , -1 , -1 , -1 , -1 , -1 ]
];
// the initial home and final resting place for Alliance tokens
var TrayA = [
      [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ],
      [ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
      [ 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
      [ 30, 31, 32, 33, 34, 35, 36, 37, 38, 39]
    ];
// the initial home and final resting place for Federation tokens
var TrayF = [
      [ 40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
      [ 50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
      [ 60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
      [ 70, 71, 72, 73, 74, 75, 76, 77, 78, 79]
]



// identify the addresses of the data
var baseURL = "https://shining-heat-2898.firebaseio.com";
var aURL = baseURL + "/gameBoard/-Jz3d0Q_y42RXmkcBD2Z/alliance/tokens";
var fURL = baseURL + "/gameBoard/-Jz3d0Q_y42RXmkcBD2Z/federation";
var wData = {};

// var dataURL = "";

function setToken(token,destinationR,destinationC) {
    var tokenOrigin = findToken(token); // find token anywhere in trays or on field
    console.log('token ' + token + ' tokenOrigin: ' + tokenOrigin + ' destinationR: ' + destinationR + ' destinationC: ' + destinationC);
    if (tokenOrigin.length==3) {        // valid return array [ 'array', row, col ]
      var originR = tokenOrigin[1];
      var originC = tokenOrigin[2];
      if (Field[destinationR][destinationC] == -1) {
        if (tokenOrigin[0] == 'TrayA') {
          if (destinationR < 4) {
            Field[destinationR][destinationC] = TrayA[originR][originC];
            TrayA[originR][originC] = -1;
            // showAll();
            return true;
          } else {
              console.log('That is outside your authorized sector');
              return false;
          }
        } else if (tokenOrigin[0] == 'TrayF') {
          if (destinationR > 5) {
            Field[destinationR][destinationC] = TrayF[originR][originC];
            TrayF[originR][originC] = -1;
            // showAll();
            return true;
          } else {
            console.log('That is outside your authorized sector');
            return false;
          }
        } else {
          // showAll();
          console.log('token is not found in either tray')
          return false;
        }
      } else {
        // showAll();
        console.log('Space + ' + destinationR + ':' + destinationC + ' is occupied');
        return false;
      }
    } else {
      // showAll();
      console.log('Space is occupied!');
      return false;
    }
};

function tokenUnset(token) {
    if (token < 40) {
      var openCell = getIndexOfK(TrayA,0);
      if (openCell != null) {
        TrayF[openCell[0]][openCell[1]] = Field[destinationR][destinationC];
        Field[destinationR][destinationC] = 0;
      } else {
        console.log('Error! Tray appears to be full!');
      }
    } else {
      var openCell =  getIndexOfK(TrayF,0);
      if (openCell != null) {
        TrayF[openCell[0]][openCell[1]] = Field[destinationR][destinationC];
        Field[destinationR][destinationC] = 0;
      } else {
        console.log('Error! Tray appears to be full!');
      }
    }
};

function movetoken() {
  // checkSquare
}

// Display playing field to console.
function showField() {
    for (var i=0; i<10; i++) {
      console.log(i + ':' + Field[i][0] + ' ' + Field[i][1] + ' '
                + Field[i][2] + ' ' + Field[i][3] + ' '
                + Field[i][4] + ' ' + Field[i][5] + ' '
                + Field[i][6] + ' ' + Field[i][7] + ' '
                + Field[i][8] + ' ' + Field[i][9]);
  }
  return true;
};
// Display Alliance tray
function showTrayA() {
    for (var i=0; i<4; i++) {
      console.log(i + ':' + TrayA[i][0] + ' ' + TrayA[i][1] + ' '
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
      console.log(i + ':' + TrayF[i][0] + ' ' + TrayF[i][1] + ' '
                + TrayF[i][2] + ' ' + TrayF[i][3] + ' '
                + TrayF[i][4] + ' ' + TrayF[i][5] + ' '
                + TrayF[i][6] + ' ' + TrayF[i][7] + ' '
                + TrayF[i][8] + ' ' + TrayF[i][9]);
  }
  return true;
};

function showAll() {
  showTrayA();
  showField();
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

// Find Warp Attack game token by looking on the field and in both trays
// return array name and row and column
function findToken(k) {
  var loc = getIndexOfK(Field,k);
  if (loc.length==2) {
    return ['Field',loc[0],loc[1]];
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

function setBoard() {
// Alliance
  setToken(0,0,4);      // rank 1
  setToken(1,1,9);      // rank 2
  setToken(2,3,2);      // rank 3
  setToken(3,0,9);      // rank 3
  setToken(4,3,1);      // rank 4
  setToken(5,0,0);      // rank 4
  setToken(6,2,1);      // rank 4
  setToken(7,1,4);      // rank 5
  setToken(8,2,4);      // rank 5
  setToken(9,2,0);      // rank 5
  setToken(10,3,8);     // rank 5
  setToken(11,1,0);     // rank 6
  setToken(12,3,0);     // rank 6
  setToken(13,1,1);     // rank 6
  setToken(14,1,8);     // rank 6
  setToken(15,1,3);     // rank 7
  setToken(16,1,5);     // rank 7
  setToken(17,2,2);     // rank 7
  setToken(18,2,9);     // rank 7
  setToken(19,3,9);     // rank 8
  setToken(20,3,8);     // rank 8
  setToken(21,1,8);     // rank 8
  setToken(22,1,4);     // rank 8
  setToken(23,2,7);     // rank 8
  setToken(24,2,3);     // rank 9
  setToken(25,3,5);     // rank 9
  setToken(26,2,7);     // rank 9
  setToken(27,2,4);     // rank 9
  setToken(28,1,6);     // rank 9
  setToken(29,2,7);     // rank 9
  setToken(30,3,4);     // rank 9
  setToken(31,3,2);     // rank 9
  setToken(32,3,1);     // suicide ship
  setToken(33,2,2);     // mine
  setToken(34,0,1);     // mine
  setToken(35,3,2);     // mine
  setToken(36,2,6);     // mine
  setToken(37,0,5);     // mine
  setToken(38,1,4);     // mine
  setToken(39,1,5);     // flag
// Federation
  setToken(40,9,0);     // rank 1
  setToken(41,6,7);     // rank 2
  setToken(42,8,1);     // rank 3
  setToken(43,9,1);     // rank 3
  setToken(44,6,4);     // rank 4
  setToken(45,5,3);     // rank 4
  setToken(46,8,9);     // rank 4
  setToken(47,9,7);     // rank 5
  setToken(48,8,0);     // rank 5
  setToken(49,6,1);     // rank 5
  setToken(50,9,8);     // rank 5
  setToken(51,7,1);     // rank 6
  setToken(52,7,7);     // rank 6
  setToken(53,6,4);     // rank 6
  setToken(54,8,7);     // rank 6
  setToken(55,8,4);     // rank 7
  setToken(56,8,1);     // rank 7
  setToken(57,7,0);     // rank 7
  setToken(58,8,5);     // rank 7
  setToken(59,6,8);     // rank 8
  setToken(60,6,2);     // rank 8
  setToken(61,8,3);     // rank 8
  setToken(62,6,8);     // rank 8
  setToken(63,9,1);     // rank 8
  setToken(64,7,0);     // rank 9
  setToken(65,7,9);     // rank 9
  setToken(66,7,5);     // rank 9
  setToken(67,6,3);     // rank 9
  setToken(68,7,4);     // rank 9
  setToken(69,8,3);     // rank 9
  setToken(70,8,8);     // rank 9
  setToken(71,6,5);     // rank 9
  setToken(72,6,2);     // Suicide ship
  setToken(73,8,5);     // mine
  setToken(74,3,1);     // mine
  setToken(75,6,4);     // mine
  setToken(76,9,0);     // mine
  setToken(77,6,1);     // mine
  setToken(78,9,1);     // mine
  setToken(79,9,5);     // flag
}

// The above is scattershot. Need to place tokens that were poorly commanded
function setRemaining() {
  var empty = [];
  for (var i=0; i<4; i++) {
    for (var j=0; j<10; j++) {
      console.log('TrayA ' + i,j,TrayF[i],[j]);
      if (TrayA[i][j] != -1) {
        empty = getIndexConstrained(Field,0,3,-1)
        console.log(empty);
        console.log('A setToken: ' + TrayF[i][j],empty[0],empty[1])
        setToken(TrayA[i][j],empty[0],empty[1]);
      }
    }
  }

  var empty = [];
  for (var i=0; i<4; i++) {
    for (var j=0; j<10; j++) {
      console.log('TrayF ' + i,j,TrayF[i],[j]);
      if (TrayF[i][j] != -1) {
        empty = getIndexConstrained(Field,6,9,-1)
        console.log(empty);
        console.log('F setToken: ' + TrayF[i][j],empty[0],empty[1])
        setToken(TrayF[i][j],empty[0],empty[1]);
      }
    }
  }

}
