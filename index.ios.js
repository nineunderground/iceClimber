/**
 * @Author: Iñaki Rodriguez <nineunderground>
 * @Date:   10-Jun-2017
 * @Email:  nineunderground@gmail.com
 * @Project: Ice Climber
 * @Filename: index.ios.js
 * @Last modified by:   inaki
 * @Last modified time: 15-Jun-2017
 */
import React, { Component } from 'react';
import { View,
  AppRegistry,
  StatusBar } from 'react-native';
import InitialView from './src/components/ui/views/InitialView';
import SetupView from './src/components/ui/views/SetupView';
import GameBoardView from './src/components/ui/views/GameBoardView';

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
          <GameBoardView root={this} />
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
