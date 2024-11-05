import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ResponsiveUiWithFlex() {
  return (
    <View style={{flex: 1}}>
      <Text style={{textAlign: 'center', fontSize: 28}}>
        Responsive UI With Flex
      </Text>
      <View style={styles.main}>
        <View style={styles.box1}>
          <View style={styles.box101}></View>
          <View style={styles.box102}></View>
          <View style={styles.box103}></View>
        </View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  box1: {
    flex: 2,
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  box101: {
    flex: 1,
    backgroundColor: 'skyblue',
    margin: 10,
  },
  box102: {
    flex: 1,
    backgroundColor: 'blue',
    margin: 10,
  },
  box103: {
    flex: 1,
    backgroundColor: 'orange',
    margin: 10,
  },
  box2: {
    flex: 1,
    backgroundColor: 'green',
  },
  box3: {
    flex: 1,
    backgroundColor: 'blue',
  },
  box4: {},
});
