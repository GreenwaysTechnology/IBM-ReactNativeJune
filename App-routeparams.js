//Stack Navigation
import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
//Create Stack Object
const Stack = createStackNavigator();

//Screens : Components
const HomeScreen = ({navigation})=>{
    return <View style={styles.container}>
           <Text>Welcome to IBM Home Screen</Text>
           <Button title="Details" onPress={()=>
               navigation.navigate("Details",{title:'IBM Details '})
           }/>
    </View>
};
const  DetailsScreen = ({route,navigation}) => {
     //Parameters 
     const {title} = route.params;

    return <View style={styles.container}>
      <Text style={{fontSize:20}}>{title}</Text>
      <Text>Every app you build has a fixed start destination. 
          This is the first screen the user sees when they 
          launch your app from the launcher.This destination is also 
          the last screen the user sees when they return to the launcher
          after pressing the Back button. 
          Let’s take a look at the Sunflower app as an example.
    </Text>
</View>
};


function routeConfig(){
    return <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home:IBM" component={HomeScreen} />
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
  