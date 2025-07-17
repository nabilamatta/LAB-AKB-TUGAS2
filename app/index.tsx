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

// Daftar 9 gambar utama
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
];

// Daftar 9 gambar alternatif
const ALT_IMAGES = [
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

// Gabungkan menjadi satu objek array
const IMAGE_DATA = PRIMARY_IMAGES.map((link, index) => ({
  idUnik: index + 1,
  utama: link,
  alternatif: ALT_IMAGES[index],
}));

// Komponen kartu individual
const GambarCard = ({ info }: { info: typeof IMAGE_DATA[0] }) => {
  const [isAlt, setIsAlt] = useState(false);
  const [zoom, setZoom] = useState(1);

  const handlePress = () => {
    setIsAlt((prev) => !prev);
    setZoom((prev) => (prev < 2 ? Math.min(prev * 1.2, 2) : 2));
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styleSel.kontainer}>
      <Image
        source={{ uri: isAlt ? info.alternatif : info.utama }}
        style={[styleSel.gambar, { transform: [{ scale: zoom }] }]}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

// Komponen utama grid
export default function GridGambarUtama() {
  const ukuranSel = Dimensions.get('window').width / 3 - 12;

  return (
    <SafeAreaView style={styleSel.latar}>
      <ScrollView contentContainerStyle={styleSel.wrapper}>
        <View style={styleSel.gridArea}>
          {IMAGE_DATA.map((item) => (
            <View
              key={item.idUnik}
              style={[styleSel.itemBox, { width: ukuranSel, height: ukuranSel }]}
            >
              <GambarCard info={item} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Styling campuran Inggris-Indonesia
const styleSel = StyleSheet.create({
  latar: {
    flex: 1,
    backgroundColor: '#121212',
  },
  wrapper: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  gridArea: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  itemBox: {
    margin: 6,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#222',
  },
  kontainer: {
    flex: 1,
  },
  gambar: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});
