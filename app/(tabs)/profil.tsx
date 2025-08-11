import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { styles } from '../styles'; // Mengimpor style dari file terpisah

export default function DataProfilScreen() {
  return (
    <ScrollView style={styles.mainWrapper}>
      <View style={styles.innerContent}>
        <Image
          source={require('../../assets/images/gambar1.jpeg')}
          style={styles.avatarImage}
        />
        <Text style={styles.displayName}>NABILA ISMAIL MATTA</Text>

        <View style={styles.detailsSection}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>NIM</Text>
            <Text style={styles.detailValue}>105841100722</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Kelas</Text>
            <Text style={styles.detailValue}>TI-6A</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Jurusan</Text>
            <Text style={styles.detailValue}>Teknik Informatika</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Fakultas</Text>
            <Text style={styles.detailValue}>Teknik</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
