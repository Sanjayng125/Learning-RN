import {View, Text} from 'react-native';
import React from 'react';

export default function PropsComponent(props: {name: string}) {
  return (
    <View style={{backgroundColor: 'skyblue'}}>
      <Text>PropsComponent: {props.name}</Text>
    </View>
  );
}
