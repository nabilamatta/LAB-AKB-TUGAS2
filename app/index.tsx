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

// 9 gambar utama
const IMG_UTAMA = [
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

// 9 gambar alternatif
const IMG_PENGGANTI = [
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

// gabung jadi array objek
const GABUNG_GAMBAR = IMG_UTAMA.map((utama, index) => ({
  keyID: index,
  utama: utama,
  cadangan: IMG_PENGGANTI[index],
}));

// Komponen untuk setiap kartu
const KartuFoto = ({ data }: { data: typeof GABUNG_GAMBAR[0] }) => {
  const [pakaiAlt, setPakaiAlt] = useState(false);
  const [skala, setSkala] = useState(1);

  const handleKlik = () => {
    setPakaiAlt((prev) => !prev);
    setSkala((prev) => (prev < 2 ? Math.min(prev * 1.2, 2) : 2));
  };

  return (
    <TouchableOpacity onPress={handleKlik} style={styles.wrapGambar}>
      <Image
        source={{ uri: pakaiAlt ? data.cadangan : data.utama }}
        style={[styles.gambarPenuh, { transform: [{ scale: skala }] }]}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

// Komponen utama
export default function GaleriTigaTiga() {
  const lebarLayar = Dimensions.get('window').width;
  const ukuranSel = lebarLayar / 3 - 12;

  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView contentContainerStyle={styles.scrollKonten}>
        <View style={styles.gridKontainer}>
          {GABUNG_GAMBAR.map((item) => (
            <View
              key={item.keyID}
              style={[styles.bingkaiKotak, { width: ukuranSel, height: ukuranSel }]}
            >
              <KartuFoto data={item} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Style dengan nama unik & bilingual
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#0e0e0e',
  },
  scrollKonten: {
    paddingVertical: 18,
    alignItems: 'center',
  },
  gridKontainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  bingkaiKotak: {
    margin: 6,
    backgroundColor: '#222',
    borderRadius: 8,
    overflow: 'hidden',
  },
  wrapGambar: {
    flex: 1,
  },
  gambarPenuh: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
});
