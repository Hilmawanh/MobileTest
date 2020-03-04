import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {Header, Text, Left, Body, Icon, Right, Title} from 'native-base';

// import {} from 'react-native-vector-icons/Feather';

class Headers extends Component {
  state = {};
  render() {
    return (
      <Header style={{backgroundColor: 'white'}}>
        <Body>
          <View>
            <Image
              style={{width: 190, height: 20}}
              source={{
                uri:
                  'https://www.stickpng.com/assets/images/5a4e432a2da5ad73df7efe7a.png',
              }}
            />
            {/* <Icon name="camera" type="Feather" /> */}
          </View>
        </Body>
      </Header>
    );
  }
}

export default Headers;
