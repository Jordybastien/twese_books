import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { lightOrange, fifthColor, lowGray } from '../utils/colors';
import { AntDesign } from '@expo/vector-icons';
import UserOrder from '../components/userOrders';

const UserOrdersScreen = (props) => {
  const { userOrders } = props;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <AntDesign name="close" size={24} color={lightOrange} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>My Orders</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {userOrders.map((book, index) => (
          <UserOrder key={index} props={props} book={book} />
        ))}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = ({ userOrders, bookCategories }) => {
  return {
    userOrders: userOrders && Object.values(userOrders).reverse(),
    bookCategories: bookCategories && Object.values(bookCategories),
  };
};

export default connect(mapStateToProps)(UserOrdersScreen);

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
