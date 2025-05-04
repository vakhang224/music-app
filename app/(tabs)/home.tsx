import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAlbums, getNewRelease } from "@/model/getApi/AlbumsService";
import { SafeAreaView } from "react-native-safe-area-context";
import Fontisto from "@expo/vector-icons/Fontisto";
import { FontAwesome6 } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Route, router } from "expo-router";

const Home = () => {
  // const [token, setToken] = useState<String|null>(null);
  // useEffect(() => {
  //   const getAccessTokenFromURL = () => {
  //     const urlParams = new URLSearchParams(window.location.search);
  //     const accessToken = urlParams.get('access_token');
  //     if (accessToken) {
  //       AsyncStorage.setItem('access_token', accessToken)
  //         .then(() => {
  //           setToken(accessToken);
  //         })
  //         .catch((error) => console.log('Error saving token:', error));
  //     }
  //   };
  //   getAccessTokenFromURL();
  // }, []);

  return (
    <Text>Hello</Text>
  );
};

export default Home;

const styles = StyleSheet.create({});
