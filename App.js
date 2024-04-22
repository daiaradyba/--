import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // O componente View usará toda a tela
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
    backgroundColor: '#fff', // Define a cor de fundo da View
  },
  text: {
    fontSize: 24, // Define o tamanho da fonte
    color: 'black', // Define a cor do texto
  }
});