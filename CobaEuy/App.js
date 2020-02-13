/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  // const [nama] = useState(['nanai','hafos']);
  // const [namateman] = useState('boso');
  console.log('daebi');
  // var nama = 'nanai';
  // var namateman = 'boso';

  // const RenderText=()=>{
  //   return nama.map((val,index)=>{
  //     return(
  //       <Text key={index} style={{color:"green",fontSize:20}}>HALO GAIS NAMA SAYA {val} dan nama teman saya {namateman} </Text>
  //     )
  //   })
  // }

  return (
    <>
      {/* <View >
        <Text style={styles.container}>
          HALO GAIS NAMA SAYA {nama} , nama teman saya {namateman}
          {RenderText()}
          HALO GUYS!
        </Text>
      </View> */}
      <View
        style={{
          // marginTop: 200,
          flexDirection: 'column',
          flex: 1,
        }}>
        <View style={styles.kotak1}></View>
        <View style={styles.kotak2}>
          <ScrollView>
            <View style={{backgroundColor: 'gray', height: 200}}></View>
            <View style={{backgroundColor: 'salmon', height: 210}}></View>
            <View style={{backgroundColor: 'green', height: 200}}></View>
          </ScrollView>
        </View>
        <View style={styles.kotak3}></View>
      </View>
    </>
  );
};

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

export default App;
