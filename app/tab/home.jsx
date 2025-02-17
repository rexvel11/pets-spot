import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Color from '../../constants/Color'
import Slider from '../../components/Home/Slider'
import PetListByCategory from '../../components/Home/PetListByCategory'

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
        <Slider/>
        {/* Pet List + Category */}
        <PetListByCategory/>

    </View>
  )
}