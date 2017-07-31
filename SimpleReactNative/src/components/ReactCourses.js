import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ListView,
  Image
} from 'react-native';
import data from '../data/courses.json';

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});
const dataSource = ds.cloneWithRows(data);

export default class ReactCourses extends React.Component {
  static navigationOptions = {
    title: 'React Courses'
  };

  render () {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Button
          onPress={() => navigate('NativeCourses')}
          title='React Native Courses'
          style={styles.button}
        />
        <ListView
          dataSource={dataSource}
          renderRow={(rowData) => {
            return (
              <View style={styles.course}>
                <Text style={styles.courseTitle}>{rowData.title}</Text>
                <Text>{rowData.description}</Text>
                <Text>{rowData.views}</Text>
                <Text>{rowData.link}</Text>
                <Image
                  source={{uri: rowData.image}}
                  style={styles.image}
                  />
              </View>
            );
          }}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 10
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  course: {
    paddingTop: 10,
    paddingBottom: 10
  },
  courseTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingBottom: 5
  },
  button: {
    width: 100
  },
  image: {
    width: 400,
    height: 200,
    marginTop: 5
  }
});
