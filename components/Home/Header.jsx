import { View, Text } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View>
        <View style={{
            padding: 5
        }}>
            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 33, 
                marginBottom: 5
            }}>Welcome, Guest!</Text>
            <Text style={{
                fontFamily: 'outfit',
                fontSize: 18
            }}>Find the perfect pet for your lifestyle playful, cuddly, or unique, your new best friend awaits!</Text>
        </View>
    </View>
  )
}