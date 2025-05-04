import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router';
import { TextInput } from 'react-native-gesture-handler';
import { FontAwesome, Fontisto } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const AddPlaylistToPLaylists = () => {
  const navigation = useNavigation()
   useEffect(() => {
      navigation.setOptions({ headerShown: false });
    }, []);
  return (
    <View className='w-screen h-screen flex justify-center items-center gap-10 bg-black-100'>
      <Text className='text-white text-4xl'>Thêm mới danh sách phát</Text>
      <View className="w-[90%] flex flex-row fixed top-0 items-center justify-center">
              <TextInput
                placeholder="Tên danh sách phát..."
                className="rounded-md w-full text-3xl bg-white"
              />
          
            </View>

            <View>
            <View className="flex flex-row gap-6 w-[90%]">


            <TouchableOpacity
              onPress={() => {
                console.log("Search");
              }}
              className='bg-white w-1/2 p-3 rounded-full'
            >
              <Text className='text-2xl text-center'>Hủy</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                console.log("Search");
              }}
              className='bg-pink-400 w-1/2 p-3 rounded-full'
            >
              <Text className='text-2xl text-center text-white'>Tạo</Text>
            </TouchableOpacity>
          </View>

            </View>

    </View>
  )
}

export default AddPlaylistToPLaylists

const styles = StyleSheet.create({})