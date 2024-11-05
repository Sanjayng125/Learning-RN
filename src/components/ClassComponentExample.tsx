import {View, Text, Button, TextInput} from 'react-native';
import React, {Component, ReactNode, useState} from 'react';
import ClassComponent2 from './ClassComponent2';

export default class ClassComponentExample extends Component {
  constructor() {
    super({});
    this.state = {
      name: 'abc',
      age: 18,
    };
  }
  foo = () => {
    console.log('Foo');
  };

  updateState = (val: string) => {
    this.setState({name: val});
  };

  render(): ReactNode {
    return (
      <View>
        <Text style={{textAlign: 'center', fontSize: 28}}>Class Component</Text>
        <Button title="Press me" onPress={this.foo} />
        <ClassComponent2 />
        <Text>{this.state.name}</Text>
        <Text>{this.state.age}</Text>
        <Button
          title="Update state"
          onPress={() => this.updateState('Updated')}
        />
        <TextInput
          onChangeText={text => this.updateState(text)}
          placeholder="Enter something..."
        />
      </View>
    );
  }
}
