import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import GenreScreen from './src/genres/GenreScreen';

const RootStack = createStackNavigator({
  Genres:{
    screen: GenreScreen
  }
})

export default class App extends React.Component{
  render() {
    return <RootStack/>;
  }
}