import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import ExampleComponent from './ExampleComponent';

export default function ShowHideComp() {
  const [showComp, setShowComp] = useState(false);

  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 28}}>
        Show Hide Component
      </Text>
      <Button title="Show/Hide" onPress={() => setShowComp(!showComp)} />
      {showComp && <ExampleComponent />}
    </View>
  );
}

const styles = StyleSheet.create({});
