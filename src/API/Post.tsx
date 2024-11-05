import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Post({
  data,
}: {
  data: {id: number; title: string; body: string; userId: number};
}) {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.headerText}>ID: {data?.id}</Text>
        <Text style={styles.headerText}>User ID: {data?.userId}</Text>
      </View>
      <Text style={{fontSize: 24}}>Title: {data?.title}</Text>
      <Text style={{fontSize: 24}}>Body: {data?.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    justifyContent: 'center',
    elevation: 10,
    borderRadius: 20,
    padding: 10,
    margin: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    padding: 10,
    backgroundColor: '#ccc',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 600,
  },
});
