import React from 'react';
import {View, FlatList, StyleSheet, Text } from 'react-native';
import {COMMENTS} from './data/comments-mock'


export const Item=({ title }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
  
  export default function App() {
    return (
      <View style={styles.container}>
        <FlatList
          data={COMMENTS}
          renderItem={({ item }) => <Item title={item.name} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });