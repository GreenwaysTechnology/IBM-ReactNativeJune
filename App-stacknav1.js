//Stack Navigation
import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
//Create Stack Object
const Stack = createStackNavigator();

//Screens : Components
function HomeScreen(){
    return <View style={styles.container}>
           <Text>Welcome to IBM Home Screen</Text>
    </View>
}
function routeConfig(){
    return <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home:IBM" component={HomeScreen} ></Stack.Screen>
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
  