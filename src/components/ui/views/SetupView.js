/**
 * @Author: Iñaki Rodriguez <nineunderground>
 * @Date:   11-Jun-2017
 * @Email:  nineunderground@gmail.com
 * @Project: Ice Climber
 * @Filename: SetupView.js
 * @Last modified by:   nineunderground
 * @Last modified time: 13-Jun-2017
 */

// import libraries
import React, { Component } from 'react';
import { View,
  Text,
  Picker,
  Switch,
  Slider } from 'react-native';
import Button from 'react-native-button';

const INITIAL_PLAYERS = 3;

// Component itself
class SetupView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      root: props.root,
      totalPlayers: INITIAL_PLAYERS,
      playerColor: 'BL',
      isFirstPlayer: true,
    };
  }

  onGo(initialClass) {
    const rootClass = initialClass.state.root;
    rootClass.setState(
      {
        currentView: 3,
        totalPlayers: this.state.totalPlayers
      }
    );
  }
  onBack(initialClass) {
    const rootClass = initialClass.state.root;
    rootClass.setState({ currentView: 1 });
  }
  onSlideChange(newValue) {
    this.setState({ totalPlayers: newValue });
  }
  render() {
    return (
      <View style={headerStyle.mainStyle}>
        <View style={headerStyle.firstRowStyle}>
          <Text>Total Players {this.state.totalPlayers}</Text>
          <Slider
          style={{ width: 150 }}
          minimumValue={3}
          maximumValue={6}
          step={1}
          value={this.state.totalPlayers}
          onSlidingComplete={(newValue) => this.onSlideChange(newValue)}
          />
        </View>
        <View style={headerStyle.secondRowStyle}>
          <Text>Color picker</Text>
          <Picker
            selectedValue={this.state.playerColor}
            style={{ width: 150 }}
            onValueChange={(itemValue, itemIndex) => this.setState({ playerColor: itemValue })}
          >
            <Picker.Item label="GREEN" value="GR" />
            <Picker.Item label="BLUE" value="BL" />
            <Picker.Item label="YELLOW" value="YE" />
            <Picker.Item label="RED" value="RE" />
            <Picker.Item label="WHITE" value="WI" />
            <Picker.Item label="BROWN" value="BR" />
          </Picker>
        </View>
        <View style={headerStyle.thirdRowStyle}>
          <Text>Starting Player</Text>
          <Switch
          value={this.state.isFirstPlayer}
          style={{ width: 150 }}
          onValueChange={(newValue) => this.setState({ isFirstPlayer: newValue })}
          />
        </View>
        <View style={headerStyle.fourthRowStyle}>
          <Button
            style={{ backgroundColor: '#11FFFF', borderWidth: 1, borderColor: 'black' }}
            onPress={() => this.onBack(this)}
          >BACK</Button>
          <Button
            style={{ backgroundColor: '#11FFFF', borderWidth: 1, borderColor: 'black' }}
            onPress={() => this.onGo(this)}
          >START GAME</Button>
        </View>
      </View>
    );
  }
}

// Styles
const headerStyle = {
  mainStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  firstRowStyle: {
    // Total players + slider
    flex: 0.25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: 'grey',
  },
  secondRowStyle: {
    // Combo picker
    flex: 0.25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  thirdRowStyle: {
    // Starting checkbox
    flex: 0.25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  fourthRowStyle: {
    // Action Buttons
    flex: 0.25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
};

// Make Component available to other parts of the app
export default SetupView;
