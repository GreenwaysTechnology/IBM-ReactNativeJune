import React,{Fragment} from 'react';
import {View} from 'react-native';
import {Header,Footer} from './components/page';

//app comonent
const App = ()=><View>
    {/**Component props */}
    <Header title="App Header"/>
    <Header/>
    <Footer content="footer content"/>

</View>

export default App;