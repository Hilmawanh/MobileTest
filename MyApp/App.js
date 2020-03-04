// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import Header from './src/header';
// import AlbumList from './src/AlbumList';

// import {Icon} from 'native-base';

// const App = () => {
//   return (
//     <>
//       <View>
//         {/* <Text style={{marginTop: 60, marginLeft: 35, fontSize: 40}}>
//           <Icon type="FontAwesome" name="camera" />
//         </Text> */}
//         {/* <Text style={{marginLeft: 35, fontSize: 40}}>
//           <Icon type="FontAwesome" name="comment-o" />
//         </Text> */}
//         <Header />
//         <AlbumList />
//       </View>
//     </>
//   );
// };

// export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Icon} from 'native-base';

import Header from './src/header';
import Albumlist from './src/AlbumList';

const App = () => {
  return (
    <View style={{flex: 2}}>
      <Header headerText={'Albums'} />
      <Albumlist />
      {/* <Icon name="camera" type="Feather" /> */}
    </View>
  );
};

export default App;
