import React,{Fragment} from 'react';
import {View,Text} from 'react-native';


//create a separate components: component composition

//Hello
const Hello = ()=><Text>
    Hello,How are You
</Text>
//Greeter
export const Greeter=()=><Text>
        Welcome to React Native
</Text>

//app comonent
const App = ()=><View>
    {/**Component composition */}
    <Greeter/>
    <Hello/>
</View>

export default App;