import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AppRegistry, // For button, not sure if necessary
} from 'react-native';

import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

// Class for SOS Button
class SosButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  onPress = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }
  
  render() {
    return (
      <View style={styles.sosContainer}>
        <TouchableOpacity style={styles.circle} onPress={this.onPress}>
          <Text> SOS </Text>
        </TouchableOpacity>
        <View style={[styles.countContainer]}>
          <Text style={[styles.countText]}>
            {this.state.count !== 0 ? this.state.count : null}
          </Text>
        </View>
      </View>
    );
  }
} // end SosButton class

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render(){
    return(
      // Call SosButton class to display
      <SosButton/>
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

// Style sheets
const styles = StyleSheet.create({
  sosContainer: {
    flex: 1, // makes the component flexible and it will be sized proportional to its flex value.
    justifyContent: 'center', //centers circle vertically
    alignItems: 'center', //centers circle horizontally
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: '#FF00FF',
  },
  circle: {
    alignItems: 'center', //align SOS text horizontallt
    justifyContent: 'center', //align SOS text vertically
    width: 200, // if adj this, need to adj height & radius with same values
    height: 200,
    borderRadius: 200 / 2,
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

//AppRegistry.registerComponent('App', () => HomeScreen)
