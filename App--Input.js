//Text Input Component
import {View,StyleSheet,Text, Button, TextInput,Alert} from 'react-native';
import React, { useState } from 'react';

const GetInput=()=>{
    const [text,setText]= useState('Subrmanian');
    //array
    const[item,setItem] = useState([]);
   
    //listener method
    const update = name=>{
        setText(name)
    }
    const getName = ()=>{
         // Alert.alert(text);
         //validation
         if(text.length===0){
             return ;
         }
          setItem([...item,text]);
          setText('')
    }

    return <>
         <Text>Enter Name {text}</Text>
         <TextInput  value={text} onChangeText={update} style={styles.input}/>
         <Button title="Enter Name" onPress={getName} color="green"/>
         <View>
             <Text>Name Lists</Text>
             <View>
            {item.map((i,index)=>
             <View key={index} style={styles.listItem}>
               <Text>{i}</Text>
             </View>            
            )}
        </View>
         </View>

    </>
};

/**
 * Create Component Hierachy * 
 * <GetInput>
 *   <Name>
 *      <NameList>
 *             <NameItem> </NameItem>
 *      </NameList>
 *   </Name>
 * </GetInput>
 * 
 * It should be in a separate file
 * You have to use barrel export.
 * Entry point-App.js must have only Root Compoent
 */


const App = ()=><View style ={styles.container}>
     <GetInput/>
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
  