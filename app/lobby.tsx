import { router } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Lobby() {
  return (
    <View style={styles.container}>
      <Text>LobbyScreen</Text>
      <Button title="Start" onPress={() => router.push('/play')} />
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
