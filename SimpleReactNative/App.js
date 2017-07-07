import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import ReactCourses from './src/components/ReactCourses';
import NativeCourses from './src/components/NativeCourses';

const Courses = StackNavigator({
  ReactCourses: {screen: ReactCourses},
  NativeCourses: {screen: NativeCourses}
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
