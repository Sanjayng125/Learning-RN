import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function MapList() {
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
    {
      id: 5,
      name: 'Starc',
    },
    {
      id: 5,
      name: 'Starc',
    },
    {
      id: 5,
      name: 'Starc',
    },
    {
      id: 5,
      name: 'Starc',
    },
    {
      id: 5,
      name: 'Starc',
    },
    {
      id: 5,
      name: 'Starc',
    },
    {
      id: 5,
      name: 'Starc',
    },
    {
      id: 5,
      name: 'Starc',
    },
    {
      id: 5,
      name: 'Starc',
    },
    {
      id: 5,
      name: 'Starc',
    },
    {
      id: 5,
      name: 'Starc',
    },
    {
      id: 5,
      name: 'Starc',
    },
  ];

  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 28}}>List Using Map</Text>
      <ScrollView>
        {users.map((item, index) => (
          <Text key={index} style={styles.text}>
            {item.name}
          </Text>
        ))}
      </ScrollView>
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
