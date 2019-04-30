import * as React from 'react';
import { Text, Alert, View, TextInput, Image, Animated, Keyboard, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from '../styles';
import logo from '../assets/images/2Xlogo.png';

class LogoutScreen extends React.Component {
    // Remove white space at top of screen
    static navigationOptions = {
        header: null,
  };

  constructor () {
    super();
  }
  logoutAction = () =>{
    Alert.alert("You've logged out! Kind of");
    this.props.navigation.navigate('Login');
  }
  render(){
    return(
      <View style = {styles.container}>
        <TouchableOpacity onPress={this.logoutAction}>
          <View style={styles.formButton}>
            <Text style={styles.formButtonText}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    );//end return
  }
}

export default LogoutScreen;