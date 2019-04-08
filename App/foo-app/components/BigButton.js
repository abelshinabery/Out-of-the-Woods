import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert} from 'react-native';


class BigButton extends Component {
    
    constructor () {
        super();
        this.state = {
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
            
            <TouchableOpacity onPress={this.onPress} style={{ flex:-1,flexDirection:'row',height:200,width:200,borderRadius:100,backgroundColor:'lightblue', justifyContent:'center',alignSelf:'center' }}>
            
                <Text style={{ alignSelf:'center', }}>{this.state.text}</Text>
                
            </TouchableOpacity>
            
        );
    }
}

export default BigButton;