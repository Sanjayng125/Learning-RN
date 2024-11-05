import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RootParamLists} from '../TopTabNavigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type AboutProps = NativeStackScreenProps<RootParamLists, 'About'>;

export default function About({route}: AboutProps) {
  return (
    <View style={styles.main}>
      <Text>About</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
