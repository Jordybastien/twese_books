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
import { bgColor, fifthColor, white } from '../../../utils/colors';
import { Ionicons, Octicons, AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');
const HeaderComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.firstRow}>
        <View>
          <TouchableOpacity>
            <Image
              source={require('../../../../assets/icons/ham.png')}
              style={styles.ham}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Image
            source={require('../../../../assets/icons/black.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.bookCartContainer}>
          <TouchableOpacity>
            <Image
              source={require('../../../../assets/icons/cart.png')}
              style={styles.cart}
            />
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

export default HeaderComponent;

const styles = StyleSheet.create({
  firstRow: {
    justifyContent: 'space-between',
    width: width,
    backgroundColor: bgColor,

    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    flexDirection: 'row',
  },
  secondRow: {
    justifyContent: 'space-between',
    width: width,
    backgroundColor: bgColor,

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
});
