import { View, Text, Image, TextInput, StyleSheet, ScrollView, TouchableOpacity, Pressable, ToastAndroid } from 'react-native';
import React, { useEffect, useState } from 'react';
import Color from '../../constants/Color';
import { Picker } from '@react-native-picker/picker';
import pb from '../pocketbase';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';

export default function AddNewPet() {
  const [formData, setFormData] = useState({
    category: 'Dogs',
    sex: 'Male'
  });

  const [gender, setGender] = useState();
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [image, setImage] = useState();
  const router = useRouter();

  useEffect(() => {
    GetCategories();
  }, []);

  // Fetch Category List from PocketBase
  const GetCategories = async () => {
    try {
      setCategoryList([]);
      const categories = await pb.collection('pets').getFullList();
      setCategoryList(categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // Pick image from device (gallery)
  const imagePicker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handlerInputChange = (fieldName, fieldValue) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: fieldValue
    }));
  };

  // Submit pet details to PocketBase
  const onSubmit = async () => {
    if (!formData.name || !formData.breed || !formData.sex || !formData.category || !formData.age || !formData.weight || !formData.address || !formData.about || !image) {
      ToastAndroid.show('Fill all input details', ToastAndroid.SHORT);
      return;
    }
  
    try {
      const formDataPB = new FormData();
      formDataPB.append('name', formData.name);
      formDataPB.append('breed', formData.breed);
      formDataPB.append('address', formData.address);
      formDataPB.append('about', formData.about);
      formDataPB.append('age', formData.age);
      formDataPB.append('weight', formData.weight);
      formDataPB.append('category', formData.category);
      formDataPB.append('sex', formData.sex);
  
      formDataPB.append('image', {
        uri: image,
        name: 'pet_image.jpg',
        type: 'image/jpeg',
      });
  
      await pb.collection('pets').create(formDataPB);
  
      ToastAndroid.show('Pet added successfully!', ToastAndroid.SHORT);
  
      // Navigate to /tab/home after adding a pet
      router.push('/tab/home');
  
    } catch (error) {
      console.error("Error adding pet:", error);
      ToastAndroid.show('Error adding pet', ToastAndroid.SHORT);
    }
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontFamily: 'outfit-medium', fontSize: 20 }}>Add New Pet for Adoption</Text>

      <Pressable onPress={imagePicker}>
        {!image ? (
          <Image source={require('./../../assets/images/paw.jpg')} 
            style={{
              width: 100,
              height: 100,
              borderRadius: 15,
              borderWidth: 1,
              borderColor: Color.BORDER
            }}
          />
        ) : (
          <Image source={{ uri: image }} 
            style={{
              width: 100,
              height: 100,
              borderRadius: 15
            }}
          />
        )}
      </Pressable>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Pet Name *</Text>
        <TextInput style={styles.input} placeholder='Pet Name' 
          onChangeText={(value) => handlerInputChange('name', value)} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Pet Category *</Text>
        <Picker
          style={styles.input}
          selectedValue={selectedCategory}
          onValueChange={(itemValue) => {
            setSelectedCategory(itemValue);
            handlerInputChange('category', itemValue);
          }}>
            <Picker.Item label="Dogs" value="Dogs" />
            <Picker.Item label="Fish" value="Fish" />
            <Picker.Item label="Cats" value="Cats" />
            <Picker.Item label="Rabbit" value="Rabbit" />
        </Picker>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Breed *</Text>
        <TextInput style={styles.input} placeholder='Breed' 
          onChangeText={(value) => handlerInputChange('breed', value)} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Age *</Text>
        <TextInput style={styles.input}
          keyboardType='number-pad'
          placeholder='Age' 
          onChangeText={(value) => handlerInputChange('age', value)} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Gender *</Text>
        <Picker
          style={styles.input}
          selectedValue={gender}
          onValueChange={(itemValue) => {
            setGender(itemValue);
            handlerInputChange('sex', itemValue);
          }}>
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
        </Picker>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Weight *</Text>
        <TextInput style={styles.input} 
          keyboardType='number-pad'
          placeholder='Weight' 
          onChangeText={(value) => handlerInputChange('weight', value)} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Address *</Text>
        <TextInput style={styles.input} placeholder='Address' 
          onChangeText={(value) => handlerInputChange('address', value)} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>About *</Text>
        <TextInput style={styles.input}
          numberOfLines={5}
          multiline={true}
          placeholder='About' 
          onChangeText={(value) => handlerInputChange('about', value)} />
      </View>

      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={{ fontFamily: 'outfit-medium', textAlign: 'center' }}>Submit</Text>
      </TouchableOpacity>

      <View style={{ height: 30 }}></View>
    </ScrollView>
  );
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
});
