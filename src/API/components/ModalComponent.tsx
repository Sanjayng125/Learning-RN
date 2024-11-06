import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

export default function ModalComponent({
  visible,
  item,
  setShowUpdateModal,
  getData,
}: {
  visible: boolean;
  item: UserProps;
  setShowUpdateModal: (state: boolean) => void;
  getData: () => void;
}) {
  const [newName, setNewName] = useState(item.name);
  const [newEmail, setNewEmail] = useState(item.email);
  const [newAge, setNewAge] = useState(item.age.toString());
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const updateUser = async () => {
    setError('');
    if (newName === '' || newEmail === '' || newAge === '') {
      setError('All fields are required!');
      return;
    }
    if (!Number(newAge || Number(newAge) <= 0)) {
      setError('Enter a valid age!');
      return;
    }
    if (
      newName === item.name &&
      newEmail === item.email &&
      Number(newAge) === item.age
    ) {
      setError('Change something to update!');
      return;
    }
    setLoading(true);
    const res = await fetch('http://10.0.2.2:3000/users/' + item.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: newName,
        email: newEmail,
        age: Number(newAge),
      }),
    });
    const resData = await res.json();
    if (resData) {
      getData();
      setShowUpdateModal(false);
    }
    setLoading(false);
  };

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.modalMainView}>
        <View style={styles.modalInnerView}>
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() => setShowUpdateModal(false)}
            disabled={loading}>
            <Text style={styles.closeBtnTxt}>X</Text>
          </TouchableOpacity>
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 24,
                fontWeight: 600,
                marginBottom: 20,
              }}>
              Update User
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="name"
                style={styles.input}
                value={newName}
                onChangeText={text => setNewName(text)}
                editable={!loading}
              />
              <TextInput
                placeholder="email"
                style={styles.input}
                value={newEmail}
                onChangeText={text => setNewEmail(text)}
                editable={!loading}
              />
              <TextInput
                placeholder="age"
                style={styles.input}
                value={newAge}
                onChangeText={text => setNewAge(text)}
                editable={!loading}
              />
            </View>
            {error && (
              <Text
                style={{
                  color: 'red',
                  textAlign: 'center',
                  fontSize: 20,
                  marginTop: 20,
                }}>
                {error}
              </Text>
            )}
            <TouchableOpacity
              style={styles.updateBtn}
              onPress={updateUser}
              disabled={loading}>
              <Text style={styles.updateBtnTxt}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalMainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modalInnerView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: 'white',
    shadowOpacity: 0.5,
    elevation: 30,
    position: 'relative',
  },
  closeBtn: {
    position: 'absolute',
    top: 10,
    right: 15,
    paddingHorizontal: 5,
    zIndex: 10,
  },
  closeBtnTxt: {
    fontSize: 20,
  },
  inputContainer: {
    gap: 20,
  },
  input: {
    width: '100%',
    borderWidth: 2,
    borderRadius: 10,
  },
  updateBtn: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgb(50, 100, 255)',
    marginTop: 20,
  },
  updateBtnTxt: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: 600,
  },
});
