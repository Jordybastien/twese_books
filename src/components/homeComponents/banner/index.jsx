import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {
  bgColor,
  fifthColor,
  white,
  lightBlue,
  lightOrange,
} from '../../../utils/colors';
import * as Progress from 'react-native-progress';
import Button from '../../../components/button';

const { width, height } = Dimensions.get('window');

const BannerComponent = ({ props }) => {
  return (
    <View style={styles.container}>
      <View style={styles.bookDetailsContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.bookTitle}>Featured book of February</Text>
        </View>

        <TouchableOpacity
          style={styles.buttonHolder}
          onPress={() => props.navigation.navigate('SingleBookScreen')}
        >
          <View style={styles.buttonContainer}>
            <Text style={styles.btnLabel}>See more</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.imgContainer}>
        <Image
          source={require('../../../../assets/book.jpg')}
          style={styles.bookImg}
        />
      </View>
    </View>
  );
};

export default BannerComponent;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 30,
    backgroundColor: lightOrange,
  },
  bookImg: {
    width: width / 3 - 10,
    height: height / 3.5,
    resizeMode: 'contain',
    overflow: 'hidden',
  },
  imgContainer: {},
  bookDetailsContainer: {
    justifyContent: 'center',
    marginRight: 10,
  },
  bookTitle: {
    fontFamily: 'bold',
    color: fifthColor,
    fontSize: 20,
    width: 200,
  },
  bookAuthor: {
    fontFamily: 'regular',
  },
  progressContainer: {
    marginTop: 20,
    marginBottom: 20,
  },

  buttonHolder: {
    backgroundColor: fifthColor,
    // width: width / 3,
    height: 50,
    borderRadius: 15,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnLabel: {
    color: white,
    fontFamily: 'regular',
    fontSize: 15,
  },
  titleContainer: {
    marginBottom: 30,
  },
});
