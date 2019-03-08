
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createRootNavigator} from './router'

export default createRootNavigator();


// import { StyleSheet, Text, View, Button } from 'react-native';

// export default class App extends React {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style = {styles.welcome}>Helloooo world!</Text>
//         <Button title = "click me"
//                 color = "cornflowerblue"
//                 onPress={this.pressed} />
//       </View>
//     );
//   }
// }
//
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
