import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import {
  fifthColor,
  bgColor,
  white,
  lowGray,
  lightOrange,
  txtBoxText,
} from '../utils/colors';
import TextBox from '../components/textBox';
import Button from '../components/button';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { genders } from '../utils/constants';
import Toast from 'react-native-toast-message';
import { handleNewUser } from '../actions/authedUser';

const { width, height } = Dimensions.get('window');

class SignupScreen extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    gender: '',
    age: '',
    loading: false,
    selCountry: '',
    selGender: '',
    selectedCountryName: '',
    password: '',
    confirmPassword: '',
    errors: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      gender: '',
      age: '',
      selCountry: '',
      password: '',
      confirmPassword: '',
    },
    selectedCountries: [],
    selectedGender: [],
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

  handleSignupUser = () => {
    const { response, data } = this.validateData();
    if (response) {
      this.setState({ loading: true });
      this.props.dispatch(handleNewUser(data)).then((res) => {
        this.setState({ loading: false });
        if (res.type !== 'LOG_ERROR') {
          Toast.show({
            text1: 'Success',
            text2: 'Account created successfully',
            type: 'success',
          });
          setTimeout(() => {
            this.props.navigation.navigate('LoginScreen');
          }, 700);
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
      phoneNumber,
      age,
      selectedCountries,
      selectedGender,
      password,
      confirmPassword,
    } = this.state;

    let response = true;
    let errorMessage = '';

    if (!confirmPassword) {
      response = false;
      errorMessage = 'Please Confirm password';
    } else if (password !== confirmPassword) {
      response = false;
      errorMessage = 'Password mismatch';
    }

    if (!password) {
      response = false;
      errorMessage = 'Password is required';
    } else if (password.length < 6) {
      response = false;
      errorMessage = 'Password can not be less than 6 digits';
    }

    if (!email) {
      response = false;
      errorMessage = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      response = false;
      errorMessage = 'Email is invalid';
    }

    if (selectedGender.length === 0) {
      response = false;
      errorMessage = 'Please select Gender';
    }

    if (selectedCountries.length === 0) {
      response = false;
      errorMessage = 'Please select country';
    }

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

    if (!lastName) {
      response = false;
      errorMessage = 'Last Name is required';
    }

    if (!firstName) {
      response = false;
      errorMessage = 'First Name is required';
    }

    let data = {};

    data.email = email;
    data.phone_number = phoneNumber;
    data.first_name = firstName;
    data.last_name = lastName;
    data.age = age;
    data.country_id = selectedCountries[0];
    data.gender = selectedGender[0];
    data.password = password;

    errorMessage &&
      Toast.show({
        text1: 'Warning',
        text2: errorMessage,
        type: 'error',
      });
    return { response, data };
  };

  render() {
    const { newCountries } = this.props;

    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      gender,
      age,
      loading,
      selCountry,
      selGender,
      selectedCountryName,
      selectedCountries,
      selectedGender,
      password,
      confirmPassword,
    } = this.state;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollviewContainer}
      >
        <View style={styles.container}>
          <View>
            <Image
              source={require('../../assets/icons/black.png')}
              style={styles.logo}
            />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Signup</Text>
          </View>
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
            <TextBox
              name="email"
              label="Email"
              passProtected={false}
              multiline={false}
              value={email}
              onChangeText={(email) => this.setState({ email })}
            />
            <TextBox
              name="password"
              label="Password"
              passProtected={true}
              multiline={false}
              value={password}
              onChangeText={(password) => this.setState({ password })}
            />
            <TextBox
              name="confirmPassword"
              label="Confirm Password"
              passProtected={true}
              multiline={false}
              value={confirmPassword}
              onChangeText={(confirmPassword) =>
                this.setState({ confirmPassword })
              }
            />
            <Button
              label="Signup"
              toExecuteOnClick={this.handleSignupUser}
              presetStyle={{ marginTop: 50 }}
            />
          </View>
          <View style={styles.loginContainer}>
            <View style={styles.orContainer}>
              <View style={styles.lineThrough} />
              <View style={styles.orCont}>
                <Text style={styles.orTxt}>OR</Text>
              </View>
              <View style={styles.lineThrough} />
            </View>
            <View style={styles.catchPhraseContainer}>
              <Text style={styles.catchPhrase}>Already have an account?</Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('LoginScreen')}
              >
                <Text style={[styles.catchPhrase, styles.toBlue]}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
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

export default connect(mapStateToProps)(SignupScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: lightOrange,
    paddingBottom: 100,
  },
  scrollviewContainer: {
    backgroundColor: lightOrange,
    paddingTop: 50,
    paddingBottom: 50,
  },
  titleContainer: {},
  title: {
    fontFamily: 'bold',
    color: fifthColor,
    fontSize: 30,
  },
  formContainer: {
    flex: 1,
  },
  loginContainer: {
    // flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  catchPhrase: {
    fontFamily: 'regular',
  },
  catchPhraseContainer: {
    flexDirection: 'row',
  },
  toBlue: {
    color: fifthColor,
    fontFamily: 'bold',
  },
  orContainer: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
  },
  orTxt: {
    fontFamily: 'regular',
    alignSelf: 'center',
    color: fifthColor,
  },
  lineThrough: {
    backgroundColor: lowGray,
    height: 1,
    width: width / 2 - 70,
    marginTop: 10,
  },
  orCont: {
    backgroundColor: lightOrange,
    marginRight: 10,
    marginLeft: 10,
  },
  logo: {
    marginBottom: 20,
    width: 100,
    height: 100,
    marginTop: 20,
  },
  selectBox: {
    width: width - 100,
    borderBottomColor: lowGray,
    borderBottomWidth: 1,
    fontFamily: 'regular',
  },
});
