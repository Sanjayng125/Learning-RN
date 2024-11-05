import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

export default function BasicForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showFormDetails, setShowFormDetails] = useState(false);

  const clearForm = () => {
    setShowFormDetails(false);
    setUsername('');
    setEmail('');
    setPassword('');
  };
  return (
    <View
      style={{
        marginVertical: 20,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        padding: 10,
      }}>
      <Text style={{textAlign: 'center', fontSize: 28}}>Basic Form</Text>
      <TextInput
        placeholder="Enter Username"
        style={styles.input}
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        placeholder="Enter Email"
        style={styles.input}
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder="Enter Password"
        style={styles.input}
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <View style={{gap: 10}}>
        <Button
          title="Print Details"
          onPress={() => setShowFormDetails(true)}
        />
        <Button title="Clear Details" color={'red'} onPress={clearForm} />
      </View>
      {showFormDetails && (
        <View>
          <Text style={{fontSize: 18}}>Username: {username}</Text>
          <Text style={{fontSize: 18}}>Email: {email}</Text>
          <Text style={{fontSize: 18}}>Password: {password}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 2,
    margin: 10,
  },
});
