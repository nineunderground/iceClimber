/**
 * @Author: Iñaki Rodriguez <nineunderground>
 * @Date:   14-Jun-2017
 * @Email:  nineunderground@gmail.com
 * @Project: Ice Climber
 * @Filename: GameEngine.js
 * @Last modified by:   nineunderground
 * @Last modified time: 15-Jun-2017
 */
import { Alert } from 'react-native';

// Private fields
const TOTAL_CHARACTER_TILES = 13;
const TOTAL_ROUNDS = 3;

let GameStatus : {
  totalTilesSet: 0,
  currentRound: 1,
  isRoundFinish: false,
};

/**
 * Initialize the game
 */
export function GEInitGame(props) {
  Alert.alert('Empezamos!');
  GameStatus = props;

  while (GameStatus.currentRound < TOTAL_ROUNDS) {
    // First of all, set all tiles on the board
    while (GameStatus.totalTilesSet < TOTAL_CHARACTER_TILES) {
      const play = showsPlayerToSet();
      GameStatus.totalTilesSet += 1;
      renderGameViewWithMovement(play);
    }

    // Do movement actions until game is not ended
    while (!GameStatus.isRoundFinish) {
      const play = showsPlayerToMove();
      GameStatus.totalTilesSet += 1;
      renderGameViewWithMovement(play);
      if (checkIfVoteNeeded()) {
        if (doVote() === true) {
          break;
        }
      }
    }
    calculateScores();

    // Sets value for a new round
    GameStatus.currentRound += 1;
    GameStatus.totalTilesSet = 0;
    GameStatus.isRoundFinish = false;
  }
  // To Show 'Game Over' finish popup.
  // If YES go to view setup,
  // if NOT go to initial view
}

/**
 * Resturn the popup with a table with all
 * players and their current score and the
 * number of the round
 */
export function showCurrentScores() {
  //return args.scores;
}

// To Build a popup where user selects one
// of pending characters and picks the floor
export function showsPlayerToSet() {
  // Popup with:
  // C - C - C - C - C
  // C - C - C - C - C
  //     C - C - C
  // -----------------
  // F   -   F   -   F
  // F   -   F   -   F
  //        OK
  // Return a structure with character and
  // floor position
}

// To Build a popup where user selects one
// of available characters and picks
// automatically the floor.
// The available floor is only upper floor,
// so no input needed
export function showsPlayerToMove() {
  // Popup with:
  // C - C - C - C - C
  // C - C - C - C - C
  //     C - C - C
  // -----------------
  // F   -   F   -   F
  // F   -   F   -   F
  //        OK
  // Return a structure with character and
  // floor position
}

/**
 * It renders the GameBoardView pass as an argument when
 */
export function renderGameViewWithMovement(play) {

}

/**
 * Checks the current matrix, if there is one character at throne, then return yes
 */
export function checkIfVoteNeeded() {
  return true;
}

/*
 * Shows the Vote panel, User picks YES or NO for candidate
 */
export function doVote() {
  return true;
}

// Calculate scores
export function calculateScores() {
  showCurrentScores();
}
