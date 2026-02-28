import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function AjustesScreen() {
  const { titulo } = useLocalSearchParams();  

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo || 'Ajustes'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0FFF4',
  },
  emoji: { fontSize: 64, marginBottom: 16 },
  label: { fontSize: 16, color: '#888', marginBottom: 4 },
  titulo: { fontSize: 36, fontWeight: 'bold', color: '#00897B' },
});