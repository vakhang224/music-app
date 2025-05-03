import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import * as Linking from "expo-linking";

const Login = () => {
  const loginWithSpotify = () => {
    Linking.openURL("http://192.168.1.4:3000/login");
  };

  return (
    <View className="w-full flex flex-col justify-center items-center h-full bg-gray-900">
      <View className="flex flex-col justify-center items-center p-4 gap-4">
        <Text className="text-white font-bold text-5xl text-center">
          WELCOME TO LOGIN
        </Text>
        <Image
          source={require("@/assets/images/bg_bocchi.png")}
          className="rounded-full bg-white w-20 h-20"
        />
        <Text className="text-white text-xl text-center">
          What are you waiting for?{"\n"} Come here and chilling with us
        </Text>
      </View>

      <View className="Login w-[80%]">
        <TouchableOpacity
          className="bg-green-500 p-4 rounded-full"
          onPress={loginWithSpotify}
        >
          <Text className="text-white text-center font-bold">
            Login with Spotify
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
