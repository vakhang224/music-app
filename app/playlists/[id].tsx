import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import { LinearGradient } from "expo-linear-gradient";
import SongCard from "../../components/songsCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { MaterialIcons } from "@expo/vector-icons";
import Foundation from '@expo/vector-icons/Foundation';
const PlayList = () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const [dataPlayList, setDataPlayList] = useState({});
  const [idTrack, setID] = useState<String | null>(null);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const bottomSheetRefPlayList = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["50%", "100%"], []);
  const [isOpenBottomSheet, SetOpenBottomSheet] = useState(true);
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const handleSongInPlayList = (id: String) => {
    bottomSheetRef.current?.snapToIndex(1);
    setID(id);
  };

  const handlePlaylist = () => {
    bottomSheetRefPlayList.current?.snapToIndex(1);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient colors={["#141414", "#000000"]} className="flex-1">
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ paddingBottom: 30 }}
        >
          <View className="flex flex-col gap-3 items-center ">
            <View className="bg-transparent w-full p-3 flex flex-row items-center gap-8">
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Ionicons name="arrow-back" size={24} color="white" />
              </TouchableOpacity>

              <Text className="font-bold text-2xl text-white">
                Tên danh sách phát nhạc
              </Text>
            </View>

            <View className="w-[90%] flex flex-row fixed top-0 items-center justify-center">
              <TextInput
                placeholder="Search..."
                className="bg-white rounded-md w-full pl-10"
              />
              <FontAwesome
                name="search"
                size={15}
                color="black"
                className="absolute left-3"
              />
            </View>

            <View className="flex flex-col items-center gap-3 w-full">
              <Image
                source={{
                  uri: "https://i.scdn.co/image/ab6761610000e5ebbcb1c184c322688f10cdce7a",
                }}
                className="rounded-md w-48 h-48 mt-5"
              />

              <View className="InfoPlayListb w-full">
                <Text className="text-white font-bold text-3xl text-center">
                  Tên danh sách phát nhạc
                </Text>
              </View>
            </View>
            {/* Tag thông tin của playlist */}
            <View className="tag flex flex-row p-3 items-center w-full justify-between border-white border-b">
              <View className="flex flex-row items-center gap-3">
                <TouchableOpacity>
                  <Image
                    source={{
                      uri: "https://i.scdn.co/image/ab6761610000e5ebbcb1c184c322688f10cdce7a",
                    }}
                    className="rounded-full w-10 h-10"
                  />
                </TouchableOpacity>
                <TouchableOpacity
