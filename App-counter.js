//Counter Component
import {View,StyleSheet,Text, Button} from 'react-native';
import React, { useState } from 'react';

//container component
export const Counter=()=>{
    //useState hook
    const [count,setCount] = useState(10);
    const increment=()=>{
        setCount(count+1);
    }
   return <View>
          {/**state as prop */}
          <CounterDisplay count={count} onIncrement={increment} />

   </View>
}
//presentational component
export const CounterDisplay=({count,onIncrement})=>{
    return <>
         <Text style={styles.label}>Counter Component</Text>
         <Text style={styles.label}>Value {count}</Text>    
         <Button title="Increment" onPress={onIncrement} color="green"/>
 
     </>
}

const App = ()=><View style ={styles.container}>
     <Counter/>
</View>

export default App;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    label:{
        fontSize :25,
        color:'red'
    }
 });
  