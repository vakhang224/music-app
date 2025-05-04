import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
const setting = () => {
  return (
    <View className='flex flex-1'>
        Setting
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
  },
  contentContainer: {
    flex: 1, alignItems: 'center', padding: 20,
  },
  title: {
    fontSize: 16, fontWeight: 'bold', marginBottom: 10,
  },
});
export default setting