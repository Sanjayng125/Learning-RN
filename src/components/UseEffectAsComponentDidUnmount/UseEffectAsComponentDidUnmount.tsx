import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Student from './Student';

export default function UseEffectAsComponentDidUnmount() {
  const [show, setShow] = useState(false);

  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 28}}>
        useEffect as componentDidUnmount
      </Text>
      <Button title="Toggle" onPress={() => setShow(!show)} />
      {show && <Student />}
    </View>
  );
}

const styles = StyleSheet.create({});
