import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Linking,
} from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import {
  white,
  gray,
  lowGray,
  fifthColor,
  firstColor,
  bgColor,
  lightOrange,
} from '../utils/colors';
import { connect } from 'react-redux';
import Button from '../components/button';
import Toast from 'react-native-toast-message';
import { handleGetVendorDetails, handlePayment } from '../actions/payment';

const { width, height } = Dimensions.get('window');

class ShippingAddress extends Component {
  state = {
    selAdd: '',
  };
  componentDidMount() {
    const primaryAddress = this.props.userAddresses.filter(
      (address) => address.PrimaryAddress !== 'null'
    );
    primaryAddress.length !== 0 &&
      this.setState({ selAdd: primaryAddress[0].recordIndex });
  }

  handleOrder = () => {
    if (this.state.selAdd !== '') {
      const { totalPrice, cartItems } = this.props.route.params;
      const {
        authedUser,
        userAddresses,
        subAccounts: subaccounts,
      } = this.props;
      const txRef = Date.now();
      this.setState({ loading: true });
      this.props
        .dispatch(
          handleGetVendorDetails({
            user_id: authedUser.id,
            first_name: authedUser.name.split(' ')[0],
            last_name: authedUser.name.split(' ')[1],
            company_name: userAddresses[this.state.selAdd].company_name,
            country_id: userAddresses[this.state.selAdd].country_id,
            street_address_house_number:
              userAddresses[this.state.selAdd].street_address_house_number,
            town_city: userAddresses[this.state.selAdd].town_city,
            post_code: userAddresses[this.state.selAdd].post_code,
            phone_number: userAddresses[this.state.selAdd].phone_number,
            email: userAddresses[this.state.selAdd].email,
            tx_ref: txRef,
            item_ids: cartItems,
          })
        )
        .then((res) => {
          if (res.type !== 'LOG_ERROR') {
            const { vendorDetails } = this.props;
            this.props
              .dispatch(
                handlePayment(
                  {
                    tx_ref: txRef,
                    amount: vendorDetails.amount,
                    currency: vendorDetails.currency,
                    payment_options: 'card',
                    redirect_url: 'https://twese.co/',
                    customer: {
                      name: authedUser.name,
                      email: authedUser.email,
                      phonenumber: authedUser.phone_number,
                    },
                    customizations: {
                      title: 'Twese',
                      description: 'Cashing out payment',
                      logo: 'https://twese.co/assets/img/Original.png',
                    },
                    subaccounts,
                  },
                  vendorDetails.secret_key
                )
              )
              .then((resp) => {
                if (resp.type !== 'LOG_ERROR') {
                  if (this.props.paymentLink)
                    this.props.navigation.navigate('FlutterWaveScreen', {
                      cartItems,
                    });
                } else {
                  Toast.show({
                    text1: 'Warning',
                    text2: res.error,
                    type: 'error',
                  });
                }
              });
            this.setState({ loading: false });
          } else {
            Toast.show({
              text1: 'Warning',
              text2: res.error,
              type: 'error',
            });
            this.setState({ loading: false });
          }
        });
    } else
      Toast.show({
        text1: 'Warning',
        text2: 'Please Select Shipping Address',
        type: 'error',
      });
  };

  render() {
    const { userAddresses, newCountries } = this.props;
    const { selAdd, loading } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <AntDesign name="close" size={24} color={fifthColor} />
            </TouchableOpacity>
          </View>
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>Select a Shipping Address</Text>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.addMainContainer}>
            {userAddresses && userAddresses.length !== 0 ? (
              userAddresses.map((address, index) => (
                <TouchableOpacity
                  style={[
                    styles.addressContainer,
                    selAdd === index && styles.selectedAddress,
                  ]}
                  key={index}
                  onPress={() => this.setState({ selAdd: index })}
                >
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
                </TouchableOpacity>
              ))
            ) : (
              <TouchableOpacity
                style={styles.emptyCart}
                onPress={() =>
                  this.props.navigation.navigate('AddAddressScreen', {
                    address: userAddresses[selAdd] ?? {},
                  })
                }
              >
                <View>
                  <AntDesign name="addfile" size={50} color={gray} />
                </View>
                <Text style={styles.emptyLabel}>Add Address</Text>
              </TouchableOpacity>
            )}
            <Button
              label="Confirm & Pay"
              loading={loading}
              toExecuteOnClick={this.handleOrder}
              presetStyle={{ marginTop: 10 }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = ({
  userAddresses,
  countries,
  authedUser,
  vendorDetails,
  paymentLink,
}) => {
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
    vendorDetails,
    subAccounts:
      vendorDetails &&
      vendorDetails.sub_account_info &&
      vendorDetails.sub_account_info.length !== 0 &&
      vendorDetails.sub_account_info.map((subAccount) => ({
        id: subAccount.AccountId,
        transaction_charge: subAccount.transaction_charge,
        transaction_charge_type: subAccount.transaction_charge_type,
      })),
    paymentLink,
  };
};

export default connect(mapStateToProps)(ShippingAddress);

export const styles = StyleSheet.create({
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
  addMainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
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
  selectedAddress: {
    backgroundColor: '#abd1c6',
    borderWidth: 3,
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
