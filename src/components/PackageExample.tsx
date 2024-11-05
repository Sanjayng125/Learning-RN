import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';

export default function PackageExample() {
  return <WebView source={{uri: 'https://www.npmjs.com/'}} />;
}

const styles = StyleSheet.create({});
