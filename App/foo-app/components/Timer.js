/*  
 * docs: https://github.com/talalmajali/react-native-countdown-component
 */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles';
import CountDown from 'react-native-countdown-component';
import Communication from 'react-native-communications';
import Geocode from 'react-geocode';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalDuration: '',
            location: {
                longitude: null,
                latitude: null,
            },
            address: '',
        };
    }

    timerBegin = () =>{
        
    }

    findCoordinates = () => {
        navigator.geolocation.getCurrentPosition(
        position => {
            const location = JSON.stringify(position);

            this.setState({ location: { longitude: position.coords.longitude, latitude: position.coords.latitude} });
        },
        error => Alert.alert(error.message),
    );
        
  };
    
    
    async sendNotification () {
      
      this.findCoordinates();

      while(this.state.location.latitude === null || this.state.location.longitude === null){
          let promise = new Promise((resolve, reject) => {
                setTimeout(() => resolve(true), 10) // resolve
          });
          var info = await promise;
      }

      Alert.alert('Location sent.  \nLatitude: ' + this.address + '\nLongitude: ' + this.state.location.longitude, ' ', [{text: 'OK', onPress: this.setState({text: 'SOS'})}]);
        
      Communication.text('9038028765', 'EMERGENCY! Please send help.\nLatitude: ' + this.state.location.latitude + '\nLongitude: ' + this.state.location.longitude);
    }

    render() {
        // console.log(this.state.totalDuration)
        return (
            <View style={styles.timerContainer}>
                <CountDown
                    until={45}
                    size={20}
                    onFinish={() => this.sendNotification()}
                    onPress={() => alert('hello')}
                    digitStyle={{ backgroundColor: 'clear' }}
                    digitTxtStyle={{ color: 'black' }}
                    separatorStyle={{ color: 'black' }}
                    showSeparator={true}
                    timeToShow={['H', 'M', 'S']}
                  //  timeLabels={{ h: 'HH', m: 'MM', s: 'SS' }}
                //  if we dont want labels
                    timeLabels={{h: null, m: null, s: null}} 
                />
            </View>
        );
    }
}
export default Timer;