
//Stack Navigation
import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons'; 

//Create Stack Object
const Drawer = createDrawerNavigator();

//Screens : Components
function HomeScreen({navigation}){
    return <View style={styles.container}>
           <Text>Welcome to IBM Home Screen</Text>
           <AntDesign name="mail" onPress={
               ()=>navigation.navigate('InBox')
               
            } size={24} color="black" />

    </View>
}
function InBox(){
    return <View style={styles.container}>
           <Text>INBOX</Text>
    </View>
}
function SentItems(){
    return <View style={styles.container}>
           <Text>Sent Items</Text>
    </View>
}
function DeletedItems(){
    return <View style={styles.container}>
           <Text>DeletedItems</Text>
    </View>
}

function routeConfig(){
    return <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="InBox" component={InBox} />
                <Drawer.Screen name="SentItems" component={SentItems} />
                <Drawer.Screen name="DeletedItems" component={DeletedItems} />
            </Drawer.Navigator>
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