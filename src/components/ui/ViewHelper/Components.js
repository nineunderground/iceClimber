/**
 * @Author: Iñaki Rodriguez <nineunderground>
 * @Date:   15-Jun-2017
 * @Email:  nineunderground@gmail.com
 * @Project: Ice Climber
 * @Filename: Components.js
 * @Last modified by:   inaki
 * @Last modified time: 18-Jun-2017
 */
import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Cell } from 'react-native-tableview-simple';

const tileSiluetteImg = require('../../../res/crown.png');

// Floor
// ********************************************************
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
// ********************************************************
export class DialogCharacterRow extends Component {
  constructor(props) {
   super(props);
   //debugger;
   this.characterLeft = props.charLeft;
   this.characterCenter = props.charCenter;
   this.characterRight = props.charRight;
    this.state = {
      isThreeImages: props.isThree,
      mainJustify: props.mainJustify,
      imageLeftSelected: false,
      imageCenterSelected: false,
      imageRightSelected: false,
      gameView: props.gameView,
    };
  }

  setImageSelected(playerSelected, intialSel) {
    //debugger;
    const newState = this.state;
    if (intialSel === 'L') {
      newState.imageLeftSelected = !playerSelected.isSelected;
    } else if (intialSel === 'C') {
      newState.imageCenterSelected = !playerSelected.isSelected;
    } else if (intialSel === 'R') {
      newState.imageRightSelected = !playerSelected.isSelected;
    }
    playerSelected.isSelected = !playerSelected.isSelected;
    //ge_character_selected = playerSelected
    this.setState(newState);
  }
  characterLeft = null;
  characterCenter = null;
  characterRight = null;

// ge_character_selected
// eslint-disable-line global-require
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: this.state.mainJustify, alignItems: 'center' }}>
        <TouchableOpacity onPress={() => { this.setImageSelected(this.characterLeft, 'L'); }}>
          <Image
            source={this.characterLeft.img}
            resizeMode={'contain'}
            style={this.state.imageLeftSelected ? characterImgSelectedStyle : characterImgNotSelectedStyle}
          / >
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.setImageSelected(this.characterCenter, 'C'); }}>
        <Image
          source={this.characterCenter.img}
          resizeMode={'contain'}
          style={this.state.imageCenterSelected ? characterImgSelectedStyle : characterImgNotSelectedStyle}
        / >
        </TouchableOpacity>
        {this.state.isThreeImages &&
          <TouchableOpacity onPress={() => { this.setImageSelected(this.characterRight, 'R'); }}>
          <Image
            source={this.characterRight.img}
            resizeMode={'contain'}
            style={this.state.imageRightSelected ? characterImgSelectedStyle : characterImgNotSelectedStyle}
          / >
          </TouchableOpacity>
        }
      </View>
    );
  }
}

// eslint-enable-line global-require
//
// PlayerCell
// ********************************************************
export class PlayerCell extends Component {

  constructor(props) {
    super(props);
    this.playerName = props.player.name;
    this.playerScore = props.player.score_1;
  }
  playerName= {};
  playerScore= {};

  render() {
    return (
      <Cell
        //{...props}
        cellContentView={
          <View
            style={{ alignItems: 'center', flexDirection: 'row', flex: 1, paddingVertical: 10 }}
          >
            <Text
              allowFontScaling
              numberOfLines={1}
              style={{ flex: 1, fontSize: 20 }}
            >
              {this.playerName}
            </Text>

            <Text
              allowFontScaling
              numberOfLines={1}
              style={{ flex: 1, fontSize: 20 }}
            >
              Score {this.playerScore}
            </Text>
          </View>
        }
      />
    );
  }
}

// ********************************************************
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
