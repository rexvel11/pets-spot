import { Image, View, Text, TextInput, Pressable, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import Color from './../../constants/Color';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 
import { Link } from "expo-router";
import pb from './../pocketbase'; // Import PocketBase instance
import { router } from "expo-router";
import { AntDesign } from '@expo/vector-icons';

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const authData = await pb.collection('users').authWithPassword(email, password);
      console.log('Login Successful:', authData);
  
      // Redirect to /tab/home after successful login
      Alert.alert('',"Successfully logged in.");
      router.push('/tab/home');
      
    } catch (error) {
      Alert.alert('', "Your email or password is incorrect.");
    }
  };

  return (
    <ScrollView 
    showsVerticalScrollIndicator={false}
    style={{
      backgroundColor: Color.WHITE,
      height: '100%',
      padding: 20,
    }}>

        {/* Back button at the top left */}
        <Link
          href={'/login'}
          style={{
            position: 'absolute',
            top: 20,
            left: 1,
            zIndex: 10,
            padding: 10,
          }}
        >
          <Ionicons name="arrow-back" size={24} color={Color.BLACK} />
        </Link>

        <Image source={require('./../../assets/images/logo.png')}
            style={{
              width: '100%',
              height: 230
            }}
        />

        <Text style={{
          fontFamily: 'outfit-bold',
          fontSize: 30,
          textAlign: 'center'
        }}>Join Us!</Text>

        <Text style={{
          fontFamily: 'outfit',
          fontSize: 18,
          textAlign: 'center',
          marginTop: 10,
          color: Color.GRAY
        }}>Login to continue</Text>

        <TextInput
          style={{
            borderWidth: 1,
            borderColor: Color.GRAY,
            borderRadius: 10,
            padding: 12,
            marginTop: 40,
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

        <Pressable
          onPress={handleLogin} // Changed from Link to Pressable
          style={{
            padding: 14,
            marginTop: 30,
            backgroundColor: Color.PRIMARY,
            borderRadius: 14
          }}
        >
          <Text style={{
            fontFamily: 'outfit-medium',
            fontSize: 20,
            textAlign: 'center',
          }}>Login</Text>
        </Pressable>
        
         {/* ---- Horizontal Line ---- */}
        <View style={{ 
          flexDirection: 'row', 
          alignItems: 'center', 
          marginVertical: 20 
        }}>
          <View style={{ flex: 1, height: 1, backgroundColor: Color.GRAY }} />
          <Text style={{
            marginHorizontal: 10,
            fontFamily: 'outfit',
            fontSize: 16,
            color: Color.GRAY
          }}>or</Text>
          <View style={{ flex: 1, height: 1, backgroundColor: Color.GRAY }} />
        </View>

        {/* ---- Google Login Button ---- */}
        <Pressable
          onPress={() => Alert.alert('Google Login', 'Google login not implemented yet.')}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 12,
            borderWidth: 1,
            borderColor: Color.GRAY,
            borderRadius: 10,
          }}
        >
          <AntDesign name="google" size={24} color="red" />
          <Text style={{
            fontFamily: 'outfit-medium',
            fontSize: 18,
            marginLeft: 10
          }}>Continue with Google</Text>
        </Pressable>


        {/* "Don't have an account? Sign Up." Section */}
        <Link href={'/login/signup'} style={{ marginTop: 20 }}>
          <Text style={{
            fontFamily: 'outfit-medium',
            fontSize: 16,
            textAlign: 'center',
            color: Color.BLACK
          }}>
            Don't have an account yet?{' '}
            <Text style={{ color: Color.PRIMARY }}>Sign up.</Text>
          </Text>
        </Link>

        <View style={{
          height: 40
        }}></View>
    </ScrollView>
  );
}
