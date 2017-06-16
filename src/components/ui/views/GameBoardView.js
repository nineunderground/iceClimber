/**
 * @Author: Iñaki Rodriguez <nineunderground>
 * @Date:   13-Jun-2017
 * @Email:  nineunderground@gmail.com
 * @Project: Ice Climber
 * @Filename: GameBoard.js
 * @Last modified by:   inaki
 * @Last modified time: 16-Jun-2017
 */
import React, { Component } from 'react';
import { View, AlertIOS, Text } from 'react-native';
import Button from 'react-native-button';
import PopupDialog, { DialogTitle } from 'react-native-popup-dialog';
import { Floor } from './../ViewHelper/Components';
import { GameBoardStyles } from './../styles/GlobalStyles';
import { Cell, Section, TableView } from 'react-native-tableview-simple';

// Private fields
const TOTAL_CHARACTER_TILES = 13;
const TOTAL_ROUNDS = 3;

// Player score details
const playerOne = {
  name: 'Mark',
  score_1: 0,
  score_2: 0,
  score_3: 0,
};
const playerTwo = {
  name: 'Anna',
  score_1: 0,
  score_2: 0,
  score_3: 0,
};
const playerThree = {
  name: 'John',
  score_1: 0,
  score_2: 0,
  score_3: 0,
};
const playerFour = {
  name: 'Sebastian',
  score_1: 0,
  score_2: 0,
  score_3: 0,
};
const playerFive = {
  name: 'Robin',
  score_1: 0,
  score_2: 0,
  score_3: 0,
};
const playerSix = {
  name: 'Laura',
  score_1: 0,
  score_2: 0,
  score_3: 0,
};

let geTotalPlayers,
gePlayerColor,
geIsFirstPlayer;
const geTotalTilesSet = 0;
const geTurrentRound = 1;

export default class GameBoardView extends Component {

  constructor(props) {
    super(props);
    geTotalPlayers = props.root.state.totalPlayers;
    gePlayerColor = props.root.state.playerColor;
    geIsFirstPlayer = props.root.state.isFirstPlayer;

    this.state = {
      root_view: props.root,
      ge_isVoteNeeded: false,
      ge_isRoundFinish: false,
      show_scores: false,
      show_pick_character: false,
      show_move_character: false,
    };
  }

  onExitGame() {
    const rootClass = this.state.root_view;
    rootClass.setState({ currentView: 1 });
  }

  onInitGame() {
    this.onPickCharacter();
  }

  onPickCharacter() {
    const currentStatus = this.state;
    currentStatus.show_pick_character = true;
    this.setState(currentStatus);
  }

  onQuit() {
    AlertIOS.alert(
      'Game End',
      'Do you want to quit?',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'Quit', onPress: () => this.onExitGame() },
      ]
    );
  }

  onShowScores() {
    // TODO Remove this case in view render method ???
    // // <ScoresPopUp gameView={this} />
    const currentState = this.state;
    currentState.show_scores = true;
    this.setState(currentState);
  }

  onNotShowScores() {
    const currentState = this.state;
    currentState.show_scores = false;
    this.setState(currentState);
  }

  render() {
    if (this.state.show_move_character) {
      // show_move_character
      return (
        <View style={GameBoardStyles.mainStyle}>
          <Floor floorStyle={GameBoardStyles.throneStyle} imageStyle={GameBoardStyles.shieldImg} totalPos='1' />
        </View>
      );
    }
    if (this.state.show_pick_character) {
      // show_pick_character
      return (
        <View style={GameBoardStyles.mainStyle}>
          <Floor floorStyle={GameBoardStyles.throneStyle} imageStyle={GameBoardStyles.shieldImg} totalPos='1' />
        </View>
      );
    }
    // Board ready
    return (
      <View style={GameBoardStyles.mainStyle}>
        <Floor floorStyle={GameBoardStyles.throneStyle} imageStyle={GameBoardStyles.shieldImg} totalPos='1' />
        <Floor floorStyle={GameBoardStyles.floorFiveStyle} imageStyle={GameBoardStyles.shieldImg} totalPos='4' />
        <Floor floorStyle={GameBoardStyles.floorFourStyle} imageStyle={GameBoardStyles.shieldImg} totalPos='4' />
        <Floor floorStyle={GameBoardStyles.floorThreeStyle} imageStyle={GameBoardStyles.shieldImg} totalPos='4' />
        <Floor floorStyle={GameBoardStyles.floorTwoStyle} imageStyle={GameBoardStyles.shieldImg} totalPos='4' />
        <Floor floorStyle={GameBoardStyles.floorOneStyle} imageStyle={GameBoardStyles.shieldImg} totalPos='4' />
        <Floor floorStyle={GameBoardStyles.basementStyle} imageStyle={GameBoardStyles.shieldImg} totalPos='4' />
        <View style={GameBoardStyles.menuStyle}>
          <Button
            style={{ color: 'blue', backgroundColor: 'white', borderWidth: 1, borderColor: 'black' }}
            onPress={() => this.onInitGame()}
          >SELECT</Button>
          <Button
            style={{ color: 'grey', backgroundColor: 'white', borderWidth: 1, borderColor: 'black' }}
            onPress={() => this.onShowScores()}
          >SCORES</Button>
          <Button
            style={{ color: 'red', backgroundColor: 'white', borderWidth: 1, borderColor: 'black' }}
            onPress={() => this.onQuit()}
          >QUIT</Button>
        </View>
        {/* Scores dialog visible or not according to SCORES button */}
        <PopupDialog
          show={this.state.show_scores}
          dialogTitle={<DialogTitle title="SCORES" />}
          onDismissed={() => this.onNotShowScores()}
        >
          <TableView>
            <Section>
              <PlayerCell playerName={playerOne.name} currentScore={playerOne.score_1} />
              <PlayerCell playerName={playerTwo.name} currentScore={playerTwo.score_1} />
              <PlayerCell playerName={playerThree.name} currentScore={playerThree.score_1} />
              <PlayerCell playerName={playerFour.name} currentScore={playerFour.score_1} />
              <PlayerCell playerName={playerFive.name} currentScore={playerFive.score_1} />
              <PlayerCell playerName={playerSix.name} currentScore={playerSix.score_1} />
            </Section>
          </TableView>
        </PopupDialog>
      </View>
    );
  }
}

const PlayerCell = (props) => (
  <Cell
    {...props}
    cellContentView={
      <View
        style={{ alignItems: 'center', flexDirection: 'row', flex: 1, paddingVertical: 10 }}
      >
        <Text
          allowFontScaling
          numberOfLines={1}
          style={{ flex: 1, fontSize: 20 }}
        >
          {props.playerName}
        </Text>

        <Text
          allowFontScaling
          numberOfLines={1}
          style={{ flex: 1, fontSize: 20 }}
        >
          Score {props.currentScore}
        </Text>
      </View>
    }
  />
);
// Make Component available to other parts of the app
//export default GameBoardView;
