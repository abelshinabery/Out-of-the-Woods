// i stole this from https://medium.freecodecamp.org/how-to-make-your-react-native-app-respond-gracefully-when-the-keyboard-pops-up-7442c1535580
import React, { Component } from 'react';
import { View, TextInput, Image, Animated, Keyboard, KeyboardAvoidingView, TouchableOpacity, Text, Alert } from 'react-native';
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from '../styles';
import logo from '../assets/images/2Xlogo.png';

class RegistrationScreen extends Component {

  // Remove white space at top of screen
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
  }
  loginAction = () =>{
    Alert.alert("Welcome!");
    this.props.navigation.navigate('Home');
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
            <View style={{flex: 1}}>
              
                <KeyboardAvoidingView
                    style={styles.settingsContainer}
                    behavior="padding"
                >
                    <Animated.Image source={logo} style={[styles.animatedLogo, { height: this.imageHeight }]} />
          
                    <TextInput
                        placeholder="Email"
                        style={styles.input}
                        placeholderTextColor="#3a3a3a"
                        accessible={true}
                        accessibilityHint = "Enter your email address"
                    />
                    <TextInput
                        placeholder="Username"
                        style={styles.input}
                        placeholderTextColor="#3a3a3a"
                        accessible={true}
                        accessibilityHint = "Create a username"
                    />
                    <TextInput
                        placeholder="Password"
                        secureTextEntry={true}
                        style={styles.input}
                        placeholderTextColor="#3a3a3a"
                        accessible={true}
                        accessibilityHint = "Enter a password"
                    />
                    <TextInput
                        placeholder="Confirm Password"
                        secureTextEntry={true}
                        style={styles.input}
                        placeholderTextColor="#3a3a3a"
                        accessible={true}
                        accessibilityHint = "Confirm your password"
                    />
                </KeyboardAvoidingView>
            </View>
            <View style={styles.formContainer}>
              <TouchableOpacity onPress={this.loginAction}>
                <View style={styles.formButton} accessible={true} accessibilityRole="button" accessibilityHint="Click to register and log in">
                  <Text style={styles.formButtonText}>Register & Login In</Text>
                </View>
              </TouchableOpacity>
            </View>
        </View>
    );
  }
}

export default RegistrationScreen;
