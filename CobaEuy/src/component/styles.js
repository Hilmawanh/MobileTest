import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 300,
    textAlign: 'center',
    alignItems: 'center',
    color: 'yellow',
    fontSize: 25,
    backgroundColor: 'pink',
    padding: 15,
    margin: 10,
    fontWeight: 'bold',
  },
  kotak1: {
    // width: 100,
    // height: 100,
    flex: 1,
    backgroundColor: 'powderblue',
  },
  kotak2: {
    // width: 100,
    // height: 100,
    flex: 6,
    backgroundColor: 'skyblue',
  },
  kotak3: {
    // width: 100,
    // height: 100,
    flex: 1,
    backgroundColor: 'steelblue',
  },
});

module.exports = styles;
