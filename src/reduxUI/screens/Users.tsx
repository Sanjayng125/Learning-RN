import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/store';
import {fetchUsers} from '../../redux/slices/userSlice';

export default function Users() {
  const {users, isLoading, error} = useSelector(
    (state: RootState) => state.users,
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <View>
      {isLoading && (
        <Text style={{fontSize: 24, textAlign: 'center'}}>Loading...</Text>
      )}
      {error && <Text>{error}</Text>}
      {!isLoading && users && (
        <FlatList
          data={users}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View>
              <Image
                source={{uri: item.image}}
                style={{width: '100%', height: 300, objectFit: 'contain'}}
              />
              <Text>{item.name}</Text>
              <Text>{item.email}</Text>
              <Text>{item.age}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
