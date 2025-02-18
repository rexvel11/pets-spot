import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Category from './Category'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../config/FirebaseConfig'
import PetListItem from './PetListItem'

export default function PetListByCategory() {

  const [petList, setPetList] = useState([]);
  const [loader,setLoader] =useState(false);
  
  useEffect(()=>{
    GetPetList('Dogs');
  }, [])

  // Fetch Pet List when category is clicked @param {*} category
  
  const GetPetList=async(category)=>{
    setLoader(true);
    setPetList([]);
    const q = query(collection(db, 'Pets'), where('category', '==', category));
    const querySnaphot = await getDocs(q); 

    querySnaphot.forEach(doc=>{
      console.log(doc.data());
      setPetList(petList=>[...petList, doc.data()])
    })
    setLoader(false);
  }

  return (
    <View style={{
      height: 380
    }}> 
       <Category category={(value)=>GetPetList(value)}/>
        <FlatList
          style={{marginTop: 10}}
          data={petList}
          horizontal={true}
          refreshing={loader}
          onRefresh={()=>GetPetList('Dogs')}
          renderItem={({item, index})=>(
             <PetListItem pet={item} />
          )}
        />
        
    </View>
  )
}