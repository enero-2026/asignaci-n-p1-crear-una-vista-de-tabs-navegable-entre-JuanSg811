import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Slot, useRouter, usePathname } from 'expo-router';

export default function Layout() {
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    { label: 'Inicio',  ruta: '/',        titulo: 'Home' },
    { label: 'Perfil',  ruta: '/perfil',  titulo: 'Perfil' },
    { label: 'Buscar', ruta: '/buscar', titulo: 'Buscar' },
  ];

  return (
    <View style={styles.contenedor}>

      {/* Aquí se renderiza la pantalla activa */}
      <View style={styles.pantalla}>
        <Slot />
      </View>

      {/* Barra de navegación con flex */}
      <View style={styles.barraNav}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.ruta}
            style={[
              styles.boton,
              pathname === tab.ruta && styles.botonActivo,  
            ]}
            onPress={() => router.push({ pathname: tab.ruta, params: { titulo: tab.titulo } })}
          >
            <Text style={[
              styles.botonTexto,
              pathname === tab.ruta && styles.textoActivo,
            ]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
  pantalla: {
    flex: 1,              
  },
  barraNav: {
    flexDirection: 'row', 
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  boton: {
    flex: 1,               
    paddingVertical: 14,
    alignItems: 'center',
  },
  botonActivo: {
    borderTopWidth: 3,
    borderTopColor: '#6200EE',
  },
  botonTexto: {
    fontSize: 13,
    color: '#999',
    fontWeight: 'bold',
  },
  textoActivo: {
    color: '#6200EE',
  },
});