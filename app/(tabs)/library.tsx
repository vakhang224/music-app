import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome6 } from '@expo/vector-icons';


const library = () => {
  const [token,setToken] = useState<String|null>(null)

  useEffect(() => {
      if (!token) {
        AsyncStorage.getItem('access_token')
          .then(() => {
            setToken(token); 
          })
          .catch((error) => console.log('Error saving token:', error));
      }
  }, []);


  return (
    <SafeAreaView >
      <View className='w-full h-full flex'>
          <View className='flex justify-between items-center'>
            <Text className='text-white text-3xl font-bold'>Thư viện</Text>
            <View className=''>
            <FontAwesome6 name="add" size={24} color="white" />
            </View>
          </View>
        
          <View className='tag text-white pt-96'>

            <TouchableOpacity onPress={()=>{console.log("PlayList")}}>
                  <Text className='text-white'>Danh sách phát</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{console.log("Artist")}}>
              <Text className='text-white'>Artist</Text>
            </TouchableOpacity>
          </View>
      </View>
    </SafeAreaView>
  )
}

export default library