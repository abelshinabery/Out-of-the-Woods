import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert} from 'react-native';
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from '../styles';


class BigButton extends Component {
    constructor () {
        super();
        this.state = {
            text: 'SOS',
            location: {
                longitude: null,
                latitude: null
            }
        }
    }
    

    
     
    onPress = () => {
        if(this.state.text === 'SOS'){
            this.setState({text:'Tap once more to send notification'});
            this.findCoordinates();
        }
        else if(this.state.text === 'Tap once more to send notification'){
            this.setState({text: 'Sending notification... '});
            this.sendNotification();
        }
    }
    
    findCoordinates = () => {
        navigator.geolocation.getCurrentPosition(
        position => {
            const location = JSON.stringify(position);

            this.setState({ location: { longitude: position.coords.longitude, latitude: position.coords.latitude} });
        },
        error => Alert.alert(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

    
    
    sendNotification () {
      this.setState({text: 'Contacts notified'});
      Alert.alert('Location sent. \n Latitude: ' + this.state.location.latitude + ' Longitude: ' + this.state.location.longitude, ' ', [{text: 'OK', onPress: this.setState({text: 'SOS'})}]);
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