// i stole this from https://medium.freecodecamp.org/how-to-make-your-react-native-app-respond-gracefully-when-the-keyboard-pops-up-7442c1535580
import React, { Component } from 'react';
import { View, TextInput, Image, Animated, Keyboard, KeyboardAvoidingView } from 'react-native';
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from '../styles';
import logo from '../assets/images/translogo.gif';

class RegistrationScreen extends Component {
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
      <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      >
      <Animated.Image source={logo} style={[styles.logo, { height: this.imageHeight }]} />
      <TextInput
      placeholder="Email"
      style={styles.input}
      />
      <TextInput
      placeholder="Username"
      style={styles.input}
      />
      <TextInput
      placeholder="Password"
      style={styles.input}
      />
      <TextInput
      placeholder="Confirm Password"
      style={styles.input}
      />
      </KeyboardAvoidingView>
    );
  }
};

export default RegistrationScreen;
