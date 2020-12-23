import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
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
} from '../utils/colors';
import {
  Entypo,
  Feather,
  AntDesign,
  MaterialIcons,
  SimpleLineIcons,
  FontAwesome5,
} from '@expo/vector-icons';
import { connect } from 'react-redux';
import { deleteToken, deleteUserInfo } from '../utils/storage';
import { logoutUser } from '../actions/authedUser';

const { width, height } = Dimensions.get('window');

class AccountScreen extends Component {
  state = {};

  handleLogout = () => {
    deleteToken().then(() => {
      deleteUserInfo();
      this.props.dispatch(logoutUser());
      this.props.navigation.reset({
        index: 0,
        routes: [{ name: 'LoginScreen' }],
      });
    });
  };

  render() {
    const { dashboardStats, userName } = this.props;

    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <View style={styles.headerProfileHolder}>
              <View style={styles.userNameHolder}>
                <Text style={styles.userName}>{userName}</Text>
              </View>
              <View style={styles.imageHolder}>
                <Image
                  source={require('../../assets/profile.png')}
                  style={styles.profileImg}
                />
              </View>
            </View>
          </View>
          <View style={styles.body}>
            <TouchableOpacity
              style={[styles.singleDrawerItem, styles.borderBottomHere]}
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
              onPress={() => this.handleLogout()}
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
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = ({ dashboardStats, authedUser }) => {
  return {
    dashboardStats,
    userName: authedUser.name ?? 'Login',
  };
};

export default connect(mapStateToProps)(AccountScreen);

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
  drawerItemLabel: {
    fontFamily: 'bold',
    color: lowLightBlue,
  },
  // logoutContainer: {
  //   marginTop: 100,
  // },
});
