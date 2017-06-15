/**
 * @Author: Iñaki Rodriguez <nineunderground>
 * @Date:   15-Jun-2017
 * @Email:  nineunderground@gmail.com
 * @Project: Ice Climber
 * @Filename: Components.js
 * @Last modified by:   inaki
 * @Last modified time: 15-Jun-2017
 */
import React, { Component } from 'react';
import { View, Image } from 'react-native';

const tileSiluetteImg = require('../../../res/crown.png');


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
