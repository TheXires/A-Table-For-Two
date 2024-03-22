import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Play() {
  useEffect(() => {
    setTimeout(() => {
      router.navigate('/home');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text>GameScreen</Text>
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
