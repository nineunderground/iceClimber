/**
 * @Author: Iñaki Rodriguez <nineunderground>
 * @Date:   15-Jun-2017
 * @Email:  nineunderground@gmail.com
 * @Project: Ice Climber
 * @Filename: Components.js
 * @Last modified by:   inaki
 * @Last modified time: 17-Jun-2017
 */
import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Cell } from 'react-native-tableview-simple';

const tileSiluetteImg = require('../../../res/crown.png');

// Floor
export class Floor extends Component {
   constructor(props) {
     super(props);
     this.state = {
       styleToSet: props.floorStyle,
       totalIcons: props.totalPos,
       styleToImg: props.imageStyle,
     };
   }

   render() {
     if (this.state.totalIcons === '1') {
       return (
           <View style={this.state.styleToSet}>
             <Image
               source={tileSiluetteImg}
               resizeMode={'contain'}
               style={this.state.styleToImg}
             / >
           </View>
       );
     } else if (this.state.totalIcons === '4') {
       return (
         <View style={this.state.styleToSet}>
           <Image
             source={tileSiluetteImg}
             resizeMode={'contain'}
             style={this.state.styleToImg}
           / >
           <Image
             source={tileSiluetteImg}
             resizeMode={'contain'}
             style={this.state.styleToImg}
           / >
           <Image
             source={tileSiluetteImg}
             resizeMode={'contain'}
             style={this.state.styleToImg}
           / >
           <Image
             source={tileSiluetteImg}
             resizeMode={'contain'}
             style={this.state.styleToImg}
           / >
       </View>
       );
     }
       return (
         <View />
       );
   }
}

// DialogCharacterRow
export class DialogCharacterRow extends Component {
  constructor(props) {
   super(props);
    this.state = {
      imgALocation: props.imgA,
      imgBLocation: props.imgB,
      imgCLocation: props.imgC,
      mainJustify: props.mainJustify,
      imageASelected: false,
      imageBSelected: false,
      imageCSelected: false,
      gameView: props.gameView,
    };
  }

  setImageASelected(val) {
    const newState = this.state;
    newState.imageASelected = val;
    // TODO Check what to set
    // newState.isFirstFloorEnabled = val;
    // newState.isSecondFloorEnabled = val;
    // newState.isThirdFloorEnabled = val;
    // newState.isFourthFloorEnabled = val;
    // newState.isFifthFloorEnabled = val;
    // newState.isThroneFloorEnabled = val;
    // newState.imageBSelected = !val;
    // newState.imageCSelected = !val;
    this.setState(newState);
    this.state.gameView.enableButtons(val);
  }

  setImageBSelected(val) {
    const newState = this.state;
    newState.imageBSelected = val;
    // newState.imageASelected = !val;
    // newState.imageCSelected = val;
    this.setState(newState);
    this.state.gameView.enableButtons(val);
  }

  setImageCSelected(val) {
    const newState = this.state;
    newState.imageCSelected = val;
    // newState.imageASelected = !val;
    // newState.imageBSelected = !val;
    this.setState(newState);
    this.state.gameView.enableButtons(val);
  }

// eslint-disable-line global-require
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: this.state.mainJustify, alignItems: 'center' }}>
        <TouchableOpacity onPress={() => { this.setImageASelected(!this.state.imageASelected); }}>
          <Image
            source={this.state.imgALocation}
            resizeMode={'contain'}
            style={this.state.imageASelected ? characterImgSelectedStyle : characterImgNotSelectedStyle}
          / >
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.setImageBSelected(!this.state.imageBSelected); }}>
        <Image
          source={this.state.imgBLocation}
          resizeMode={'contain'}
          style={this.state.imageBSelected ? characterImgSelectedStyle : characterImgNotSelectedStyle}
        / >
        </TouchableOpacity>
        {this.state.imgCLocation !== 'undefined' ? (
          <TouchableOpacity onPress={() => { this.setImageCSelected(!this.state.imageCSelected); }}>
          <Image
          source={this.state.imgCLocation}
          resizeMode={'contain'}
          style={this.state.imageCSelected ? characterImgSelectedStyle : characterImgNotSelectedStyle}
          / >
          </TouchableOpacity>
        ) : (
          <div style={{ flex: 0 }} />
        )}
      </View>
    );
  }
}

// eslint-enable-line global-require
//
// PlayerCell
export const PlayerCell = (props) => (
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
