import { Image, View, Text, TextInput, Pressable, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import Color from './../../constants/Color';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 
import { Link } from "expo-router";
import pb from './../pocketbase'; // Import PocketBase instance

export default function SignUp() {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    if (!password || password.length < 8) {
      Alert.alert('Signup Failed', 'Password must be at least 8 characters.');
      return;
    }
  
    try {
      const newUser = await pb.collection('users').create({
        username: email.split('@')[0], 
        email: email,
        emailVisibility: true, 
        password: password,
        passwordConfirm: password,
        name: fullName
      });
  
      Alert.alert('Account Created', 'You can now log in.');
    } catch (error) {
      console.log("Signup Error:", error);
      console.log("Error Details:", error.response);
      Alert.alert('Signup Failed', error.response?.message || "An error occurred.");
    }
  };
  
  

  return (
    <View style={{
      backgroundColor: Color.WHITE,
      height: '100%',
      padding: 20,
      justifyContent: 'center'
    }}>

      <ScrollView>
        {/* Back button at the top left */}
        <Pressable 
          onPress={() => navigation.goBack()} 
          style={{
            position: 'absolute',
            top: 20,
            left: 1,
            zIndex: 10,
            padding: 10,
          }}
        >
          <Ionicons name="arrow-back" size={24} color={Color.BLACK} />
        </Pressable>

        <Image source={require('./../../assets/images/logo.png')}
            style={{
              width: '100%',
              height: 240
            }}
        />

        <Text style={{
          fontFamily: 'outfit-bold',
          fontSize: 30,
          textAlign: 'center'
        }}>Create an Account</Text>

        <Text style={{
          fontFamily: 'outfit',
          fontSize: 18,
          textAlign: 'center',
          marginTop: 10,
          color: Color.GRAY
        }}>Sign up to get started</Text>

        <TextInput
          style={{
            borderWidth: 1,
            borderColor: Color.GRAY,
            borderRadius: 10,
            padding: 12,
            marginTop: 40,
            fontSize: 16
          }}
          placeholder="Full Name"
          onChangeText={setFullName} // Added
          value={fullName} // Added
        />

        <TextInput
          style={{
            borderWidth: 1,
            borderColor: Color.GRAY,
            borderRadius: 10,
            padding: 12,
            marginTop: 20,
            fontSize: 16
          }}
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={setEmail} // Added
          value={email} // Added
        />

        <TextInput
          style={{
            borderWidth: 1,
            borderColor: Color.GRAY,
            borderRadius: 10,
            padding: 12,
            marginTop: 20,
            fontSize: 16
          }}
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword} // Added
          value={password} // Added
        />

        <Link 
          href={'/login/login'}
          onPress={handleSignUp} // Added function
          style={{
            padding: 14,
            marginTop: 40,
            backgroundColor: Color.PRIMARY,
            borderRadius: 14
          }}
        >
          <Text style={{
            fontFamily: 'outfit-medium',
            fontSize: 20,
            textAlign: 'center',
          }}>Sign Up</Text>
        </Link>

        {/* "Already have an account? Login." Section */}
        <Link href={'/login/login'} style={{ marginTop: 20 }}>
          <Text style={{
            fontFamily: 'outfit-medium',
            fontSize: 16,
            textAlign: 'center',
            color: Color.BLACK
          }}>
            Already have an account?{' '}
            <Text style={{ color: Color.PRIMARY }}>Login.</Text>
          </Text>
        </Link>

      </ScrollView>
    </View>
  );
}
