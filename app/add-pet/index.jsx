import { View, Text, Image, TextInput, StyleSheet, ScrollView, TouchableOpacity, Pressable, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import Color from '../../constants/Color'
import { Picker } from '@react-native-picker/picker';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/FirebaseConfig';
import * as ImagePicker from 'expo-image-picker';

export default function AddNewPet() {

  const [formData, setFormData] = useState({
        category: 'Dogs', sex: 'Male'
  });
  const [gender,setGender] = useState();
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [image, setImage] = useState();

  useEffect(()=>{
    GetCategories(); 
  }, [])

      // Fetch Category List from DB    
      const GetCategories=async()=>{
          setCategoryList([]);
          const snapshot = await getDocs(collection(db, 'Category'));
          snapshot.forEach((doc)=>{
              console.log(doc.data());
              setCategoryList(categoryList=>[...categoryList, doc.data()])
          })
      }

      // Pick image from device (gallery)
      const imagePicker=async()=>{
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ['images', 'videos'],
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      }

      const handlerInputChange =(fieldName, fieldValue)=>{
          setFormData(prev=>({
            ...prev, 
            [fieldName]: fieldValue
          }))
      }

      const onSubmit=()=>{
        if(Object.keys(formData).length!=8){
          ToastAndroid.show('Fill all input details', ToastAndroid.SHORT)
          return ;
        }
      }

  return (
    <ScrollView style={{
          padding: 20
        }}>
      <Text style={{
        fontFamily: 'outfit-medium',
        fontSize: 20
      }}>Add New Pet for Adoption</Text>

      <Pressable onPress={imagePicker}>
        {!image? <Image source={require('./../../assets/images/paw.jpg')} 
          style={{
              width: 100,
              height: 100,
              borderRadius: 15,
              borderWidth: 1,
              borderColor: Color.BORDER
          }}
        />: 
        <Image source={{uri:image}} 
          style={{
            width: 100,
            height: 100,
            borderRadius: 15
          }}
        />}
      </Pressable>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Pet Name *</Text>
        <TextInput style={styles.input} placeholder='Pet Name' 
        onChangeText={(value)=>handlerInputChange('name', value)}/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Pet Category *</Text>
          <Picker
            style={styles.input}
            selectedValue={selectedCategory}
            onValueChange={(itemValue, itemIndex) =>{
              setSelectedCategory(itemValue);
              handlerInputChange('category', itemValue)
            }}>
                {categoryList.map((category,index)=>(
                  <Picker.Item key={index} label={category.name} value={category.name} />
                ))}
          </Picker>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Breed *</Text>
        <TextInput style={styles.input} placeholder='Breed' 
        onChangeText={(value)=>handlerInputChange('breed', value)}/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Age *</Text>
        <TextInput style={styles.input} placeholder='Age' 
        onChangeText={(value)=>handlerInputChange('age', value)}/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Gender *</Text>
          <Picker
            style={styles.input}
            selectedValue={gender}
            onValueChange={(itemValue, itemIndex) =>{
              setGender(itemValue);
              handlerInputChange('sex', itemValue)
            }}>
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
          </Picker>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Weight *</Text>
        <TextInput style={styles.input} placeholder='Weight' 
        onChangeText={(value)=>handlerInputChange('weight', value)}/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Address *</Text>
        <TextInput style={styles.input} placeholder='Address' 
        onChangeText={(value)=>handlerInputChange('address', value)}/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>About *</Text>
        <TextInput style={styles.input}
        numberOfLines={5}
        multiline={true}
        placeholder='About' 
        onChangeText={(value)=>handlerInputChange('about', value)}/>
      </View>

        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={{
            fontFamily: 'outfit-medium',
            textAlign: 'center'
          }}>Submit </Text>
        </TouchableOpacity>

        <View style={{
          height: 30  
        }}>
          
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 5,

    },
    input: {
        padding: 15,
        backgroundColor: Color.WHITE,
        borderRadius: 7,
        fontFamily: 'outfit'
    },
    label: {
        marginVertical: 5,
        fontFamily: 'outfit-medium'
    },
    button: {
        padding: 15,
        backgroundColor: Color.PRIMARY,
        borderRadius: 8,
        marginVertical: 10
    }
})