import { Image, View, Text, TextInput, Pressable } from 'react-native';
import React from 'react';
import Color from './../../constants/Color';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 
import { Link } from "expo-router";

export default function SignUp() {
  const navigation = useNavigation();

  return (
    <View style={{
      backgroundColor: Color.WHITE,
      height: '100%',
      padding: 20,
      justifyContent: 'center'
    }}>

      {/* Back button at the top left */}
      <Pressable 
        onPress={() => navigation.goBack()} 
        style={{
          position: 'absolute',
          top: 40,
          left: 20,
          zIndex: 10,
          padding: 10,
        }}
      >
        <Ionicons name="arrow-back" size={24} color={Color.BLACK} />
      </Pressable>

      <Image source={require('./../../assets/images/logo.png')}
          style={{
            width: '100%',
            height: 220
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
      />

      <Pressable style={{
        padding: 14,
        marginTop: 40,
        backgroundColor: Color.PRIMARY,
        borderRadius: 14
      }}>
        <Text style={{
          fontFamily: 'outfit-medium',
          fontSize: 20,
          textAlign: 'center',
        }}>Sign Up</Text>
      </Pressable>

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
    </View>
  );
}
