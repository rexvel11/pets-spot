import { Image, View, Text, Pressable, ScrollView } from 'react-native'
import React from 'react'
import Color from './../../constants/Color'
import { Link } from "expo-router";

export default function LoginScreen() {
  return (
    <View style={{
      backgroundColor: Color.WHITE,
      height: '100%'
    }}>
      <ScrollView>
      <Image source={require('./../../assets/images/login.png')}
        style={{
          width:'100%',
          height:400
        }}
      />
      <View style={{
        padding: 20,
        display: 'flex',
        alignItems: 'center'
      }}>
          <Text style={{
            fontFamily:'outfit-bold',
            fontSize:30,
            textAlign: 'center'
          }}>Ready to make a new friend?</Text>
          <Text style={{
            fontFamily:'outfit',
            fontSize:18,
            textAlign: 'center',
            marginTop: 20,
            color: Color.GRAY
          }}>Lets adopt the pet you want and make their life happy agian.</Text>


          <Link href={'/login/login'}style={{
            padding: 14,
            marginTop: 80,
            backgroundColor:Color.PRIMARY,
            width: '100%',
            borderRadius: 14
          }}>

            <Text style={{
              fontFamily:'outfit-medium',
              fontSize:20,
              textAlign: 'center',
            }}>Get Started</Text>

          </Link>

      </View>
      </ScrollView>
    </View>
  )
}