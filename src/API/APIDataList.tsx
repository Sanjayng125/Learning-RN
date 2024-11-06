import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import PostCard from './components/PostCard';

export default function APIDataList() {
  const [data, setData] = useState<PostProps[]>([]);

  const getAPIData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const resData = await response.json();
    setData(resData);
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 28}}>API Data List</Text>
      {/* With ScrollView and Map */}
      {/* {data.length && (
        <ScrollView style={styles.scrollContainer}>
          <View>
            {data.map((item, index) => (
              <PostCard key={index} data={item} />
            ))}
          </View>
        </ScrollView>
      )} */}

      {/* With FlatList */}
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.main}>
            <View style={styles.header}>
              <Text style={styles.headerText}>ID: {item?.id}</Text>
              <Text style={styles.headerText}>User ID: {item?.userId}</Text>
            </View>
            <Text style={{fontSize: 24}}>Title: {item?.title}</Text>
            <Text style={{fontSize: 24}}>Body: {item?.body}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    marginBottom: 50,
  },
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
