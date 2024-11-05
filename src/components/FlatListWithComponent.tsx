import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatListWithComponent() {
  const users = [
    {
      name: 'Anil',
      email: 'abc@gmail.com',
    },
    {
      name: 'Sam',
      email: 'def@gmail.com',
    },
    {
      name: 'Peter',
      email: 'ghi@gmail.com',
    },
    {
      name: 'Michel',
      email: 'jkl@gmail.com',
    },
  ];

  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 28}}>
        Component With FlatList
      </Text>
      <FlatList
        data={users}
        renderItem={({item, index}) => <UserData key={index} item={item} />}
      />
    </View>
  );
}

const UserData = ({item}: {item: {name: string; email: string}}) => {
  //   const item = props.item;
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{item.name}</Text>
      <Text style={styles.text}>{item.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: 'orange',
    flex: 1,
    margin: 2,
    backgroundColor: 'skyblue',
    padding: 2,
    borderWidth: 1,
    textAlign: 'center',
  },
  box: {
    flexDirection: 'row',
    borderWidth: 2,
    margin: 10,
    padding: 5,
  },
});
