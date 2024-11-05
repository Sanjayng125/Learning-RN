import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootParamLists} from '../StackNavigation';

type HomeProps = NativeStackScreenProps<RootParamLists, 'Home'>;

export default function Home({navigation}: HomeProps) {
  const name = 'RN';
  const age = 9;

  return (
    <View style={styles.main}>
      <Text>Home</Text>
      <Pressable
        onPress={() => navigation.navigate('About', {name, age})}
        style={styles.btn}>
        <Text style={styles.btnText}>About</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: 100,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    elevation: 10,
    backgroundColor: 'rgb(50, 100, 200)',
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
  },
});
