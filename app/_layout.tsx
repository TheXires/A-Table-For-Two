import { Stack } from 'expo-router';

export const unstable_settings = {
  initialRouteName: 'home',
};

export default function RootLayoutNav() {
  return (
    <Stack initialRouteName="home">
      <Stack.Screen name="create" options={{}} />
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="lobby" options={{}} />
      <Stack.Screen name="play" options={{}} />
    </Stack>
  );
}
