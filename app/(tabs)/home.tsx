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
    <SafeAreaView>
      <View className="w-full h-full flex flex-col bg-black-100 gap-3 p-4">
        <View className="flex flex-row justify-between">
          <Text className="text-white text-3xl font-bold">Thư viện</Text>

          <View className="flex flex-row gap-6">
            <TouchableOpacity
              onPress={() => {
                console.log("Search");
              }}
            >
              <Fontisto name="search" size={24} color="white" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                console.log("add");
              }}
            >
              <FontAwesome6 name="add" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="tag text-white flex flex-row gap-2">
          <TouchableOpacity
            onPress={() => {
              console.log("PlayList");
            }}
            className="bg-white p-3 rounded-full"
          >
            <Text className="font-bold">Danh sách phát</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              console.log("Artist");
            }}
            className="bg-white p-3 rounded-full"
          >
            <Text className="font-bold">Tác giả</Text>
          </TouchableOpacity>
        </View>

        <View className="flex flex-row justify-between items-center p-3 bg-pink-400 rounded-2xl">
          <TouchableOpacity
            onPress={() => {
              console.log("Sắp xếp");
            }}
            className="flex flex-row gap-3 items-center"
          >
            <FontAwesome name="sort" size={24} color="white" />
            <Text className="text-white">Sắp xếp</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              console.log("Change format");
            }}
            className="flex flex-row gap-3 items-center"
          >
            <AntDesign name="appstore-o" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <ScrollView className="p-3 flex flex-col gap-3 h-full">
          <View className="artist flex flex-col gap-4 w-full h-full">

            <TouchableOpacity
              onPress={() => {
                console.log("info Artist");
              }}
            >
              <View className="Artists flex flex-row items-center gap-3 ">
                <Image
                  source={{
                    uri: "https://i.scdn.co/image/ab6761610000e5ebbcb1c184c322688f10cdce7a",
                  }}
                  className="rounded-full w-16 h-16"
                />
                <View className="InfoArtist">
                  <Text className="text-white font-bold">ADO</Text>
                  <Text className="text-white text-sm italic">Nghệ sĩ</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                console.log("info Artist");
              }}
            >
              <View className="Artists flex flex-row items-center gap-3 ">
                <Image
                  source={{
                    uri: "https://i.scdn.co/image/ab6761610000e5ebbcb1c184c322688f10cdce7a",
                  }}
                  className="rounded-md w-16 h-16"
                />
                <View className="InfoArtist">
                  <Text className="text-white font-bold">Tên nhạc</Text>
                  <Text className="text-white text-sm italic">Tên nghệ sĩ</Text>
                </View>
              </View>
            </TouchableOpacity>


            <TouchableOpacity
              onPress={() => {
               router.push("/playlists/123");
              }}
            >
              <View className="Artists flex flex-row items-center gap-3 ">
                <Image
                  source={{
                    uri: "https://i.scdn.co/image/ab6761610000e5ebbcb1c184c322688f10cdce7a",
                  }}
                  className="w-16 h-16"
                />
                <View className="InfoArtist">
                  <Text className="text-white font-bold">Tên danh sách nhạc</Text>
                  <Text className="text-white text-sm italic">Số lượng nhạc</Text>
                </View>
              </View>
            </TouchableOpacity>

           


            <TouchableOpacity
              onPress={() => {
                console.log("info Artist");
              }}
            >
              <View className="Artists flex flex-row items-center gap-3">
                <View className=" w-16 h-16 flex justify-center items-center bg-white rounded-md">
                <FontAwesome6 name="add" size={25} color="black" />
                </View>
                <View className="InfoArtist">
                  <Text className="text-white font-bold">Tên danh sách</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                router.push("/playlists/addPlayList")
              }}
            >
              <View className="Artists flex flex-row items-center gap-3">
                <View className=" w-16 h-16 flex justify-center items-center bg-white rounded-full">
                <FontAwesome6 name="add" size={25} color="black" />
                </View>
                <View className="InfoArtist">
                  <Text className="text-white font-bold">Thêm nghệ sĩ</Text>
                </View>
              </View>
            </TouchableOpacity>
            
          </View>
        </ScrollView>

        
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
