import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
interface artirst{
  name:string,
  image:string
}

const ArtistIconSelect = ({image,name}:artirst) => {

  const [isSelect,setSelect] = useState(false)


  return (
    <TouchableOpacity
                       onPress={() => {setSelect(!isSelect)}}
                       style={{ alignItems: "center" }}
                       className='relative flex justify-center items-center'
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
                           source={{ uri: image }}
                           style={{ width: 100, height: 100, borderRadius: 50,opacity:isSelect?1:0.2}}
                          
                         />
                       </View>
                       <Text
                         style={{
                           color: "white",
                           fontWeight: "bold",
                           fontSize: 16,
                         }}
                       >
                         {name}
                       </Text>
                       <MaterialIcons name="done" size={24} color="white" className={isSelect?"hidden":""} style={{position:"absolute",top:39}}/>
                     </TouchableOpacity>
  )
}

export default ArtistIconSelect

const styles = StyleSheet.create({})