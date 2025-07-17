import React, { useState } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';

// Daftar gambar utama (main images)
const MAIN_IMAGES = [
  'https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg',
  'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
  'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg',
  'https://images.pexels.com/photos/672916/pexels-photo-672916.jpeg',
  'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
  'https://images.pexels.com/photos/2847648/pexels-photo-2847648.jpeg',
  'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg',
  'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
  'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
];

// Gambar alternatif untuk tiap gambar utama
const ALTERNATE_IMAGES = [
  'https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg',
  'https://images.pexels.com/photos/415687/pexels-photo-415687.jpeg',
  'https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg',
  'https://images.pexels.com/photos/25284/pexels-photo-25284.jpg',
  'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg',
  'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg',
  'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg',
  'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg',
  'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg',
];

// Gabungkan gambar utama dan alternatif menjadi satu array objek
const IMAGE_COLLECTION = MAIN_IMAGES.map((img, index) => ({
  id: `img-${index}`,
  primary: img,
  alternate: ALTERNATE_IMAGES[index],
}));

// Komponen tunggal untuk setiap gambar
const ImageTile = ({ imageData }) => {
  const [isAlternate, setIsAlternate] = useState(false);
  const [scale, setScale] = useState(1);

  const handlePress = () => {
    setIsAlternate(prev => !prev);
    setScale(prev => Math.min(prev * 1.2, 2));
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.cell}>
      <Image
        source={{ uri: isAlternate ? imageData.alternate : imageData.primary }}
        style={[styles.image, { transform: [{ scale }] }]}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

// Komponen utama
export default function InteractiveImageGrid() {
  const cellSize = Dimensions.get('window').width / 3 - 12;

  return (
    <SafeAreaView style={styles.background}>
      <ScrollView contentContainerStyle={styles.wrapper}>
        <View style={styles.grid}>
          {IMAGE_COLLECTION.map(item => (
            <View key={item.id} style={[styles.gridItem, { width: cellSize, height: cellSize }]}>
              <ImageTile imageData={item} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Gaya komponen
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#1d1d1d',
  },
  wrapper: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  gridItem: {
    margin: 6,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#333',
  },
  cell: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});
