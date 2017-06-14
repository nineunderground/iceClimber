/**
 * @Author: Iñaki Rodriguez <nineunderground>
 * @Date:   15-Jun-2017
 * @Email:  nineunderground@gmail.com
 * @Project: Ice Climber
 * @Filename: Floor.js
 * @Last modified by:   nineunderground
 * @Last modified time: 15-Jun-2017
 */
 import React, { Component } from 'react';
 import { View,
   Image } from 'react-native';

const tileSiluetteImg = require('../../../res/crown.png');

 export default class Floor extends Component {

   constructor(props) {
     super(props);
     this.state = {
       styleToSet: props.floorStyle,
       totalIcons: props.totalPos,
     };
   }

   render() {
     if (this.state.totalIcons === '1') {
       return (
           <View style={this.state.styleToSet}>
             <Image
               source={tileSiluetteImg}
               resizeMode={'contain'}
               style={globalStyle.shieldImg}
             / >
           </View>
       );
     } else if (this.state.totalIcons === '4') {
       return (
         <View style={this.state.styleToSet}>
           <Image
             source={tileSiluetteImg}
             resizeMode={'contain'}
             style={globalStyle.shieldImg}
           / >
           <Image
             source={tileSiluetteImg}
             resizeMode={'contain'}
             style={globalStyle.shieldImg}
           / >
           <Image
             source={tileSiluetteImg}
             resizeMode={'contain'}
             style={globalStyle.shieldImg}
           / >
           <Image
             source={tileSiluetteImg}
             resizeMode={'contain'}
             style={globalStyle.shieldImg}
           / >
       </View>
       );
     }
       return (
         <View />
       );
   }
 }
