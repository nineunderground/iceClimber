/**
 * @Author: Iñaki Rodriguez <nineunderground>
 * @Date:   13-Jun-2017
 * @Email:  nineunderground@gmail.com
 * @Project: Ice Climber
 * @Filename: GameBoard.js
 * @Last modified by:   inaki
 * @Last modified time: 19-Jun-2017
 */
import React, { Component } from 'react';
import { View, AlertIOS, Text } from 'react-native';
import Button from 'react-native-button';
import PopupDialog, { DialogTitle } from 'react-native-popup-dialog';
import { Section, TableView } from 'react-native-tableview-simple';

import { Floor, PlayerCell, DialogCharacterRow } from './../ViewHelper/Components';
import { GameBoardStyles } from './../styles/GlobalStyles';
import { players, characters } from './../ViewHelper/GameEngine';

export default class GameBoardView extends Component {

  constructor(props) {
    super(props);
    this.gameOptions = {
      geTotalPlayers: props.root.state.totalPlayers,
      gePlayerColor: props.root.state.playerColor,
      geIsFirstPlayer: props.root.state.isFirstPlayer,
      geTotalTilesSet: 0,
      geTurrentRound: 1,
    };
    this.state = {
      root_view: props.root,
      ge_isVoteNeeded: false,
      ge_isRoundFinish: false,
      show_scores: false,
      show_pick_character: false,
      show_move_character: false,
      geCharacterSelected: null,
      isFirstFloorEnabled: true,
      isSecondFloorEnabled: true,
      isThirdFloorEnabled: true,
      isFourthFloorEnabled: true,
      isFifthFloorEnabled: true,
    };
  }

  componentWillMount() {
    setTimeout(() => this.onPickCharacterStart(), 500);
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

  onShowPlayerCard() {
      // TODO
  }

  setLevelSelected(floor) {
    // If playerSelected is not null...
    const player = this.state.geCharacterSelected;
    if (player) {
      console.log(`Player ${player.name} moved to floor ${floor}`);
    } else {
      console.log('Nothing selected');
    }
  }

  gameOptions = {}

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
            onPress={() => this.onShowPlayerCard()}
          >VIEW CARD</Button>
          <Button
            style={{ color: 'grey', backgroundColor: 'white', borderWidth: 1, borderColor: 'black' }}
            onPress={() => this.onShowScoresStart()}
          >SCORES</Button>
          <Button
            style={{ color: 'red', backgroundColor: 'white', borderWidth: 1, borderColor: 'black' }}
            onPress={() => this.onQuit()}
          >EXIT</Button>
        </View>

        {/* Scores dialog visible or not according to SCORES button */}
        <PopupDialog
          show={this.state.show_scores}
          dialogTitle={<DialogTitle title="SCORES" />}
          onDismissed={() => this.onShowScoresEnd()}
        >
          <TableView>
            <Section>
              <PlayerCell player={players.one} />
              <PlayerCell player={players.two} />
              <PlayerCell player={players.three} />
              <PlayerCell player={players.four} />
              <PlayerCell player={players.five} />
              <PlayerCell player={players.six} />
            </Section>
          </TableView>
        </PopupDialog>

        {/* Pick a candidate to set on board*/}
        <PopupDialog
          show={this.state.show_pick_character}
          overlayOpacity='0.8'
          height={500}
          dialogTitle={<DialogTitle title="CHOOSE CHARACTER AND FLOOR" />}
          onDismissed={() => this.onPickCharacterEnd()}
        >
          <View style={{ flex: 1 }}>
            <DialogCharacterRow gameView={this} charLeft={characters.a} charCenter={characters.b} charRight={characters.c} isThree mainJustify='space-between' />
            <DialogCharacterRow gameView={this} charLeft={characters.d} charCenter={characters.e} isThree={false} mainJustify='space-around' />
            <DialogCharacterRow gameView={this} charLeft={characters.f} charCenter={characters.g} isThree charRight={characters.i} mainJustify='space-between' />
            <DialogCharacterRow gameView={this} charLeft={characters.l} charCenter={characters.n} isThree={false} mainJustify='space-around' />
            <DialogCharacterRow gameView={this} charLeft={characters.m} charCenter={characters.o} isThree charRight={characters.p} mainJustify='space-between' />
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              {this.state.isFirstFloorEnabled ? (
                <Button onPress={() => { this.setLevelSelected('1'); }} style={{ backgroundColor: 'black', color: 'white' }}>Lv 1</Button>
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
        />
      </View>
    );
  }
}
