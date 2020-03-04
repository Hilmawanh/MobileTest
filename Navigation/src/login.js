import React, {useState} from 'react';
import {View, StatusBar} from 'react-native';
import style from './style/style';
import * as Animatable from 'react-native-animatable';
import {Text, Input, Icon, Button} from 'react-native-elements';
import {CommonActions} from '@react-navigation/native';

const Login = props => {
  // useEffect(()=>{
  //     const resetcomm=CommonActions.reset({
  //         index:0,
  //         routes:[
  //             {name:'Register'}
  //         ]
  //     })
  //     props.navigation.dispatch(resetcomm)
  // },[])

  const [passHidden, setpassHidden] = useState(true);

  const Gotohome = () => {
    props.navigation.navigate('Drawermain');
  };
  return (
    <View style={style.LogcontainerStyle}>
      <StatusBar backgroundColor="teal" />
      <Animatable.Text animation="bounceIn" iterationCount="infinite">
        <Text h3>Instagram</Text>
      </Animatable.Text>
      <View style={style.LoginputStyle}>
        <Input
          placeholder="Email"
          leftIcon={<Icon name="email" size={24} color="black" />}
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
      </View>
      <Button
        title="Login"
        containerStyle={{width: '95%', marginLeft: 10, marginBottom: 10}}
        buttonStyle={{backgroundColor: '#0f4c81'}}
      />

      <Button
        title="Go to Register"
        containerStyle={{width: '95%', marginLeft: 10, marginBottom: 10}}
        buttonStyle={{backgroundColor: '#30475e'}}
        onPress={() => props.navigation.navigate('Register')}
      />

      <Button
        containerStyle={{width: '95%', marginLeft: 10, marginBottom: 10}}
        buttonStyle={{
          borderColor: '#30475e',
          backgroundColor: 'white',
          borderWidth: 1,
        }}
        titleStyle={{color: 'black'}}
        title="Go to Home"
        onPress={Gotohome}
      />
    </View>
  );
};

export default Login;
