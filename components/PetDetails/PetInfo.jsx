import { View, Text, Image } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import Color from '../../constants/Color'
import AntDesign from '@expo/vector-icons/AntDesign';

export default function PetInfo({pet}) {
  return (
    <View>
      <Image source={{uri:pet.imageUrl}}
        style={{
            width: '100%',
            height: 325,
            objectFit: 'cover'
        }}
      />

      <View style={{
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <View>
            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 27
            }}>{pet?.name}</Text>

            <Text style={{
                fontFamily: 'outfit',
                fontSize: 15,
                color: Color.GRAY
            }}><Entypo name="location" size={15} color="gray" /> {pet?.address}</Text>
        </View>
        <AntDesign name="hearto" size={30} color="black" />
      </View>
    </View>
  )
}