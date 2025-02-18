import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, doc, getDocs } from 'firebase/firestore'
import {db} from './../../config/FirebaseConfig'
import { use } from 'react'

export default function Slider() {

  const [sliderList,setSliderList]=useState([]);
  useEffect(()=>{
      GetSliders();
  }, [])
  const GetSliders=async()=>{
    setSliderList([]);
    const snapshot = await getDocs(collection(db, 'Sliders'));
      snapshot.forEach((doc)=>{
        console.log(doc.data());
        setSliderList(sliderList=>[...sliderList,doc.data()])
      })
  }

  return (
    <View style={{
      marginTop: 10,
      height: 150
    }}>
      <FlatList 
      horizontal={true}
      showsHorizontalScrollIndicator={false}
        data={sliderList}
        renderItem={({item, index})=>(
          <View>
              <Image source={{uri:item?.imageUrl}}
                style={styles?.sliderImage}
              />
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  sliderImage:{
    width: Dimensions.get('screen').width*0.9,
    height: 150,
    borderRadius: 15,
    marginRight: 15
  }
})
