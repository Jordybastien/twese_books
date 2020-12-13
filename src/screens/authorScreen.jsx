import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  fifthColor,
  bgColor,
  firstColor,
  white,
  lowGray,
  gray,
  lightOrange,
} from '../utils/colors';
import { connect } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import GestureRecognizer from 'react-native-swipe-gestures';
import SingleBook from '../components/homeComponents/weekDeals/singleBook';
import { UserProfile } from '../utils/constants';

const { width, height } = Dimensions.get('window');

class AuthorScreen extends Component {
  state = {
    count: 1,
  };
  render() {
    const { count } = this.state;
    const { author } = this.props;

    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80,
    };

    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* <GestureRecognizer
            onSwipeLeft={() => this.setState({ count: 2 })}
            onSwipeRight={() => this.setState({ count: 1 })}
            config={config}
            style={styles.upperPart}
          > */}
          <View style={styles.upperPart}>
            {/* {count === 1 && ( */}
            {/* <> */}
            <View style={styles.imageContainer}>
              <Image
                source={{
                  uri: `${UserProfile}${author[0][0].image_name}`,
                }}
                style={styles.userImage}
              />
            </View>
            <View style={styles.authorContainer}>
              <Text style={styles.authorName}>{author[0][0].author_name}</Text>
            </View>
            {/* </> */}
            {/* )} */}
            {/* {count === 2 && ( */}
            <View style={styles.authorBioContainer}>
              <Text style={styles.authorBio}>
                {author[0][0].author_description}
              </Text>
            </View>
            {/* )} */}
            {/* <View style={styles.dotsContainer}>
              {count === 1 && (
                <>
                  <TouchableOpacity
                    style={[styles.dot, styles.fullOpacity]}
                    onPress={() => this.setState({ count: 1 })}
                  />
                  <TouchableOpacity
                    style={[styles.dot, styles.halfOpacity]}
                    onPress={() => this.setState({ count: 2 })}
                  />
                </>
              )}
              {count === 2 && (
                <>
                  <TouchableOpacity
                    style={[styles.dot, styles.halfOpacity]}
                    onPress={() => this.setState({ count: 1 })}
                  />
                  <TouchableOpacity
                    style={[styles.dot, styles.fullOpacity]}
                    onPress={() => this.setState({ count: 2 })}
                  />
                </>
              )}
            </View> */}
          </View>
          {/* </GestureRecognizer> */}
          <View style={styles.backBtnContainer}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <AntDesign name="close" size={24} color={fifthColor} />
            </TouchableOpacity>
          </View>
          <View style={styles.lowerPart}>
            {author[1].map((book) => (
              <SingleBook props={this.props} book={book} />
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = ({ author }) => {
  return {
    author: author && Object.values(author),
  };
};

export default connect(mapStateToProps)(AuthorScreen);

const styles = StyleSheet.create({
  container: { flex: 1 },
  upperPart: {
    backgroundColor: fifthColor,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 50,
  },
  lowerPart: {
    backgroundColor: bgColor,
    paddingTop: 20,
  },
  userImage: {
    width: 150,
    height: 150,
    borderRadius: 50,
    borderColor: firstColor,
    borderWidth: 2,
  },
  authorContainer: {
    marginTop: 20,
    marginBottom: 15,
  },
  authorName: {
    fontFamily: 'bold',
    color: white,
    fontSize: 22,
  },
  backBtnContainer: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: lightOrange,
    width: 40,
    height: 40,
    left: 0,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 50,
    top: 0,
  },
  dotsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    top: 300,
  },
  dot: {
    backgroundColor: white,
    borderRadius: 50,
    width: 10,
    height: 10,
    marginLeft: 5,
    opacity: 0.3,
  },
  halfOpacity: {
    opacity: 0.3,
  },
  fullOpacity: {
    opacity: 1,
  },
  authorBioContainer: {
    width: width - 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  authorBio: {
    fontFamily: 'italic',
    color: white,
    fontSize: 15,
    textAlign: 'center',
  },
});
