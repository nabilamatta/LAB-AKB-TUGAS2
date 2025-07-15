import React, { useState } from 'react';
import { View, Image, TouchableOpacity, SafeAreaView, Dimensions, Text, StyleSheet, ScrollView } from 'react-native';

// Daftar gambar utama dan fallback (berbeda satu sama lain)
const DATA_GAMBAR = [
  {
    id: 1,
    utama: 'https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg',
    cadangan: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
  },
  {
    id: 2,
    utama: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
    cadangan: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
  },
  {
    id: 3,
    utama: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg',
    cadangan: 'https://images.pexels.com/photos/2847648/pexels-photo-2847648.jpeg',
  },
  {
    id: 4,
    utama: 'https://images.pexels.com/photos/672916/pexels-photo-672916.jpeg',
    cadangan: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg',
  },
  {
    id: 5,
    utama: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
    cadangan: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
  },
  {
    id: 6,
    utama: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
    cadangan: 'https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg',
  },
  {
    id: 7,
    utama: 'https://images.pexels.com/photos/2847648/pexels-photo-2847648.jpeg',
    cadangan: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg',
  },
  {
    id: 8,
    utama: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg',
    cadangan: 'https://images.pexels.com/photos/672916/pexels-photo-672916.jpeg',
  },
  {
    id: 9,
    utama: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
    cadangan: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
  },
];

type JenisGambar = {
  id: number;
  utama: string;
  cadangan: string;
};

// Komponen gambar yang bisa di-tap untuk ganti dan zoom
const KartuGambar = ({ data }: { data: JenisGambar }) => {
  const [pakaiCadangan, setPakaiCadangan] = useState(false);
  const [skala, setSkala] = useState(1);
  const [gagalMuat, setGagalMuat] = useState(false);

  const saatTekan = () => {
    if (gagalMuat) return;
    setPakaiCadangan(prev => !prev);
    setSkala(prev => Math.min(prev * 1.2, 2));
  };

  const gambarDipakai = pakaiCadangan ? data.cadangan : data.utama;

  return (
    <TouchableOpacity onPress={saatTekan} style={gaya.kartu}>
      {gagalMuat ? (
        <View style={gaya.errorContainer}>
          <Text style={gaya.errorText}>Gagal Muat</Text>
        </View>
      ) : (
        <Image
          source={{ uri: gambarDipakai }}
          onError={() => setGagalMuat(true)}
          style={[gaya.gambar, { transform: [{ scale: skala }] }]}
        />
      )}
    </TouchableOpacity>
  );
};

// Komponen utama (grid 3x3)
export default function GaleriGridTiga() {
  const lebarLayar = Dimensions.get('window').width;
  const ukuranKotak = lebarLayar / 3 - 10;

  const tampilkanBaris = (data: JenisGambar[]) => (
    <View style={gaya.baris}>
      {data.map(item => (
        <View key={item.id} style={[gaya.wadahGambar, { width: ukuranKotak, height: ukuranKotak }]}>
          <KartuGambar data={item} />
        </View>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={gaya.latar}>
      <ScrollView contentContainerStyle={gaya.konten}>
        {tampilkanBaris(DATA_GAMBAR.slice(0, 3))}
        {tampilkanBaris(DATA_GAMBAR.slice(3, 6))}
        {tampilkanBaris(DATA_GAMBAR.slice(6, 9))}
      </ScrollView>
    </SafeAreaView>
  );
}

// Gaya tampilan
const gaya = StyleSheet.create({
  latar: {
    flex: 1,
    backgroundColor: '#101010',
  },
  konten: {
    paddingVertical: 18,
    alignItems: 'center',
  },
  baris: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  wadahGambar: {
    marginHorizontal: 5,
  },
  kartu: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#292929',
  },
  gambar: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  errorContainer: {
    flex: 1,
    backgroundColor: '#ffeaea',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  errorText: {
    color: '#990000',
    fontWeight: 'bold',
    fontSize: 13,
  },
});
