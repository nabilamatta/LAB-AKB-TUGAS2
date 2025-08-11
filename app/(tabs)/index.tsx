import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { styles } from '../styles'; // Impor gaya dari file terpisah

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('../../assets/images/unismuh-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Universitas Muhammadiyah Makassar</Text>
        <Text style={styles.subtitle}>Kampus Biru, Pusat Pencerahan</Text>
        <Text style={styles.description}>
          Universitas Muhammadiyah (Unismuh) Makassar adalah salah satu perguruan tinggi swasta terkemuka di Indonesia Timur. Berlokasi di kota Makassar, Unismuh berkomitmen untuk menyelenggarakan pendidikan yang unggul, islami, dan mencerahkan.
        </Text>
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Lokasi</Text>
          <Text style={styles.infoText}>Jl. Sultan Alauddin No. 259, Makassar, Sulawesi Selatan, Indonesia.</Text>
        </View>
         <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Visi</Text>
          <Text style={styles.infoText}>Menjadi perguruan tinggi Islam terkemuka, unggul, terpercaya, dan mandiri pada tahun 2025.</Text>
        </View>
      </View>
    </ScrollView>
  );
}