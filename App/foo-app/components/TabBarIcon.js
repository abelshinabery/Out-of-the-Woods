import React from 'react';
import { Icon } from 'expo';

import Colors from '../constants/Colors';

import { Platform } from 'react-native';

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Icon.Ionicons
  //      name={this.props.name}
        name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
        accessible={true}
        accessibilityRole="imagebutton"
        size={26}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}