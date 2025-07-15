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

// Data 9 pasang gambar: utama & alternatif
const DATA_GAMBAR = [
  {
    id: 1,
    utama: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg',
    alternatif: 'https://images.pexels.com/photos/2847648/pexels-photo-2847648.jpeg',
  },
  {
    id: 2,
    utama: 'https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg',
    alternatif: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
  },
  {
    id: 3,
    utama: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
    alternatif: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
  },
  {
    id: 4,
    utama: 'https://images.pexels.com/photos/672916/pexels-photo-672916.jpeg',
    alternatif: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg',
  },
  {
    id: 5,
    utama: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
    alternatif: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg',
  },
  {
    id: 6,
    utama: 'https://images.pexels.com/photos/2847648/pexels-photo-2847648.jpeg',
    alternatif: 'https://images.pexels.com/photos/672916/pexels-photo-672916.jpeg',
  },
  {
    id: 7,
    utama: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
    alternatif: 'https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg',
  },
  {
    id: 8,
    utama: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg',
    alternatif: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
  },
  {
    id: 9,
    utama: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
    alternatif: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
  },
];

// Komponen gambar per sel
const GambarKlik = ({ gambar }: { gambar: typeof DATA_GAMBAR[0] }) => {
  const [pakaiAlternatif, setPakaiAlternatif] = useState(false);
  const [skala, setSkala] = useState(1);

  const saatDiklik = () => {
    setPakaiAlternatif(prev => !prev);
    setSkala(prev => (prev < 2 ? parseFloat((prev * 1.2).toFixed(2)) : 2));
  };

  return (
    <TouchableOpacity onPress={saatDiklik} style={styles.sel}>
      <Image
        source={{ uri: pakaiAlternatif ? gambar.alternatif : gambar.utama }}
        style={[styles.foto, { transform: [{ scale: skala }] }]}
      />
    </TouchableOpacity>
  );
};

export default function GridGambar3x3() {
  const ukuranLayar = Dimensions.get('window').width;
  const ukuranSel = ukuranLayar / 3 - 10;

  return (
    <SafeAreaView style={styles.latar}>
      <ScrollView contentContainerStyle={styles.konten}>
        <View style={styles.grid}>
          {DATA_GAMBAR.map(gm => (
            <View key={gm.id} style={[styles.kolom, { width: ukuranSel, height: ukuranSel }]}>
              <GambarKlik gambar={gm} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  latar: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  konten: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  kolom: {
    margin: 5,
  },
  sel: {
    flex: 1,
    aspectRatio: 1,
    overflow: 'hidden',
    borderRadius: 8,
    backgroundColor: '#e0e0e0',
  },
  foto: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
