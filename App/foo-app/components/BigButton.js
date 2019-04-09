import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert} from 'react-native';
import styles, { sosText, IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from '../styles';
// import '../assets/fonts'; 
// import { din } from './StyledText'; 
<Text style={{ fontFamily: 'noto-serif' }}>SOS</Text>


class BigButton extends Component {
    constructor () {
        super();
        this.state = {
            sosText:'SoooS',
            text: 'SOS'
        }
    }
    
     
    onPress = () => {
        if(this.state.text === 'SOS'){
            this.setState({text:'Tap once more to send notification'});
        }
        else if(this.state.text === 'Tap once more to send notification'){
            this.setState({text: 'Sending notification... '});
            this.sendNotification();
        }
    }
    
    sendNotification () {
      this.setState({text: 'Contacts notified'});
      Alert.alert('Location sent', ' ', [{text: 'OK', onPress: this.setState({text: 'SOS'})}]);
    }
    
    render() {
        return ( 
            <View style={styles.sosContainer}>
                <TouchableOpacity onPress={this.onPress} style={styles.circle} >
                    <Text style={ styles.sosText}>{this.state.text}</Text>
                </TouchableOpacity>
            </View>
            
        );
    }
}

export default BigButton;