import React, { useState, useEffect } from 'react';
import {View,Text,FlatList,StyleSheet} from 'react-native';

//Users details : jsonplaceholder
const Users= ()=>{
    //state to hold user data,status,error
    const [users,setUsers] =useState({
        error:null,
        isLoaded:false,
        items:[]
    });
    //fetch call 
    // useEffect(()=>{
    //     const url='https://jsonplaceholder.typicode.com/users';
    //     //TODO: This code must be converted into async and await style
    //     fetch(url)
    //        .then(response=>response.json())
    //        .then(result=>{
               
    //            //initalize the data
    //            setUsers({...users,isLoaded:true,items:result});
            
    //           },error=>{
    //             console.log(error)
    //             setUsers({...users,isLoaded:true,error:error});
    //     });
     

    // });
    useEffect(async () => {
        try {
            const url='https://jsonplaceholder.typicode.com/users';
            const response = await fetch(url);
            const result = await response.json();
            setUsers({...users,isLoaded:true,items:result});
        } catch (error) {
            setUsers({...users,isLoaded:true,error:error});
        }
    }, []);
   //show error view if error is there
   if(users.error){
       return <View>
               <Text>Error :{users.error.message}</Text>
       </View>
   }else if (!users.isLoaded){
        return <View>
            <Text>Loading.....</Text>
        </View>
   }else{
       {/**TODO: Convert this into flatList */}
       return <View>
                {users.items.map((user,index)=>(<View>
                <Text style={styles.title}> {user.email}</Text>
                </View>))}
       </View>
   } 

}

const App =()=>{
  return <View style={styles.container}>
        <Users/>
  </View>
}

export default App;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop:30
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      fontSize: 32,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });