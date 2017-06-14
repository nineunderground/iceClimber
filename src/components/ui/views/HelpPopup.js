/**
 * @Author: Iñaki Rodriguez <nineunderground>
 * @Date:   11-Jun-2017
 * @Email:  nineunderground@gmail.com
 * @Project: Ice Climber
 * @Filename: HelpPopup.js
 * @Last modified by:   nineunderground
 * @Last modified time: 14-Jun-2017
 */
import React, { Component } from 'react';
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  ScrollView,
  Alert } from 'react-native';

class HelpPopUp extends Component {

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={{ marginTop: 22 }}>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => { Alert.alert('Modal has been closed.'); }}
        >
          <View style={{ flex: 0.90, marginTop: 22 }}>
            <ScrollView style={{ flex: 1 }}>
              <Text style={{ fontSize: 14 }}>{helpContent}</Text>
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
                onPress={() => { this.setModalVisible(!this.state.modalVisible); }}
              >
                <Text style={{ fontSize: 22 }}>CLOSE</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        {/* Show credits button */}
        <TouchableHighlight onPress={() => { this.setModalVisible(true); }} >
          <Text style={{ backgroundColor: '#848a93', color: 'white', fontSize: 18, marginTop: -25, borderWidth: 1, borderColor: 'black' }} >HELP</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
// style={{ borderWidth: 1, borderColor: 'black' }}
// style={{ fontSize: 18, marginTop: -25 }}

// Help file
const helpContent =
'\n- SETUP \n' +
'---------\n' +
'1) Each player chooses a color, and takes the “Yes” vote card and scoring marker of that color. Place the scoring marker on the space marked “0” of the scoring track.\n' +
'\n' +
'2) Shuffle the secret goals , and deal 1 face down to each player. The goal card lists the 6 favorite characters of the player. The order of the characters has no importance.\n' +
'\n' +
'3) Deal each player the same number of “No vote” cards, as follows:\n' +
'• 3 players = 4 no vote cards\n' +
'• 4 players = 3 no vote cards\n' +
'• 5 players = 2 no vote cards\n' +
'• 6 players = 2 no vote cards\n' +
'The number of “no vote” cards is kept secret during the game\n' +
'\n' +
'- HOW TO PLAY\n' +
'---------\n' +
'1) Choose a starting player randomly, the game is played in clockwise order, over 3 rounds.\n' +
'\n' +
'2) Each round is divided into 2 phases: a) Placing characters in the castle, and b) Accession to the throne.\n' +
'\n' +
'3) Placing characters in the castle: starting with the 1st player & proceeding clockwise, each player takes 1 character and places it in the castle, until each player has placed the same # of characters. (with 3, 4, & 6 players, 1 is left over and with 5 players, 3 are left over). The player may place the character on any floor of the castle marked 1, 2, 3 or 4). There can never be more than 4 characters on the same floor. The left over characters start from floor “0”.\n' +
'\n' +
'4A) Accession to the throne: starting with the 1st player & proceeding clockwise, each player chooses a character in the castle, & moves it up one floor. If the next floor already has 4 characters on it, the that character cannot be moved that turn. Characters never move down.\n' +
'If the character is moved up from floor #5, he reaches the throne, and is nominated as the new King! The players must immediately vote on that character. Otherwise the turn is over, and the game continues with the next player.\n' +
'\n' +
'4B) The Election of the King: When the character is moved up to the throne space, the players will vote whether or not that character should be crowned the new king. The player who nominated the character takes the crown token and places it in front of her. Each player now must choose whether to support (“Yes” vote) the nominee or not (“No vote). Each player chooses a vote card secretly and places it face down in front of her. When all the players have chosen, the cards are revealed at the same time.\n' +
'• If all the votes are Yes, the kingdom has a new King and the round is over;\n' +
'• If there is at least one “No” vote, the character is not elected – this character is\n' +
'eliminated from the round (remove from the castle). “No vote” cards are then discarded, “Yes vote” cards are returned to the player. Discarded cards cannot be counted or examined during the game. Remember the number of cards in a players hand is secret! The game continues normally with the player to the left of the one with the crown.\n' +
'\n' +
'5) End of the Round & Scoring. The round end as soon as the King is crowned. All players now revealed their secret goals. Each player gains points based on the position of his favorite characters in the castle, and moves his scoring marker the appropriate number of spaces:\n' +
'• 10 points for the King, 5 points for each level 5, 4 points for each level 4, etc....\n' +
'• Eliminated characters score “0”.\n' +
'• Special 3rd round only scoring – If a player scores exactly zero, she gets 33 points\n' +
'instead, the highest possible score in a single round!\n' +
'\n' +
'6) New round: Each player discards his goal card, and draws a new one. Each player takes all his vote cards back (including any “no vote” cards. Place all 13 characters next to the board. The starting player is the one sitting to the left of the one with the crown.\n' +
'\n' +
'- GAME END\n' +
'---------\n' +
'The player with the highest total wins. In case of a tie, the winner is the player with the most favorite characters still in the castle at the end of the 3rd round.\n\n';

export default HelpPopUp;
