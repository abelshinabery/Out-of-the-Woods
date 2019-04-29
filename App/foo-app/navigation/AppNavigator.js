// https://reactnavigation.org/docs/en/auth-flow.html 
import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { ActivityIndicator, AsyncStorage, StatusBar, View } from 'react-native';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LoginScreen from '../screens/LoginScreen';
import LogoutScreen from '../screens/LogoutScreen';

/* ------------ Home ---------------- */
const HomeStack = createStackNavigator({
  Home: HomeScreen,
});
HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

/* ------------ Logout ---------------- */
const LogoutStack = createStackNavigator({
  Logout: LogoutScreen,
});
LogoutStack.navigationOptions = {
  tabBarLabel: 'Logout',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

/* ------------ Login ---------------- */
const LoginStack = createStackNavigator({
  Login: LoginScreen,
});
LoginStack.navigationOptions = {
  tabBarLabel: 'Login',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

/* ------------ Registration ---------------- */
const RegistrationStack = createStackNavigator({
  Links: RegistrationScreen,
});
RegistrationStack.navigationOptions = {
  tabBarLabel: 'Register',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

/* ------------ Settings ---------------- */
const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});
SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

/* ---------------- AuthLoadingScreen ---------------- */
class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'SignIn' : 'SignOut');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

/* ---------------- Navigation Stuff ----------------*/
const SignedOut = createBottomTabNavigator({ Login: LoginStack, Register: RegistrationStack });
const SignedIn = createBottomTabNavigator({ Home: HomeStack, Settings: SettingsStack, Logout: LogoutStack });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    SignIn: SignedIn,
    SignOut: SignedOut, 
  },
  {
    initialRouteName: 'AuthLoading'
  }
))