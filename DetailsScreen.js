// DetailsScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function DetailsScreen({ navigation }) {
  const handlePreorder = () => {
    // Naviguer vers la page de précommande
    navigation.navigate('Preorder');
  };

  const handleTest = () => {
    // Naviguer vers la page du jeu
    navigation.navigate('Game');
  };

  return (
    <View style={styles.container}>
      {/* Image de fond */}
      <Image
        style={styles.backgroundImage}
        source={{ uri: 'https://images.payhip.com/o_1em1mm80u4ue96j1qmuj7f4gsr.png?width=1500' }}
      />

      {/* Logo agrandi */}
      <Image
        style={styles.logo}
        source={{ uri: 'https://seeklogo.com/images/E/ea-sports-fc-logo-3EECE6A9F4-seeklogo.com.png', width: 200, height: 200 }}
      />

      {/* Texte de présentation plus lisible */}
      <Text style={styles.presentationText}>
        Découvrez EA FC24, le dernier jeu de la série EAFC. Plongez dans une expérience de jeu immersive
        et explorez des fonctionnalités passionnantes.
      </Text>

      {/* Bouton "Précommander" au lieu de "Acheter" */}
      <TouchableOpacity
        style={styles.preorderButton}
        onPress={handlePreorder}
        activeOpacity={0.8} // Changement de couleur au toucher
      >
        <Text style={styles.buttonText}>Précommander</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.testButton}
        onPress={handleTest}
        activeOpacity={0.8} // Changement de couleur au toucher
      >
        <Text style={styles.buttonText}>Tester le jeu</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  presentationText: {
    color: 'black',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    fontSize: 18,
  },
  preorderButton: {
    backgroundColor: '#3C3C3C',
    borderRadius: 10,
    paddingVertical: 20, // Hauteur fixe
    paddingHorizontal: 40,
    marginVertical: 10,
  },
  testButton: {
    backgroundColor: '#4C4C4C',
    borderRadius: 10,
    paddingVertical: 20, // Hauteur fixe
    paddingHorizontal: 40,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
