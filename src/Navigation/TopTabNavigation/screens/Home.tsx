import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootParamLists} from '../TopTabNavigation';

type HomeProps = NativeStackScreenProps<RootParamLists, 'Home'>;

export default function Home({navigation}: HomeProps) {
  return (
    <View style={styles.main}>
      <Text>Home</Text>
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
