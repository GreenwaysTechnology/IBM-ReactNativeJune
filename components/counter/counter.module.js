import React from 'react';
import {connect} from 'react-redux';
import {View,Text,Button,StyleSheet} from 'react-native';
import {INCREMENT} from '../../actionconstants/counter'
import App from '../../App';

//const Incrment=...App
//const Decrement =...App

const Counter=(props)=>{
    return <View>
            <Text>Counter {props.counter}</Text>
            <Button title="Increment" onPress={()=>{
                props.dispatch({type:INCREMENT});
            }}/>
            

    </View>
};
/////////////////////////////////////////////////////////////////////////
//mapper function
function mapStateToProps(state){
   // let incrementstate =  state.reducerName;
    return {
        //prop:state
        counter:state // counter:incrementState
    }
};
//Component

//create HOC : Higher order function; decorator design pattern
const CounterContainer =connect(mapStateToProps)(Counter);

export {CounterContainer};