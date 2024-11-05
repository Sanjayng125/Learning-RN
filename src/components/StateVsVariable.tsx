import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

export default function StateVsVariable() {
  const [val, setVal] = useState(10);
  let data = 10;

  const fruit = () => {
    console.warn('Function called');
    data = data + 10;
    console.log(data);

    setVal(val + 10);
  };

  return (
    <View>
      <Button title="On Press" color={'yellow'} onPress={fruit} />
      <Text>Variable Data: {data}</Text>
      <Text>State Data: {val}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
