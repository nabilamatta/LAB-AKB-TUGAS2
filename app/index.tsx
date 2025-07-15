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

// Kumpulan URL gambar utama dengan tema yang beragam
const PRIMARY_IMAGES = [
  'https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg',
  'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
  'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg',
  'https://images.pexels.com/photos/672916/pexels-photo-672916.jpeg',
  'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
  'https://images.pexels.com/photos/2847648/pexels-photo-2847648.jpeg',
  'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg',
  'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
  'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
  'https://images.pexels.com/photos/463935/pexels-photo-463935.jpeg',
];

// Kumpulan URL gambar alternatif untuk transisi
const SECONDARY_IMAGES = [
  'https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg',
  'https://images.pexels.com/photos/415687/pexels-photo-415687.jpeg',
  'https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg',
  'https://images.pexels.com/photos/25284/pexels-photo-25284.jpg',
  'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg',
  'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg',
  'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg',
  'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg',
  'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg',
  'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg',
];

// Menggabungkan data gambar dengan struktur yang lebih deskriptif
const PHOTO_COLLECTION = PRIMARY_IMAGES.map((primaryUrl, index) => ({
  identifier: `photo_${index + 1}`,
  primarySource: primaryUrl,
  alternativeSource: SECONDARY_IMAGES[index],
}));

// Komponen untuk menampilkan kartu foto individual
const PhotoCard = ({ photoData }) => {
  const [isAlternativeMode, setIsAlternativeMode] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const handlePhotoTap = () => {
    setIsAlternativeMode(previousState => !previousState);
    setZoomLevel(currentZoom => Math.min(currentZoom * 1.2, 2));
  };

  return (
    <TouchableOpacity onPress={handlePhotoTap} style={styles.cardContainer}>
      <Image
        source={{ 
          uri: isAlternativeMode ? photoData.alternativeSource : photoData.primarySource 
        }}
        style={[styles.photoImage, { transform: [{ scale: zoomLevel }] }]}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

// Komponen utama aplikasi galeri foto
export default function PhotoGalleryGrid() {
  const screenWidth = Dimensions.get('window').width;
  const itemSize = (screenWidth / 3) - 12;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.gridLayout}>
          {PHOTO_COLLECTION.map(photoItem => (
            <View 
              key={photoItem.identifier} 
              style={[
                styles.gridItem, 
                { width: itemSize, height: itemSize }
              ]}
            >
              <PhotoCard photoData={photoItem} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Definisi gaya dengan penamaan yang lebih deskriptif
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  scrollContent: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  gridLayout: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  gridItem: {
    margin: 6,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#2b2b2b',
  },
  cardContainer: {
    flex: 1,
  },
  photoImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});
