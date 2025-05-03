import React from 'react';
import { View, Text } from 'react-native';

import { RouteProp } from '@react-navigation/native';

type SongDetailRouteProp = RouteProp<{ params: { id: string } }, 'params'>;

const SongDetail = ({ route }: { route: SongDetailRouteProp }) => {
  const { id } = route.params; // Giả sử bạn truyền `id` qua route
  return (
    <View>
      <Text>Song ID: {id}</Text>
    </View>
  );
};

export default SongDetail; 
