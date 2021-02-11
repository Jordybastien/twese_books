import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
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
import { WebView } from 'react-native-webview';
import Toast from 'react-native-toast-message';
import { handleSuccessfulPayment } from '../actions/payment';
import SuccessModal from '../components/successModal';

class FlutterWaveScreen extends Component {
  state = {
    showSuccess: false,
  };

  handleSuccesfullPayment = (url) => {
    const { cartItems } = this.props.route.params;
    if (url.canGoBack) {
      const params = url.url.split('?')[1];
      const [status, txRef, transactionId] = params.split('&');
      if (status.split('=')[1] === 'successful') {
        this.props
          .dispatch(
            handleSuccessfulPayment({
              item_ids: cartItems,
              user_id: this.props.authedUser.id,
              txref: txRef.split('=')[1],
              status: status.split('=')[1],
              transaction_id: transactionId.split('=')[1],
            })
          )
          .then((res) => {
            if (res) this.setState({ showSuccess: true });
          });
      } else {
        Toast.show({
          text1: 'Warning',
          text2: 'Transaction Failed, Please Contact Us',
          type: 'error',
        });
        setTimeout(() => {
          this.props.navigation.reset({
            index: 0,
            routes: [{ name: 'HomeScreen' }],
          });
        }, 1000);
      }
    }
  };
  render() {
    const { showSuccess } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <AntDesign name="close" size={24} color={lightOrange} />
            </TouchableOpacity>
          </View>
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>Confirm Payment</Text>
          </View>
        </View>
        <WebView
          source={{ uri: this.props.paymentLink }}
          onNavigationStateChange={this.handleSuccesfullPayment}
        />
        {showSuccess && (
          <SuccessModal
            isVisible={showSuccess}
            hideModal={() => {
              this.setState({ showSuccess: false });
              this.props.navigation.reset({
                index: 1,
                routes: [
                  { name: 'HomeScreen', index: 0 },
                  { name: 'OrdersScreen', index: 1 },
                ],
              });
            }}
            props={this.props}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = ({ paymentLink, authedUser }) => {
  return { paymentLink, authedUser };
};

export default connect(mapStateToProps)(FlutterWaveScreen);

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
    backgroundColor: fifthColor,
  },
  headerTitle: {
    fontFamily: 'bold',
    color: lightOrange,
    fontSize: 18,
  },
  headerTitleContainer: {
    flex: 2,
    alignItems: 'center',
  },
});
