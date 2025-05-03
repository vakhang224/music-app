import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

const AddPlayLis = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  const artists = [
    {
      id: "1",
      name: "Nghệ sĩ 1",
      image: "https://i.scdn.co/image/ab6761610000e5ebbcb1c184c322688f10cdce7a",
    },
    {
      id: "2",
      name: "Nghệ sĩ 2",
      image: "https://i.scdn.co/image/ab6761610000e5ebbcb1c184c322688f10cdce7a",
    },
    {
      id: "3",
      name: "Nghệ sĩ 3",
      image: "https://i.scdn.co/image/ab6761610000e5ebbcb1c184c322688f10cdce7a",
    },
    {
      id: "4",
      name: "Nghệ sĩ 4",
      image: "https://i.scdn.co/image/ab6761610000e5ebbcb1c184c322688f10cdce7a",
    },
  
  ];

  return (
    <SafeAreaView className="flex-1">
      <LinearGradient colors={["#141414", "#000000"]} className="flex-1 flex justify-center items-center" >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ paddingBottom: 30 }}
          className="flex-1"
        >
          <View className="flex-1 flex flex-col gap-4">
            <View className="flex flex-col items-center">
              <View className="bg-transparent w-full p-3 flex flex-row items-center gap-8">
                <Text className="font-bold text-white" style={{ fontSize: 40 }}>
                  Chọn thêm nghệ sĩ bạn thích
                </Text>
              </View>

              <View className="w-[90%] flex flex-row fixed top-0 items-center justify-center">
                <TextInput
                  placeholder="Tìm kiếm nghệ sĩ của bạn..."
                  className="bg-white rounded-md w-full pl-10"
                />
                <FontAwesome
                  name="search"
                  size={15}
                  color="black"
                  className="absolute left-3"
                />
              </View>
            </View>

            <View
            >
              <FlatList
                data={artists}
                keyExtractor={(item) => item.id}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: "space-around",
                  alignItems:"flex-start",
                  marginBottom: 16,
                }}
                
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => console.log("press")}
                    style={{ alignItems: "center" }}
                  >
                    <View
                      style={{
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                        overflow: "hidden",
                        marginBottom:10
                      }}
                    >
                      <Image
                        source={{ uri: item.image }}
                        style={{ width: 100, height: 100, borderRadius: 50}}
                      />
                    </View>
                    <Text
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 16,
                      }}
                    >
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        
        </ScrollView>
<View style={{position:"absolute",bottom:20,width:100}} className="bg-white p-3 rounded-full">
  <TouchableOpacity onPress={() => console.log("Pressed")}>
    <Text className="font-bold text-xl text-center">xong</Text>
  </TouchableOpacity>
</View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default AddPlayLis;

const styles = StyleSheet.create({});
