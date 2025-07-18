import React, { useState, useMemo, memo, FC } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

// --- DATA MAHASISWA DAN LOGIKA ---

interface Mahasiswa {
  id: number;
  fullName: string;
  stambuk: string;
}

const dataAsliMahasiswa = [
  { fullName: 'Majeri', stambuk: '105841103622' },
  { fullName: 'Hamdani', stambuk: '105841103722' },
  { fullName: 'ALI SULTON S PALILATI', stambuk: '105841102222' },
  { fullName: 'ABSARMARSAL RIZAL MAHUA', stambuk: '105841101522' },
  { fullName: 'Syawaluddin', stambuk: '105841101622' },
  { fullName: 'NUR MILAIN HIDAYAH', stambuk: '105841100822' },
  { fullName: 'Siti Marwa', stambuk: '105841100122' },
  { fullName: 'Muliana', stambuk: '105841103822' },
  { fullName: 'NABILA ISMAIL MATTA', stambuk: '105841100722' },
  { fullName: 'Andi Citra Ayu Lestari', stambuk: '105841101722' },
];

const daftarMahasiswa: Mahasiswa[] = Array.from({ length: 130 }, (_, i) => {
  const id = i + 1;
  if (i < dataAsliMahasiswa.length) {
    return { id, ...dataAsliMahasiswa[i] };
  }
  return {
    id,
    fullName: `Mahasiswa Angkatan '22 No. ${id}`,
    stambuk: `10584110${String(id).padStart(3, '0')}22`,
  };
});

const ambilNamaSekitar = (target: number): Mahasiswa[] => {
  const hasil: Mahasiswa[] = [];
  const jumlah = daftarMahasiswa.length;
  const posisi = target - 1;

  for (let i = 5; i > 0; i--) {
    const sebelumnya = (posisi - i + jumlah) % jumlah;
    hasil.push(daftarMahasiswa[sebelumnya]);
  }
  for (let i = 1; i <= 5; i++) {
    const sesudah = (posisi + i) % jumlah;
    hasil.push(daftarMahasiswa[sesudah]);
  }
  return hasil;
};

// --- DAFTAR FONT ---

const daftarFont = [
  'Roboto-Regular', 'Lato-Bold', 'Oswald-Regular', 'Raleway-Bold', 'Montserrat-Regular',
  'Inter-Variable', 'WorkSans-Variable', 'Manrope-Variable', 'SourceSans3-Variable', 'Outfit-Variable',
];

// --- KOMPONEN KARTU NAMA ---

interface PropertiKartu {
  name: string;
  stambuk: string;
  index: number;
}

const KartuNama: FC<PropertiKartu> = memo(({ name, stambuk, index }) => {
  const font = daftarFont[index];
  const pakaiVariabel = font.includes('Variable');
  const berat = pakaiVariabel ? `${(index - 4) * 100 + 500}` as any : 'normal';

  return (
    <View style={gaya.kartu}>
      <Text style={[gaya.teksNama, { fontFamily: font, fontWeight: berat }]}>
        {name}
      </Text>
      <Text style={gaya.teksStambuk}>{stambuk}</Text>
      <Text style={gaya.infoFont}>{font} {pakaiVariabel && `(weight: ${berat})`}</Text>
    </View>
  );
});

// --- LAYAR UTAMA ---

export default function LayarTugasFont() {
  const [nomorStambuk, aturStambuk] = useState(10);
  const dataTampil = useMemo(() => ambilNamaSekitar(nomorStambuk), [nomorStambuk]);

  return (
    <SafeAreaView style={gaya.kontainer}>
      <View style={{ flex: 1, width: '100%' }}>
        <Text style={gaya.judul}>Daftar Nama (Stambuk: {nomorStambuk})</Text>
        <FlatList
          data={dataTampil}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <KartuNama
              name={item.fullName}
              stambuk={item.stambuk}
              index={index}
            />
          )}
        />
      </View>

      <View style={gaya.kontrol}>
        <Text style={gaya.labelKontrol}>Ubah Urutan Stambuk</Text>
        <View style={gaya.barisTombol}>
          <TouchableOpacity
            style={gaya.tombol}
            onPress={() => aturStambuk(s => (s > 1 ? s - 1 : 130))}
          >
            <Text style={gaya.teksTombol}>-</Text>
          </TouchableOpacity>
          <Text style={gaya.tampilanStambuk}>{nomorStambuk}</Text>
          <TouchableOpacity
            style={gaya.tombol}
            onPress={() => aturStambuk(s => (s < 130 ? s + 1 : 1))}
          >
            <Text style={gaya.teksTombol}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

// --- GAYA / STYLE ---

const gaya = StyleSheet.create({
  kontainer: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    paddingTop: 50,
  },
  judul: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  kontrol: {
    width: '100%',
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: '#1c1c1e',
    borderTopWidth: 1,
    borderTopColor: '#3A3A3C',
  },
  labelKontrol: {
    color: 'white',
    marginBottom: 15,
    fontSize: 16,
  },
  barisTombol: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tombol: {
    backgroundColor: '#0A84FF',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  teksTombol: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  tampilanStambuk: {
    color: 'white',
    fontSize: 22,
    fontWeight: '600',
    width: 60,
    textAlign: 'center',
  },
  kartu: {
    backgroundColor: '#2c2c2e',
    borderRadius: 8,
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 6,
  },
  teksNama: {
    color: 'white',
    fontSize: 18,
  },
  teksStambuk: {
    color: '#b0b0b0',
    fontSize: 14,
    marginTop: 4,
  },
  infoFont: {
    color: '#8e8e93',
    fontSize: 10,
    marginTop: 8,
  },
});
