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
import { getTheme } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/MaterialIcons';
import data from '../data/courses.json';

const theme = getTheme();
const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});
const dataSource = ds.cloneWithRows(data);

export default class NativeCourses extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'React Native Courses',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name={'settings-cell'}
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
        <Text style={styles.header}>React Native Courses</Text>
        <ListView
          dataSource={dataSource}
          renderRow={(rowData) => {
            return (
              <View style={[theme.cardStyle, styles.card]}>
                <Image
                  source={{uri: rowData.image}}
                  style={theme.cardImageStyle}
                  />
                <Text style={[theme.cardTitleStyle, styles.title]}>{rowData.title}</Text>
                <Text style={theme.cardContentStyle}>{rowData.description}</Text>
                <Text style={[theme.cardActionStyle, styles.action]}
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
    marginTop: 10
  },
  icon: {
    width: 26,
    height: 26
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
    left: 0,
    fontSize: 15,
    backgroundColor: 'rgba(245, 252, 255, 0.60)'
  },
  action: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#f5fcff'
  }
});
