import React, { Component } from 'react';
import { Text, View, ScrollView, Image, TextInput, Alert } from 'react-native';
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from '../styles';
import logo from '../assets/images/2Xlogo.png';

class SettingsScreen extends Component {
  constructor() {
    super();
    this.state = {
      until: '',
    };

  }

  static navigationOptions = {
    header: null,
  };

  render() {

    return (
      <View style={styles.settingsContainer}>
        <View style={{ flex: 1 }}>
          <Image source={logo} style={[styles.animatedLogo]} resizeMode="contain" />
        </View>

        <View style={{ flex: 2, backgroundColor: "#F7F6EB", width: "95%", alignSelf: "center" }}>
          <ScrollView>
            <View style={styles.settingsList}>
              <View style={styles.settingsListItem}>
                <View>
                  <Text style={styles.settingsListItemTitle}>Address</Text>
                  <TextInput
                    onChangeText={(fooText) => {
                      this.setState({ text: fooText });
                    }}
                  />
                </View>

                <Text style={styles.settingsListItemAttribute} accessible={true} accessibilityRole="text">Home</Text>
                <Text style={styles.settingsListItemAttribute} accessible={true} accessibilityRole="text">Favorites</Text>
              </View>


              <View style={styles.settingsListItem}>
                <Text style={styles.settingsListItemTitle} accessible={true} accessibilityRole="text">Alerts</Text>
                <Text style={styles.settingsListItemAttribute} accessible={true} accessibilityRole="text">Default timer length</Text>
              </View>

              <View style={styles.settingsListItem}>
                <Text style={styles.settingsListItemTitle} accessible={true} accessibilityRole="text">Geolocation</Text>
                <Text style={styles.settingsListItemAttribute} accessible={true} accessibilityRole="text">Capture interval</Text>
              </View>

              <View style={styles.settingsListItem}>
                <Text style={styles.settingsListItemTitle} accessible={true} accessibilityRole="text">Account</Text>
                <Text style={styles.settingsListItemAttribute} accessible={true} accessibilityRole="text">Log out</Text>
              </View>

            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
export default SettingsScreen;
