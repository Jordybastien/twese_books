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
import { WebView } from 'react-native-webview';

const { width, height } = Dimensions.get('window');

const WebViewScreen = (props) => {
  const { title, link } = props.route.params;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <AntDesign name="close" size={24} color={lightOrange} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
      </View>
      <WebView source={{ uri: link }} />
    </View>
  );
};

export default connect()(WebViewScreen);

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
    // borderBottomWidth: 1,
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
