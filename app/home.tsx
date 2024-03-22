import { Link, router } from 'expo-router';
import React from 'react';
import { Button, SafeAreaView, StyleSheet, View } from 'react-native';
import SearchBar from '@/components/Searchbar';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      <View style={styles.innerContainer}>
        <Button title="Create New Game" onPress={() => router.push('/create')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
