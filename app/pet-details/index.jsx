import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import PetInfo from '../../components/PetDetails/PetInfo';
import PetSubInfo from '../../components/PetDetails/PetSubInfo';
import AboutPet from '../../components/PetDetails/AboutPet';
import OwnerInfo from '../../components/PetDetails/OwnerInfo';
import Color from '../../constants/Color';
import { useUser } from '../hooks/useUser';
import { db } from '../../config/FirebaseConfig';
import { collection, query, getDocs, setDoc, doc, where } from 'firebase/firestore';

export default function PetDetails() {
  const pet = useLocalSearchParams();
  const navigation = useNavigation();
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: ''
    });
  }, []);


  // Initiate chat between the current logged in user and the pet owner 
  
  const InitiateChat = async () => {
    if (!user?.email || !pet?.userEmail) {
      console.error('User or pet owner email is missing.');
      return;
    }

    try {
      const docId1 = `${user.email}_${pet.userEmail}`;
      const docId2 = `${pet.userEmail}_${user.email}`;

      const q = query(
        collection(db, 'Chat'),
        where('id', 'in', [docId1, docId2])
      );

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // Chat already exists, navigate to it
        const chatDoc = querySnapshot.docs[0];
        router.push({
          pathname: '/chat',
          params: { id: chatDoc.id }
        });
        return;
      }

      // Create a new chat if not found
      await setDoc(doc(db, 'Chat', docId1), {
        id: docId1,
        users: [
          {
            email: user.email,
            name: user.name || 'Unknown'
          },
          {
            email: pet.userEmail,
            imageUrl: pet.userImage || '',
            name: pet.userName || 'Unknown'
          }
        ],
        createdAt: new Date().toISOString()
      });

      router.push({
        pathname: '/chat',
        params: { id: docId1 }
      });

    } catch (error) {
      console.error('Error initiating chat:', error);
    }
  };

  return (
    <View>
      <ScrollView>
        {/* Pet Information */}
        <PetInfo pet={pet} />
        {/* Pet Sub Information  */}
        <PetSubInfo pet={pet} />
        {/* About  */}
        <AboutPet pet={pet} />
        {/* Owner Details  */}
        <OwnerInfo pet={pet} />
        <View style={{ height: 70 }} />
      </ScrollView>

      {/* Adopt Button  */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={InitiateChat} style={styles.adoptBtn}>
          <Text style={{
            fontFamily: 'outfit-medium',
            textAlign: 'center',
            fontSize: 20
          }}>
            Adopt Me
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
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
});
