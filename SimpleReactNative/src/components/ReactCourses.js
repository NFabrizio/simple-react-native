import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class ReactCourses extends React.Component {
  static navigationOptions = {
    title: 'React Courses'
  };

  render () {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Welcome to React Courses</Text>
        <Button
          onPress={() => navigate('NativeCourses')}
          title='React Native Courses'
          style={styles.button}
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
  },
  button: {
    width: 100
  }
});
