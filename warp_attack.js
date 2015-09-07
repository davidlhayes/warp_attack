board =
[
  [
    ['B','4'],['B','4'],['B','4'],['B','5'],['B','5'],['B','5'],['B','5'],['B','6'],['B','6'],['B','6']
  ],
  [
    ['B','8'],['B','8'],['B','8'],['B','8'],['B','8'],['B','7'],['B','7'],['B','7'],['B','7'],['B','6']
  ],
  [
    ['B','9'],['B','9'],['B','9'],['B','9'],['B','9'],['B','9'],['B','9'],['B','9'],['B','3'],['B','3']
  ],
  [
    ['B','B'],['B','B'],['B','B'],['B','B'],['B','B'],['B','B'],['B','F'],['B','S'],['B','1'],['B','2']
  ],
  [
    null,null,null,null,null,null,null,null,null,null,
  ],
  [
    null,null,null,null,null,null,null,null,null,null,
  ],
  [
    null,null,null,null,null,null,null,null,null,null,
  ],
  [
    null,null,null,null,null,null,null,null,null,null,
  ],
  [
    ['R','4'],['R','4'],['R','4'],['R','5'],['R','5'],['R','5'],['R','5'],['R','6'],['R','6'],['R','6']
  ],
  [
    ['R','8'],['R','8'],['R','8'],['R','8'],['R','8'],['R','7'],['R','7'],['R','7'],['R','7'],['R','6']
  ],
  [
    ['R','9'],['R','9'],['R','9'],['R','9'],['R','9'],['R','9'],['R','9'],['R','9'],['R','3'],['R','3']
  ],
  [
    ['R','R'],['R','R'],['R','R'],['R','R'],['R','R'],['R','R'],['R','F'],['R','S'],['R','1'],['R','2']
  ]
]
movepiece = function(start_row,start_col,finish_row,finish_col) {
    console.log(board[finish_row-1][finish_col-1]);
    if (board[finish_row-1][finish_col-1]===null) {
        board[finish_row-1][finish_col-1] = board[start_row-1][start_col-1];
        board[start_row-1][start_col-1] = null;
    } else {
        console.log('Invalid move! Space is occupied!');
    }

}
checksquare = function(start_row,start_col,finish_row,finish_col) {
    // border, black hole, more than one space

    if (board[start_row-1][start_col-1] === null) {
      return 'you are on an empty space';
    } else if (board[finish_row-1][finish_col-1]=== null) {
      return 'available move';
    } else if (board[finish_row-1][finish_col-1][0] === board[start_row-1][start_col-1][0]) {
      return 'friend';
    } else {
      return 'enemy';
    }
}
