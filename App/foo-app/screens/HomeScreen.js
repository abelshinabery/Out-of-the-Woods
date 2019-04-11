import React from 'react';
import {
  Image,
  Platform,
  ScrollView,

  View,
  AppRegistry, // For button, not sure if necessary
} from 'react-native';

import BigButton from '../components/BigButton';


// import  '../components/StyledText';
import logo from '../assets/images/translogo.gif';
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from '../styles';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render(){
    return(
      // Call SosButton class to display
        <View style={styles.settingsContainer}>
        <View style={styles.logo}>
            <Image source={logo} style={{flex:1, height: 150, width: 150 }} resizeMode="contain" />
        </View>
        <BigButton />
        </View>
    );
  }

  // _handleLearnMorePress = () => {
  //   WebBrowser.openBrowserAsync(
  //     'https://docs.expo.io/versions/latest/guides/development-mode'
  //   );
  // };

  // _handleHelpPress = () => {
  //   WebBrowser.openBrowserAsync(
  //     'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
  //   );
  // };
} //end HomeScreen class

//AppRegistry.registerComponent('App', () => HomeScreen)
