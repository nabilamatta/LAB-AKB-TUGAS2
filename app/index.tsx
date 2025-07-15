import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function GeoScreen() {
  return (
    <View style={styles.rootBox}>
      <View style={styles.triShape} />

      <View style={styles.nameTile}>
        <Text style={styles.insideText}>NABILA ISMAIL MATTA</Text>
      </View>

      <View style={styles.idCapsule}>
        <Text style={styles.insideText}>105841100722</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootBox: {
    flex: 1,
    backgroundColor: '#3A0519',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
  },
  triShape: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderLeftWidth: 70,
    borderRightWidth: 70,
    borderBottomWidth: 120,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#EF88AD',
    borderStyle: 'solid',
  },
  nameTile: {
    width: 270,
    height: 70,
    backgroundColor: '#A53860',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  idCapsule: {
    width: 270,
    height: 70,
    backgroundColor: '#DC8BE0',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  insideText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#f5f5f5',
  },
});
