/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Camera from 'react-native-camera'
import App from './App.js'

export default class cameraTutorial extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('cameraTutorial', () => cameraTutorial);
