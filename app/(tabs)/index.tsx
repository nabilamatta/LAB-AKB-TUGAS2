import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { styles } from '../styles';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.wrapperUtama}>
      <View style={styles.kontenTengah}>
        <Image
          source={require('../../assets/images/unismuh-logo.png')}
          style={styles.gambarLogo}
          resizeMode="contain"
        />
        <Text style={styles.judulHalaman}>Universitas Muhammadiyah Makassar</Text>
        <Text style={styles.subJudul}>Kampus Biru, Inspirasi dan Pencerahan</Text>
        <Text style={styles.teksDeskripsi}>
          Universitas Muhammadiyah Makassar merupakan salah satu perguruan tinggi swasta ternama di kawasan Indonesia Timur. 
          Berada di Kota Makassar, kampus ini berkomitmen memberikan pendidikan berkualitas, berlandaskan nilai-nilai Islam, 
          dan berperan aktif dalam mencerdaskan kehidupan bangsa.
        </Text>
        <View style={styles.kotakInformasi}>
          <Text style={styles.judulInfo}>Alamat</Text>
          <Text style={styles.isiInfo}>Jl. Sultan Alauddin No. 259, Kota Makassar, Sulawesi Selatan, Indonesia.</Text>
        </View>
        <View style={styles.kotakInformasi}>
          <Text style={styles.judulInfo}>Visi</Text>
          <Text style={styles.isiInfo}>
            Menjadi universitas Islam yang unggul, terpercaya, inovatif, dan mandiri dalam pengembangan ilmu pengetahuan dan teknologi pada tahun 2025.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
