import { Link, router } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Create() {
  return (
    <View style={styles.container}>
      <Text>CreateGameScreen</Text>
      <Button title="Create" onPress={() => router.push('/lobby')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
