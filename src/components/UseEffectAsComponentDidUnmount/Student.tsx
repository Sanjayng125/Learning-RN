import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

export default function Student() {
  useEffect(() => {
    console.warn('Hey on Mount');
    return () => console.warn('Hey on Unmount');
  });
  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 28}}>Student</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
