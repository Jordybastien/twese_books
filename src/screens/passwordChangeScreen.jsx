import React, { Component } from 'react';
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
import Toast from 'react-native-toast-message';
import { connect } from 'react-redux';
import TextBox from '../components/textBox';
import Button from '../components/button';
import { handlePasswordReset } from '../actions/authedUser';

const { width, height } = Dimensions.get('window');

class PasswordChangeScreen extends Component {
  state = {
    loading: false,
    currentPass: '',
    newPass: '',
    confirmPassword: '',
    errors: {
      currentPass: '',
      newPass: '',
      confirmPassword: '',
    },
  };

  handleChangeUserPass = () => {
    const { response, data } = this.validateData();
    if (response) {
      this.setState({ loading: true });
      this.props.dispatch(handlePasswordReset(data)).then((res) => {
        this.setState({ loading: false });
        if (res.type !== 'LOG_ERROR') {
          Toast.show({
            text1: 'Success',
            text2: 'Password Reset Successfully',
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
    const { currentPass, newPass, confirmPassword } = this.state;

    let response = true;
    let errorMessage = '';

    if (!confirmPassword) {
      response = false;
      errorMessage = 'Please Confirm password';
    } else if (newPass !== confirmPassword) {
      response = false;
      errorMessage = 'Password mismatch';
    }

    if (!newPass) {
      response = false;
      errorMessage = 'New Password is required';
    } else if (newPass.length < 6) {
      response = false;
      errorMessage = 'New Password can not be less than 6 digits';
    }

    if (!currentPass) {
      response = false;
      errorMessage = 'Current Password is required';
    }

    let data = {};

    data.currentPass = currentPass;
    data.newPass = newPass;
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
    const { loading, currentPass, newPass, confirmPassword } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <AntDesign name="close" size={24} color={fifthColor} />
            </TouchableOpacity>
          </View>
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>Change Password</Text>
          </View>
        </View>
        <View style={styles.formContainer}>
          <TextBox
            name="currentPass"
            label="Current Password"
            passProtected={true}
            multiline={false}
            value={currentPass}
            onChangeText={(currentPass) => this.setState({ currentPass })}
          />
          <TextBox
            name="newPass"
            label="New Password"
            passProtected={true}
            multiline={false}
            value={newPass}
            onChangeText={(newPass) => this.setState({ newPass })}
          />
          <TextBox
            name="confirmPassword"
            label="Confirm New Password"
            passProtected={true}
            multiline={false}
            value={confirmPassword}
            onChangeText={(confirmPassword) =>
              this.setState({ confirmPassword })
            }
          />
          <Button
            loading={loading}
            label="Signup"
            toExecuteOnClick={this.handleChangeUserPass}
            presetStyle={{ marginTop: 50 }}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(PasswordChangeScreen);

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
  formContainer: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: height / 2.5,
  },
});
