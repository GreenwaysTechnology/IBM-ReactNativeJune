//Stack Navigation
import React, { useEffect, useState } from 'react';
import {View,Text,StyleSheet,Button,TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
//Create Stack Object
const Stack = createStackNavigator();

//Screens : Components
const HomeScreen = ({navigation,route})=>{

    //useEffect can be used to capture the data which was submitted by 
    //navigated Screen
    useEffect(()=>{
      if(route.params?.post){
            //if you want to send data to some where either to 
            //server , you want to store it somewhere
          console.log(route.params.post);
      }

    },[route.params?.post]);
   
    return <View style={styles.container}>
           <Text>Welcome to IBM Home Screen</Text>
           <Button title="Details" onPress={()=>
               navigation.navigate("Details",{title:'IBM Details '})
           }/>
           <View>
               <Text>Data from Details Screen</Text>
                   <Text>{route.params?.post}</Text>
           </View>
    </View>
};
const  DetailsScreen = ({route,navigation}) => {
     //Parameters 
     const {title} = route.params;
     //state 
     const [postText,setPostText] = useState('test');


    return <View style={styles.container}>
      <Text style={{fontSize:20}}>{title}</Text>
      <TextInput
        value={postText}
        onChangeText={setPostText}
        style={{height:200, padding:10, backgroundColor:'white'}}
        placeholder="You can type some thing"
        multiline
      />
      <Button title="Save" onPress={()=>{
          navigation.navigate("Home",{post:postText})
          console.log(postText)
      }}/>

    
</View>
};


function routeConfig(){
    return <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
    </NavigationContainer>

}

const App=()=>routeConfig();


export default App;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  