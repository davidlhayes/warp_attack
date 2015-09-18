# Warp Attack

# Project Description

Warp Attack is a board game to be played by two human players. Input is movement of pieces with a mouse or a finger (on applicable devices).

## Scope

A complete game must be playable with players using separate computers.

### Potential Extras

1. A messaging pane
A very simple display of strings that each user adds to the database. Highly desired

2. A PC play mode.
At it's most basic, an AI player must be able to make legal moves. It is not realistic for me to craft an AI player that considers things such as the other player's skill or anticipate moves two turns ahead, BUT I intend to at least store information that would make future development easier. For example, after a successful attack, the victor continues play, but with a known rank. Strategy is obviously affected.

3. A sign-in to allow more than one game at a time.

# User Stories

Warp Attack is a clone of Stratego, but with starships (in the vein of Star Trek) in place of the traditional Eurpoean army archetypes. A player can:

1. Press New Game
2. Choose a Color
3. Tray fills with your pieces
4. Move pieces to your starting Board
5. Opponents pieces are represented as 'blanks' or a simple logo.
6. App will indicate Ready, Reset Pieces, or Cancel
7. When your turn is indicated "Red Move/Blue Move", move a
piece.
  - A legal move to an empty space changes XXX Move to XXX Move indicator.
  - An illegal move just returns the piece to its origin
  - An attack presents the opponents as large representations of the tokens and then fades the loser.
8. When a user enters text in the message box and clicks send, the message is append to the list.


# Rules of Play

Players take turns moving and movements are governed by rules. Most pieces can only move one space, but the rank 9 starship can move any number of spaces in a straight line. Rank S is a suicide ship which only takes out a rank 1 starship. Mines do not move and neither does the flag. Pieces remain hidden, but the victor of a skirmish is revealed by necessity (moving a piece onto another one creates a skirmish which will eliminate one or both of them).

# Wireframe

![Warp Attack Wireframe](https://raw.githubusercontent.com/davidlhayes/warp_attack/master/warp%20attack%20wireframe.jpg)

# Technology Used

1. Database: Firebase
2. Authentication: Firebase
3. Hosting: Firebase
4. Node.js server side run-time environment
5. Express framework for Node
6. Angular front-end environment

# Installation Instructions

1. Clone this git repository to a local machine and change into its directory.
2. Use the commands npm <code>install <pkg> --save</code> and <code>npm init</code>. Install Express with <code>install express --save</code>
3. A Firebase account is required. Your database URL must be used in place of the URL used in this repository.
4. You must run <code>npm start</code> in order to use this app. On a local machine, with npm running, Warp Attack can be found at
   localhost:3000.

# Challenges

This project was chosen because it was fun and creative, but also a learning challenge. To have actually learned something, though, I suppose that it's only natural to have those head-slapping moments on insight in which you have to stave off an aching desire to start in a fresh directory and only do "smart stuff." For purposes of education, documentation, and just need to conserve time, a large portion of tried-and-discarded code remains, some of it walled off with comment markers. Below is a list of challenges on the path to Warp Attack.

1.  I planned to use unfamiliar technologies, so as to gain experience with them, but gradually realized that there was a lot of redundancy of capabilites. The use of Firebase actually removed the nedd for Node or Express. Firebase handles both the database operation and the authentication, however, in a more robust approach, I would like to use Firebase's sligthly more involved solution to handle authentication in Node.js as I believe this would allow me to hide a portion of the code from the browser and keep the identity of the opponent facing game tokens truly unreachable.

2. I recognized Angular as a powerful way to render information in the DOM with controllers and templates. Some of this was used in the currently-abandoned login code. What I required for the main app, though was a way to handle each token in a grid, skipping over the stars in the middle of the battle area. I also wanted to allow the tokens to be dragged and dropped (though click and click is quite workable). Simply put, time ran out on exploring the implementation of these features of Angular with my particular situation. An intermediate project or two, with scopes more closely aligned to avaiable examples would still benefit me.
In place of Angular, Warp Attack is rendering the tokens in an explicitly declared HTML table with cells explicitly identified. Each square has a jQuery click event attached to it. That code contains the logic to modify the response based on clicking a token versus clicking its target and clicking a token to set it up versus playing the game. With 180 squares in the game, the result is thousands of lines of code. I recognize that even with jQuery there is some possiblity for refactoring into a reusable function, but requires time and testing.
3. I undererstimated the complexity of the logic, especially keeping the data current on two computers (or at least two browse). The nature of the data format was a question for several days. I wanted something that worked with the logic I wanted to implement and then found msyelf simplifying to faciliate working with Firebase. With less of the game data store on the server, I eventually realized that it was easy to get computers rendering incompatible representations of what was supposed to be the same game. Of course, this phenomena is only viewable once a lot of code is developed.

# Code Sample
Below is a listener for a game board square

```js
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

```

* Version 2.0

The game isn't 1.0 yet. That requires a fully working game between two computers. Version 2.0, however, is not unimaginable. It would be quite possible to have multiple games played at once with a way to know if your opponent has logged-in yet. A fully dynamic log-in field with fields that appear and disappear with each mode is highly desirable. A more animated and clearer respresentation of one piece claiming victory over another was originally conceived, something like larger token icons appearing and then the defeated one shrinking first.
