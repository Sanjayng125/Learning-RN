import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {exStyles} from '../styles/styles';

export default function Stylings() {
  return (
    <View>
      <Text style={{color: 'blue', fontSize: 20}}>Inline Styling</Text>
      <Text style={styles.text}>Internal Styling</Text>
      <Text style={exStyles.text}>External Styling</Text>
      <Text style={[exStyles.text, exStyles.textBg]}>Multiple Classes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 20,
  },
});
