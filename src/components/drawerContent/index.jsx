import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {
  fifthColor,
  firstColor,
  white,
  gray,
  lowGray,
  lightBlue,
  lightOrange,
  lowLightBlue,
} from '../../utils/colors';
import {
  Entypo,
  Feather,
  AntDesign,
  MaterialIcons,
  SimpleLineIcons,
  FontAwesome5,
  FontAwesome,
} from '@expo/vector-icons';
import { connect } from 'react-redux';
import { deleteToken, deleteUserInfo } from '../../utils/storage';
import { logoutUser } from '../../actions/authedUser';

const { width, height } = Dimensions.get('window');

const DrawerContent = (props) => {
  const { dashboardStats, userName, isAuth } = props;

  const handleLogout = () => {
    deleteToken().then(() => {
      deleteUserInfo();
      props.dispatch(logoutUser());
    });
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.header}>
          <View style={styles.headerProfileHolder}>
            <TouchableOpacity
              style={styles.userNameHolder}
              onPress={() =>
                !isAuth && props.navigation.navigate('LoginScreen')
              }
            >
              {isAuth && <Text style={styles.userName}>{userName}</Text>}
            </TouchableOpacity>
            <View style={styles.imageHolder}>
              <FontAwesome name="user-circle-o" size={120} color={white} />
            </View>
          </View>
        </View>
        <View style={styles.body}>
          {isAuth ? (
            <>
              <TouchableOpacity
                style={[styles.singleDrawerItem, styles.borderBottomHere]}
                onPress={() =>
                  props.navigation.navigate('AccountDetailsScreen')
                }
              >
                <View style={styles.leftPart}>
                  <View style={styles.drawerItemIconHolder}>
                    <Feather name="user" size={24} color={gray} />
                  </View>
                  <View>
                    <Text style={styles.drawerItemLabel}>Account Details</Text>
                  </View>
                </View>
                <View style={styles.rightPart}>
                  <MaterialIcons name="navigate-next" size={24} color={gray} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.singleDrawerItem, styles.borderBottomHere]}
                onPress={() => props.navigation.navigate('OrdersScreen')}
              >
                <View style={styles.leftPart}>
                  <View style={styles.drawerItemIconHolder}>
                    <Feather name="shopping-bag" size={24} color={gray} />
                  </View>
                  <View>
                    <Text style={styles.drawerItemLabel}>
                      My Orders ({dashboardStats.order})
                    </Text>
                  </View>
                </View>
                <View style={styles.rightPart}>
                  <MaterialIcons name="navigate-next" size={24} color={gray} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.singleDrawerItem, styles.borderBottomHere]}
                onPress={() => props.navigation.navigate('UserBooksScreen')}
              >
                <View style={styles.leftPart}>
                  <View style={styles.drawerItemIconHolder}>
                    <Feather name="book" size={24} color={gray} />
                  </View>
                  <View>
                    <Text style={styles.drawerItemLabel}>
                      My Books ({dashboardStats.books})
                    </Text>
                  </View>
                </View>
                <View style={styles.rightPart}>
                  <MaterialIcons name="navigate-next" size={24} color={gray} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.singleDrawerItem, styles.borderBottomHere]}
                onPress={() => props.navigation.navigate('UserAddressesScreen')}
              >
                <View style={styles.leftPart}>
                  <View style={styles.drawerItemIconHolder}>
                    <FontAwesome5 name="address-book" size={24} color={gray} />
                  </View>
                  <View>
                    <Text style={styles.drawerItemLabel}>
                      My Address ({dashboardStats.address})
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
                  props.navigation.navigate('PasswordChangeScreen')
                }
              >
                <View style={styles.leftPart}>
                  <View style={styles.drawerItemIconHolder}>
                    <AntDesign name="lock1" size={24} color={gray} />
                  </View>
                  <View>
                    <Text style={styles.drawerItemLabel}>Change Password</Text>
                  </View>
                </View>
                <View style={styles.rightPart}>
                  <MaterialIcons name="navigate-next" size={24} color={gray} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.singleDrawerItem, styles.borderBottomHere]}
              >
                <View style={styles.leftPart}>
                  <View style={styles.drawerItemIconHolder}>
                    <Feather name="bookmark" size={24} color={gray} />
                  </View>
                  <View>
                    <Text style={styles.drawerItemLabel}>Wishlist</Text>
                  </View>
                </View>
                <View style={styles.rightPart}>
                  <MaterialIcons name="navigate-next" size={24} color={gray} />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.singleDrawerItem, styles.logoutContainer]}
                onPress={() => handleLogout()}
              >
                <View style={styles.leftPart}>
                  <View style={styles.drawerItemIconHolder}>
                    <SimpleLineIcons name="logout" size={24} color={gray} />
                  </View>
                  <View>
                    <Text style={styles.drawerItemLabel}>Logout</Text>
                  </View>
                </View>
                <View style={styles.rightPart}>
                  <MaterialIcons name="navigate-next" size={24} color={gray} />
                </View>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity
              style={[styles.singleDrawerItem, styles.borderBottomHere]}
              onPress={() => props.navigation.navigate('LoginScreen')}
            >
              <View style={styles.leftPart}>
                <View style={styles.drawerItemIconHolder}>
                  <SimpleLineIcons name="login" size={24} color={gray} />
                </View>
                <View>
                  <Text style={styles.drawerItemLabel}>Login</Text>
                </View>
              </View>
              <View style={styles.rightPart}>
                <MaterialIcons name="navigate-next" size={24} color={gray} />
              </View>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={[styles.singleDrawerItem, styles.borderTopHere]}
            onPress={() => props.navigation.navigate('PoliciesScreen')}
          >
            <View style={styles.leftPart}>
              <View style={styles.drawerItemIconHolder}>
                <Feather name="layers" size={24} color={gray} />
              </View>
              <View>
                <Text style={styles.drawerItemLabel}>Policy</Text>
              </View>
            </View>
            <View style={styles.rightPart}>
              <MaterialIcons name="navigate-next" size={24} color={gray} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.singleDrawerItem, styles.borderTopHere]}
            onPress={() => props.navigation.navigate('ExploreScreen')}
          >
            <View style={styles.leftPart}>
              <View style={styles.drawerItemIconHolder}>
                <FontAwesome name="wpexplorer" size={24} color={gray} />
              </View>
              <View>
                <Text style={styles.drawerItemLabel}>Explore</Text>
              </View>
            </View>
            <View style={styles.rightPart}>
              <MaterialIcons name="navigate-next" size={24} color={gray} />
            </View>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const mapStateToProps = ({ dashboardStats, authedUser }) => {
  return {
    dashboardStats,
    userName: authedUser.name ?? 'Login',
    isAuth: Object.keys(authedUser).length !== 0,
  };
};

