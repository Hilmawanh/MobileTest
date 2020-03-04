import React, {useState} from 'react';
import {View} from 'react-native';
import {Input, Text, Icon, Button} from 'react-native-elements';
// import style from './style/style';
import style from './style/style';

const Register = ({navigation}) => {
  const [passHidden, setpassHidden] = useState(true);
  const [conpassHidden, setconpassHidden] = useState(true);
  return (
    <View style={style.gaya}>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>Register</Text>

      <View style={style.ReginputStyle}>
        <Input
          placeholder="Email"
          leftIcon={<Icon name="email" size={24} color="black" />}
        />
        <Input
          placeholder="Username"
          leftIcon={<Icon name="account-box" size={24} color="black" />}
        />

        <Input
          placeholder="Password"
          leftIcon={<Icon name="lock" size={24} color="black" />}
          rightIcon={
            <Icon
              name={passHidden ? 'visibility-off' : 'visibility'}
              size={22}
              color={passHidden ? '#bfc3c9' : 'black'}
              onPress={() => setpassHidden(!passHidden)}
            />
          }
          secureTextEntry={passHidden}
        />

        <Input
          placeholder="Confirm Password"
          leftIcon={<Icon name="lock" size={24} color="black" />}
          rightIcon={
            <Icon
              name={conpassHidden ? 'visibility-off' : 'visibility'}
              size={22}
              color={conpassHidden ? '#bfc3c9' : 'black'}
              onPress={() => setconpassHidden(!conpassHidden)}
            />
          }
          secureTextEntry={conpassHidden}
        />
      </View>
      <View>
        <Button
          title="Register"
          containerStyle={{width: 355, marginLeft: 10, marginBottom: 10}}
          buttonStyle={{backgroundColor: '#30475e'}}
          onPress={() => navigation.navigate('Login')}
        />
      </View>
      <View>
        <Button
          title="Back to Login"
          containerStyle={{width: 355, marginLeft: 10, marginBottom: 10}}
          buttonStyle={{
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: '#30475e',
          }}
          titleStyle={{color: 'black'}}
          onPress={() => navigation.navigate('Login')}
        />
      </View>

      {/* <Button
        title="Go to Login"
        type="outline"
        onPress={() => navigation.navigate('Login')}
      /> */}
    </View>
  );
};

export default Register;
