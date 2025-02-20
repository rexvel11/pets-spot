import { Image, View, Text, TextInput, Pressable, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import Color from './../../constants/Color';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 
import { Link } from "expo-router";
import pb from './../pocketbase'; // Import PocketBase instance

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const authData = await pb.collection('users').authWithPassword(email, password);
      console.log('Login Successful:', authData);
    } catch (error) {
      Alert.alert('Login Failed', error.message);
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
              height: 300
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

        <Link
          href={'/tab/home'}
          onPress={handleLogin} // Changed from Link to Pressable
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
          }}>Login</Text>
        </Link>

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
      </ScrollView>
    </View>
  );
}
