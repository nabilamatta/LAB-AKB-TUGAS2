import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

// Model data untuk representasi visual elemen
interface VisualElement {
  symbol: keyof typeof Ionicons.glyphMap;
  title: string;
}

// Kumpulan elemen visual dengan beragam kategori
const visualElements: VisualElement[] = [
  { symbol: 'bicycle-outline', title: 'Olahraga' },
  { symbol: 'musical-notes-outline', title: 'Audio' },
  { symbol: 'brush-outline', title: 'Kreativitas' },
  { symbol: 'bulb-outline', title: 'Inovasi' },
  { symbol: 'globe-outline', title: 'Global' },
  { symbol: 'shield-outline', title: 'Keamanan' },
  { symbol: 'flower-outline', title: 'Botanik' },
  { symbol: 'diamond-outline', title: 'Premium' },
  { symbol: 'gift-outline', title: 'Hadiah' },
];

const IconDisplayComponent: React.FC = () => {
  const buildListItem = ({ item }: { item: VisualElement }) => {
    return (
      <View style={layoutStyles.itemBox}>
        <Ionicons 
          name={item.symbol} 
          size={42} 
          color="#8B5CF6" 
        />
        <Text style={layoutStyles.itemTitle}>{item.title}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={layoutStyles.screenContainer}>
      <Stack.Screen
        options={{
          title: 'Tampilan Elemen Visual',
          headerStyle: { backgroundColor: '#8B5CF6' },
          headerTintColor: '#FFFFFF',
        }}
      />
      
      <FlatList
        data={visualElements}
        renderItem={buildListItem}
        keyExtractor={(entry) => entry.symbol}
        numColumns={3}
        contentContainerStyle={layoutStyles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const layoutStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#FAF5FF',
  },
  listContainer: {
    paddingHorizontal: 12,
    paddingTop: 18,
    paddingBottom: 30,
  },
  itemBox: {
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 7,
    paddingVertical: 18,
    paddingHorizontal: 12,
    minHeight: 115,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    elevation: 2.5,
    shadowColor: '#8B5CF6',
    shadowOffset: { width: 0, height: 1.5 },
    shadowOpacity: 0.18,
    shadowRadius: 2.5,
    borderWidth: 0.5,
    borderColor: '#E5E7EB',
  },
  itemTitle: {
    marginTop: 8,
    fontSize: 12.5,
    color: '#1F2937',
    fontWeight: '500',
    textAlign: 'center',
    letterSpacing: 0.3,
  },
});

export default IconDisplayComponent;
