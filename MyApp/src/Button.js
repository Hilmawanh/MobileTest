import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const Button = () => {
  return (
    <TouchableOpacity style={styles.buttonStyle}>
      <Text style={{textAlign: 'center', marginLeft: 20}}>Click Me!</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'red',
    width: 140,
  },
};

export default Button;
