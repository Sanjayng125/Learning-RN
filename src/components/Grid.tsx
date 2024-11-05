import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Grid() {
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
      id: 4,
      name: 'Michle',
    },
    {
      id: 4,
      name: 'Michle',
    },
    {
      id: 4,
      name: 'Michle',
    },
    {
      id: 4,
      name: 'Michle',
    },
    {
      id: 4,
      name: 'Michle',
    },
    {
      id: 4,
      name: 'Michle',
    },
    {
      id: 4,
      name: 'Michle',
    },
    {
      id: 4,
      name: 'Michle',
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
      <Text style={{textAlign: 'center', fontSize: 28}}>
        Grid With Dynamic Data
      </Text>
      <ScrollView>
        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
          {users.map((item, index) => (
            <Text key={index} style={styles.item}>
              {item.name}
            </Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    fontSize: 25,
    backgroundColor: 'blue',
    color: 'white',
    margin: 5,
    padding: 5,
    width: 120,
    height: 120,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
