import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ServiceDetailScreen({ route }) {
  const { service } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{service.title}</Text>
      <Text>{service.description}</Text>
      {/* Add more details as needed */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
