/**
 * @Author: Iñaki Rodriguez <nineunderground>
 * @Date:   13-Jun-2017
 * @Email:  nineunderground@gmail.com
 * @Project: Ice Climber
 * @Filename: GameBoard.js
 * @Last modified by:   inaki
 * @Last modified time: 17-Jun-2017
 */
import React, { Component } from 'react';
import { View, AlertIOS, Text, Image } from 'react-native';
import Button from 'react-native-button';
import PopupDialog, { DialogTitle } from 'react-native-popup-dialog';
import { Section, TableView } from 'react-native-tableview-simple';
import { Floor, PlayerCell, DialogCharacterRow } from './../ViewHelper/Components';
import { GameBoardStyles } from './../styles/GlobalStyles';

// Private fields
const TOTAL_CHARACTER_TILES = 13;
const TOTAL_ROUNDS = 3;

// Player score details
const playerOne = {
  name: 'Mark',
  score_1: 1,
  score_2: 2,
  score_3: 3,
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
    const tileCharacterOneImgLocal = tileCharacterOneImg;

    this.state = {
      root_view: props.root,
      ge_isVoteNeeded: false,
      ge_isRoundFinish: false,
      show_scores: false,
      show_pick_character: false,
      show_move_character: false
    };
  }

  onInitGame() {
    this.onPickCharacterStart();
  }

  onExitGame() {
    const rootClass = this.state.root_view;
    rootClass.setState({ currentView: 1 });
  }

  onPickCharacterStart() {
    const currentStatus = this.state;
    currentStatus.show_pick_character = true;
    this.setState(currentStatus);
  }

  onPickCharacterEnd() {
    const currentStatus = this.state;
    currentStatus.show_pick_character = false;
    this.setState(currentStatus);
  }

  onMoveCharacterStart() {
    const currentStatus = this.state;
    currentStatus.move_pick_character = true;
    this.setState(currentStatus);
  }

  onMoveCharacterEnd() {
    const currentStatus = this.state;
    currentStatus.move_pick_character = false;
    this.setState(currentStatus);
  }

  onShowScoresStart() {
    // TODO Remove this case in view render method ???
    // // <ScoresPopUp gameView={this} />
    const currentState = this.state;
    currentState.show_scores = true;
    this.setState(currentState);
  }

  onShowScoresEnd() {
    const currentState = this.state;
    currentState.show_scores = false;
    this.setState(currentState);
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

  enableButtons(isEnabled) {
    const currentState = this.state;
    currentState.isFirstFloorEnabled = isEnabled;
    currentState.isSecondFloorEnabled = isEnabled;
    currentState.isThirdFloorEnabled = isEnabled;
    currentState.isFourthFloorEnabled = isEnabled;
    currentState.isFifthFloorEnabled = isEnabled;
    currentState.isThroneFloorEnabled = isEnabled;
    this.setState(currentState);
  }

  render() {
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
            onPress={() => this.onShowScoresStart()}
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
          onDismissed={() => this.onShowScoresEnd()}
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
        {/* Pick a candidate to set on board*/}
        <PopupDialog
          show={this.state.show_pick_character}
          overlayOpacity='0.8'
          height={400}
          dialogTitle={<DialogTitle title="PICK A CHARACTER" />}
          onDismissed={() => this.onPickCharacterEnd()}
        >
          <View style={{ flex: 1 }}>
            <DialogCharacterRow gameView={this} imgA={tileCharacterOneImg} imgB={tileCharacterTwoImg} imgC={tileCharacterThreeImg} mainJustify='space-between' />
            <DialogCharacterRow gameView={this} imgA={tileCharacterFourImg} imgB={tileCharacterFiveImg} mainJustify='space-around' />
            <DialogCharacterRow gameView={this} imgA={tileCharacterSixImg} imgB={tileCharacterSevenImg} imgC={tileCharacterEigthImg} mainJustify='space-between' />
            <DialogCharacterRow gameView={this} imgA={tileCharacterNineImg} imgB={tileCharacterTenImg} mainJustify='space-around' />
            <DialogCharacterRow gameView={this} imgA={tileCharacterTenOneImg} imgB={tileCharacterTenTwoImg} imgC={tileCharacterTenThreeImg} mainJustify='space-between' />
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              {this.state.isFirstFloorEnabled ? (
                <Button style={{ backgroundColor: 'black', color: 'white' }}>Lv 1</Button>
              ) : (
                <Text />
              )}
              {this.state.isSecondFloorEnabled ? (
                <Button style={{ backgroundColor: 'black', color: 'white' }}>Lv 2</Button>
              ) : (
                <Text />
              )}
              {this.state.isThirdFloorEnabled ? (
                <Button style={{ backgroundColor: 'black', color: 'white' }}>Lv 3</Button>
              ) : (
                <Text />
              )}
              {this.state.isFourthFloorEnabled ? (
                <Button style={{ backgroundColor: 'black', color: 'white' }}>Lv 4</Button>
              ) : (
                <Text />
              )}
              {this.state.isFifthFloorEnabled ? (
                <Button style={{ backgroundColor: 'black', color: 'white' }}>Lv 5</Button>
              ) : (
                <Text />
              )}
              {this.state.isThroneFloorEnabled ? (
                <Button style={{ backgroundColor: 'black', color: 'white' }}>THRONE</Button>
              ) : (
                <Text />
              )}
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end' }}>
              <Button style={{ backgroundColor: 'red', color: 'white' }}>RESET</Button>
            </View>
          </View>
        </PopupDialog>
        {/* TODO Move a candidate to upper floor on board*/}
        <PopupDialog
          show={this.state.show_move_character}
          dialogTitle={<DialogTitle title="SCORES" />}
          onDismissed={() => this.onMoveCharacterEnd()}
        >
          <TableView>
            <Section>
              <PlayerCell playerName={playerOne.name} currentScore={playerOne.score_1} />
            </Section>
          </TableView>
        </PopupDialog>
      </View>
    );
  }
}

// TODO use rest of them
const tileCharacterOneImg = require('./../../../res/characters/People_1.png');
const tileCharacterTwoImg = require('./../../../res/characters/People_2.png');
const tileCharacterThreeImg = require('./../../../res/characters/People_3.png');
const tileCharacterFourImg = require('./../../../res/characters/People_4.png');
const tileCharacterFiveImg = require('./../../../res/characters/People_5.png');
const tileCharacterSixImg = require('./../../../res/characters/People_6.png');
const tileCharacterSevenImg = require('./../../../res/characters/People_7.png');
const tileCharacterEigthImg = require('./../../../res/characters/People_8.png');
const tileCharacterNineImg = require('./../../../res/characters/People_9.png');
const tileCharacterTenImg = require('./../../../res/characters/People_10.png');
const tileCharacterTenOneImg = require('./../../../res/characters/People_11.png');
const tileCharacterTenTwoImg = require('./../../../res/characters/People_12.png');
const tileCharacterTenThreeImg = require('./../../../res/characters/People_13.png');


const characterImgNotSelectedStyle = {
  width: 80,
  height: 60,
  borderTopLeftRadius: 5,
  borderTopRightRadius: 5,
  opacity: 0.4,
  margin: 10,
  shadowOpacity: 0.9
};

const characterImgSelectedStyle = {
  width: 80,
  height: 60,
  borderTopLeftRadius: 5,
  borderTopRightRadius: 5,
  opacity: 1.0,
  margin: 10,
  shadowOpacity: 0.9,
  shadowColor: 'blue',
};

// Make Component available to other parts of the app
//export default GameBoardView;
