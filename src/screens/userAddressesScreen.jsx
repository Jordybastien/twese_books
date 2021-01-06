import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Alert,
} from 'react-native';
import {
  lightOrange,
  fifthColor,
  lowGray,
  white,
  green,
  red,
  gray,
} from '../utils/colors';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import {
  handleDeleteAddress,
  handlePrimaryAddress,
} from '../actions/userAddresses';
import Toast from 'react-native-toast-message';

const { width, height } = Dimensions.get('window');

const UserAddressesScreen = (props) => {
  const [userAddresses, setUserAddress] = useState(props.userAddresses);
  const { newCountries } = props;

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      setUserAddress(props.userAddresses);
    });

    return () => {
      unsubscribe;
    };
  }, [props]);

  const handleAddressDelete = (address) => {
    Alert.alert(
      'Delete Address',
      'Do you wish to delete this address?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            props
              .dispatch(
                handleDeleteAddress(
                  address.id,
                  props.authedUser.id,
                  address.recordIndex
                )
              )
              .then((res) => {
                if (res.type !== 'LOG_ERROR') {
                  Toast.show({
                    text1: 'Success',
                    text2: 'Address Deleted',
                    type: 'success',
                  });
                  setUserAddress(
                    Object.values(userAddresses).filter(
                      (el) => el.id !== address.id
                    )
                  );
                } else
                  Toast.show({
                    text1: 'Warning',
                    text2: res.error,
                    type: 'error',
                  });
              });
          },
        },
      ],
      { cancelable: false }
    );
  };

  const handleAddressPrimary = (address) => {
    Alert.alert(
      'Make Address Primary',
      'Do you wish to make this address your primary address?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            props
              .dispatch(handlePrimaryAddress(address.id, props.authedUser.id))
              .then((res) => {
                if (res.type !== 'LOG_ERROR') {
                  Toast.show({
                    text1: 'Success',
                    text2: 'Address Deleted',
                    type: 'success',
                  });
                } else
                  Toast.show({
                    text1: 'Warning',
                    text2: res.error,
                    type: 'error',
                  });
              });
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <AntDesign name="close" size={24} color={fifthColor} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>My Addresses</Text>
        </View>
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => props.navigation.navigate('AddAddressScreen')}
        >
          <Text style={styles.addBtnLabel}>Add</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.addMainContainer}>
          {userAddresses && userAddresses.length !== 0 ? (
            userAddresses.map((address, index) => (
              <View style={styles.addressContainer} key={index}>
                <View>
                  <View>
                    <Text style={styles.addressHolderName}>
                      {address.last_name} {address.first_name}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.addressHolderadd}>
                      {address.company_name}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.addressHolderadd}>
                      {address.street_address_house_number}{' '}
                      {address.apartment_suite}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.addressHolderadd}>
                      {address.town_city}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.addressHolderadd}>
                      {newCountries[address.country_id].name}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.addressHolderadd}>
                      {address.post_code}
                    </Text>
                  </View>
                </View>
                {/* <View>
                {address.PrimaryAddress === 'null' ? (
                  <View style={styles.notPrimaryContainer}>
                    <Text style={styles.addStatusLabel}>Not Primary</Text>
                  </View>
                ) : (
                  <View style={styles.primaryContainer}>
                    <Text style={styles.addStatusLabel}>Primary</Text>
                  </View>
                )}
              </View> */}
                <View style={styles.addressBottomBar}>
                  <TouchableOpacity
                    style={styles.bottomBtn}
                    onPress={() => handleAddressPrimary(address)}
                  >
                    <Text style={styles.bottomBtnLabel}>Make Primary</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.bottomBtn}
                    onPress={() => handleAddressDelete(address)}
                  >
                    <Text>Remove</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))
          ) : (
            <View style={styles.emptyCart}>
              <View>
                <FontAwesome5 name="address-card" size={50} color={gray} />
              </View>
              <Text style={styles.emptyLabel}>Address book is empty</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = ({ userAddresses, countries, authedUser }) => {
  return {
    userAddresses:
      userAddresses &&
      Object.values(userAddresses).map((obj, index) => ({
        ...obj,
        recordIndex: index,
      })),
    newCountries:
      countries &&
      Object.values(countries).map(({ id, country_name }) => ({
        name: country_name,
        id,
      })),
    authedUser,
  };
};

export default connect(mapStateToProps)(UserAddressesScreen);

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
    alignItems: 'center',
  },
  addBtnLabel: {
    color: white,
    fontFamily: 'bold',
  },
  addBtn: {
    backgroundColor: green,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  addressContainer: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: lowGray,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    // height: 150,
    paddingBottom: 10,
    width: width - 100,
    justifyContent: 'center',
    marginBottom: 10,
  },
  addMainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
  },
  addressHolderName: {
    fontFamily: 'bold',
    fontSize: 14,
    color: fifthColor,
  },
  addressHolderadd: {
    fontFamily: 'regular',
    fontSize: 13,
    color: fifthColor,
  },
  addStatusLabel: {
    color: white,
    fontFamily: 'bold',
  },
  primaryContainer: {
    backgroundColor: fifthColor,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    width: 120,
    marginTop: 10,
  },
  notPrimaryContainer: {
    backgroundColor: red,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    width: 120,
    marginTop: 10,
  },
  addressBottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  bottomBtn: {
    backgroundColor: lowGray,
    borderColor: gray,
    borderWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
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
