import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import {
  fifthColor,
  bgColor,
  white,
  lowGray,
  lightOrange,
} from '../utils/colors';
import TextBox from '../components/textBox';
import Button from '../components/button';

const { width, height } = Dimensions.get('window');

class SignupScreen extends Component {
  render() {
    return (
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
          />
          <TextBox
            name="lastName"
            label="Last Name"
            passProtected={false}
            multiline={false}
          />
          <TextBox
            name="email"
            label="Email"
            passProtected={false}
            multiline={false}
          />
          <TextBox
            name="password"
            label="Password"
            passProtected={true}
            multiline={false}
          />
          <TextBox
            name="confirmPassword"
            label="Confirm Password"
            passProtected={true}
            multiline={false}
          />
          <Button
            label="Signup"
            toExecuteOnClick={() =>
              this.props.navigation.navigate('HomeScreen')
            }
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
    );
  }
}

export default connect()(SignupScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 50,
    backgroundColor: lightOrange,
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
});
