import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking,
  ListView,
  Image,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import data from '../data/courses.json';

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});
const toDelete = new Set(['native']);
const newData = data.filter(obj => !toDelete.has(obj.category));
const dataSource = ds.cloneWithRows(newData);

export default class ReactCourses extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'React Courses',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name={'home'}
        size={26}
        style={{ color: tintColor }}
        />
    )
  };

  handleClick = (link) => {
    Linking.canOpenURL(link)
      .then(supported => {
        if (supported) {
          Linking.openURL(link);
        } else {
          console.log(`Don't know how to open URL ${link}`);
        }
      })
  }

  render () {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.header}>React Courses</Text>
        <ListView
          dataSource={dataSource}
          renderRow={(rowData) => {
            return (
              <View style={styles.card}>
                <Image
                  source={{uri: rowData.image}}
                  style={styles.cardImage}
                  />
                <Text style={styles.title}>{rowData.title}</Text>
                <Text style={styles.cardContent}>{rowData.description}</Text>
                <Text style={styles.action}
                  onPress={() => {
                    this.handleClick(rowData.link)
                  }}
                >Tap to course</Text>
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
    flexWrap: 'wrap',
    backgroundColor: '#F5FCFF',
    paddingTop: 10
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    margin: 10,
  },
  card: {
    marginTop: 10,
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 2,
    borderColor: '#ffffff',
    borderWidth: 1,
    shadowColor: 'rgba(0, 0, 0, 0.12)',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 2,
    }
  },
  icon: {
    width: 26,
    height: 26
  },
  cardImage: {
    height: 170,
    resizeMode: 'cover'
  },
  list: {
    paddingLeft: 5,
    paddingRight: 5
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 318,
    top: 120,
    left: 0,
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: 'rgba(245, 252, 255, 0.60)',
    position: 'absolute',
    padding: 16,
    color: '#000000'
  },
  cardContent:{
    padding:0,
    color: 'rgba(0, 0, 0, 0.54)'
  },
  action: {
    borderTopWidth: 1,
    padding: 15,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#f5fcff'
  }
});
