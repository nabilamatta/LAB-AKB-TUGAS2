import React, { useState, useMemo, FC } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

const daftarFontLengkap = [
  'Roboto-Regular',
  'Lato-Bold',
  'Oswald-Regular',
  'Raleway-Bold',
  'Montserrat-Regular',
  'Inter-Variable',
  'WorkSans-Variable',
  'Manrope-Variable',
  'SourceSans3-Variable',
  'Outfit-Variable',
];

interface DataMahasiswa {
  id: number;
  nama: string;
  stambuk: string;
}

const dataAwal: Omit<DataMahasiswa, 'id'>[] = [
  { nama: 'Majeri', stambuk: '105841103622' },
  { nama: 'Hamdani', stambuk: '105841103722' },
  { nama: 'ALI SULTON S PALILATI', stambuk: '105841102222' },
  { nama: 'ABSARMARSAL RIZAL MAHUA', stambuk: '105841101522' },
  { nama: 'Syawaluddin', stambuk: '105841101622' },
  { nama: 'NUR MILAIN HIDAYAH', stambuk: '105841100822' },
  { nama: 'Siti Marwa', stambuk: '105841100122' },
  { nama: 'Muliana', stambuk: '105841103822' },
  { nama: 'NABILA ISMAIL MATTA', stambuk: '105841100722' },
  { nama: 'Andi Citra Ayu Lestari', stambuk: '105841101722' },
];

const semuaMahasiswa: DataMahasiswa[] = Array.from({ length: 130 }, (_, i) => {
  const id = i + 1;
  if (i < dataAwal.length) {
    return { id, ...dataAwal[i] };
  }
  return {
    id,
    nama: `Mahasiswa Angkatan 22 No. ${id}`,
    stambuk: `10584110${String(id).padStart(3, '0')}22`,
  };
});

function ambilSepuluhMahasiswa(angkaStambuk: number): DataMahasiswa[] {
  const indeks = angkaStambuk - 1;
  const total = semuaMahasiswa.length;
  const hasil: DataMahasiswa[] = [];

  for (let i = 5; i > 0; i--) {
    const idx = (indeks - i + total) % total;
    hasil.push(semuaMahasiswa[idx]);
  }
  for (let i = 1; i <= 5; i++) {
    const idx = (indeks + i) % total;
    hasil.push(semuaMahasiswa[idx]);
  }
  return hasil;
}

const Kartu: FC<{ data: DataMahasiswa; font: string; index: number }> = ({ data, font, index }) => {
  const isVar = font.includes('Variable');
  const bobot = isVar ? `${(index - 4) * 100 + 500}` as any : 'normal';

  return (
    <View style={gaya.kartu}>
      <Text style={[gaya.nama, { fontFamily: font, fontWeight: bobot }]}>{data.nama}</Text>
      <Text style={gaya.stambuk}>{data.stambuk}</Text>
      <Text style={gaya.font}>{font} {isVar && `(weight: ${bobot})`}</Text>
    </View>
  );
};

export default function Beranda() {
  const [target, setTarget] = useState(10);
  const tampilkan = useMemo(() => ambilSepuluhMahasiswa(target), [target]);

  return (
    <SafeAreaView style={gaya.kontainer}>
      <Text style={gaya.judul}>Nama Mahasiswa Sekitar Stambuk {target}</Text>
      <FlatList
        data={tampilkan}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <Kartu
            data={item}
            font={daftarFontLengkap[index]}
            index={index}
          />
        )}
      />

      <View style={gaya.kontrol}>
        <Text style={gaya.label}>Atur Stambuk</Text>
        <View style={gaya.baris}>
          <TouchableOpacity onPress={() => setTarget(t => (t > 1 ? t - 1 : 130))} style={gaya.tombol}>
            <Text style={gaya.tombolTeks}>-</Text>
          </TouchableOpacity>
          <Text style={gaya.target}>{target}</Text>
          <TouchableOpacity onPress={() => setTarget(t => (t < 130 ? t + 1 : 1))} style={gaya.tombol}>
            <Text style={gaya.tombolTeks}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const gaya = StyleSheet.create({
  kontainer: {
    flex: 1,
    backgroundColor: '#111',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  judul: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  kartu: {
    backgroundColor: '#2a2a2a',
    padding: 14,
    borderRadius: 8,
    marginBottom: 10,
  },
  nama: {
    fontSize: 18,
    color: 'white',
  },
  stambuk: {
    color: '#bbb',
    marginTop: 4,
    fontSize: 14,
  },
  font: {
    color: '#888',
    fontSize: 10,
    marginTop: 6,
  },
  kontrol: {
    paddingVertical: 16,
    borderTopColor: '#333',
    borderTopWidth: 1,
    alignItems: 'center',
  },
  label: {
    color: 'white',
    marginBottom: 12,
    fontSize: 15,
  },
  baris: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tombol: {
    backgroundColor: '#007AFF',
    borderRadius: 24,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  tombolTeks: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },
  target: {
    fontSize: 20,
    color: 'white',
    width: 60,
    textAlign: 'center',
  },
});
