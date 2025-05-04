import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/authProvide";
import { ActivityIndicator } from "react-native";
const authSuccess = () => {
  const { login } = useAuth();
  const [token, setToken] = useState<String | null>(null);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split("?")[1]);
    const token = urlParams.get("access_token");
    console.log(token);
    const refreshToken = urlParams.get("refresh_token");
    if (token) {
      login(token);
      setToken(token);
    }
  }, [login]);

  return (
    <View className="w-full flex flex-col justify-center items-center h-full bg-gray-900">
      <View className="flex flex-col justify-center items-center p-4 gap-4">
        <View className="p-3">
          <Image
            source={require("@/assets/images/bg_bocchi.png")}
            className="w-10 h-10"
          />
        </View>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    </View>
  );
};

export default authSuccess;

const styles = StyleSheet.create({
  image: {
    borderRadius: 50,
    backgroundColor: "white",
    width: 80,
    height: 80,
  },
});
