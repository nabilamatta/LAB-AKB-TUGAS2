import React, { useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

// Koleksi gambar utama dan gambar alternatif
const KUMPULAN_GAMBAR = [
  { id: 1, mainImage: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg', alternatifImage: 'https://images.pexels.com/photos/2847648/pexels-photo-2847648.jpeg' },
  { id: 2, mainImage: 'https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg', alternatifImage: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg' },
  { id: 3, mainImage: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg', alternatifImage: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg' },
  { id: 4, mainImage: 'https://images.pexels.com/photos/672916/pexels-photo-672916.jpeg', alternatifImage: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg' },
  { id: 5, mainImage: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg', alternatifImage: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg' },
  { id: 6, mainImage: 'https://images.pexels.com/photos/2847648/pexels-photo-2847648.jpeg', alternatifImage: 'https://images.pexels.com/photos/672916/pexels-photo-672916.jpeg' },
  { id: 7, mainImage: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg', alternatifImage: 'https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg' },
  { id: 8, mainImage: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg', alternatifImage: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg' },
  { id: 9, mainImage: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg', alternatifImage: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg' },
];

// Komponen gambar yang bisa diklik dan berubah
const GambarBerganti = ({ data }: { data: typeof KUMPULAN_GAMBAR[0] }) => {
  const [pakaiGambarAlternatif, setPakaiGambarAlternatif] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const ketikaGambarDiklik = () => {
    setPakaiGambarAlternatif(prev => !prev);
    setZoomLevel(prev => (prev < 2 ? parseFloat((prev * 1.2).toFixed(2)) : 2));
  };

  return (
    <TouchableOpacity onPress={ketikaGambarDiklik} style={styles.cellWrapper}>
      <Image
        source={{ uri: pakaiGambarAlternatif ? data.alternatifImage : data.mainImage }}
        style={[styles.imgStyle, { transform: [{ scale: zoomLevel }] }]}
      />
    </TouchableOpacity>
  );
};

// Komponen utama grid
export default function GaleriGambar3x3() {
  const screenWidth = Dimensions.get('window').width;
  const ukuranCell = screenWidth / 3 - 10; // ukuran per kotak

  return (
    <SafeAreaView style={styles.rootBackground}>
      <ScrollView contentContainerStyle={styles.scrollIsi}>
        <View style={styles.gridWrapper}>
          {KUMPULAN_GAMBAR.map(item => (
            <View key={item.id} style={[styles.cellContainer, { width: ukuranCell, height: ukuranCell }]}>
              <GambarBerganti data={item} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Gaya campuran
const styles = StyleSheet.create({
  rootBackground: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  scrollIsi: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  gridWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  cellContainer: {
    margin: 5,
  },
  cellWrapper: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 8,
    backgroundColor: '#ddd',
    overflow: 'hidden',
  },
  imgStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
