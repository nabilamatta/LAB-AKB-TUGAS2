import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { styles } from '../styles'; // Mengimpor style dari file terpisah

export default function InfoAplikasiScreen() {
  return (
    <ScrollView style={styles.pembungkusUtama}>
      <View style={styles.areaKonten}>
        <Text style={styles.judulHalaman}>Informasi Aplikasi</Text>
        <Text style={styles.teksDeskripsi}>
          Aplikasi ini dikembangkan sebagai bagian dari tugas perkuliahan. 
          Tujuannya untuk memperlihatkan penggunaan navigasi dengan Expo Router 
          di dalam proyek React Native.
        </Text>

        <View style={styles.kotakKeterangan}>
          <Text style={styles.judulBagian}>Fitur Halaman</Text>
          
          <Text style={styles.itemDaftar}>
            <Text style={styles.teksTebal}>1. Beranda:</Text> Berisi gambaran umum tentang Universitas Muhammadiyah Makassar, 
            lengkap dengan logo resmi dan penjelasan singkat.
          </Text>
          
          <Text style={styles.itemDaftar}>
            <Text style={styles.teksTebal}>2. Tentang:</Text> Halaman yang sedang dibuka sekarang, 
            berisi ringkasan tujuan pembuatan aplikasi serta fungsi setiap menu.
          </Text>
          
          <Text style={styles.itemDaftar}>
            <Text style={styles.teksTebal}>3. Profil:</Text> Menyajikan informasi pribadi pembuat, 
            termasuk foto, nama lengkap, NIM, dan detail pendidikan.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