onPress={handlePlaylist}
                >
                  <Feather name="more-vertical" size={24} color="white" />
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                onPress={() => {
                  console.log("press");
                }}
              >
                <View className="bg-white block rounded-full p-4">
                  <Entypo name="controller-play" size={24} color="black" />
                </View>
              </TouchableOpacity>
            </View>

            {/* Thêm sắp xếp chỉnh sửa */}
            <View className="haddlePlayList w-full flex flex-row justify-center items-center gap-3">
              <TouchableOpacity
                onPress={() => {
                  console.log("Press");
                }}
                className="bg-white flex flex-row justify-center items-center p-2 gap-2 rounded-full w-[30%]"
              >
                <Entypo name="add-to-list" size={16} color="black" />
                <Text className="font-bold">Thêm</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  console.log("Press");
                }}
                className="bg-white flex flex-row justify-center items-center p-2 gap-2 rounded-full w-[30%]"
              >
                <FontAwesome name="sort" size={16} color="black" />
                <Text className="font-bold">Sắp xếp</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  console.log("Press");
                }}
                className="bg-white flex flex-row justify-center items-center p-2 gap-2 rounded-full w-[30%]"
              >
                <Feather name="edit" size={16} color="black" />
                <Text className="font-bold">Chỉnh sửa</Text>
              </TouchableOpacity>
            </View>

            {/* List nhạc */}
            <View className="w-full flex flex-col px-3 gap-6">
              <SongCard
                name="Nhạc"
                url={
                  "https://i.scdn.co/image/ab6761610000e5ebbcb1c184c322688f10cdce7a"
                }
                artist="Ado"
                id={"SKADLAKSDNLSKAND"}
                onPress={handleSongInPlayList}
              />
              <SongCard
                name="Nhạc"
                url={
                  "https://i.scdn.co/image/ab6761610000e5ebbcb1c184c322688f10cdce7a"
                }
                artist="Ado"
                id={"SKADLAKSDNLSKAND"}
                onPress={handleSongInPlayList}
              />

              <SongCard
                name="Nhạc"
                url={
                  "https://i.scdn.co/image/ab6761610000e5ebbcb1c184c322688f10cdce7a"
                }
                artist="Ado"
                id={"SKADLAKSDNLSKAND"}
                onPress={handleSongInPlayList}
              />

              <SongCard
                name="Nhạc"
                url={
                  "https://i.scdn.co/image/ab6761610000e5ebbcb1c184c322688f10cdce7a"
                }
                artist="Ado"
                id={"SKADLAKSDNLSKAND"}
                onPress={handleSongInPlayList}
              />

              <SongCard
                name="Nhạc"
                url={
                  "https://i.scdn.co/image/ab6761610000e5ebbcb1c184c322688f10cdce7a"
                }
                artist="Ado"
                id={"SKADLAKSDNLSKAND"}
                onPress={handleSongInPlayList}
              />
            </View>
          </View>
        </ScrollView>

        {/* BottomSheet cho click nhạc */}
        <BottomSheet
          snapPoints={snapPoints}
          ref={bottomSheetRef}
          index={-1}
          enablePanDownToClose={true}
          backgroundStyle={{ backgroundColor: "#171717" }}
          handleIndicatorStyle={{
            backgroundColor: "gray",
            width: 55,
            height: 5,
            borderRadius: 3,
          }}
      
          backdropComponent={(props) => (
            <BottomSheetBackdrop
              {...props}
              appearsOnIndex={0} // Khi mở thì backdrop hiện
              disappearsOnIndex={-1} // Khi đóng thì backdrop biến mất
              pressBehavior="close" // <- Quan trọng: click vào backdrop sẽ đóng
            />
          )}
        >
          <BottomSheetView className="flex items-center flex-col gap-4 px-10">
            <BottomSheetView className="flex flex-row items-center w-full py-3 gap-3 border-b border-gray-400">
              <Image
                source={{
                  uri: "https://i.scdn.co/image/ab6761610000e5ebbcb1c184c322688f10cdce7a",
                }}
                className="rounded-md w-16 h-16"
              />
              <BottomSheetView>
                <Text className="text-white font-bold">Name</Text>
                <Text className="text-gray-300">Artist</Text>
              </BottomSheetView>
            </BottomSheetView>

            <BottomSheetView className="flex flex-col gap-7">
              <TouchableOpacity
                onPress={() => {
                  console.log("Hello");
                }}
                className="w-full"
              >
                <BottomSheetView className="flex flex-row gap-5 w-full items-center">
                  <FontAwesome6 name="add" size={23} color="white" />
                  <Text className="text-white flex-grow text-[15px]">
                    Thêm vào danh sách phát khác
                  </Text>
                </BottomSheetView>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  console.log("Hello");
                }}
                className="w-full"
              >
                <BottomSheetView className="flex flex-row gap-5 w-full items-center">
                  <AntDesign name="delete" size={20} color="white" />
                  <Text className="text-white flex-grow text-[15px]">
                    Xóa khỏi danh sách phát
                  </Text>
                </BottomSheetView>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  console.log("Hello");
                }}
                className="w-full"
              >
                <BottomSheetView className="flex flex-row gap-5 w-full items-center">
                  <MaterialCommunityIcons
                    name="account-music"
                    size={20}
                    color="white"
                  />
                  <Text className="text-white flex-grow text-[15px]">
                    Chuyển tới nghệ sĩ
                  </Text>
                </BottomSheetView>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  console.log("Hello");
                }}
                className="w-full"
              >
                <BottomSheetView className="flex flex-row gap-5 w-full items-center">
                  <MaterialIcons name="info" size={24} color="white" />
                  <Text className="text-white flex-grow text-[15px]">
                    Xem thông tin bài hát
                  </Text>
                </BottomSheetView>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  console.log("Hello");
                }}
                className="w-full"
              >
                <BottomSheetView className="flex flex-row gap-5 w-full items-center">
                  <Entypo
                    name="arrow-with-circle-right"
                    size={20}
                    color="white"
                  />
                  <Text className="text-white flex-grow text-[15px]">
                    Chuyển tới album
                  </Text>
                </BottomSheetView>
              </TouchableOpacity>
            </BottomSheetView>
          </BottomSheetView>
        </BottomSheet>
        {/* BottomSheet cho play list */}
        <BottomSheet
          snapPoints={snapPoints}
          ref={bottomSheetRefPlayList}
          index={-1}
          enablePanDownToClose={true}
          backgroundStyle={{ backgroundColor: "#171717" }}
          handleIndicatorStyle={{
            backgroundColor: "gray",
            width: 55,
            height: 5,
            borderRadius: 3,
          }}
          backdropComponent={(props) => (
            <BottomSheetBackdrop
              {...props}
              appearsOnIndex={0}
              disappearsOnIndex={-1} 
              pressBehavior="close"
            />
          )}
        >
          <BottomSheetView className="flex items-center flex-col gap-4 px-10">
            <BottomSheetView className="flex flex-row items-center w-full py-3 gap-3 border-b border-gray-400">
              <Image
                source={{
                  uri: "https://i.scdn.co/image/ab6761610000e5ebbcb1c184c322688f10cdce7a",
                }}
                className="rounded-md w-16 h-16"
              />
              <BottomSheetView>
                <Text className="text-white font-bold">Name</Text>
                <Text className="text-gray-300">Artist</Text>
              </BottomSheetView>
            </BottomSheetView>

            <BottomSheetView className="flex flex-col gap-7">
              <TouchableOpacity
                onPress={() => {
                  console.log("Hello");
                }}
                className="w-full"
              >
                <BottomSheetView className="flex flex-row gap-5 w-full items-center">
                  <FontAwesome6 name="add" size={23} color="white" />
                  <Text className="text-white flex-grow text-[15px]">
                    Thêm vào danh sách phát này
                  </Text>
                </BottomSheetView>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  console.log("Hello");
                }}
                className="w-full"
              >
                <BottomSheetView className="flex flex-row gap-5 w-full items-center">
                  <AntDesign name="delete" size={20} color="white" />
                  <Text className="text-white flex-grow text-[15px]">
                    Xóa danh sách phát
                  </Text>
                </BottomSheetView>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  console.log("Hello");
                }}
                className="w-full"
              >
                <BottomSheetView className="flex flex-row gap-5 w-full items-center">
                <Ionicons name="add-circle-outline" size={20} color="white" />
                  <Text className="text-white flex-grow text-[15px]">
                    Thêm danh sách này vào danh sách khác
                  </Text>
                </BottomSheetView>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  console.log("Hello");
                }}
                className="w-full"
              >
              <BottomSheetView className="flex flex-row gap-5 w-full items-center">
                <Foundation name="page-edit" size={20} color="white" />
                  <Text className="text-white flex-grow text-[15px]">
                    Chỉnh sửa danh sách phát
                  </Text>
                </BottomSheetView>
              </TouchableOpacity>

             
            </BottomSheetView>
          </BottomSheetView>
        </BottomSheet>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default PlayList;

const styles = StyleSheet.create({});
