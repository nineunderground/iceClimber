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
import { View, AlertIOS } from 'react-native';
import Button from 'react-native-button';
import { Floor } from './../ViewHelper/Components';
import ScoresPopUp from './ScoresPopUp';

// Private fields
const TOTAL_CHARACTER_TILES = 13;
const TOTAL_ROUNDS = 3;

export default class GameBoardView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      root_view: props.root,
      ge_totalPlayers: props.root.state.totalPlayers,
      ge_playerColor: props.root.state.playerColor,
      ge_isFirstPlayer: props.root.state.isFirstPlayer,
      ge_totalTilesSet: 0,
      ge_currentRound: 1,
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

  onScores() {
    const currentState = this.state;
    currentState.show_scores = true;
    this.setState(currentState);
  }

  render() {
    if (this.state.show_move_character) {
      // show_move_character
      return (
        <View style={globalStyle.mainStyle}>
          <Floor floorStyle={globalStyle.throneStyle} imageStyle={globalStyle.shieldImg} totalPos='1' />
        </View>
      );
    }
    if (this.state.show_pick_character) {
      // show_pick_character
      return (
        <View style={globalStyle.mainStyle}>
          <Floor floorStyle={globalStyle.throneStyle} imageStyle={globalStyle.shieldImg} totalPos='1' />
        </View>
      );
    }
    if (this.state.show_scores) {
      // show_scores
      return (
        <ScoresPopUp gameView={this} />
      );
    }
    // Board ready to start
    return (
      <View style={globalStyle.mainStyle}>
        <Floor floorStyle={globalStyle.throneStyle} imageStyle={globalStyle.shieldImg} totalPos='1' />
        <Floor floorStyle={globalStyle.floorFiveStyle} imageStyle={globalStyle.shieldImg} totalPos='4' />
        <Floor floorStyle={globalStyle.floorFourStyle} imageStyle={globalStyle.shieldImg} totalPos='4' />
        <Floor floorStyle={globalStyle.floorThreeStyle} imageStyle={globalStyle.shieldImg} totalPos='4' />
        <Floor floorStyle={globalStyle.floorTwoStyle} imageStyle={globalStyle.shieldImg} totalPos='4' />
        <Floor floorStyle={globalStyle.floorOneStyle} imageStyle={globalStyle.shieldImg} totalPos='4' />
        <Floor floorStyle={globalStyle.basementStyle} imageStyle={globalStyle.shieldImg} totalPos='4' />
        <View style={globalStyle.menuStyle}>
          <Button
            style={{ color: 'blue', backgroundColor: 'white', borderWidth: 1, borderColor: 'black' }}
            onPress={() => this.onInitGame()}
          >SELECT</Button>
          <Button
            style={{ color: 'grey', backgroundColor: 'white', borderWidth: 1, borderColor: 'black' }}
            onPress={() => this.onScores()}
          >SCORES</Button>
          <Button
            style={{ color: 'red', backgroundColor: 'white', borderWidth: 1, borderColor: 'black' }}
            onPress={() => this.onQuit()}
          >QUIT</Button>
        </View>
      </View>
    );
  }
}

// Styles
const globalStyle = {
  mainStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  basementStyle: {
    flex: 1,
    backgroundColor: 'brown',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  floorOneStyle: {
    flex: 1,
    backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  floorTwoStyle: {
    flex: 1,
    backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  floorThreeStyle: {
    flex: 1,
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  floorFourStyle: {
    flex: 1,
    backgroundColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  floorFiveStyle: {
    flex: 1,
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  throneStyle: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  menuStyle: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'black',
    alignSelf: 'stretch',
  },
  shieldImg: {
    width: 100,
    height: 70,
  }
};

// Make Component available to other parts of the app
//export default GameBoardView;
