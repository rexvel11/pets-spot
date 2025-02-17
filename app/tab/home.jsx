import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Color from '../../constants/Color'

export default function Home() {
  return (
    <View style={{
      padding: 20,
      height: 170,
      borderBottomLeftRadius: 40,
      borderBottomRightRadius: 40,
      backgroundColor: Color.PRIMARY
    }}>
        {/* Header  */}
        <Header/>
        {/* Slider */}

        {/* Category */}

        {/* List of pets  */}

    </View>
  )
}