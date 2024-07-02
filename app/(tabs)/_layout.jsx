import { View, Text } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'

const TabsLayout = () => {
  return (
    <View>
      <Text>TabsLayout</Text>
      <Slot/>
    </View>
  )
}

export default TabsLayout