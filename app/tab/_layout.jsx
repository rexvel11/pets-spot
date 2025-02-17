import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Tablayout() {
  return (
    <Tabs>
        <Tabs.Screen name='home'
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({color})=><AntDesign name="home" size={24} color={color} />
          }}
        />
        <Tabs.Screen name='favorite'
          options={{
            title: 'Favorite',
            headerShown: false,
            tabBarIcon:({color})=> <AntDesign name="heart" size={24} color={color} />
          }}
        />
        <Tabs.Screen name='inbox'
          options={{
            title: 'Inbox',
            headerShown: false,
            tabBarIcon:({color})=> <AntDesign name="message1" size={24} color={color} />
          }}
        />
        <Tabs.Screen name='profile'
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon:({color})=> <Ionicons name="people-circle-outline" size={24} color={color} />
          }}
        />
    </Tabs>
  )
}