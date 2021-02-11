import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import PDFReader from 'rn-pdf-reader-js';
import Constants from 'expo-constants';
import { ReadBookLink } from '../utils/constants';
import { lightOrange, fifthColor, lowGray } from '../utils/colors';
import { AntDesign } from '@expo/vector-icons';

class ReadingBookScreen extends Component {
  render() {
    const { book } = this.props.route.params;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <AntDesign name="close" size={24} color={lightOrange} />
            </TouchableOpacity>
          </View>
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>{book.book_name}</Text>
          </View>
        </View>
        <PDFReader
          source={{
            uri: `${ReadBookLink}/${book.book_file_name}`,
          }}
        />
      </View>
    );
  }
}

export default ReadingBookScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
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
