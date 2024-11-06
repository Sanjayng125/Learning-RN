import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from './components/Header';
import Products from './screens/Products';
import Users from './screens/Users';

export type RootParamLists = {
  Home: undefined;
  Users: undefined;
};

const Stack = createNativeStackNavigator<RootParamLists>();

export default function ReduxStore() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Products}
          options={{
            header: () => <Header />,
          }}
        />
        <Stack.Screen name="Users" component={Users} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
