/**
 * @Author: Iñaki Rodriguez <nineunderground>
 * @Date:   13-Jun-2017
 * @Email:  nineunderground@gmail.com
 * @Project: Ice Climber
 * @Filename: GameBoard.js
 * @Last modified by:   nineunderground
 * @Last modified time: 15-Jun-2017
 */
import React, { Component } from 'react';
import { View,
  Alert,
  AlertIOS } from 'react-native';
import Button from 'react-native-button';
import { GEInitGame } from './../../core/GameEngine';
import { Floor } from './../ViewHelper/Floor';

class GameBoard extends Component {
  // TODO Create game engine with all mechanics
  // First it shows a button that popup all pending
  // characters in different rows + bottom row for
  // selecting the destination floor.
  //
  // When all characters are deployed on the board,
  // then game starts.
  //
  // Moving until characters if possible until there
  // is voting.
  //
  // If voting is sucess then scoring and goes to
  // next round (Max 3 rounds)
  //
  // If voting do not sucess, then remove the NO
  // card and go on.
  constructor(props) {
    super(props);
    this.state = {
      main: props,
      totalPlayers: props.root.state.totalPlayers,
      playerColor: props.root.state.playerColor,
      isFirstPlayer: props.root.state.isFirstPlayer,
    };
    // call GameEngine...
  }
  onExitGame() {
    const rootClass = this.state.main.root;
    rootClass.setState({ currentView: 1 });
  }
  onStart() {
    // const args = {
    //   totalPlayers: this.state.totalPlayers,
    //   playerColor: this.state.playerColor,
    //   isFirstPlayer: this.state.isFirstPlayer,
    // };
    GEInitGame();
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
    Alert.alert('on Scores');
  }
  render() {
    return (
      <View style={globalStyle.mainStyle}>
        <Floor floorStyle={globalStyle.throneStyle} totalPos='1' />
        <Floor floorStyle={globalStyle.floorFiveStyle} totalPos='4' />
        <Floor floorStyle={globalStyle.floorFourStyle} totalPos='4' />
        <Floor floorStyle={globalStyle.floorThreeStyle} totalPos='4' />
        <Floor floorStyle={globalStyle.floorTwoStyle} totalPos='4' />
        <Floor floorStyle={globalStyle.floorOneStyle} totalPos='4' />
        <Floor floorStyle={globalStyle.basementStyle} totalPos='4' />
        <View style={globalStyle.menuStyle}>
          <Button
            style={{ color: 'blue', backgroundColor: 'white', borderWidth: 1, borderColor: 'black' }}
            onPress={() => this.onStart()}
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
export default GameBoard;
