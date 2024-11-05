import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatListExample() {
  const users = [
    {
      id: 1,
      name: 'Anil',
    },
    {
      id: 2,
      name: 'Sam',
    },
    {
      id: 3,
      name: 'Jack',
    },
    {
      id: 4,
      name: 'Michle',
    },
    {
      id: 5,
      name: 'Starc',
    },
  ];

  return (
    <View
      style={{
        marginVertical: 20,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        padding: 10,
      }}>
      <Text style={{textAlign: 'center', fontSize: 28}}>FlatList</Text>
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <Text style={styles.text}>{item.name}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    backgroundColor: '#cdcdcd',
    marginVertical: 10,
    padding: 10,
  },
});
