import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import {
  AntDesign,
  Feather,
  MaterialIcons,
  Fontisto,
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
} from '@expo/vector-icons';
import { connect } from 'react-redux';
import {
  white,
  gray,
  lowGray,
  fifthColor,
  firstColor,
  bgColor,
  lightOrange,
  lowLightBlue,
} from '../utils/colors';
import {
  termsOfUse,
  privacyPolicy,
  buyingPolicy,
  cancellationPolicy,
  codeOfConduct,
  paymentPolicy,
  sellingPolicy,
  termsAndConditions,
} from '../utils/constants';

const { width, height } = Dimensions.get('window');

const PoliciesScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <AntDesign name="close" size={24} color={lightOrange} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Policy</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
          <TouchableOpacity
            style={[styles.singleDrawerItem, styles.borderBottomHere]}
            onPress={() =>
              props.navigation.navigate('WebViewScreen', {
                title: 'Terms of service',
                link: termsAndConditions,
              })
            }
          >
            <View style={styles.leftPart}>
              <View style={styles.drawerItemIconHolder}>
                <Feather name="layers" size={24} color={gray} />
              </View>
              <View>
                <Text style={styles.drawerItemLabel}>Terms of service</Text>
              </View>
            </View>
            <View style={styles.rightPart}>
              <MaterialIcons name="navigate-next" size={24} color={gray} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.singleDrawerItem, styles.borderBottomHere]}
            onPress={() =>
              props.navigation.navigate('WebViewScreen', {
                title: 'Privacy',
                link: privacyPolicy,
              })
            }
          >
            <View style={styles.leftPart}>
              <View style={styles.drawerItemIconHolder}>
                <FontAwesome name="user-circle-o" size={24} color={gray} />
              </View>
              <View>
                <Text style={styles.drawerItemLabel}>Privacy</Text>
              </View>
            </View>
            <View style={styles.rightPart}>
              <MaterialIcons name="navigate-next" size={24} color={gray} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.singleDrawerItem, styles.borderBottomHere]}
            onPress={() =>
              props.navigation.navigate('WebViewScreen', {
                title: 'Buying Privacy',
                link: buyingPolicy,
              })
            }
          >
            <View style={styles.leftPart}>
              <View style={styles.drawerItemIconHolder}>
                <Fontisto name="money-symbol" size={24} color={gray} />
              </View>
              <View>
                <Text style={styles.drawerItemLabel}>Buying Policy</Text>
              </View>
            </View>
            <View style={styles.rightPart}>
              <MaterialIcons name="navigate-next" size={24} color={gray} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.singleDrawerItem, styles.borderBottomHere]}
            onPress={() =>
              props.navigation.navigate('WebViewScreen', {
                title: 'Cancelling Policy',
                link: cancellationPolicy,
              })
            }
          >
            <View style={styles.leftPart}>
              <View style={styles.drawerItemIconHolder}>
                <MaterialCommunityIcons name="cancel" size={24} color={gray} />
              </View>
              <View>
                <Text style={styles.drawerItemLabel}>Cancelling Policy</Text>
              </View>
            </View>
            <View style={styles.rightPart}>
              <MaterialIcons name="navigate-next" size={24} color={gray} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.singleDrawerItem, styles.borderBottomHere]}
            onPress={() =>
              props.navigation.navigate('WebViewScreen', {
                title: 'Code of Conduct',
                link: codeOfConduct,
              })
            }
          >
            <View style={styles.leftPart}>
              <View style={styles.drawerItemIconHolder}>
                <AntDesign name="book" size={24} color={gray} />
              </View>
              <View>
                <Text style={styles.drawerItemLabel}>Code of conduct</Text>
              </View>
            </View>
            <View style={styles.rightPart}>
              <MaterialIcons name="navigate-next" size={24} color={gray} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.singleDrawerItem, styles.borderBottomHere]}
            onPress={() =>
              props.navigation.navigate('WebViewScreen', {
                title: 'Fees and Payment Policy',
                link: paymentPolicy,
              })
            }
          >
            <View style={styles.leftPart}>
              <View style={styles.drawerItemIconHolder}>
                <MaterialIcons name="payment" size={24} color={gray} />
              </View>
              <View>
                <Text style={styles.drawerItemLabel}>
                  Fees and Payment Policy
                </Text>
              </View>
            </View>
            <View style={styles.rightPart}>
              <MaterialIcons name="navigate-next" size={24} color={gray} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.singleDrawerItem, styles.borderBottomHere]}
            onPress={() =>
              props.navigation.navigate('WebViewScreen', {
                title: 'Selling Policy',
                link: sellingPolicy,
              })
            }
          >
            <View style={styles.leftPart}>
              <View style={styles.drawerItemIconHolder}>
                <AntDesign name="shoppingcart" size={24} color={gray} />
              </View>
              <View>
                <Text style={styles.drawerItemLabel}>Selling Policy</Text>
              </View>
            </View>
            <View style={styles.rightPart}>
              <MaterialIcons name="navigate-next" size={24} color={gray} />
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={styles.singleDrawerItem}
            onPress={() =>
              props.navigation.navigate('WebViewScreen', {
                title: 'Terms & Conditions',
                link: termsAndConditions,
              })
            }
          >
            <View style={styles.leftPart}>
              <View style={styles.drawerItemIconHolder}>
                <AntDesign name="questioncircleo" size={24} color={gray} />
              </View>
              <View>
                <Text style={styles.drawerItemLabel}>Terms & Conditions</Text>
              </View>
            </View>
            <View style={styles.rightPart}>
              <MaterialIcons name="navigate-next" size={24} color={gray} />
            </View>
          </TouchableOpacity> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default connect()(PoliciesScreen);

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
  body: {
    flex: 1,
    backgroundColor: lightOrange,
    // height: height,
    marginTop: 30,
  },
  singleDrawerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  borderBottomHere: {
    borderBottomColor: lowGray,
    borderBottomWidth: 1,
  },
  leftPart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  drawerItemIconHolder: {
    marginRight: 15,
  },
  drawerItemLabel: {
    fontFamily: 'bold',
    color: lowLightBlue,
  },
});
