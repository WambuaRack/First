import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Explore() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Explore Tab</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: '#007AFF',
  },
});
