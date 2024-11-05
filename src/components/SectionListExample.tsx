import {SectionList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function SectionListExample() {
  const users = [
    {
      name: 'Anil',
      data: ['PHP', 'React', 'Angular'],
    },
    {
      name: 'Peter',
      data: ['Java', 'JS', 'Python'],
    },
    {
      name: 'Bruce li',
      data: ['Assembly', 'ML', 'AI'],
    },
    {
      name: 'Tony Starc',
      data: ['CSS', 'CMake', 'HTML'],
    },
  ];

  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 28}}>Section List</Text>
      <SectionList
        sections={users}
        renderSectionHeader={({section: {name}}) => (
          <Text style={{fontSize: 31, fontWeight: 600}}>{name}</Text>
        )}
        renderItem={({item, index}) => (
          <Text style={{fontSize: 21, marginStart: 20}}>{item}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
