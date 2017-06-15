/**
 * @Author: Iñaki Rodriguez <inaki>
 * @Date:   16-Jun-2017
 * @Email:  nineunderground@gmail.com
 * @Project: Ice Climber
 * @Filename: ScoresPopUp.js
 * @Last modified by:   inaki
 * @Last modified time: 16-Jun-2017
 */
 import React, { Component } from 'react';
 import {
   Modal,
   Text,
   TouchableHighlight,
   View,
   ScrollView,
   Alert } from 'react-native';

 export default class ScoresPopUp extends Component {

   constructor(props) {
     super(props);
     this.state = {
       gameView: props.gameView,
       modalVisible: true,
     };
   }

   setModalVisible(visible) {
     this.setState({ modalVisible: visible });
   }

   render() {
     return (
       <View style={{ marginTop: 22 }}>
         <Modal
           animationType={'fade'}
           transparent
           visible={this.state.modalVisible}
           onRequestClose={() => { Alert.alert('Modal has been closed.'); }}
         >
           <View style={{ flex: 0.90, marginTop: 22 }}>
             <ScrollView style={{ flex: 1 }}>
               <Text style={{ fontSize: 14 }}>'content'</Text>
             </ScrollView>
             <View
 style={{ flex: 0.10,
                   flexDirection: 'row',
                   justifyContent: 'center',
                   alignItems: 'center',
                   backgroundColor: 'grey' }}
             >
               {/* Close model view */}
               <TouchableHighlight
                 onPress={() => {
                   this.setModalVisible(!this.state.modalVisible);
                   const gameViewState = this.state.gameView.state;
                   gameViewState.show_scores = false;
                   this.state.gameView.setState(gameViewState);
                 }}
               >
                 <Text style={{ fontSize: 22 }}>CLOSE</Text>
               </TouchableHighlight>
             </View>
           </View>
         </Modal>
       </View>
     );
   }
 }
