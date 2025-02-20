import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import PetInfo from '../../components/PetDetails/PetInfo';
import PetSubInfo from '../../components/PetDetails/PetSubInfo';
import AboutPet from '../../components/PetDetails/AboutPet';
import OwnerInfo from '../../components/PetDetails/OwnerInfo';
import Color from '../../constants/Color';
import { withDecay } from 'react-native-reanimated';

export default function PetDetails() {

  const pet = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(()=>{
    navigation.setOptions({
        headerTransparent:true,
        headerTitle: ''
    })
  }, [])


  const InitiateChat=()=>{

  }

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
      <View style={styles?.bottomContainer}>
          <TouchableOpacity
          onPress={InitiateChat}
          style={styles?.adoptBtn}>
              <Text style={{
                fontFamily: 'outfit-medium',
                textAlign: 'center',
                fontSize: 20
              }}>Adopt Me</Text>
          </TouchableOpacity>
      </View>
      {/* MAHIMO KA PA TAB BAR SAN ADOPT  */}

    </View>
  )
}

const styles = StyleSheet.create({
  adoptBtn: {
      padding: 15,
      backgroundColor: Color.PRIMARY
  },
  bottomContainer: {
      position: 'absolute',
      width: '100%',
      bottom: 0
  }
})