import { View, Text, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import PetInfo from '../../components/PetDetails/PetInfo';
import PetSubInfo from '../../components/PetDetails/PetSubInfo';
import AboutPet from '../../components/PetDetails/AboutPet';
import OwnerInfo from '../../components/PetDetails/OwnerInfo';

export default function PetDetails() {

  const pet = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(()=>{
    navigation.setOptions({
        headerTransparent:true,
        headerTitle: ''
    })
  }, [])

  return (
    <View>
      <ScrollView>
      {/* Pet Information */}
        <PetInfo pet={pet}/>
      {/* Pet Sub Information  */}
        <PetSubInfo pet={pet} />           
      {/* About  */}
        <AboutPet pet={pet} />
      {/* Owner Details  */}
        <OwnerInfo pet={pet} />
        <View style={{
          height: 70
        }}>
          
        </View>
      </ScrollView>
      {/* Adopt Button  */}

    </View>
  )
}