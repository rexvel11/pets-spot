import { View, FlatList } from 'react-native';
import React from 'react';
import Header from '../../components/Home/Header';
import Color from '../../constants/Color';
import Slider from '../../components/Home/Slider';
import PetListByCategory from '../../components/Home/PetListByCategory';

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      {/* Fixed Header Background */}
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 170,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          backgroundColor: Color.PRIMARY,
          zIndex: -1, // Keep background behind content
        }}
      />

      {/* Fixed Header Component */}
      <View style={{ position: 'absolute', top: 20, left: 20, right: 20, zIndex: 10 }}>
        <Header />
      </View>

      {/* Scrollable Content Container (Clips FlatList) */}
      <View style={{ flex: 1, marginTop: 190, overflow: 'hidden' }}>
        <FlatList
          data={[{ key: 'slider' }, { key: 'categories' }]} // Sections
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => {
            if (item.key === 'slider') return <Slider />;
            if (item.key === 'categories') return <PetListByCategory />;
            return null;
          }}
          contentContainerStyle={{ paddingHorizontal: 20 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
