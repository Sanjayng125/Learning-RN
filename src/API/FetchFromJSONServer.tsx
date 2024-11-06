import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ModalComponent from './components/ModalComponent';

export default function FetchFromJSONServer() {
  const [data, setData] = useState<UserProps[]>([]);
  const [showUpdateModal, setShowUpdateModal] = useState<boolean>(true);
  const [selectedUser, setSelectedUser] = useState<UserProps | null>(null);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const res = await fetch('http://10.0.2.2:3000/users');
    const resData = await res.json();
    setData(resData);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteUser = async (item: UserProps) => {
    const res = await fetch('http://10.0.2.2:3000/users/' + item.id, {
      method: 'DELETE',
    });
    const resData = await res.json();
    if (resData) {
      getData();
    }
  };

  const searchUser = async (searchInput: string) => {
    if (searchInput === '') {
      getData();
      return;
    }
    if (loading) return;
    setLoading(true);
    const res = await fetch(`http://10.0.2.2:3000/users?q=${searchInput}`);
    const resData = await res.json();
    setData(resData);

    setLoading(false);
  };

  return (
    <View>
      <Text style={{fontSize: 28}}>FetchFromJSONServer</Text>
      <TextInput
        placeholder="Search"
        style={styles.input}
        onChangeText={text => searchUser(text)}
      />
      {data.length && (
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.box}>
              <View style={styles.userInfo}>
                <Text style={styles.text}>{item?.name}</Text>
                <Text style={styles.text}>{item?.email}</Text>
                <Text style={styles.text}>{item?.age}</Text>
              </View>
              <View style={styles.userActions}>
                <TouchableOpacity
                  style={[styles.btn, styles.deleteButton]}
                  onPress={() => deleteUser(item)}>
                  <Text style={styles.btnText}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.btn, styles.updateButton]}
                  onPress={() => {
                    setShowUpdateModal(true);
                    setSelectedUser(item);
                  }}>
                  <Text style={styles.btnText}>Update</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
      {showUpdateModal && selectedUser && (
        <ModalComponent
          item={selectedUser}
          visible={showUpdateModal}
          setShowUpdateModal={setShowUpdateModal}
          getData={getData}
        />
      )}
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
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 24,
  },
  userInfo: {
    flex: 1,
  },
  userActions: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  btn: {
    borderRadius: 10,
    padding: 10,
  },
  deleteButton: {
    backgroundColor: 'red',
  },
  updateButton: {
    backgroundColor: 'blue',
  },
  btnText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 2,
    borderRadius: 10,
    margin: 10,
  },
});
