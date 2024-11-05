import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import UserCard from './UserCard';

export default function FetchFromJSONServer() {
  const [data, setData] = useState<UserProps[]>([]);

  const getData = async () => {
    const res = await fetch('http://10.0.2.2:3000/users');
    const resData = await res.json();
    setData(resData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      <Text style={{fontSize: 28}}>FetchFromJSONServer</Text>
      {data.length &&
        data.map((item, index) => (
          <View style={styles.box} key={index}>
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
        ))}
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
