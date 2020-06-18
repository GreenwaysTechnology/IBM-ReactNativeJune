import React from 'react';
import {Provider,connect} from 'react-redux';
import {createStore} from 'redux';
import {View,Text,Button,StyleSheet} from 'react-native';

//action constants
const INCREMENT='INCREMENT';

//step 1: declare Reducer 

const CounterReducer=(state=20,action)=>{
    switch (action.type) {
        case INCREMENT:
             return state +1;           
         default:
             return state;        
    }
};
//create Store instance
const store = createStore(CounterReducer);
/////////////////////////////////////////////////////////////////////////
//mapper function
function mapStateToProps(state){
    return {
        //prop:state
        counter:state
    }
};
//Component
const Counter=(props)=>{
    return <View>
            <Text>Counter {props.counter}</Text>
            <Button title="Increment" onPress={()=>{
                props.dispatch({type:INCREMENT});
            }}/>
    </View>
};
//create HOC : Higher order function; decorator design pattern
const CounterContainer =connect(mapStateToProps)(Counter);

//App Component and Render
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




