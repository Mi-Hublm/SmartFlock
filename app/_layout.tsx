import { Stack } from "expo-router";
import { useFonts } from "expo-font";


export default function RootLayout() {


  const [fontsLoaded] = useFonts({
    "OpenSans-Bold": {
      uri: "https://fonts.gstatic.com/s/opensans/v23/mem8YaGs126MiZpBA-UFVZ0b.woff2",
    },
  });

  if (!fontsLoaded) {
    return null; // Wait for fonts to load
  }

  return (

    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="Intro/Intro1" options={{ headerShown: false }} />
      <Stack.Screen name="Intro/Intro2" options={{ headerShown: false }} />
      <Stack.Screen name="Intro/Terms" options={{ headerShown: false }} />
    </Stack>
  );
}