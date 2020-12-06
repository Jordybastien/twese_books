import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {
  bgColor,
  lightOrange,
  fifthColor,
  white,
  firstColor,
  gray,
  lowGray,
  lightBlue,
} from '../utils/colors';
import { connect } from 'react-redux';
import { Entypo, Feather, AntDesign } from '@expo/vector-icons';
import StarRating from 'react-native-star-rating';
import * as Progress from 'react-native-progress';
import ReviewsTab from '../components/singleBookComponents/reviewsTab';
import ProductTab from '../components/singleBookComponents/productTab';
import DescriptionTab from '../components/singleBookComponents/descriptionTab';
import ReviewsText from '../components/singleBookComponents/reviewsText';

const { width, height } = Dimensions.get('window');

class SingleBookScreen extends Component {
  state = {
    tab: 1,
  };
  render() {
    const { tab } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.imageHolder}>
            <Image
              source={require('../../assets/book-3.png')}
              style={styles.userImage}
            />
          </View>
          <View style={styles.backBtnContainer}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <AntDesign name="close" size={24} color={fifthColor} />
            </TouchableOpacity>
          </View>
          <View style={styles.bookMark}>
            <TouchableOpacity>
              <Feather name="bookmark" size={24} color={fifthColor} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.addToCartContainer}>
            <View>
              <AntDesign name="shoppingcart" size={24} color={white} />
            </View>
            <View>
              <Text style={styles.cartLabel}>Add to Cart</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.bookDetailsContainer}>
            <View style={styles.bookTitleContainer}>
              <Text style={styles.bookTitle}>Institute</Text>
            </View>
            <View style={styles.bookPriceContainer}>
              <Text style={styles.bookPrice}>$ 29.95</Text>
            </View>
            <View style={styles.ratingsWrapper}>
              <View>
                <StarRating
                  disabled={false}
                  emptyStar={'ios-star-outline'}
                  fullStar={'ios-star'}
                  halfStar={'ios-star-half'}
                  iconSet={'Ionicons'}
                  maxStars={5}
                  rating={5}
                  fullStarColor={firstColor}
                  starSize={15}
                />
              </View>
              <View>
                <Text style={styles.reviewCount}>(3,714)</Text>
              </View>
              <TouchableOpacity
                style={styles.authorContainer}
                onPress={() => this.props.navigation.navigate('AuthorScreen')}
              >
                <Text style={styles.authorLabel}>By Author</Text>
                <Text style={styles.authorValue}>Anna Banks</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.tabHeader}>
              <TouchableOpacity
                style={[
                  styles.tabLabelHolder,
                  tab === 1 && styles.selectedtabLabelHolder,
                ]}
                onPress={() => this.setState({ tab: 1 })}
              >
                <Text
                  style={[
                    styles.tabLabel,
                    tab === 1 && styles.selectedTabLabel,
                  ]}
                >
                  Description
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.tabLabelHolder,
                  tab === 2 && styles.selectedtabLabelHolder,
                ]}
                onPress={() => this.setState({ tab: 2 })}
              >
                <Text
                  style={[
                    styles.tabLabel,
                    tab === 2 && styles.selectedTabLabel,
                  ]}
                >
                  Product Details
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.tabLabelHolder,
                  tab === 3 && styles.selectedtabLabelHolder,
                ]}
                onPress={() => this.setState({ tab: 3 })}
              >
                <Text
                  style={[
                    styles.tabLabel,
                    tab === 3 && styles.selectedTabLabel,
                  ]}
                >
                  Reviews
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.tabContentHolder}>
              {tab === 1 && <DescriptionTab />}
              {tab === 2 && <ProductTab />}
              {tab === 3 && <ReviewsTab />}
              {tab === 3 && <ReviewsText />}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default connect()(SingleBookScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightOrange,
  },
  imageHolder: {
    flex: 1,
    width: width,
    height: height / 2,
    backgroundColor: fifthColor,
  },
  userImage: {
    width: width,
    height: height / 2,
    resizeMode: 'contain',
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
  },
  bookMark: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: lightOrange,
    width: 40,
    height: 40,
    right: 0,
    marginRight: 10,
    marginTop: 10,
    borderRadius: 50,
  },
  addToCartContainer: {
    backgroundColor: fifthColor,
    width: 200,
    height: 50,
    position: 'absolute',
    marginTop: height / 2 - 25,
    alignSelf: 'center',
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 50,
    paddingLeft: 20,
  },
  cartLabel: {
    fontFamily: 'bold',
    color: white,
    fontSize: 15,
  },
  bookDetailsContainer: {
    marginTop: 40,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookTitleContainer: {
    marginBottom: 10,
  },
  bookTitle: {
    fontFamily: 'bold',
    fontSize: 30,
  },
  bookPriceContainer: {},
  bookPrice: {
    fontFamily: 'bold',
    color: fifthColor,
    fontSize: 25,
  },
  ratingsWrapper: {
    flexDirection: 'row',
    paddingLeft: 30,
    paddingRight: 30,
    width: width,
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 10,
  },
  authorContainer: {
    flexDirection: 'row',
  },
  reviewCount: {
    color: gray,
  },
  authorLabel: {
    color: gray,
    fontFamily: 'bold',
  },
  authorValue: {
    color: gray,
    fontFamily: 'regular',
  },
  tabHeader: {
    flexDirection: 'row',
    width: width,
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 20,
    borderBottomColor: lowGray,
    borderTopColor: lowGray,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 30,
    paddingBottom: 30,
  },
  tabLabel: {
    fontFamily: 'bold',
    color: gray,
    fontSize: 15,
  },
  tabLabelHolder: {
    paddingBottom: 10,
  },
  selectedtabLabelHolder: {
    borderBottomColor: fifthColor,
    borderBottomWidth: 2,
  },
  selectedTabLabel: {
    color: fifthColor,
  },
  tabContentHolder: {
    width: width,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 50,
  },
});
