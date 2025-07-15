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

// Sumber data gambar
const KANDANG_GAMBAR = [
  { kodeUnik: 'A1', fotoUtama: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg', fotoGanti: 'https://images.pexels.com/photos/2847648/pexels-photo-2847648.jpeg' },
  { kodeUnik: 'A2', fotoUtama: 'https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg', fotoGanti: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg' },
  { kodeUnik: 'A3', fotoUtama: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg', fotoGanti: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg' },
  { kodeUnik: 'A4', fotoUtama: 'https://images.pexels.com/photos/672916/pexels-photo-672916.jpeg', fotoGanti: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg' },
  { kodeUnik: 'A5', fotoUtama: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg', fotoGanti: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg' },
  { kodeUnik: 'A6', fotoUtama: 'https://images.pexels.com/photos/2847648/pexels-photo-2847648.jpeg', fotoGanti: 'https://images.pexels.com/photos/672916/pexels-photo-672916.jpeg' },
  { kodeUnik: 'A7', fotoUtama: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg', fotoGanti: 'https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg' },
  { kodeUnik: 'A8', fotoUtama: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg', fotoGanti: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg' },
  { kodeUnik: 'A9', fotoUtama: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg', fotoGanti: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg' },
];

// Komponen tunggal untuk setiap gambar
const KomponenGambar = ({ elemen }: { elemen: (typeof KANDANG_GAMBAR)[0] }) => {
  const [tukar, setTukar] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [tidakTampil, setTidakTampil] = useState(false);

  const tanganiSentuh = () => {
    if (tidakTampil) return;
    setTukar(prev => !prev);
    setZoom(prev => (prev < 2 ? parseFloat((prev * 1.2).toFixed(2)) : 2));
  };

  return (
    <TouchableOpacity onPress={tanganiSentuh} style={gayaItem.wadahSentuh}>
      {tidakTampil ? (
        <View style={gayaItem.tampilanGagal}>
          <Text style={gayaItem.teksKesalahan}>Gagal Menampilkan</Text>
        </View>
      ) : (
        <Image
          source={{ uri: tukar ? elemen.fotoGanti : elemen.fotoUtama }}
          onError={() => setTidakTampil(true)}
          style={[gayaItem.foto, { transform: [{ scale: zoom }] }]}
        />
      )}
    </TouchableOpacity>
  );
};

// Komponen nama dan ID dalam bentuk
const InfoMahasiswa = () => (
  <View style={gayaItem.zonaBentuk}>
    <View style={gayaItem.segitigaVisual} />
    <View style={gayaItem.kotakNama}>
      <Text style={gayaItem.teksTengah}>NABILA ISMAIL MATTA</Text>
    </View>
    <View style={gayaItem.kapsulID}>
      <Text style={gayaItem.teksTengah}>105841100722</Text>
    </View>
  </View>
);

// Komponen utama
export default function GaleriVisual() {
  const ukuranLayar = Dimensions.get('window').width;
  const ukuranKartu = ukuranLayar / 3 - 12;

  const buatBaris = (data: typeof KANDANG_GAMBAR) => (
    <View style={gayaItem.deretBaris}>
      {data.map(elemen => (
        <View key={elemen.kodeUnik} style={[gayaItem.kotakIsi, { width: ukuranKartu, height: ukuranKartu }]}>
          <KomponenGambar elemen={elemen} />
        </View>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={gayaItem.tampilanLatar}>
      <ScrollView contentContainerStyle={gayaItem.kontenGulung}>
        <InfoMahasiswa />
        {buatBaris(KANDANG_GAMBAR.slice(0, 3))}
        {buatBaris(KANDANG_GAMBAR.slice(3, 6))}
        {buatBaris(KANDANG_GAMBAR.slice(6, 9))}
      </ScrollView>
    </SafeAreaView>
  );
}

// Gaya CSS-in-JS
const gayaItem = StyleSheet.create({
  tampilanLatar: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  kontenGulung: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  deretBaris: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  kotakIsi: {
    marginHorizontal: 5,
  },
  wadahSentuh: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
    aspectRatio: 1,
  },
  foto: {
    width: '100%',
    height: '100%',
  },
  tampilanGagal: {
    flex: 1,
    backgroundColor: '#ffcdd2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  teksKesalahan: {
    color: '#d32f2f',
    fontWeight: 'bold',
  },
  zonaBentuk: {
    alignItems: 'center',
    marginBottom: 20,
  },
  segitigaVisual: {
    width: 0,
    height: 0,
    borderLeftWidth: 30,
    borderRightWidth: 30,
    borderBottomWidth: 60,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#7b1fa2',
    marginBottom: 10,
  },
  kotakNama: {
    width: 250,
    height: 40,
    backgroundColor: '#009688',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  kapsulID: {
    backgroundColor: '#4caf50',
    paddingHorizontal: 25,
    paddingVertical: 8,
    borderRadius: 35,
  },
  teksTengah: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
