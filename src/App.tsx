import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import UserComponent from './components/UserComponent';
import PropsComponent from './components/PropsComponent';
import FlatListExample from './components/FlatListExample';
import BasicForm from './components/BasicForm';
import Stylings from './components/Stylings';
import TextInputExample from './components/TextInputExample';
import StateVsVariable from './components/StateVsVariable';
import MapList from './components/MapList';
import Grid from './components/Grid';
import FlatListWithComponent from './components/FlatListWithComponent';
import SectionListExample from './components/SectionListExample';
import ClassComponentExample from './components/ClassComponentExample';
import UseEffectHook from './components/UseEffectHook';
import ShowHideComp from './components/Show-Hide-Component/ShowHideComp';
import UseEffectAsComponentDidUnmount from './components/UseEffectAsComponentDidUnmount/UseEffectAsComponentDidUnmount';
import ResponsiveUiWithFlex from './components/ResponsiveUiWithFlex';
import RadioButton from './components/RadioButton';
import Loader from './components/Loader';
import ModalExample from './components/ModalExample';
import StatusBarExample from './components/StatusBarExample';
import PlatformExample from './components/PlatformExample';
import PackageExample from './components/PackageExample';
import CustomModal from './components/CustomModal';
import StackNavigation from './Navigation/StackNavigation/StackNavigation';
import BottomTabNavigation from './Navigation/BottomTabNavigation/BottomTabNavigation';
import TopTabNavigation from './Navigation/TopTabNavigation/TopTabNavigation';
import FetchRestAPI from './API/FetchRestAPI';
import APIDataList from './API/APIDataList';
import FetchFromJSONServer from './API/FetchFromJSONServer';
import PostDataToJSONServer from './API/PostDataToJSONServer';

export default function App() {
  const a = 'JSX Example';
  const [name, setName] = useState('React Native');

  return (
    <View style={{flex: 1}}>
      {/* <Text style={{fontSize: 40, textAlign: 'center'}}>
        Hello React Native
      </Text> */}
      {/* <Button title="Press Here" /> */}
      {/* <Text style={{fontSize: 20}}>{a}</Text> */}
      {/* Components */}
      {/* <UserComponent /> */}
      {/* State vs Variables */}
      {/* <StateVsVariable /> */}
      {/* Passing Props */}
      {/* <PropsComponent name={name} />
      <Button
        title="Update name"
        color={'yellow'}
        onPress={() => setName('React Native Updated')}
      /> */}
      {/* Text Input */}
      {/* <TextInputExample /> */}
      {/* Styling */}
      {/* <Stylings /> */}
      {/* Basic Form */}
      {/* <BasicForm /> */}
      {/* FLatList */}
      {/* <FlatListExample /> */}
      {/* List Using Map */}
      {/* <MapList /> */}
      {/* <Grid /> */}
      {/* <FlatListWithComponent /> */}
      {/* <SectionListExample /> */}
      {/* <ClassComponentExample /> */}
      {/* <UseEffectHook /> */}
      {/* <ShowHideComp /> */}
      {/* <UseEffectAsComponentDidUnmount /> */}
      {/* <ResponsiveUiWithFlex /> */}
      {/* <RadioButton /> */}
      {/* <Loader /> */}
      {/* <ModalExample /> */}
      {/* <StatusBarExample /> */}
      {/* <PlatformExample /> */}
      {/* <PackageExample /> */}
      {/* <CustomModal /> */}

      {/* React Native Navigation */}
      {/* <StackNavigation /> */}
      {/* <BottomTabNavigation /> */}
      {/* <TopTabNavigation /> */}

      {/* API */}
      {/* <FetchRestAPI /> */}
      {/* <APIDataList /> */}
      {/* JSON-Server */}
      <FetchFromJSONServer />
      {/* <PostDataToJSONServer /> */}
    </View>
  );
}

// const UserComponent = () => {
//   return (
//     <View>
//       <Text style={{fontSize: 20}}>This is User Component</Text>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 20,
  },
  input: {
    fontSize: 18,
    borderWidth: 2,
    margin: 10,
  },
});
