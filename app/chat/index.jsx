import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../config/FirebaseConfig';
import { useUser } from '../hooks/useUser';

export default function ChatScreen() {

    const params = useLocalSearchParams();
    const navigation = useNavigation();
    const {user} = useUser();

    useEffect(()=>{
        GetUserDetails();
    }, [])

    const GetUserDetails=async()=>{
        const  docRef = doc(db, 'Chat', params?.id);
        const docSnap = await getDoc(docRef);

        const result = docSnap.data();
        console.log(result);

        const otherUser = result?.users.filter(item=>item.email!=user?.email); 
        console.log(otherUser);
        
        navigation.setOptions({
            headerTitle: otherUser[0].name
        })
    }

  return (
    <View>
      <Text>ChatScreen</Text>
    </View>
  )
}