import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useRef} from 'react';

export default function RefExample() {
  const inputRef = useRef<TextInput | null>(null);

  const updateInput = () => {
    inputRef?.current?.focus();
    inputRef?.current?.setNativeProps({
      fontSize: 24,
    });
  };
  return (
    <View>
      <TextInput placeholder="Enter name" style={styles.input} />
      <TextInput
        placeholder="Enter Password"
        style={styles.input}
        ref={inputRef}
      />
      <Button title="Update" onPress={updateInput} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 2,
    borderRadius: 10,
    margin: 10,
  },
});
