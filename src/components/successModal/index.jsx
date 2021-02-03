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
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Button from '../button';
import { BookCover } from '../../utils/constants';

const { width, height } = Dimensions.get('window');

const AddToCartComponent = ({ isVisible, hideModal, props }) => {
  const handleGoToHome = () => {
    hideModal();
    props.navigation.reset({
      index: 1,
      routes: [
        { name: 'HomeScreen', index: 0 },
        { name: 'OrdersScreen', index: 1 },
      ],
    });
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
              <View>
                <Text style={styles.headerTitle}>Payment Successful</Text>
              </View>
            </View>
            <TouchableOpacity onPress={hideModal}>
              <AntDesign name="close" size={24} color={fifthColor} />
            </TouchableOpacity>
          </View>
          <View style={styles.body}>
            <View style={styles.checkContainer}>
              <Ionicons
                name="ios-checkmark-circle-outline"
                size={width / 5}
                color={fifthColor}
              />
            </View>
            <View style={styles.thankYouContainer}>
              <Text style={styles.thankYouLabel}>Thank you for Purchasing</Text>
            </View>
          </View>
          <View style={styles.footer}>
            <Button label="Continue" toExecuteOnClick={handleGoToHome} />
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
    height: height / 2,
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
    fontSize: 17,
  },
  bookInfoHolder: {
    justifyContent: 'flex-start',
  },
  price: {
    fontFamily: 'bold',
    color: fifthColor,
    fontSize: 18,
  },
  bookPriceHolder: {
    // justifyContent: 'flex-end',
    flex: 1,
    paddingRight: 20,
    marginBottom: 20,
  },
  thankYouContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thankYouLabel: {
    fontFamily: 'bold',
    color: fifthColor,
    fontSize: 15,
  },
  checkContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
