/*  
 * docs: https://github.com/talalmajali/react-native-countdown-component
 */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles';
import CountDown from 'react-native-countdown-component';

class Timer extends Component {
    constructor() {
        super();
        this.state = {
            totalDuration: '',
        };
    }

    render() {
        // console.log(this.state.totalDuration)
        return (
            <View style={styles.timerContainer}>
                <CountDown
                    until={60 * 10 + 30}
                    size={20}
                    onFinish={() => alert('Finished')}
                    onPress={() => alert('hello')}
                    digitStyle={{ backgroundColor: '#FCF2E5' }}
                    digitTxtStyle={{ color: 'black' }}
                    timeToShow={['H', 'M', 'S']}
                    timeLabels={{ h: 'HH', m: 'MM', s: 'SS' }}
                // if we dont want labels
                // timeLabels={{h: null, m: null, s: null}} 
                />
            </View>
        );
    }
}
export default Timer;