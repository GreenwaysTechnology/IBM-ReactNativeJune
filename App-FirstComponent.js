import React,{Fragment} from 'react';
import {View,Text} from 'react-native';

//write App Component
// function App(){
//    //return jsx elements : React-native Components
//    return <React.Fragment> 
//       <Text>
//         Welcome to React Native
//    </Text>
//     <Text>
//         Welcome to React Native
//     </Text>
//    </React.Fragment>
// }
// function App(){
//     //return jsx elements : React-native Components
//     return <Fragment> 
//        <Text>
//          Welcome to React Native
//     </Text>
//      <Text>
//          Welcome to React Native
//      </Text>
//     </Fragment>
//  }

// function App(){
//     //return jsx elements : React-native Components
//     return <> 
//        <Text>
//          Welcome to React Native
//     </Text>
//      <Text>
//          Welcome to React Native
//      </Text>
//     </>
//  }

// function App(){
//     //return jsx elements : React-native Components
//     return <View> 
//        <Text>
//          Welcome to React Native
//     </Text>
//      <Text>
//          Welcome to React Native
//      </Text>
//     </View>
//  }
const App = ()=><View>
    <Text>Welcome to React Native</Text>
    <Text>Welcome to React Native</Text>
</View>

export default App;