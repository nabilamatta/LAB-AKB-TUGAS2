import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { styles } from '../styles';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.pembungkusUtama}>
      <View style={styles.areaKonten}>
        <Text style={styles.judulHalaman}>Informasi Aplikasi</Text>
        <Text style={styles.teksDeskripsi}>
          Aplikasi ini dibuat untuk memenuhi salah satu tugas perkuliahan, 
          sekaligus memperlihatkan penerapan navigasi menggunakan Expo Router 
          di proyek React Native.
        </Text>

        <View style={styles.kotakKeterangan}>
          <Text style={styles.judulBagian}>Fitur Halaman</Text>
          <Text style={styles.itemDaftar}>
            <Text style={styles.teksTebal}>1. Beranda:</Text> Menyediakan informasi singkat tentang Universitas Muhammadiyah Makassar, termasuk logo dan deskripsi.
          </Text>
          <Text style={styles.itemDaftar}>
            <Text style={styles.teksTebal}>2. Tentang:</Text> Menjelaskan tujuan aplikasi dan fungsi dari setiap halaman.
          </Text>
          <Text style={styles.itemDaftar}>
            <Text style={styles.teksTebal}>3. Profil:</Text> Menampilkan biodata pembuat, termasuk foto, nama, NIM, dan data akademik.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
