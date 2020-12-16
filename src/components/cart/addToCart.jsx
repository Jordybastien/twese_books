import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';
import {
  white,
  lowGray,
  fifthColor,
  firstColor,
  gray,
} from '../../utils/colors';
import { AntDesign } from '@expo/vector-icons';
import Button from '../button';
import { BookCover } from '../../utils/constants';

const { width, height } = Dimensions.get('window');

const AddToCartComponent = ({ isVisible, hideModal, props }) => {
  const handleGoToCart = () => {
    hideModal();
    props.navigation.navigate('CartScreen');
  };
  const { bookInfo } = props;
  return (
    <View style={styles.container}>
      <Modal
        isVisible={isVisible}
        onBackButtonPress={hideModal}
        onBackdropPress={hideModal}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <View style={{ marginRight: 5 }}>
                <AntDesign name="checkcircleo" size={24} color={fifthColor} />
              </View>
              <View>
                <Text style={styles.headerTitle}>Added to Cart</Text>
              </View>
            </View>
            <TouchableOpacity onPress={hideModal}>
              <AntDesign name="close" size={24} color={fifthColor} />
            </TouchableOpacity>
          </View>
          <View style={styles.body}>
            <View style={styles.imageHolder}>
              <Image
                source={{
                  uri: `${BookCover}${bookInfo[0].book_image_name}`,
                }}
                style={styles.bookImage}
              />
            </View>
            <View style={styles.bookInfoHolder}>
              <View>
                <Text style={styles.bookTitle}>{bookInfo[0].book_name}</Text>
              </View>
              <View style={styles.authorContainer}>
                <Text style={styles.authorLabel}>By Author</Text>
                <Text style={styles.authorValue}>{bookInfo[0].name}</Text>
              </View>
            </View>
            <View style={styles.bookPriceHolder}>
              <Text style={styles.price}>$ {bookInfo[0].book_price}</Text>
            </View>
          </View>
          <View style={styles.footer}>
            <Button label="Go to Cart" toExecuteOnClick={handleGoToCart} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddToCartComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContent: {
    backgroundColor: white,
    borderColor: lowGray,
    width,
    padding: 20,
    height: height / 2.5,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  modal: {
    width,
    justifyContent: 'flex-end',
    margin: 0,
  },
  header: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
  },
  body: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 30,
    paddingRight: 30,
  },
  footer: {
    flex: 1,
  },
  headerTitle: {
    fontFamily: 'bold',
    color: fifthColor,
    fontSize: 18,
  },
  bookImage: {
    width: 50,
    height: 75,
  },
  authorLabel: {
    color: gray,
    fontFamily: 'regular',
  },
  authorValue: {
    color: gray,
    fontFamily: 'bold',
  },
  authorContainer: {
    flexDirection: 'row',
  },
  imageHolder: {
    marginRight: 10,
  },
  bookTitle: {
    fontFamily: 'bold',
    color: fifthColor,
    fontSize: 20,
  },
  bookInfoHolder: {
    justifyContent: 'flex-start',
  },
  price: {
    fontFamily: 'bold',
    color: fifthColor,
    fontSize: 25,
  },
  bookPriceHolder: {
    justifyContent: 'flex-end',
  },
});
