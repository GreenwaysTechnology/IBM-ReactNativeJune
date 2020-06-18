import React from 'react';
import {Provider} from 'react-redux';
import {View,StyleSheet} from 'react-native';
import {store} from './store';
import {CounterContainer} from  './components/counter'
import { Ionicons } from '@expo/vector-icons';
import { createIconSet } from '@expo/vector-icons';

import { FontAwesome } from '@expo/vector-icons';


//Root Application
const App = ()=>{
   return<Provider store={store}>  
        <View style={styles.container}>
            <CounterContainer/>    
            <Ionicons name="md-checkmark-circle" size={32} color="green" />
            <FontAwesome.Button name="facebook" backgroundColor="#3b5998">
                 Login with Facebook
            </FontAwesome.Button>
         </View>
   </Provider>
}
export default App;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});




