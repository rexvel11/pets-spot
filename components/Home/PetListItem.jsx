import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Color from '../../constants/Color'
import { useRouter } from 'expo-router'

export default function PetListItem({pet}) {

  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={()=>router.push({
        pathname: '/pet-details',
        params: pet
      })}
    style={{
        padding: 10,
        marginRight: 10,
        backgroundColor: Color.WHITE,
        borderRadius: 10,
        height: 200
    }}>
      <Image source={{uri:pet.imageUrl}} 
        style={{
            width: 150,
            height: 135,
            objectFit: 'cover',
            borderRadius: 10
        }}
      />
      <Text style={{
        fontFamily: 'outfit-medium',
        fontSize: 18
      }}>{pet.name}</Text>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
            <Text style={{
                color: Color.GRAY,
                fontFamily: Color.GRAY
            }}>{pet.breed}</Text>
            <Text style={{
                fontFamily: 'outfit',
                color: Color.PRIMARY,
                paddingHorizontal: 7,
                borderRadius: 10,
                fontSize: 11,
                backgroundColor: Color.LIGHT_BG
            }}>{pet.age } YRS</Text>
      </View>

      <View style={{
        height:20
      }}>

      </View>
    </TouchableOpacity>
  )
}