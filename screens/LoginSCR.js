// loginSCR.js
// Wraps the login component

import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

import colors from '../utils/colors'

import Login from '../components/Login/Login';

export default class LoginSCR extends React.Component {
  static navigationOptions = ({ navigation: { navigate } }) => ({
    title: 'Login',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: colors.blue,
    },
  });

  render() {
    return (
      <View style={styles.container}>
          <Login navigate={this.props.navigation.navigate}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
});
