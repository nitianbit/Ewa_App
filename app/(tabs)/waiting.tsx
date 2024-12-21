import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WaitingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Won't be long - our staff will approve your request</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    color: '#005a9c',
  },
});
