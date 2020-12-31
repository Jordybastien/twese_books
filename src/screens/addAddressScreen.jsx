import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { lightOrange, fifthColor, lowGray, txtBoxText } from '../utils/colors';
import { AntDesign } from '@expo/vector-icons';
import { Spinner } from 'native-base';
import TextBox from '../components/textBox';
import Button from '../components/button';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { handleNewAddress } from '../actions/userAddresses';
import Toast from 'react-native-toast-message';

const { width, height } = Dimensions.get('window');

class AddAddressScreen extends Component {
  state = {
    loading: false,
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    streetAddress: '',
    townCity: '',
    postCode: '',
    phoneNumber: '',
    selCountry: '',
    selectedCountries: [],
    errors: {
      firstName: '',
      lastName: '',
      email: '',
      companyName: '',
      streetAddress: '',
      townCity: '',
      postCode: '',
      phoneNumber: '',
      selCountry: '',
    },
  };

  handleCountry = (country) => {
    this.setState({
      selectedCountries: country,
      selCountry: country[0],
    });
  };

  handleAddAddress = () => {
    const { response, data } = this.validateData();
    if (response) {
      this.setState({ loading: true });
      this.props.dispatch(handleNewAddress(data)).then((res) => {
        this.setState({ loading: false });
        if (res.type !== 'LOG_ERROR') {
          Toast.show({
            text1: 'Success',
            text2: 'Address Added',
            type: 'success',
          });
          setTimeout(() => {
            this.props.navigation.navigate('UserAddressesScreen');
          }, 500);
        } else
          Toast.show({
            text1: 'Warning',
            text2: res.error,
            type: 'error',
          });
      });
    }
  };

  validateData = () => {
    const {
      firstName,
      lastName,
      email,
      companyName,
      streetAddress,
      townCity,
      postCode,
      phoneNumber,
      selCountry,
      selectedCountries,
    } = this.state;

    let response = true;
    let errorMessage = '';

    // validate
    if (!postCode) {
      response = false;
      errorMessage = 'Post Code is required';
    }

    if (!streetAddress) {
      response = false;
      errorMessage = 'Street Address is required';
    }
    if (!townCity) {
      response = false;
      errorMessage = 'Town/City is required';
    }
    if (!selCountry) {
      response = false;
      errorMessage = 'Country is required';
    }
    if (!companyName) {
      response = false;
      errorMessage = 'Company Name is required';
    }
    if (!phoneNumber) {
      response = false;
      errorMessage = 'Phone Number is required';
    } else if (phoneNumber.length < 10 || phoneNumber.length > 10) {
      response = false;
      errorMessage = 'Phone Number can not be less than or more than 10 digits';
    }
    if (!email) {
      response = false;
      errorMessage = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      response = false;
      errorMessage = 'Email is invalid';
    }

    if (!lastName) {
      response = false;
      errorMessage = 'Last Name is required';
    }

    if (!firstName) {
      response = false;
      errorMessage = 'First Name is required';
    }
    // validating ends here

    let data = {};

    data.user_id = this.props.authedUser.id;
    data.first_name = firstName;
    data.last_name = lastName;
    data.email = email;
    data.phone_number = phoneNumber;
    data.company_name = companyName;
    data.country_id = selectedCountries[0];
    data.street_address_house_number = streetAddress;
    data.town_city = townCity;
    data.post_code = postCode;

    errorMessage &&
      Toast.show({
        text1: 'Warning',
        text2: errorMessage,
        type: 'error',
      });
    return { response, data };
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      companyName,
      streetAddress,
      townCity,
      postCode,
      phoneNumber,
      selCountry,
      selectedCountries,
      errors,
      loading,
    } = this.state;

    const { newCountries } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <AntDesign name="close" size={24} color={fifthColor} />
            </TouchableOpacity>
          </View>
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>Add Address</Text>
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollviewContainer}
        >
          <View style={styles.formContainer}>
            <TextBox
              name="firstName"
              label="First Name"
              passProtected={false}
              multiline={false}
              value={firstName}
              onChangeText={(firstName) => this.setState({ firstName })}
            />
            <TextBox
              name="lastName"
              label="Last Name"
              passProtected={false}
              multiline={false}
              value={lastName}
              onChangeText={(lastName) => this.setState({ lastName })}
            />
            <TextBox
              name="email"
              label="Email"
              passProtected={false}
              multiline={false}
              value={email}
              onChangeText={(email) => this.setState({ email })}
            />
            <TextBox
              name="phoneNumber"
              label="Phone Number"
              passProtected={false}
              multiline={false}
              value={phoneNumber}
              maxLength={10}
              onChangeText={(phoneNumber) =>
                !isNaN(phoneNumber) && this.setState({ phoneNumber })
              }
            />
            <TextBox
              name="companyName"
              label="Company Name"
              passProtected={false}
              multiline={false}
              value={companyName}
              onChangeText={(companyName) => this.setState({ companyName })}
            />
            <View style={styles.selectBox}>
              <SectionedMultiSelect
                items={newCountries}
                uniqueKey="id"
                selectText="Select Country"
                showDropDowns={true}
                readOnlyHeadings={false}
                onSelectedItemsChange={this.handleCountry}
                selectedItems={selectedCountries}
                single={true}
                hideConfirm={false}
                modalWithSafeAreaView={true}
                itemFontFamily="regular"
                showCancelButton={true}
                colors={{
                  selectToggleTextColor: txtBoxText,
                  text: fifthColor,
                }}
              />
            </View>
            <TextBox
              name="townCity"
              label="Town/City"
              passProtected={false}
              multiline={false}
              value={townCity}
              onChangeText={(townCity) => this.setState({ townCity })}
            />
            <TextBox
              name="streetAddress"
              label="Street Address"
              passProtected={false}
              multiline={false}
              value={streetAddress}
              onChangeText={(streetAddress) => this.setState({ streetAddress })}
            />
            <TextBox
              name="postCode"
              label="Post Code"
              passProtected={false}
              multiline={false}
              value={postCode}
              onChangeText={(postCode) =>
                !isNaN(postCode) && this.setState({ postCode })
              }
            />
            <Button
              label="Add Address"
              loading={loading}
              toExecuteOnClick={this.handleAddAddress}
              presetStyle={{ marginTop: 50 }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = ({ userOrders, countries, authedUser }) => {
  return {
    userOrders: userOrders && Object.values(userOrders),
    newCountries:
      countries &&
      Object.values(countries).map(({ id, country_name }) => ({
        name: country_name,
        id,
      })),
    authedUser,
  };
};

export default connect(mapStateToProps)(AddAddressScreen);

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
  scrollviewContainer: {
    padding: 20,
  },
  formContainer: {
    alignItems: 'center',
  },
  selectBox: {
    width: width - 100,
    borderBottomColor: lowGray,
    borderBottomWidth: 1,
    fontFamily: 'regular',
  },
});
