import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Header extends Component {
  state = {};
  render() {
    return (
      <>
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>Albums</Text>
        </View>
      </>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    marginTop: 35,
  },
  textStyle: {
    fontSize: 30,
  },
});
