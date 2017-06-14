/**
 * @Author: Iñaki Rodriguez <nineunderground>
 * @Date:   10-Jun-2017
 * @Email:  nineunderground@gmail.com
 * @Project: Ice Climber
 * @Filename: index.ios.js
 * @Last modified by:   nineunderground
 * @Last modified time: 14-Jun-2017
 */
import React, { Component } from 'react';
import { View,
  AppRegistry,
  StatusBar } from 'react-native';
import InitialView from './src/components/ui/views/InitialView';
import SetupView from './src/components/ui/views/SetupView';
import GameBoard from './src/components/ui/views/GameBoardView';

// Disable warning
console.ignoredYellowBox = ['Remote debugger'];

export default class iceClimber extends Component {

  state = {
    currentView: 1,
    totalPlayers: 3,
  }

  render() {
    if (this.state.currentView === 1) {
      return (
        <View style={{ flex: 1 }}>
          <StatusBar hidden />
          <InitialView root={this} />
        </View>
      );
    } else if (this.state.currentView === 2) {
      return (
        <View style={{ flex: 1 }}>
          <StatusBar hidden />
          <SetupView root={this} />
        </View>
      );
    } else if (this.state.currentView === 3) {
      return (
        <View style={{ flex: 1 }}>
          <StatusBar hidden />
          <GameBoard root={this} />
        </View>
      );
    }
      return (
        <View style={{ flex: 1 }}>
          <StatusBar hidden />
          <InitialView root={this} />
        </View>
      );
  }
}
AppRegistry.registerComponent('iceClimber', () => iceClimber);
