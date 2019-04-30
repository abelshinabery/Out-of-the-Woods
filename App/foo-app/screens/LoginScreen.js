import * as React from 'react';
import { Text, Alert, View, TextInput, Image, Animated, Keyboard, KeyboardAvoidingView, TouchableOpacity, Button } from 'react-native';
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from '../styles';
import logo from '../assets/images/2Xlogo.png';

class LoginScreen extends React.Component {

// Remove white space at top of screen
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    
    this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
  }
  loginAction = () =>{
    Alert.alert("You've logged in! Kind of");
    this.props.navigation.navigate('Home');
   // accessibilityHint = "You are now logged in" ;
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
      <div>
        <View style={styles.settingsContainer} >
            <View style={{flex: 1}}>
                <KeyboardAvoidingView
                    style={styles.settingsContainer}
                    behavior="padding"
                >
                    <Animated.Image source={logo} style={[styles.animatedLogo, { height: this.imageHeight }]} />
                    
                    <TextInput
                        placeholder="Username"
                        style={styles.input}
                        placeholderTextColor="#3a3a3a"
                        accessible={true}
                    />
                    <TextInput
                        placeholder="Password"
                        secureTextEntry={true}
                        style={styles.input}
                        placeholderTextColor="#3a3a3a"
                        accessible={true}
                    />
                </KeyboardAvoidingView>
              </View>
            <View style={styles.formContainer} >
              <TouchableOpacity onPress={this.loginAction}>
                <View style={styles.formButton} accessible={true} accessibilityRole="button">
                  <Text style={styles.formButtonText}>Login</Text>
                </View>
              </TouchableOpacity>
            </View>
        </View>
        </div>
    );
  }
}

export default LoginScreen;
