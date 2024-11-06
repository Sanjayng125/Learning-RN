import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function UserCard(item: UserProps) {
  const deleteUser = async (item: UserProps) => {
    const res = await fetch('http://10.0.2.2:3000/users/' + item.id, {
      method: 'DELETE',
    });
    const resData = await res.json();
    console.log(resData);
  };

  return (
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
        <TouchableOpacity style={[styles.btn, styles.updateButton]}>
          <Text style={styles.btnText}>Update</Text>
        </TouchableOpacity>
      </View>
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
});
