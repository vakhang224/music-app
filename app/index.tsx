import Login from "@/app/auths/login";
import { router } from "expo-router";
import { Button, Image, ImageBackground, SafeAreaView, Text, View, TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground 
        source={require('@/assets/images/bocchi.jpg')} 
        className="flex-1 justify-end items-center"
      >
       <View className="w-full flex items-center m-2">
          <View className="w-full p-4 mb-5 flex items-center bg-gray-500" style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
              <Text className="text-white text-5xl font-bold">WELCOME</Text>
              <Text className="text-white text-xl text-center">Sit back, relax, and let the rhythm guide you.
                From soulful ballads to electrifying beats — your personal soundtrack starts now.
              </Text>
          </View>
          <TouchableOpacity className="bg-gray-900 p-5 w-[90%] rounded-full" onPress={()=>{router.replace("/auths/login")}}>
                <Text className="text-white text-center font-bold text-xl">Get Started</Text>
          </TouchableOpacity>
       </View>
   </ImageBackground>
    </SafeAreaView>
  );
}
