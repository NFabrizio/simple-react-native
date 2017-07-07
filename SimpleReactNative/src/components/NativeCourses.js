import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class NativeCourses extends React.Component {
  static navigationOptions = {
    title: 'React Native Courses'
  };

  render () {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Welcome to React Native Courses</Text>
        <Button
          onPress={() => navigate('ReactCourses')}
          title='React Courses'
        />
      </View>
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
