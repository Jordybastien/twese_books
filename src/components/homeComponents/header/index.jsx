import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {
  bgColor,
  fifthColor,
  white,
  lightOrange,
  transparentWhite,
} from '../../../utils/colors';
import { Ionicons, Octicons, AntDesign, Feather } from '@expo/vector-icons';
import { connect } from 'react-redux';

const { width, height } = Dimensions.get('window');
const HeaderComponent = ({ props }) => {
  return (
    <View style={styles.container}>
      <View style={styles.firstRow}>
        <View>
          <TouchableOpacity
            onPress={() => props.navigation.openDrawer()}
            style={styles.hamMenu}
          >
            {/* <Image
              source={require('../../../../assets/icons/ham.png')}
              style={styles.ham}
            /> */}
            <View style={styles.ham1}></View>
            <View style={styles.ham2}></View>
            <View style={styles.ham3}></View>
          </TouchableOpacity>
        </View>
        <View>
          <Image
            source={require('../../../../assets/icons/black.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.bookCartContainer}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('CartScreen')}
          >
            {/* <Image
              source={require('../../../../assets/icons/cart.png')}
              style={styles.cart}
            /> */}
            <Feather name="shopping-bag" size={24} color={fifthColor} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.secondRow}>
        <View style={styles.searchContainer}>
          <AntDesign name="search1" size={24} color={fifthColor} />
          <View>
            <TextInput
              style={styles.txtBox}
              placeholder="Search Anything"
              autoCapitalize="none"
            />
          </View>
        </View>
        <TouchableOpacity style={styles.filterContainer}>
          <Octicons name="settings" size={24} color={white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default connect()(HeaderComponent);

const styles = StyleSheet.create({
  firstRow: {
    justifyContent: 'space-between',
    width: width,
    backgroundColor: lightOrange,

    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    flexDirection: 'row',
  },
  secondRow: {
    justifyContent: 'space-between',
    width: width,
    backgroundColor: lightOrange,

    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    flexDirection: 'row',
    paddingBottom: 10,
  },
  logo: {
    width: 50,
    height: 50,
  },
  bookCartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    flex: 1,
    backgroundColor: white,
    flexDirection: 'row',
    borderRadius: 50,
    alignItems: 'center',
    paddingLeft: 20,
    backgroundColor: transparentWhite,
  },
  filterContainer: {
    width: 50,
    height: 50,
    backgroundColor: fifthColor,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  txtBox: {
    marginLeft: 10,
  },
  hamMenu: {},
  ham1: {
    backgroundColor: fifthColor,
    width: 15,
    height: 3,
    marginBottom: 3,
    borderRadius: 5,
  },
  ham2: {
    backgroundColor: fifthColor,
    width: 20,
    height: 3,
    marginBottom: 3,
    borderRadius: 5,
  },
  ham3: {
    backgroundColor: fifthColor,
    width: 10,
    height: 3,
    borderRadius: 5,
  },
});
