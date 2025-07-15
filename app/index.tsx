import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';

// Gambar utama dan fallback
const FOTO_DATA = [
  {
    id: 1,
    utama: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg',
    cadangan: 'https://images.pexels.com/photos/2847648/pexels-photo-2847648.jpeg',
  },
  {
    id: 2,
    utama: 'https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg',
    cadangan: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
  },
  {
    id: 3,
    utama: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
    cadangan: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
  },
  {
    id: 4,
    utama: 'https://images.pexels.com/photos/672916/pexels-photo-672916.jpeg',
    cadangan: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg',
  },
  {
    id: 5,
    utama: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
    cadangan: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg',
  },
  {
    id: 6,
    utama: 'https://images.pexels.com/photos/2847648/pexels-photo-2847648.jpeg',
    cadangan: 'https://images.pexels.com/photos/672916/pexels-photo-672916.jpeg',
  },
  {
    id: 7,
    utama: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
    cadangan: 'https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg',
  },
  {
    id: 8,
    utama: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg',
    cadangan: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
  },
  {
    id: 9,
    utama: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
    cadangan: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
  },
];

type Gambar = {
  id: number;
  utama: string;
  cadangan: string;
};

const GambarGrid = ({ item }: { item: Gambar }) => {
  const [pakaiCadangan, setPakaiCadangan] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [error, setError] = useState(false);

  const tekan = () => {
    if (error) return;
    setPakaiCadangan(prev => !prev);
    setZoom(prev => (prev < 2 ? parseFloat((prev * 1.2).toFixed(2)) : 2));
  };

  return (
    <TouchableOpacity onPress={tekan} style={styles.kartu}>
      {error ? (
        <View style={styles.kotakError}>
          <Text style={styles.tulisanError}>Gagal</Text>
        </View>
      ) : (
        <Image
          source={{ uri: pakaiCadangan ? item.cadangan : item.utama }}
          onError={() => setError(true)}
          style={[styles.foto, { transform: [{ scale: zoom }] }]}
        />
      )}
    </TouchableOpacity>
  );
};

const BentukVisual = () => (
  <View style={styles.bentukContainer}>
    <View style={styles.segitiga} />
    <View style={styles.persegi}>
      <Text style={styles.textTengah}>NABILA ISMAIL MATTA</Text>
    </View>
    <View style={styles.kapsul}>
      <Text style={styles.textTengah}>105841100722</Text>
    </View>
  </View>
);

export default function AplikasiGaleri() {
  const ukuran = Dimensions.get('window').width / 3 - 12;

  const buatBaris = (arr: Gambar[]) => (
    <View style={styles.baris}>
      {arr.map(item => (
        <View key={item.id} style={[styles.wadah, { width: ukuran, height: ukuran }]}>
          <GambarGrid item={item} />
        </View>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.latar}>
      <ScrollView contentContainerStyle={styles.scrollKonten}>
        <BentukVisual />
        {buatBaris(FOTO_DATA.slice(0, 3))}
        {buatBaris(FOTO_DATA.slice(3, 6))}
        {buatBaris(FOTO_DATA.slice(6, 9))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  latar: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  scrollKonten: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  baris: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  wadah: {
    marginHorizontal: 5,
  },
  kartu: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: '#ddd',
    borderRadius: 10,
    overflow: 'hidden',
  },
  foto: {
    width: '100%',
    height: '100%',
  },
  kotakError: {
    flex: 1,
    backgroundColor: '#ffcdd2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tulisanError: {
    color: '#b71c1c',
    fontWeight: 'bold',
  },
  // Tambahan bentuk
  bentukContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  segitiga: {
    width: 0,
    height: 0,
    borderLeftWidth: 30,
    borderRightWidth: 30,
    borderBottomWidth: 60,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#5e35b1',
    marginBottom: 10,
  },
  persegi: {
    width: 240,
    height: 40,
    backgroundColor: '#0288d1',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  kapsul: {
    backgroundColor: '#009688',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 35,
  },
  textTengah: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
