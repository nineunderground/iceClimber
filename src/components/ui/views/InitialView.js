/**
 * @Author: Iñaki Rodriguez <nineunderground>
 * @Date:   10-Jun-2017
 * @Email:  nineunderground@gmail.com
 * @Project: Ice Climber
 * @Filename: InitialView.js
 * @Last modified by:   nineunderground
 * @Last modified time: 14-Jun-2017
 */
import React, { Component } from 'react';
import {
  View,
  Alert,
  Image } from 'react-native';
import Button from 'react-native-button';
import HelpPopUp from './HelpPopup';

const imgFile = require('../../../res/NewGame.png');

// Make a Component
class InitialView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      root: props.root,
    };
  }
  onNewGame(initialClass) {
    const rootClass = initialClass.state.root;
    rootClass.setState({ currentView: 2 });
  }
  onCredits() {
    Alert.alert('Basic game clone of King\'s Up \n by Nineunderground');
  }
  render() {
    return (
      <Image
        source={imgFile}
        resizeMode={'contain'}
        style={headerStyle.mainStyle}
      >
        <View style={headerStyle.firstViewStyle}>
          <Button
            style={{ color: 'white', backgroundColor: '#848a93', borderWidth: 1, borderColor: 'black' }}
            onPress={() => this.onNewGame(this)}
          >NEW GAME</Button>
        </View>
        <View style={headerStyle.secondViewStyle}>
          <HelpPopUp />
          <Button
            style={{ color: 'white', backgroundColor: '#848a93', borderWidth: 1, borderColor: 'black' }}
            onPress={() => this.onCredits()}
          >CREDITS</Button>
        </View>
      </Image>
    );
  }
}

// Creating Styles
const headerStyle = {
  mainStyle: {
    flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'flex-start',
    width: null,
    height: null,
  },
  firstViewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingBottom: 40,
    flex: 6,

  },
  secondViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fc6e51',
    flex: 1,
  },
  buttonStyle: {
    color: 'black'
  },
};

// const onCallingAPI = (url) => {
//   fetch(url)
//     .then((httpResponse) => {
//       const blobContent = readBlob.text(httpResponse._bodyBlob);
//       console.log(blobContent);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
//   };

// Make Component available to other parts of the app
export default InitialView;