export default connect(mapStateToProps)(DrawerContent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    height,
    paddingTop: 0,
    marginTop: 0,
    backgroundColor: fifthColor,
  },
  header: {
    flex: 1,
    backgroundColor: lightOrange,
    height: 250,
    paddingBottom: 70,
  },
  headerProfileHolder: {
    flex: 1,
    backgroundColor: fifthColor,
    borderBottomRightRadius: 300,
    borderBottomLeftRadius: 300,
  },
  body: {
    flex: 1,
    backgroundColor: lightOrange,
    height: height,
  },
  profileImg: {
    width: 150,
    height: 150,
  },
  imageHolder: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 95,
    width: 120,
    height: 120,
    borderRadius: 120,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: fifthColor,
  },
  userInitials: {
    fontFamily: 'bold',
    fontSize: 40,
  },
  userNameHolder: {
    alignItems: 'center',
    marginTop: 60,
  },
  userName: {
    color: white,
    fontFamily: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  singleDrawerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  leftPart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  drawerItemIconHolder: {
    marginRight: 15,
  },
  borderBottomHere: {
    borderBottomColor: lowGray,
    borderBottomWidth: 1,
  },
  borderTopHere: {
    borderTopColor: lowGray,
    borderTopWidth: 1,
  },
  drawerItemLabel: {
    fontFamily: 'bold',
    color: lowLightBlue,
  },
  // logoutContainer: {
  //   marginTop: 100,
  // },
});
