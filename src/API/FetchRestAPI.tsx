import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import PostCard from './components/PostCard';

export default function FetchRestAPI() {
  const [data, setData] = useState<any>('');

  const getAPIData = async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/1',
    );
    const resData = await response.json();
    setData(resData);
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <View style={{flex: 1}}>
      <Text style={{textAlign: 'center', fontSize: 28}}>API Call</Text>
      <View style={{flex: 1}}>{data && <PostCard data={data} />}</View>
    </View>
  );
}

const styles = StyleSheet.create({});
