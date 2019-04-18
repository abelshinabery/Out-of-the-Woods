// import React from "react";
// import { StyleSheet, View } from "react-native";
// import TimerCountdown from "react-native-timer-countdown";

// const App = () => (
//   <View style={styles.container}>
//     <TimerCountdown
//       initialMilliseconds={1000 * 60}
//       onTick={(milliseconds) => console.log("tick", milliseconds)}
//       onExpire={() => console.log("complete")}
//       formatMilliseconds={(milliseconds) => {
//         const remainingSec = Math.round(milliseconds / 1000);
//         const seconds = parseInt((remainingSec % 60).toString(), 10);
//         const minutes = parseInt(((remainingSec / 60) % 60).toString(), 10);
//         const hours = parseInt((remainingSec / 3600).toString(), 10);
//         const s = seconds < 10 ? '0' + seconds : seconds;
//         const m = minutes < 10 ? '0' + minutes : minutes;
//         let h = hours < 10 ? '0' + hours : hours;
//         h = h === '00' ? '' : h + ':';
//         return h + m + ':' + s;
//       }}
//       allowFontScaling={true}
//       style={{ fontSize: 20 }}
//     />
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });

// export default App;

// import React from 'react';
// import { Button, StyleSheet, Text, View } from 'react-native';

// // import TimerCountdown from 'react-native-timer-countdown';
// import TimerCountdown from 'react-native-timer-countdown';
// export default class TimerScreen extends React.Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             count: 0,
//         }
//     }
    
//     componentDidMount() {
//         this.startCounting();
//     }

//     startCounting = () => {
//         this._subscription = Pedometer.watchStepCount(result => {
//           this.setState({
//             count: result.steps
//           });
//         });
//     };

//     reset = () => {
//         this.setState({count: 0})
//     }

//   render() {
//     return (
//       <View style={styles.container}>
//         <TimerCountdown
//             initialSecondsRemaining={1000*10}
//             onTick={secondsRemaining => console.log('tick', secondsRemaining)}
//             onTimeElapsed={()=> console.log('complete')}
//             allowFontScaling={true}
//             style={{fontSize:20}}/>
//         <Text style={styles.counter}>{this.state.count}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   counter: {
//       fontSize: 200
//   }
// });



// import React, { Component } from "react";
// import { StyleSheet, Button, View } from "react-native";
// import TimerCountdown from "react-native-timer-countdown";

// const A = () => (
//   <View style={styles.container}>
//     <TimerCountdown initialMilliseconds={1000 * 60} />
//   </View>
// );
// export default A;

// class B extends Component {
//   state = { isPressed: false };
//   render() {
//     return (
//       <View styles={{ flex: 1 }}>
//         <Button
//           title={`${this.state.isPressed ? "Button Pressed" : "Button"}`}
//           onPress={() => {
//             this.setState({ isPressed: true });
//           }}
//         />
//       </View>
//     );
//   }
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center", 
//     fontSize:200
//   }
// });

import React, { Component } from 'react';
import {
  StyleSheet, View, TouchableOpacity, Text,
} from 'react-native';
import { Timer, FlipNumber } from 'react-native-flip-timer';

export default class TimerScreen extends Component {
  state = {
    play: true,
  }

  play = () => {
    this.setState(({ play }) => ({ play: !play }));
  }

  render() {
    const { play } = this.state;
    return (
      <View style={styles.container}>
        <Timer time={500} play={play} />
        <TouchableOpacity style={styles.button} onPress={this.play}>
          <Text style={styles.text}>{play ? 'Pause' : 'Play'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 40,
    backgroundColor: '#333333',
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#cccccc',
  },
});