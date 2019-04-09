import React, { Component } from 'react';
import { Text, View, ScrollView, Image, Button} from 'react-native';
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from '../styles';
import logo from '../assets/images/translogo.gif';
import TimerScreen from './TimerScreen';
class SettingsScreen extends Component {
// i think this works
  constructor(props) {
    super(props) 
    this.state = {
      startPressed:false
    }
  }
  handleOnPress = () => {
    this.setState(prevState => {
      return {startPressed: !prevState.startPressed}
    })
    console.log("handleOnPressed called")
  }

  render() {
    console.log(this.state.startPressed);

    if(this.state.startPressed) {
      return <CounterScreen/>
    }
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
      return (
        <View style={styles.settingsContainer}>
          
          <View style={{flex: 1}}>
            <Image source={logo} style={{flex:1, height: undefined, width: undefined }} resizeMode="contain" />
          </View>
          
          <View style={{flex: 3, backgroundColor:"#AECFC4", width: "95%", alignSelf: "center"}}>
            <ScrollView>
          
                    <View style={styles.settingsList}>
          
                        <View style={styles.settingsListItem}>
                            <Text style={styles.settingsListItemTitle}>Address</Text>
                            <Text style={styles.settingsListItemAttribute}>Home</Text>
                            <Text style={styles.settingsListItemAttribute}>Favorites</Text>
                        </View>
        
                        
                        <View style={styles.settingsListItem}>
                            <Text style={styles.settingsListItemTitle}>Alerts</Text>
                            <Text style={styles.settingsListItemTitle} ><TimerScreen> Timer </TimerScreen></Text>
                            <Text style={styles.settingsListItemAttribute}>Default timer length</Text>
                            <Button title="Timer" onPress={this.handleOnPress}></Button>

                        </View>
          
                        <View style={styles.settingsListItem}>
                            <Text style={styles.settingsListItemTitle}>Geolocation</Text>
                            <Text style={styles.settingsListItemAttribute}>Capture interval</Text>
                        </View>
                            
                        <View style={styles.settingsListItem}>
                            <Text style={styles.settingsListItemTitle}>Account</Text>
                            <Text style={styles.settingsListItemAttribute}>Log out</Text>
                        </View>
          
                    </View>
            </ScrollView>
          </View>
          
        </View>
      );
  }
}

export default SettingsScreen;


/// abels working code lol



// import React, { Component } from 'react';
// import { Text, View, ScrollView, Image } from 'react-native';
// import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from '../styles';
// import logo from '../assets/images/translogo.gif';

// class SettingsScreen extends Component {

//   render() {
//     /* Go ahead and delete ExpoConfigView and replace it with your
//      * content, we just wanted to give you a quick view of your config */
//       return (
//         <View style={styles.settingsContainer}>
          
//           <View style={{flex: 1}}>
//             <Image source={logo} style={{flex:1, height: undefined, width: undefined }} resizeMode="contain" />
//           </View>
          
//           <View style={{flex: 3, backgroundColor:"#AECFC4", width: "95%", alignSelf: "center"}}>
//             <ScrollView>
          
//                     <View style={styles.settingsList}>
          
//                         <View style={styles.settingsListItem}>
//                             <Text style={styles.settingsListItemTitle}>Address</Text>
//                             <Text style={styles.settingsListItemAttribute}>Home</Text>
//                             <Text style={styles.settingsListItemAttribute}>Favorites</Text>
//                         </View>
        
                        
//                         <View style={styles.settingsListItem}>
//                             <Text style={styles.settingsListItemTitle}>Alerts</Text>
//                             <Text style={styles.settingsListItemAttribute}>Default timer length</Text>
//                         </View>
          
//                         <View style={styles.settingsListItem}>
//                             <Text style={styles.settingsListItemTitle}>Geolocation</Text>
//                             <Text style={styles.settingsListItemAttribute}>Capture interval</Text>
//                         </View>
                            
//                         <View style={styles.settingsListItem}>
//                             <Text style={styles.settingsListItemTitle}>Account</Text>
//                             <Text style={styles.settingsListItemAttribute}>Log out</Text>
//                         </View>
          
//                     </View>
//             </ScrollView>
//           </View>
          
//         </View>
//       );
//   }
// }

// export default SettingsScreen;