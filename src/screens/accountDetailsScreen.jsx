import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import {
  bgColor,
  fifthColor,
  firstColor,
  secondColor,
  white,
  gray,
  lowGray,
  lightOrange,
  txtBoxText,
} from '../utils/colors';
import Toast from 'react-native-toast-message';
import { Spinner } from 'native-base';
import TextBox from '../components/textBox';
import Button from '../components/button';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { CheckBox } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { handleUserUpdate } from '../actions/authedUser';
import { genders } from '../utils/constants';

const { width, height } = Dimensions.get('window');

class AccountDetailsScreen extends Component {
  state = {
    name: this.props.authedUser?.name ?? '',
    email: this.props.authedUser?.email ?? '',
    phoneNumber: this.props.authedUser?.phone_number ?? '',
    gender: '',
    age: this.props.authedUser?.age ?? '',
    loading: false,
    selCountry: '',
    selGender: '',
    selectedCountryName: '',
    errors: {
      name: '',
      email: '',
      phoneNumber: '',
      gender: '',
      age: '',
      selCountry: '',
    },
    selectedCountries: [parseInt(this.props.authedUser?.country_id)],
    selectedGender: [this.props.authedUser?.gender],
  };
  handleCountry = (country) => {
    const { newCountries } = this.props;
    this.setState({
      selectedCountries: country,
      selCountry: country[0],
      selectedCountryName: newCountries[country[0] - 1].name,
    });
  };

  handleGender = (gender) => {
    this.setState({
      selectedGender: gender,
      selGender: gender[0],
    });
  };

  handleUpdateUserDetails = () => {
    const { response, data } = this.validateData();
    if (response) {
      this.setState({ loading: true });
      this.props.dispatch(handleUserUpdate(data)).then((res) => {
        this.setState({ loading: false });
        if (res.type !== 'LOG_ERROR') {
          Toast.show({
            text1: 'Success',
            text2: 'Changes Updated Successfully',
            type: 'success',
          });
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
      name,
      email,
      phoneNumber,
      age,
      selectedCountries,
      selectedGender,
    } = this.state;

    let response = true;
    let errorMessage = '';

    if (!age) {
      response = false;
      errorMessage = 'Age is required';
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

    if (!name) {
      response = false;
      errorMessage = 'Name is required';
    }

    let data = {};

    data.email = email;
    data.phone_number = phoneNumber;
    data.name = name;
    data.age = age;
    data.country_id = selectedCountries[0];
    data.gender = selectedGender[0];
    data.user_id = this.props.authedUser.id;

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
      name,
      email,
      loading,
      phoneNumber,
      age,
      selectedCountries,
      selectedGender,
    } = this.state;
    const { newCountries } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <AntDesign name="close" size={24} color={lightOrange} />
            </TouchableOpacity>
          </View>
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>Account Details</Text>
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollviewContainer}
        >
          <View style={styles.formContainer}>
            <TextBox
              name="name"
              label="Name"
              passProtected={false}
              multiline={false}
              value={name}
              onChangeText={(name) => this.setState({ name })}
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
              name="age"
              label="Age"
              passProtected={false}
              multiline={false}
              value={age}
              onChangeText={(age) => !isNaN(age) && this.setState({ age })}
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
            <View style={styles.selectBox}>
              <SectionedMultiSelect
                items={genders}
                uniqueKey="id"
                selectText="Select Gender"
                showDropDowns={true}
                readOnlyHeadings={false}
                onSelectedItemsChange={this.handleGender}
                selectedItems={selectedGender}
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
            <Button
              label="Save Changes"
              loading={loading}
              toExecuteOnClick={this.handleUpdateUserDetails}
              presetStyle={{ marginTop: 50 }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = ({ countries, authedUser }) => {
  return {
    newCountries:
      countries &&
      Object.values(countries).map(({ id, country_name }) => ({
        name: country_name,
        id,
      })),
    authedUser,
  };
};

export default connect(mapStateToProps)(AccountDetailsScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: lightOrange,
  },
  scrollviewContainer: {
    padding: 20,
  },
  titleContainer: {},
  title: {
    fontFamily: 'bold',
    color: fifthColor,
    fontSize: 20,
    textAlign: 'center',
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
  singleCheck: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    fontFamily: 'regular',
    color: gray,
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: lowGray,
    borderBottomWidth: 1,
    backgroundColor: fifthColor,
  },
  headerTitleContainer: {
    flex: 2,
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'bold',
    color: lightOrange,
    fontSize: 18,
  },
});
