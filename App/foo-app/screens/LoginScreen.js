import * as React from 'react';
import { Text, Alert, View, TextInput, Image, Animated, Keyboard, KeyboardAvoidingView, TouchableOpacity, Button } from 'react-native';
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from '../styles';
import logo from '../assets/images/2Xlogo.png';

class LoginScreen extends React.Component{

  constructor(props) {
    super(props);
    
    this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
    this.keyboardHeight = new Animated.Value(0);
  }

  // Remove white space at top of screen
  static navigationOptions = {
    header: null,
  }

  loginAction = () =>{
    Alert.alert("You've logged in! Kind of");
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
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.settingsContainer}>
      <View style={{flex: 1}}>
              <KeyboardAvoidingView
                    style={styles.settingsContainer}
                    behavior="padding"
                    >
                
                    <Animated.Image source={logo} style={styles.animatedLogo} />
                    
                    <TextInput
                        accessible={true}
                        placeholder="Username"
                        style={styles.input}
                        placeholderTextColor="#3a3a3a"
                    />
                    <TextInput
                        accessible={true}
                        placeholder="Password"
                        secureTextEntry={true}
                        style={styles.input}
                        placeholderTextColor="#3a3a3a"
                    />
                </KeyboardAvoidingView>
              <TouchableOpacity onPress={this.loginAction}  accessible={true} accessibilityRole="button" accessibilityLabel="click to log in" accessibilityHint="logs in and navigates to home page">
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