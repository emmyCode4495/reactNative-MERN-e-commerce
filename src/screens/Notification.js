import { View, Text } from 'react-native'
import React from 'react'

const Notification = () => {
  return (
    <View style={{
        justifyContent:'center',
        alignItems:'center',
        height:'100%'
    }}>
      <Text>You don't have any notifications yet</Text>
    </View>
  )
}

export default Notification