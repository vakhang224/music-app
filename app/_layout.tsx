import "./global.css";
import { Stack } from "expo-router";
import { AuthProvider } from "@/app/context/authProvide";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export default function RootLayout() {
  return (   
    <AuthProvider>
      <GestureHandlerRootView className="flex-1"> 
        <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="auths" options={{ headerShown: false }} />
        <Stack.Screen name="songs/[id]" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="playlists/[id]" options={{headerShown:false}}/>
      </Stack>
      </GestureHandlerRootView>
 
    </AuthProvider>
  );
}
