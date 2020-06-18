import {connect} from 'react-redux';
import {View,Text,Button,StyleSheet} from 'react-native';


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
    return {
        //prop:state
        counter:state
    }
};
//Component

//create HOC : Higher order function; decorator design pattern
const CounterContainer =connect(mapStateToProps)(Counter);

export {CounterContainer};