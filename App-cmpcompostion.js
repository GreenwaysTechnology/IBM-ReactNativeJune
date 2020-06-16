import React,{Fragment} from 'react';
//here react-native is folder , not file
//View may from one file view.js and text.js
import {View,Text} from 'react-native';
// import {Greeter} from './components/Greeter';
// import {Hello} from './components/Hello'
//use Barrel export
import {Greeter,Hello} from './components';

//app comonent
const App = ()=><View>
    {/**Component composition */}
    <Greeter/>
    <Hello/>
</View>

export default App;