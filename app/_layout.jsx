import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {

  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY

  useFonts({
    'outfit':require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium':require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold':require('./../assets/fonts/Outfit-Bold.ttf'),
  })

  return (
    <Stack>
      <Stack.Screen name="index"/>
      <Stack.Screen name="tab"
      options={{
        headerShown: false
      }}
      />
      <Stack.Screen name="login/index"
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen name="login/login"
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen name="login/signup"
      options={{
        headerShown:false
      }}
      />
      </Stack>
  );
}
