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
  Entypo,
  SimpleLineIcons,
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
  aboutUs,
  readerGuidelines,
  authorGuidelines,
  freelancerGuideline,
} from '../utils/constants';

const { width, height } = Dimensions.get('window');

const ExploreScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <AntDesign name="close" size={24} color={lightOrange} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Explore</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
          <TouchableOpacity
            style={[styles.singleDrawerItem, styles.borderBottomHere]}
            onPress={() =>
              props.navigation.navigate('WebViewScreen', {
                title: 'About Us',
                link: aboutUs,
              })
            }
          >
            <View style={styles.leftPart}>
              <View style={styles.drawerItemIconHolder}>
                <SimpleLineIcons name="organization" size={24} color={gray} />
              </View>
              <View>
                <Text style={styles.drawerItemLabel}>About Us</Text>
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
                title: 'Reader Guidelines',
                link: readerGuidelines,
              })
            }
          >
            <View style={styles.leftPart}>
              <View style={styles.drawerItemIconHolder}>
                <Entypo name="open-book" size={24} color={gray} />
              </View>
              <View>
                <Text style={styles.drawerItemLabel}>Reader Guidelines</Text>
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
                title: 'Authors Guidelines',
                link: authorGuidelines,
              })
            }
          >
            <View style={styles.leftPart}>
              <View style={styles.drawerItemIconHolder}>
                <FontAwesome name="pencil-square-o" size={24} color={gray} />
              </View>
              <View>
                <Text style={styles.drawerItemLabel}>Authors Guidelines</Text>
              </View>
            </View>
            <View style={styles.rightPart}>
              <MaterialIcons name="navigate-next" size={24} color={gray} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.singleDrawerItem}
            onPress={() =>
              props.navigation.navigate('WebViewScreen', {
                title: 'Freelancer Guidelines',
                link: freelancerGuideline,
              })
            }
          >
            <View style={styles.leftPart}>
              <View style={styles.drawerItemIconHolder}>
                <FontAwesome name="user-circle-o" size={24} color={gray} />
              </View>
              <View>
                <Text style={styles.drawerItemLabel}>
                  Freelancer Guidelines
                </Text>
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
};

export default connect()(ExploreScreen);

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
