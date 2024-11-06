import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AsyncStorageExample() {
  const [name, setName] = useState('');

  const setData = async () => {
    await AsyncStorage.setItem('name', 'RN New Arch');
  };

  const getData = async () => {
    const res = await AsyncStorage.getItem('name');
    console.log(res);
    if (res) setName(res);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      <Text style={{fontSize: 28}}>AsyncStorageExample</Text>
      <Button title="Set Data" onPress={setData} />
      <Button title="Get Data" onPress={getData} />
      <Text style={{fontSize: 24}}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
