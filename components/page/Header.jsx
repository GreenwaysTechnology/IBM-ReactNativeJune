import React from 'react';
import {View,Text} from 'react-native';

export const Header=({title})=><View>
    <Text>{title}</Text>
</View>

//Default Props for Header Component
Header.defaultProps={
    title: 'some header'
}
