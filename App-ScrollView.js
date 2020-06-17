import React, { useState } from 'react';
import {Text,View,StyleSheet, Button, TextInput, Alert, ScrollView} from 'react-native';


const  App = ()=>{

    const [text,setText]= useState('Subramanian');
    const[item,setItem] = useState([]);

    const update=input=>{
        setText(input)
    }
    const addItem= ()=>{
      //  Alert.alert(text);
        setText('Item');
        setItem([...item,text]);
    }

    return <View style={styles.container}>
        <TextInput style={styles.input} value={text} onChangeText={update}/>
        <Button title="Add" onPress={addItem}/>
        <ScrollView>
            {item.map((i,index)=>
             <View key={index} style={styles.listItem}>
               <Text>{i}</Text>
             </View>
            
            )}
        </ScrollView>
    </View>
};
export default App;

const styles = StyleSheet.create({
    container:{
        backgroundColor :'white',
        paddingTop:50,
        marginLeft :10,
        flex:1,
        paddingEnd:20
    },
    input: {
        width:'100%',
        borderColor:'black',
        borderWidth:1,
        padding:10,
        marginBottom:10

     },
     listItem:{
         padding:10,
         marginVertical:10,
         backgroundColor:'pink'
     }
});