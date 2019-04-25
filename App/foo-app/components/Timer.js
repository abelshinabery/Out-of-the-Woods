import React, {Component} from 'react'; 

import { View, Text, TouchableOpacity, Alert} from 'react-native';
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from '../styles';
import moment from 'moment'; 
import CountDown from 'react-native-countdown-component'; 
export default class Timer extends Component {
    constructor(props){
        super(props); 
        this.state = {
            totalDuration: '', 
        };
    }
    componentDidMount(){
        var that = this;

        //We are showing the coundown timer for a given expiry date-time
        //If you are making an quize type app then you need to make a simple timer
        //which can be done by using the simple like given below
        //that.setState({ totalDuration: 30 }); //which is 30 sec
    
        var date = moment()
          .utcOffset('+05:30')
          .format('YYYY-MM-DD hh:mm:ss');
        //Getting the current date-time with required formate and UTC   
        
        var expirydate = '2019-10-23 04:00:45';//You can set your own date-time
        //Let suppose we have to show the countdown for above date-time 
    
        var diffr = moment.duration(moment(expirydate).diff(moment(date)));
        //difference of the expiry date-time given and current date-time
    
        var hours = parseInt(diffr.asHours());
        var minutes = parseInt(diffr.minutes());
        var seconds = parseInt(diffr.seconds());
        
        var d = hours * 60 * 60 + minutes * 60 + seconds;
        //converting in seconds
    
        that.setState({ totalDuration: d });
    }

    render() {
        console.log(this.state.totalDuration)
        return ( 
            <View style={{flex: 1, justifyContent: 'center'}}>
            <CountDown
            until = {this.state.totalDuration}
            timeToShow={('M', 'S')}
            onFinish={() => alert('finished')}
            onPress={() => alert('change time?')}
            size = {20}
            />
            </View>
            
        );
    }
}
// export default Timer; 