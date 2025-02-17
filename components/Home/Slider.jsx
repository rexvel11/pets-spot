import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import {db} from './../../config/FirebaseConfig'
import { use } from 'react'

export default function Slider() {

  return (
    <View>
      <Text>Pogi mo rexcel</Text>
    </View>
  )
}

