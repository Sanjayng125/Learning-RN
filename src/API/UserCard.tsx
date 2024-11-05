import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function UserCard(item: UserProps) {
  return (
    <View style={styles.box}>
      <View>
        <Text style={styles.text}>{item?.name}</Text>
        <Text style={styles.text}>{item?.email}</Text>
        <Text style={styles.text}>{item?.age}</Text>
      </View>
      <View>
        <Button title="Delete" />
        <Button title="Update" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    flex: 1,
    flexDirection: 'row',
  },
  text: {
    fontSize: 24,
  },
  userInfo: {
    flex: 1,
  },
  userActions: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
});
