import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

export default function CustomModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.main}>
      {showModal && (
        <View style={styles.modalWrapper}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>Hello Custom Modal</Text>
            <Button title="Close Modal" onPress={() => setShowModal(false)} />
          </View>
        </View>
      )}
      <View>
        <Button title="Open Modal" onPress={() => setShowModal(true)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  modal: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    elevation: 10,
    borderRadius: 20,
  },
  modalText: {
    fontSize: 24,
  },
});
