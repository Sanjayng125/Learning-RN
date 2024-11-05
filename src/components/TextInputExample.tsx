import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

export default function TextInputExample() {
  const [input, setInput] = useState('');
  return (
    <View>
      <Text>Text Input: {input}</Text>
      <TextInput
        placeholder="Enter something..."
        style={styles.input}
        value={input}
        onChangeText={val => setInput(val)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 2,
    margin: 10,
  },
});
