import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootParamLists} from '../ReduxStore';
import {RootState} from '../../redux/store';

export default function Header() {
  const cart = useSelector((state: RootState) => state.cart.products);
  const {navigate} = useNavigation<NativeStackNavigationProp<RootParamLists>>();

  // console.log(state);

  return (
    <View style={styles.main}>
      <Text style={styles.heading}>Home</Text>
      <View style={styles.rightSide}>
        <Button title="Users" onPress={() => navigate('Users')} />
        <Text style={styles.cartText}>🛒: {cart.length}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 10,
    elevation: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  heading: {
    flex: 2,
    fontSize: 24,
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
  rightSide: {
    flex: 1,
    flexDirection: 'row',
    columnGap: 10,
    justifyContent: 'flex-end',
  },
  cartText: {
    fontSize: 20,
    textAlign: 'right',
  },
});
