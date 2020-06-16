import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

//inLine
// const App=()=><View style={{backgroundColor:'pink'}}>
//     <Text>
//         Hello,Style
//     </Text>
// </View>

const App=()=><View style={styles.container}>
    <Text style={styles.title}>
        Hello,Style
    </Text>
</View>

//style object
const styles = StyleSheet.create({
    container: {
        backgroundColor:'pink',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize:50,
        fontWeight:'bold',
        borderWidth:5,
        padding:30,
        borderStyle:'solid'
    }
});




export default App;