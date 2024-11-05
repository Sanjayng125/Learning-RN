import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function StatusBarExample() {
  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 28}}>Status Bar</Text>
      <StatusBar backgroundColor={'red'} barStyle={'dark-content'} />
    </View>
  );
}

const styles = StyleSheet.create({});
