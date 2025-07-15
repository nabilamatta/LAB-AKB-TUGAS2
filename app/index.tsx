import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

// Koleksi data gambar
const KOLEKSI = [
  {
    kode: 101,
    utama: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg',
    cadangan: 'https://images.pexels.com/photos/2847648/pexels-photo-2847648.jpeg',
  },
  {
    kode: 102,
    utama: 'https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg',
    cadangan: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
  },
  {
    kode: 103,
    utama: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
    cadangan: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
  },
  {
    kode: 104,
    utama: 'https://images.pexels.com/photos/672916/pexels-photo-672916.jpeg',
    cadangan: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg',
  },
  {
    kode: 105,
    utama: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
    cadangan: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg',
  },
  {
    kode: 106,
    utama: 'https://images.pexels.com/photos/2847648/pexels-photo-2847648.jpeg',
    cadangan: 'https://images.pexels.com/photos/672916/pexels-photo-672916.jpeg',
  },
  {
    kode: 107,
    utama: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
    cadangan: 'https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg',
  },
  {
    kode: 108,
    utama: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg',
    cadangan: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
  },
  {
    kode: 109,
    utama: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
    cadangan: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
  },
];

// Komponen Kartu Gambar
const KartuFoto = ({ item }: { item: (typeof KOLEKSI)[0] }) => {
  const [ganti, setGanti] = useState(false);
  const [perbesar, setPerbesar] = useState(1);
  const [rusak, setRusak] = useState(false);

  const aksiKlik = () => {
    if (rusak) return;
    setGanti(v => !v);
    setPerbesar(p => (p < 2 ? parseFloat((p * 1.2).toFixed(2)) : 2));
  };

  return (
    <TouchableOpacity onPress={aksiKlik} style={gaya.petak}>
      {rusak ? (
        <View style={gaya.kotakError}>
          <Text style={gaya.teksRusak}>⚠️ Tidak Tampil</Text>
        </View>
      ) : (
        <Image
          source={{ uri: ganti ? item.cadangan : item.utama }}
          onError={() => setRusak(true)}
          style={[gaya.gbr, { transform: [{ scale: perbesar }] }]}
        />
      )}
    </TouchableOpacity>
  );
};

// Komponen Identitas & Bentuk
const KomponenIdentitas = () => (
  <View style={gaya.areaBentuk}>
    {/* Segitiga */}
    <View style={gaya.segi3} />
    {/* Persegi panjang berisi nama */}
    <View style={gaya.persegi}>
      <Text style={gaya.tulisanPusat}>NABILA ISMAIL MATTA</Text>
    </View>
    {/* Bentuk pil berisi ID */}
    <View style={gaya.pil}>
      <Text style={gaya.tulisanPusat}>105841100722</Text>
    </View>
  </View>
);

// Komponen Utama
export default function GaleriRumah() {
  const lebar = Dimensions.get('window').width;
  const ukuran = lebar / 3 - 12;

  const renderBaris = (data: typeof KOLEKSI) => (
    <View style={gaya.baris}>
      {data.map(item => (
        <View key={item.kode} style={[gaya.bungkus, { width: ukuran, height: ukuran }]}>
          <KartuFoto item={item} />
        </View>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={gaya.latar}>
      <ScrollView contentContainerStyle={gaya.isiScroll}>
        <KomponenIdentitas />
        {renderBaris(KOLEKSI.slice(0, 3))}
        {renderBaris(KOLEKSI.slice(3, 6))}
        {renderBaris(KOLEKSI.slice(6, 9))}
      </ScrollView>
    </SafeAreaView>
  );
}

const gaya = StyleSheet.create({
  latar: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  isiScroll: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  baris: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  bungkus: {
    marginHorizontal: 5,
  },
  petak: {
    flex: 1,
    backgroundColor: '#dddddd',
    borderRadius: 10,
    overflow: 'hidden',
    aspectRatio: 1,
  },
  gbr: {
    width: '100%',
    height: '100%',
  },
  kotakError: {
    flex: 1,
    backgroundColor: '#ffcccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  teksRusak: {
    color: '#b00020',
    fontWeight: 'bold',
  },
  // bentuk tambahan
  areaBentuk: {
    alignItems: 'center',
    marginBottom: 20,
  },
  segi3: {
    width: 0,
    height: 0,
    borderLeftWidth: 30,
    borderRightWidth: 30,
    borderBottomWidth: 60,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#673ab7',
    marginBottom: 10,
  },
  persegi: {
    width: 250,
    height: 40,
    backgroundColor: '#0097a7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  pil: {
    backgroundColor: '#43a047',
    paddingHorizontal: 25,
    paddingVertical: 8,
    borderRadius: 35,
  },
  tulisanPusat: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
