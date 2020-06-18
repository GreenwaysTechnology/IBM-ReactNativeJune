import React from 'react';
import {Provider} from 'react-redux';
import {View,StyleSheet} from 'react-native';
import {store} from './store';
import {CounterContainer} from  './components/counter'

//Root Application
const App = ()=>{
   return<Provider store={store}>  
        <View style={styles.container}>
            <CounterContainer/>
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




