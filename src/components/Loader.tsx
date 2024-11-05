import {ActivityIndicator, Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

export default function Loader() {
  const [loading, setLoading] = useState(false);

  const fetchSomeData = () => {
    if (!loading) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };

  return (
    <View style={{flex: 1}}>
      <Text style={{textAlign: 'center', fontSize: 28}}>
        Activity Indicator
      </Text>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={100} color={'red'} animating={loading} />
        <Button title="Fetch Data" onPress={fetchSomeData} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
