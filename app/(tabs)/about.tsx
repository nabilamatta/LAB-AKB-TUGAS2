import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { styles } from '../styles'; // Impor gaya dari file terpisah

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.title}>Tentang Aplikasi Ini</Text>
            <Text style={styles.description}>
                Aplikasi ini dibuat sebagai bagian dari pemenuhan tugas mata kuliah. Tujuannya adalah untuk mendemonstrasikan implementasi navigasi menggunakan Expo Router dalam sebuah aplikasi React Native.
            </Text>

            <View style={styles.infoBox}>
                <Text style={styles.infoTitle}>Fungsi Halaman</Text>
                <Text style={styles.listItem}>
                    <Text style={styles.bold}>1. Home:</Text> Menampilkan informasi dasar mengenai Universitas Muhammadiyah Makassar, termasuk logo dan deskripsi singkat.
                </Text>
                <Text style={styles.listItem}>
                    <Text style={styles.bold}>2. About:</Text> Halaman yang sedang Anda lihat saat ini. Berisi penjelasan mengenai aplikasi dan fungsionalitas setiap halamannya.
                </Text>
                <Text style={styles.listItem}>
                    <Text style={styles.bold}>3. Profil:</Text> Menampilkan data diri pembuat aplikasi, lengkap dengan foto profil, nama, NIM, dan detail akademik lainnya.
                </Text>
            </View>
        </View>
    </ScrollView>
  );
}