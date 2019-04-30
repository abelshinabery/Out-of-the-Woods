import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  AppRegistry, // For button, not sure if necessary
} from 'react-native';

import BigButton from '../components/BigButton';
import Timer from '../components/Timer';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import logo from '../assets/images/2Xlogo.png';
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from '../styles';


export default class HomeScreen extends React.Component {

  // Remove white space at top of screen
  static navigationOptions = {
    header: null,
  };

  render(){
    return(

      // Call SosButton class to display
        <View style={styles.settingsContainer}>
          <View style={styles.logoHomeScreen}>
            <Image source={logo} style={[styles.animatedLogo]} resizeMode="contain" />
          </View>
          <View style={styles.settingsContainer}>
            <View style ={styles.timerHeading}>
              <Text>TIMER</Text>
            </View>
            <Timer />
            <View style={styles.timerButtonContainer}>
                <TouchableOpacity style={styles.timerButtonOnPress}>
                  <View style={styles.timerButtons}><Text>START</Text></View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.timerButtonOnPress}>
                <View style={styles.timerButtons}><Text>STOP</Text></View>
                </TouchableOpacity>
            </View>
          </View>
          <BigButton />
        </View>
    );
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/development-mode'
    );
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
} //end HomeScreen class

//AppRegistry.registerComponent('App', () => HomeScreen)
