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
          <Text style={styles.bookTitleTopQuote}>Twese Editors'</Text>
          <Text style={styles.bookTitleTop}>Advertise On</Text>
          <Text style={styles.bookTitle}>Twese</Text>
        </View>

        {/* <TouchableOpacity style={styles.buttonHolder}>
          <View style={styles.buttonContainer}>
            <Text style={styles.btnLabel}>See more</Text>
          </View>
        </TouchableOpacity> */}
      </View>
      <View style={styles.imgContainer}>
        <Image
          source={require('../../../../assets/ad.png')}
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
    justifyContent: 'flex-start',
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
    justifyContent: 'flex-start',
    marginRight: 10,
  },
  bookTitle: {
    fontFamily: 'bold',
    color: fifthColor,
    fontSize: 30,
    width: 200,
  },
  bookTitleTop: {
    fontFamily: 'regular',
    color: fifthColor,
    fontSize: 20,
    width: 200,
  },
  bookTitleTopQuote: {
    fontFamily: 'regular',
    color: fifthColor,
    fontSize: 15,
    width: 200,
    marginBottom: 15,
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
    // marginBottom: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
