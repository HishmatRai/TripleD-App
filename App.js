import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/Navigation/Navigation'
export default function App(props) {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3F4E87',
  },
});
