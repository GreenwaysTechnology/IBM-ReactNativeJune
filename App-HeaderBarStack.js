import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

// function LogoTitle() {
//   return (
//     <>
//     <Image
//       style={{ width: 50, height: 50 }}
//       source={{
//         uri: 'https://reactnative.dev/img/tiny_logo.png',
//       }}   
//       />
//       </>
//   );
// }

function LogoTitle(){
    return  <Ionicons name="md-checkmark-circle" size={32} color="green" />

}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title :'IBM learning',
            headerTitle: props => <LogoTitle {...props} />,
            headerRight: () => (
            //   <Button
            //     onPress={() => alert('This is a button!')}
            //     title="Info"
            //     color="#00cc00"
            //   />
            <AntDesign name="infocirlce" onPress={() => alert('This is a button!')} size={24} color="black" />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
