import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RootParamLists} from '../StackNavigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type AboutProps = NativeStackScreenProps<RootParamLists, 'About'>;

export default function About({route}: AboutProps) {
  return (
    <View>
      <Text style={{fontSize: 30}}>name: {route.params.name}</Text>
      <Text style={{fontSize: 30}}>age: {route.params.age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
