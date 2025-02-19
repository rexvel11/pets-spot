import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Color from './../../constants/Color'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'; 

export default function Tablayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Color.PRIMARY
      }}
    >
        <Tabs.Screen name='home'
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({color})=> <FontAwesome name="home" size={24} color={color} />
          }}
        />
        <Tabs.Screen name='addPet'
          options={{
            title: 'Add Pet',
            headerShown: false,
            tabBarIcon:({color})=> <MaterialIcons name="add-circle-outline" size={24} color={color} />
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