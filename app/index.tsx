import React, { useState } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Dimensions,
  StyleSheet,
  Text,
} from 'react-native';

const GAMBAR_UTAMA = [
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

const GAMBAR_ALTERNATIF = [
  'https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg',
  'https://images.pexels.com/photos/415687/pexels-photo-415687.jpeg',
  'https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg',
  'https://images.pexels.com/photos/25284/pexels-photo-25284.jpg',
  'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg',
  'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg',
  'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg',
  'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg',
  'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg',
  'https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg',
];

const KUMPULAN_GAMBAR = GAMBAR_UTAMA.map((url, idx) => ({
  id: idx + 1,
  utama: url,
  alternatif: GAMBAR_ALTERNATIF[idx],
}));

const KartuGambar = ({ data }: { data: typeof KUMPULAN_GAMBAR[0] }) => {
  const [pakaiAlternatif, setPakaiAlternatif] = useState(false);
  const [skala, setSkala] = useState(1);

  const saatDiklik = () => {
    setPakaiAlternatif(prev => !prev);
    setSkala(prev => Math.min(prev * 1.2, 2));
  };

  return (
    <TouchableOpacity onPress={saatDiklik} style={gaya.kotak}>
      <Image
        source={{ uri: pakaiAlternatif ? data.alternatif : data.utama }}
        style={[gaya.gambar, { transform: [{ scale: skala }] }]}
        resizeMode="cover"
      />
      <Text style={gaya.nilai}>Skala: {skala.toFixed(2)}x</Text>
    </TouchableOpacity>
  );
};

export default function GridFoto() {
  const ukuran = Dimensions.get('window').width / 3 - 12;

  return (
    <SafeAreaView style={gaya.latar}>
      <ScrollView contentContainerStyle={gaya.konten}>
        <View style={gaya.grid}>
          {KUMPULAN_GAMBAR.map(item => (
            <View key={item.id} style={[gaya.item, { width: ukuran, height: ukuran + 24 }]}>
              <KartuGambar data={item} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const gaya = StyleSheet.create({
  latar: {
    flex: 1,
    backgroundColor: '#101010',
  },
  konten: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  item: {
    margin: 6,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#222',
    alignItems: 'center',
  },
  kotak: {
    flex: 1,
    alignItems: 'center',
  },
  gambar: {
    width: '100%',
    height: '85%',
    borderRadius: 10,
  },
  nilai: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
  },
});
