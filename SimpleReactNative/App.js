import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import ReactCourses from './src/components/ReactCourses';
import NativeCourses from './src/components/NativeCourses';

const Courses = TabNavigator({
  ReactCourses: {screen: ReactCourses},
  NativeCourses: {screen: NativeCourses}
}, {
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: '#80cbc4',
    swipeEnabled: true,
    style: {
      backgroundColor: '#25a69a'
    }
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Courses />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
      fontSize: 18,
      fontWeight: 'bold'
  }
});
