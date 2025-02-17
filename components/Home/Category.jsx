import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../config/FirebaseConfig'

export default function Category() {

    const [categoryList, setCategoryList] = useState([]);
    useEffect(()=>{
        GetCategories();
    }, [])

    // Fetch Category List from DB    
    const GetCategories=async()=>{
        const snapshot = await getDocs(collection(db, 'Category'));
        snapshot.forEach((doc)=>{
            console.log(doc.data());
            setCategoryList(categoryList=>[...categoryList, doc.data()])
        })
    }

  return (
    <View style={{
        marginTop: 20
    }}>
      <Text style={{
        fontFamily: 'outfit-medium',
        fontSize:20
      }}>Category</Text>

    <FlatList 
        data={categoryList}
        renderItem={({item, index})=>(
            <View>
                <View>
                    <Image source={{uri:item?.imageUrl}}
                        style={{
                            width:40,
                            height:40
                        }}
                    />
                </View>
            </View>
        )}
    />

    </View>
  )
}