import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

export default function RadioButton() {
  const [selectedRadio, setSelectedRadio] = useState(-1);

  const skills = [
    {
      name: 'Java',
    },
    {
      name: 'Python',
    },
    {
      name: 'Javascript',
    },
    {
      name: 'HTML',
    },
    {
      name: 'CSS',
    },
    {
      name: 'Node',
    },
    {
      name: 'React',
    },
  ];

  return (
    <View style={{flex: 1}}>
      <Text style={{textAlign: 'center', fontSize: 28}}>
        Custom Radio Button
      </Text>
      <View style={styles.main}>
        {skills.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => setSelectedRadio(index)}>
            <View style={styles.radioWrapper}>
              <View style={styles.radio}>
                {selectedRadio === index && (
                  <View style={styles.radioSelected}></View>
                )}
              </View>
              <Text style={styles.radioText}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioText: {
    fontSize: 20,
  },
  radio: {
    width: 40,
    height: 40,
    borderColor: 'skyblue',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
    padding: 3,
  },
  radioSelected: {
    backgroundColor: 'skyblue',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
  },
});
