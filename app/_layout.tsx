import { Stack } from 'expo-router';

export const unstable_settings = {
  initialRouteName: 'HomeScreen',
};

export default function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen name="HomeScreen" options={{}} />
    </Stack>
  );
}
