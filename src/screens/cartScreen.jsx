import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {
  white,
  gray,
  lowGray,
  fifthColor,
  firstColor,
  bgColor,
  lightOrange,
} from '../utils/colors';
import { AntDesign } from '@expo/vector-icons';
import Button from '../components/button';
import { connect } from 'react-redux';
import { getCart, removeBookFromCart } from '../utils/storage';

const { width, height } = Dimensions.get('window');

class CartScreen extends Component {
  state = {
    cartItems: [],
  };

  componentDidMount() {
    getCart().then((cartItems) => {
      cartItems && this.setState({ cartItems });
    });
  }

  handleRemoveFromCart = (bookId) => {
    const { cartItems } = this.state;
    const newCart = cartItems.filter((item) => item.id !== bookId);
    removeBookFromCart(newCart).then((res) => {
      if (res)
        this.setState({
          cartItems: newCart,
        });
    });
  };

  render() {
    const { cartItems } = this.state;
    const totalPrice = cartItems
      ? cartItems.reduce((total, item) => total + parseInt(item.book_price), 0)
      : 0;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <AntDesign name="close" size={24} color={fifthColor} />
            </TouchableOpacity>
          </View>
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>Shopping Cart</Text>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {cartItems && cartItems.length !== 0 ? (
            cartItems.map((item) => (
              <View style={styles.body}>
                <View style={styles.imageHolder}>
                  <Image
                    source={require('../../assets/book-3.png')}
                    style={styles.bookImage}
                  />
                </View>
                <View style={styles.middleInfo}>
                  <View style={styles.bookInfoHolder}>
                    <View>
                      <Text style={styles.bookTitle}>{item.book_name}</Text>
                    </View>
                    <View style={styles.authorContainer}>
                      <Text style={styles.authorLabel}>By Author</Text>
                      <Text style={styles.authorValue}>{item.name}</Text>
                    </View>
                  </View>
                  <View style={styles.qtyPriceHolder}>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={styles.qtyLabel}>Qty</Text>
                      <Text style={styles.qtyValue}>1</Text>
                    </View>
                    <View style={styles.bookPriceHolder}>
                      <Text style={styles.price}>$ {item.book_price}</Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={styles.removeLabelContainer}
                    onPress={() => this.handleRemoveFromCart(item.id)}
                  >
                    <Text style={styles.removeLabel}>Remove</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))
          ) : (
            <View style={styles.emptyCart}>
              <View>
                <AntDesign name="shoppingcart" size={50} color={gray} />
              </View>
              <Text style={styles.emptyLabel}>Cart is empty</Text>
            </View>
          )}

          <View style={styles.footer}>
            <View
              style={[
                styles.footerElement,
                {
                  borderBottomColor: lowGray,
                  borderBottomWidth: 1,
                },
              ]}
            >
              <View>
                <Text style={styles.footerElementLabel}>
                  Items({cartItems.length})
                </Text>
              </View>
              <View>
                <Text style={styles.footerElementValue}>$ {totalPrice}</Text>
              </View>
            </View>
            <View style={[styles.footerElement, { marginBottom: 40 }]}>
              <View>
                <Text style={styles.footerElementLabel}>Subtotal</Text>
              </View>
              <View>
                <Text style={styles.footerElementValue}>$ {totalPrice}</Text>
              </View>
            </View>
            <Button
              label="Checkout"
              toExecuteOnClick={() =>
                this.props.navigation.navigate('LoginScreen')
              }
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default connect()(CartScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightOrange,
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: lowGray,
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontFamily: 'bold',
    color: fifthColor,
    fontSize: 18,
  },
  headerTitleContainer: {
    flex: 2,
    alignItems: 'center',
  },
  body: {
    padding: 20,
    borderBottomColor: lowGray,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  imageHolder: {
    marginRight: 10,
  },
  bookImage: {
    width: width / 3,
    height: width / 2,
  },
  bookInfoHolder: {
    justifyContent: 'flex-start',
  },
  bookTitle: {
    fontFamily: 'bold',
    color: fifthColor,
    fontSize: 20,
  },
  authorContainer: {
    flexDirection: 'row',
  },
  authorLabel: {
    color: gray,
    fontFamily: 'regular',
  },
  authorValue: {
    color: gray,
    fontFamily: 'bold',
  },
  qtyPriceHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    width: width / 2,
  },
  qtyLabel: {
    fontFamily: 'regular',
    color: gray,
    marginRight: 10,
    fontSize: 18,
  },
  qtyValue: {
    fontFamily: 'regular',
    color: fifthColor,
    fontSize: 18,
    borderColor: lowGray,
    borderWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  price: {
    fontFamily: 'bold',
    color: fifthColor,
    fontSize: 25,
  },
  bookPriceHolder: {},
  removeLabelContainer: {
    alignSelf: 'flex-end',
    marginTop: 15,
  },
  removeLabel: {
    fontFamily: 'regular',
    color: fifthColor,
    fontSize: 15,
  },
  middleInfo: {
    justifyContent: 'center',
  },
  footer: {
    padding: 20,
  },
  footerElement: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: 15,
  },
  footerElementLabel: {
    fontFamily: 'regular',
    fontSize: 17,
  },
  footerElementValue: {
    fontFamily: 'bold',
    fontSize: 20,
  },
  emptyCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: height / 2,
  },
  emptyLabel: {
    fontFamily: 'bold',
    fontSize: 17,
    color: gray,
  },
});
