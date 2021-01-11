import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
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
    if (this.state.selAdd) return this.props.navigation.navigate('CartScreen');
    return Toast.show({
      text1: 'Warning',
      text2: 'Please Select Shipping Address',
      type: 'error',
    });
  };

  render() {
    const { userAddresses, newCountries } = this.props;
    const { selAdd } = this.state;

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
                  this.props.navigation.navigate('AddAddressScreen')
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
              toExecuteOnClick={this.handleOrder}
              presetStyle={{ marginTop: 10 }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

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
