import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert, Button} from 'react-native';
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from '../styles';
import Communication from 'react-native-communications';

class BigButton extends Button { // changed from Component
    constructor () {
        super();
        this.state = {
            text: 'SOS',
            location: {
                longitude: null,
                latitude: null
            },
            clicked: false
        }
    }
        
     
    onPress = () => {
        
        this.setState({
         //text: 'SOS',
         clicked: true,
        // accessibilityStates = ['selected']
         })
        this.findCoordinates();
       // accessibilityStates = ['selected'] ;
        if(this.state.text === 'SOS'){
            this.setState({text:'Tap once more to send notification'});
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
    
    
    async sendNotification () {
      
      while(this.state.location.latitude === null || this.state.location.longitude === null){
          let promise = new Promise((resolve, reject) => {
                setTimeout(() => resolve(true), 100) // resolve
          });
          var info = await promise;
      }
      
      this.setState({text: 'Contacts notified'});  
      
      Alert.alert('Location sent.  \n Latitude: ' + this.state.location.latitude + ' Longitude: ' + this.state.location.longitude, ' ', [{text: 'OK', onPress: this.setState({text: 'SOS'})}]);
        
      Communication.text('9038028765', 'Latitude: ' + this.state.location.latitude + ' Longitude: ' + this.state.location.longitude);
    }

    
    
    render() {
         return ( 
            <View style={styles.sosContainer} accessible={true}>
               <TouchableOpacity accessibilityRole="imagebutton" accessibilityLabel="SOS button" accessibilityHint="Tap twice to send SOS message" onPress={this.onPress} style={this.state.clicked 
                                                        ? styles.firstClick
                                                        : styles.circle} >
                    <Text style={this.state.clicked ? styles.sosTextClick : styles.sosText}>{this.state.text}</Text>
                </TouchableOpacity>
            </View>
            
        );
    }
}

export default BigButton;
