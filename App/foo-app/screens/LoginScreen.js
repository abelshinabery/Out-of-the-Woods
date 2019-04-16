/*
 Note to self: 
 Tomorrow, add some kind of functionality that when
 "onPress" it loads the SOS page after alert?
*/

import * as React from 'react';
import { Text, Alert, View, TextInput, Image, Animated, Keyboard, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from '../styles';
import logo from '../assets/images/translogo.gif';

class LoginScreen extends React.Component {
  _onPressButton() {
    Alert.alert('You logged in! Kind of')
  }

  constructor(props) {
    super(props);
    
    this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
  }
  
  componentWillMount () {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT_SMALL,
    }).start();
  };

  keyboardWillHide = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT,
    }).start();
  };

  render() {
    return (
        <View style={styles.settingsContainer}>
            <View style={{flex: 3}}>
                <KeyboardAvoidingView
                    style={styles.settingsContainer}
                    behavior="padding"
                >
                    <Animated.Image source={logo} style={[styles.animatedLogo, { height: this.imageHeight }]} />
                    
                    <TextInput
                        placeholder="     Username"
                        style={styles.input}
                        placeholderTextColor="#3a3a3a"
                    />
                    <TextInput
                        placeholder="     Password"
                        secureTextEntry={true}
                        style={styles.input}
                        placeholderTextColor="#3a3a3a"
                    />
                </KeyboardAvoidingView>
            </View>
            <View style={styles.formContainer}>
              <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.formButton}>
                  <Text style={styles.formButtonText}>Login</Text>
                </View>
              </TouchableOpacity>
            </View>
        </View>
        
    );
  }
}

export default LoginScreen;
