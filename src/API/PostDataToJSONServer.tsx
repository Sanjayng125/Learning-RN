import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

export default function PostDataToJSONServer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [data, setData] = useState('');
  const [error, setError] = useState('');

  const saveData = async () => {
    setError('');
    setData('');
    if (name === '' || email === '' || age === '') {
      setError('All fields are required!');
      return;
    }
    if (!Number(age) || Number(age) <= 0) {
      setError('Enter a valid age!');
      return;
    }
    const res = await fetch('http://10.0.2.2:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        age: Number(age),
      }),
    });
    const resData = await res.json();
    setError('');
    setData(resData);
    setName('');
    setEmail('');
    setAge('');
  };

  return (
    <View>
      <Text style={{fontSize: 28}}>Post Data To JSON-Server</Text>
      <View style={styles.form}>
        <Text style={{textAlign: 'center', fontSize: 24, fontWeight: 600}}>
          Form
        </Text>
        <TextInput
          style={styles.input}
          placeholder="name"
          onChangeText={text => setName(text)}
          value={name}
        />
        <TextInput
          style={styles.input}
          placeholder="email"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="age"
          onChangeText={text => setAge(text)}
          value={age}
          inputMode="numeric"
          keyboardType="numeric"
        />
      </View>
      {error && (
        <Text
          style={{
            color: 'red',
            fontSize: 16,
            textAlign: 'center',
            marginBottom: 10,
          }}>
          {error}
        </Text>
      )}
      <Button title="Save Data" onPress={saveData} />
      {data && (
        <Text style={{fontSize: 24}}>{JSON.stringify(data, null, 4)}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    borderWidth: 2,
    margin: 10,
    padding: 10,
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
  },
});
