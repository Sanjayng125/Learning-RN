import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function UseEffectHook() {
  const [val, setVal] = useState(0);
  //   useEffect(() => {
  //     console.warn('Hello');
  //   }); // calls when component mounts, and everytime a state or prop changes.

  //   useEffect(() => {
  //     console.warn('Hello');
  //   }, []); // calls only once when component mounts.

  useEffect(() => {
    console.warn('Hello');
  }, [val]); // calls when  component mounts and everytime when val state changes.

  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 28}}>useEffect hook</Text>
      <Text>{val}</Text>
      <Button title="Update" onPress={() => setVal(val + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({});
