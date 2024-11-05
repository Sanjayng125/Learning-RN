import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function PlatformExample() {
  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 28}}>
        Check OS using Platforms
      </Text>
      <Text style={{fontSize: 20}}>Platform Version:{Platform.Version}</Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 600,
          color: Platform.OS === 'android' ? 'green' : 'red',
        }}>
        Platform OS:{Platform.OS}
      </Text>
      <Text
        style={{
          fontSize: 20,
        }}>
        Platform: {JSON.stringify(Platform)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
