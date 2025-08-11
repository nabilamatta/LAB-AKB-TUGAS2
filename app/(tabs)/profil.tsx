import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { styles } from '../styles'; // Impor gaya dari file terpisah

export default function ProfilScreen() {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.content}>
            <Image
                source={require('../../assets/images/foto-profil.png')}
                style={styles.profileImage}
            />
            <Text style={styles.profileName}>NURMISBA</Text>

            <View style={styles.profileInfoContainer}>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>NIM</Text>
                    <Text style={styles.infoValue}>105841103422</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Kelas</Text>
                    <Text style={styles.infoValue}>TI-6A</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Jurusan</Text>
                    <Text style={styles.infoValue}>Teknik Informatika</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Fakultas</Text>
                    <Text style={styles.infoValue}>Teknik</Text>
                </View>
            </View>
        </View>
    </ScrollView>
  );
}       